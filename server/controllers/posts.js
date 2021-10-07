import postModel from "../models/postModel.js";
import { v4 as uuidv4 } from "uuid";
import userModel from "../models/userModel.js";

export const createPost = async (req, res)  => {
    const posts = req.body;
    try {
       const post = await postModel.create({ ...posts, owner_id: req.user.id, owner_name: req.user.name });
       res.status(200).json({ post: post })
    } catch (error) {
       res.status(500).json({ message: 'Something went wrong' });
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
            if (req.user.id !== post.owner_id) {
                await userModel.updateOne({_id: post.owner_id}, {$push: {notifications: [{ document_id: id, notify_by: req.user.id, types: 'user_post_like', time: Date.now(), isShow: false }]}});
            }
            const afterLike = await postModel.findById(id);
            res.status(200).json({ post: afterLike })
        } else {
            await post.updateOne({ $pull: { likes: { id: userId } } });
            if (req.user.id !== post.owner_id) {
                await userModel.updateOne({_id: post.owner_id}, {$pull: {notifications: { document_id: id}}});
            }
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
      await post.updateOne({ $push: { comments: [{ id: req.user.id, comment_id: uuidv4(), comment: comment, time: Date.now() }] }});
      if (req.user.id !== post.owner_id) {
          const commentators = post.comments.map(comment => comment.id);
          const commonCommentatorId = commentators.filter((item, i, orig) => {
              return orig.indexOf(item, i+1) === -1;
          });

          const withoutCurrentUser = commonCommentatorId.filter(current => current !== post.owner_id && current !== req.user.id)
          await userModel.updateMany({_id: withoutCurrentUser},{$push: { notifications: [{ document_id: id, notify_by: req.user.id, types: 'user_commented_post', time: Date.now(), isShow: false }] }})
          await userModel.updateOne({_id: post.owner_id},{$push: { notifications: [{ document_id: id, notify_by: req.user.id, types: 'user_post_comment', time: Date.now(), isShow: false }] }})
          const afterComment = await postModel.findById(id);
          res.status(200).json({ post: afterComment })
      } else {
          const commentators = post.comments.map(comment => comment.id);
          const commonCommentatorId = commentators.filter((item, i, orig) => {
              return orig.indexOf(item, i+1) === -1;
          });

          const withoutCurrentUser = commonCommentatorId.filter(current => current !== req.user.id);
          await userModel.updateMany({_id: withoutCurrentUser},{$push: { notifications: [{ document_id: id, notify_by: req.user.id, types: 'user_commented_post', time: Date.now(), isShow: false }] }})
          const afterComment = await postModel.findById(id);
          res.status(200).json({ post: afterComment })
      }


    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}


export const showNotifications = async (req, res) => {
    const userId = req.user.id;
    try {
        await notificationModel.updateMany({ creator_id: userId }, { notification: false });
        const afterUpdate = await notificationModel.find({ creator_id: userId }).sort({ createdAt: -1 });
        res.status(200).json({ notifications: afterUpdate })
    } catch (error) {
        console.log(error)
    }
}