import postModel from "../models/postModel.js";

export const createPost = async (req, res)  => {
    const posts = req.body;
    try {
       const post = await postModel.create({ ...posts, creator_id: req.user.id, creator_name: req.user.name });
       res.status(200).json({ post: post })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
        console.log(error)
    }
}

export const updatePost = async (req,res) => {

   try {

   } catch (error) {

   }
}