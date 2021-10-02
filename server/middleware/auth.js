import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    const token = req.header('authenticate-token');
    if (!token) return res.status(401).json({ message: 'Without token, authorization will be denied' });
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded;
        next()
    } catch (error) {
        res.status(400).json({ message: 'Token is not valid' });
    }
}