import groupModel from "../models/groupModel.js";

export const createGroup = async (req, res) => {
    const { name, privacy, visibility } = req.body;
    try {
        const check = await groupModel.findOne({ name });
        if (check) return res.status(404).json({ message: 'Please Change the name. It is already have' });
        if (!name || !privacy || !visibility) return res.status(404).json({ message: 'Please enter all fields ' });
        const club = await groupModel.create({ name, privacy, visibility, creator_id: req.user.id, creator_name: req.user.id });
        res.status(200).json({ club, message: 'Successfully created' })
        res.json(check)
    } catch (error) {
        res.status(500).json({ message: 'something went wrong' })
    }
}

export const getALlGroups = async (req, res) => {
    try {
       const groups = await groupModel.find().sort({ createdAt: -1 });
       res.status(200).json({ groups })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}