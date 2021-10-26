import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const createAccount = async (req, res) => {
    const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,100}/
    const { name, email, password, student_id, department, current_position, isTeacher } = req.body;
    if (!name || !email || !password) {
        return res.status(404).json({ message: 'Please enter all fields' })
    }
    if (!passwordPattern.test(password)) {
        return res.status(404).json({ message: 'password should be at least 8 char long and should contain at least one number and one special character' })
    }
    try {
      const alreadyAssign = await userModel.findOne({ email });
      if (alreadyAssign) return res.status(404).json({ message: 'Email should be different from others.' });

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await userModel.create({email: email, password: hashedPassword,  name});

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

export const changePassword = async (req, res) => {
    const { password, newPassword, confirmPassword } = req.body;
    try {
        const user = await userModel.findById(req.user.id);
        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if (!password || !newPassword || !confirmPassword) {
            res.status(400).json({ message: 'Please enter all fields' })
        }
        else if (!isCorrectPassword) {
            res.status(400).json({ message: 'Please provide correct password' })
        } else if (newPassword !== confirmPassword) {
            res.status(400).json({ message: 'new and confirm Password does not match' })
        }else {
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            await userModel.findByIdAndUpdate(req.user.id, { password: hashedPassword });
            res.status(200).json({ user })
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went to wrong..' })
    }
}