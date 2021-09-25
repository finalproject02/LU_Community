import testModel from "../models/testModel.js";
import { sendOfferLetterMessage, sendAccurateCredential } from "../services/mailService.js";

export const test = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newTest = new testModel({
            name,
            email,
            password
        });

        await newTest.save();
        res.status(200).json({ test: newTest })
    } catch (error) {
        console.log(error)
    }
}

export const updateTest = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {

       const te = await testModel.findById(id);
       await testModel.findByIdAndUpdate(id, {name: 'Rezaul'})
       res.json(te)
    } catch (error) {
        console.log(error)
    }
}

export const sendOffer = async (req, res) => {
    const { name, email } = req.body;
    try {
        await sendOfferLetterMessage(email, name);
        res.json('Success')
    } catch (error) {
        console.log(error)
    }
}

