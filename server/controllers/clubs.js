import clubModel from "../models/clubModel.js";

export const createClub = async (req, res) => {
    const { name, category, description } = req.body;
    try {
        const check = await clubModel.findOne({ name });
        if (check) return res.status(404).json({ message: 'Please Change the name. It is already have' });
        if (!name || !category || !description) return res.status(404).json({ message: 'Please enter all fields ' });
        const club = await clubModel.create({ name, category, description, creator_id: req.user.id, creator_name: req.user.id });
        res.status(200).json({ club, message: 'Successfully created' })
    } catch (error) {
        res.status(500).json({ message: 'something went wrong' });
    }
}

export const getALlClubs = async (req, res) => {
    try {
       const clubs = await clubModel.find().sort({ createdAt: -1 });
       res.status(200).json({ clubs })
    } catch (error) {
       res.status(500).json({ message: 'Something went wrong' })
    }
}