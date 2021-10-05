import testModel from "../models/testModel.js";
import { sendOfferLetterMessage, sendAccurateCredential } from "../services/mailService.js";

export const Create = async (req, res) => {
    const post = req.body;
    try {
      const newTest = await testModel.create(post);
      res.status(200).json({ test: newTest })
    } catch (error) {
        console.log(error)
    }
}

export const Update = async (req, res) => {
    const {id} = req.params;
    const { exam_name, exam_year, exam_gpa } = req.body
    try {

        if (exam_name && exam_year && exam_gpa) {
            const post = await testModel.findById(id);
            const exists = post.education.some(item => item.exam_name === exam_name);
            console.log(exists)
            if (exists === true){
                res.json('Already inserted')
            } else {
                const afterUpdate = await post.updateOne({$push: {education: [req.body]}});
                res.status(200).json({ post : afterUpdate })
            }
        } else {
            const post = await testModel.findByIdAndUpdate(id, req.body);
            res.status(200).json({ post })
        }


    } catch (error) {
        console.log(error)
    }
}

export const Delete = async (req, res) => {
    const {id} = req.params;
    const { exam_name } = req.body;

    try {

        if (exam_name) {
            const post = await testModel.findById(id);
            const exists = post.education.some(item => item.exam_name === exam_name);
            console.log(exists)
            if (exists === false){
                res.json('It is not exists')
            } else {
                const afterUpdate = await post.updateOne({$pull: {education: {exam_name}}});
                res.status(200).json({ post : afterUpdate })
            }
        }


    } catch (error) {
        console.log(error)
    }
}

export const Modify = async (req, res) => {
    const {id} = req.params;
    const {exam_name} = req.body
    try {
        if (exam_name) {
            const post = await testModel.findById(id);
            const exists = post.education.some(item => item.exam_name === exam_name);

            if (exists === true) {
                await post.updateOne({$pull: { education: {exam_name}}});
                const afterUpdate = await post.updateOne({$push: {education: [req.body]}})
                res.json({post: afterUpdate})
            } else {
                res.json('It is not exists')
            }
        }

    } catch (error) {
        console.log(error)
    }
}

export const up = async (req, res) => {
    const {id} = req.params;
    try {
      const post = await testModel.findByIdAndUpdate(id, req.body, {new : true});
      res.json({ post : post})

    } catch (error) {
        console.log(error)
    }
}

