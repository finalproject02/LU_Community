import postModel from "../models/postModel.js";
import { v4 as uuidv4 } from "uuid";
import postNotificationModel from "../models/postNotificationModel.js";

export const createPost = async (req, res)  => {
    const posts = req.body;
    try {
       const post = await postModel.create({ ...posts, creator_id: req.user.id, creator_name: req.user.name });
       res.status(200).json({ post: post })
    } catch (error) {
        //res.status(500).json({ message: 'Something went wrong' });
        console.log(error)
    }
}

// export const updatePost = async (req,res) => {
//
//    try {
//
//    } catch (error) {
//
//    }
// }

export const  getUserPost =  async (req, res) => {
    try {
        const posts = await postModel.find().sort({ createdAt: -1 })
        res.status(200).json({ posts: posts })
    } catch (error) {
        res.status(500).json({ message: 'Something went to wrong..' })
    }
}

export const deletePost = async (req, res) => {
    const {id} = req.params
    try {
        await postModel.findByIdAndDelete(id);
        res.status(200).json('Deletion success')
    } catch (error) {
        res.json('something want wrong')
    }
}

export const likeAndDislike = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id
    try {
        const post = await postModel.findById(id);
        if (!post.likes.some(user => user.id === userId)) {
            await post.updateOne({ $push: {likes: [{ id: userId, time: Date.now() }] }});
            if (req.user.id !== post.creator_id) {
                await postNotificationModel.create({ post_id: id, creator_id: post.creator_id, creator_name: post.creator_name, notify_by: userId, position: 'like' });
            }
            const afterLike = await postModel.findById(id);
            res.status(200).json({ post: afterLike })
        } else {
            await post.updateOne({ $pull: { likes: { id: userId } } });
            const afterDislike = await postModel.findById(id);
            res.status(200).json({ post: afterDislike})
        }

    } catch (error) {
        res.status(500).json({ message: 'Something went to error' })
    }
}

export const Comments = async (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;
    try {
      const post = await postModel.findById(id);
      await post.updateOne({ $push: { comments: [{ id: req.user.id, comment_id: uuidv4(), comment: comment, time: Date.now(), notification: true }] }});
      if (req.user.id !== post.creator_id) {
          await postNotificationModel.create({ post_id: id, creator_id: post.creator_id, creator_name: post.creator_name, notify_by: req.user.id, position: 'comment' })
      }
      const afterComment = await postModel.findById(id);
      res.status(200).json({ post: afterComment })

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}

export const postNotifications = async (req, res) => {
    try {
        const notifications = await postNotificationModel.find({ creator_id: req.user.id }).sort({ createdAt: -1 });
        res.status(200).json({ notifications: notifications })
    } catch (error) {
        res.status(500).json({ message: 'Something went to wrong' })
    }
}

export const showPostNotifications = async (req, res) => {
    const userId = req.user.id;
    try {
        await postNotificationModel.updateMany({ creator_id: userId }, { notification: false });
        const afterUpdate = await postNotificationModel.find({ creator_id: userId }).sort({ createdAt: -1 });
        res.status(200).json({ notifications: afterUpdate })
    } catch (error) {
        console.log(error)
    }
}