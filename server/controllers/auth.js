import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const createAccount = async (req, res) => {
    const { name, email, password, student_id, department, current_position, isTeacher } = req.body;
    if (!name || !email || !password) {
        return res.status(404).json({ message: 'Please enter all fields' })
    }
    try {
      const alreadyAssign = await userModel.findOne({ email });
      if (alreadyAssign) return res.status(404).json({ message: 'Email should be different from others.' });

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await userModel.create({email: email, password: hashedPassword,  name, student_id, isTeacher, department, current_position});

      const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.SECRET, { expiresIn: '365d' });
      res.status(200).json({ user, token })

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}

export const loginAccount = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.status(404).json({ message: 'Please enter all fields' })

    try {
       const  user = await userModel.findOne({ email });

       if (!user) return res.status(404).json({ message: 'This email does not register' });

       const isCorrectPassword = await bcrypt.compare(password, user.password);

       if (!isCorrectPassword) return res.status(400).json({ message: 'Password is not valid' });

       const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.SECRET, { expiresIn: '365d' });

       res.status(200).json({ user, token })
    } catch (error) {
        res.status(500).json({ message: 'Something  went wrong' })
    }
}