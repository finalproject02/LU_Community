import { smsWithReferenceNumber } from "../services/smsService.js";
import { emailWithReferenceNumber } from "../services/mailService.js";
import userModel from "../models/userModel.js";
import { generateReferenceCode } from "../services/functions.js";

export const createReference = async (req, res) => {
    const emailPattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
    const phonePattern = /[0-9]{11,13}/;
    const { name, email, mobile, program_name, ssc_gpa, hsc_gpa, position } = req.body;
    const reference_code = generateReferenceCode();
    try {
        const isAlready = await userModel.findOne({ email: email });
        if (isAlready) {
            res.status(400).json({ message: 'This email already used for reference' });
        } else if (!email) {
            res.status(400).json({ message: 'Please provide a email' });
        } else if (!emailPattern.test(email)) {
            res.status(400).json({ message: 'Please enter a valid email' });
        }
        else if (!mobile) {
            res.status(400).json({ message: 'Please provide a phone number' });
        }
        else if (!phonePattern.test(mobile)) {
            res.status(400).json({ message: 'Please check phone number length' });
        } else if (!ssc_gpa) {
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
            smsWithReferenceNumber(name, mobile, reference_code);
            await emailWithReferenceNumber(email, name, reference_code);
            await userModel.create({ name, email, mobile, program_name, ssc_gpa, hsc_gpa, reference_code, position: 'just reference' });
            res.status(200).json({ message: 'Reference created successfully' })
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went to wrong' })
    }
}