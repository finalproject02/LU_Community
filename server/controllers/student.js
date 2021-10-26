import {smsWithReferenceNumber, paymentSMS, confirmAdmissionSMS} from "../services/smsService.js";
import { emailWithReferenceNumber } from "../services/mailService.js";
import {generateUniquePassword} from "../services/functions.js";
import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateReferenceCode } from "../services/functions.js";

export const createReference = async (req, res) => {
    const emailPattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
    const phonePattern = /[0-9]{11,13}/;
    const fullNamePattern = /^[a-z,',-]+(\s)[a-z,',-]+$/i;
    const { name, email, mobile, program_name, ssc_gpa, hsc_gpa, via } = req.body;
    const reference_no = generateReferenceCode();
    try {
        const isAlready = await userModel.findOne({ email: email });
        if (isAlready) {
            res.status(400).json({ message: 'This email already used for reference' });
        }
        else if (!name) {
            res.status(400).json({ message: 'Please provide name' });
        } else if (!fullNamePattern.test(name)) {
            res.status(400).json({ message: 'Please provide full name' });
        }
        else if (!mobile) {
            res.status(400).json({ message: 'Please provide a phone number' });
        }
        else if (!phonePattern.test(mobile)) {
            res.status(400).json({ message: 'Please check phone number length' });
        }else if (!email) {
            res.status(400).json({ message: 'Please provide a email' });
        } else if (!emailPattern.test(email)) {
            res.status(400).json({ message: 'Please enter a valid email' });
        }else if (!program_name) {
            res.status(400).json({ message: 'Please select program' });
        }
        else if (!ssc_gpa) {
            res.status(400).json({ message: 'Please provide SSC GPA number' });
        } else if (ssc_gpa > 5) {
            res.status(400).json({ message: 'Please provide proper SSC GPA number' })
        }
        else if (!hsc_gpa) {
            res.status(400).json({ message: 'Please provide HSC GPA number' });
        }
        else if (hsc_gpa > 5) {
            res.status(400).json({ message: 'Please provide proper HSC GPA number' })
        } else {
            smsWithReferenceNumber(name, mobile, reference_no);
            await emailWithReferenceNumber(email, name, reference_no);
            await userModel.create({ name, email, mobile, program_name, ssc_gpa, hsc_gpa, reference_no: reference_no, position: 'just reference', type: 'create reference', via, approval: 0 });
            res.status(200).json({ message: 'Reference created successfully' })
        }
    } catch (error) {
       res.status(500).json({ message: 'Something went to wrong' })
    }
}

export const payment = async (req, res) => {
    const { reference_no, amount } = req.body;
    try {
        const isExists = await userModel.findOne({reference_no});
        if (!reference_no || !amount) {
            res.status(400).json({ message: 'Please enter all fields' })
        }
        else if (!isExists) {
            res.status(400).json({ message: 'Your Reference number is not correct' })
        } else {
            paymentSMS(isExists.name, isExists.mobile)
            await userModel.findByIdAndUpdate(isExists._id, {type: 'user', position: 'paid admission fee', $push: {payment_history: [{admission_fee: amount}]}})
            res.status(200).json({ message: 'Payment success' })
        }

    } catch (error) {
        res.status(500).json({ message: 'Something went to wrong' })
    }
}

export const approveAdmission = async (req, res) => {
    const { id } = req.params;
    try {
        await userModel.findByIdAndUpdate(id, { approval: 1 });
        res.status(200).json({ message: 'Approve success' })
    } catch (error) {
        res.status(500).json({ message: 'Something went to wrong' })
    }
}

export const confirmAdmission = async (req, res) => {
    const password = generateUniquePassword();
    const { id } = req.params;
    const { student_id, batch } = req.body;
    try {
        const user = await userModel.findOne({_id: id});
        confirmAdmissionSMS(user.name, user.mobile, student_id, batch, user.email, password)
        const hashPassword = await bcrypt.hash(password, 10)
        await userModel.findByIdAndUpdate(id, { student_id, batch, position: 'Student', password: hashPassword, semester: 1 })
        res.status(200).json({ message: 'Admission confirm' })
    } catch (error) {
        res.status(500).json({ message: 'Something went to wrong' })
    }
}