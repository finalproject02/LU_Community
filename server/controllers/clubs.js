import clubModel from "../models/clubModel.js";
import userModel from "../models/userModel.js";
import postModel from "../models/postModel.js";

export const createClub = async (req, res) => {
    const { name, category, description } = req.body;
    try {
        const check = await clubModel.findOne({ name });
        if (check) return res.status(404).json({ message: 'Please Change the name. It is already have' });
        if (!name || !category || !description) return res.status(404).json({ message: 'Please enter all fields ' });
        const club = await clubModel.create({ name, category, description, creator_id: req.user.id, creator_name: req.user.name });
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

export const clubUpdate = async (req, res) => {
    const {id} = req.params;
    try {
        const club = await clubModel.findByIdAndUpdate(id, req.body, { new : true });
        res.status(200).json({ club })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}
export const follow = async (req, res) => {
    const { id } = req.params
    try {
       const findClub = await clubModel.findOne({_id: id}) ;
       const findUser = await userModel.findOne({_id: req.user.id}) ;
       if (!findClub.followers.includes(req.user.id)) {
           await findClub.updateOne({ $push: { followers: req.user.id } });
           await findUser.updateOne({ $push: { followings: id } });
           const findCreator = await userModel.findOne({ _id: findClub.creator_id });
           await findCreator.updateOne({ $push: { notifications: [{ document_id: id, notify_by: req.user.id, types: 'club_following', time: Date.now(), isShow: false }] } })
           const finalResult = await userModel.findOne({ _id: req.user.id })
           res.status(200).json({ user: finalResult })
       }

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
}

export const unfollow = async (req, res) => {
    const { id } = req.params
    try {
        const findClub = await clubModel.findOne({_id: id}) ;
        const findUser = await userModel.findOne({_id: req.user.id}) ;
        if (findClub.followers.includes(req.user.id)) {
            await findClub.updateOne({ $pull: { followers: req.user.id} });
            await findUser.updateOne({ $pull: { followings: id } });
            const findCreator = await userModel.findOne({ _id: findClub.creator_id });
            await findCreator.updateOne({ $pull: { notifications: { document_id: id, notify_by: req.user.id, types: 'club_following'} } })
            const finalResult = await userModel.findOne({ _id: req.user.id })
            res.status(200).json({ user: finalResult })
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}

export const clubPost = async (req, res) => {
    const posts = req.body;
    const { id } = req.params;
    try {
        const post = await postModel.create({...posts, owner_id: req.user.id, owner_name: req.user.id, post_to: id });
        const group =await clubModel.findById(id)
        await userModel.updateMany({ _id: group.followers }, { $push: { notifications: [{ document_id: post._id, notify_by: id, types: 'club_post', time: Date.now(), isShow: false }] } })
        res.status(200).json({ post })
    } catch (error) {
        // res.status(500).json({ message: 'Something went wrong' })
    }
}