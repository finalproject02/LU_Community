import groupModel from "../models/groupModel.js";
import userModel from "../models/userModel.js";
import postModel from "../models/postModel.js";

export const createGroup = async (req, res) => {
    const { name, privacy, visibility } = req.body;
    try {
        const check = await groupModel.findOne({ name });
        if (check) return res.status(404).json({ message: 'Please Change the name. It is already have' });
        if (!name || !privacy || !visibility) return res.status(404).json({ message: 'Please enter all fields ' });
        const club = await groupModel.create({ name, privacy, visibility, creator_id: req.user.id, creator_name: req.user.name });
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

export const groupUpdate = async (req, res) => {
    const { id } = req.params;
    const { title, description  } = req.body
    try {
        if (title && description) {
            const findGroup = await groupModel.findById(id);
            const existsData = findGroup.rules.some(data => data.title === title);
            if (existsData === true) {
                await findGroup.updateOne({ $pull: { rules: {title} } });
                const group =  await groupModel.findById(id);
                res.status(200).json({ group })
            } else {
                await findGroup.updateOne({ $push : { rules: [req.body] }});
                const group =  await groupModel.findById(id);
                res.status(200).json({ group })
            }
        } else {
            const group = await groupModel.findByIdAndUpdate(id, req.body, { new : true });
            res.status(200).json({ group })
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}

export const send_membership_request = async (req, res) => {
    const { id } = req.params;
    const currentUserId  = req.user.id;
        try {
            const group = await groupModel.findById(id);
            const currentUser = await userModel.findById(currentUserId);
            const creator = await userModel.findById(group.creator_id);
            if (!currentUser.connecting.includes(id)) {
                await group.updateOne({ $push: { join_requests: currentUserId } });
                await creator.updateOne({ $push: { notifications: [{ document_id: id, notify_by: currentUserId, types: 'member_request', time: Date.now(), isShow: false }]} })
                await currentUser.updateOne({ $push: { connecting : id } });
                const finalResult = await userModel.findById(currentUserId);
                res.status(200).json({ user: finalResult });
            } else {
                res.status(403).json({ message: 'You are already requested for membership' })
            }

        } catch (error) {
            res.status(500).json({ message: 'Something went wrong' });
        }

}

export const cancel_membership_request = async (req, res) => {
    const { id } = req.params;
    const  currentUserId  = req.user.id;
        try {
            const group = await groupModel.findById(id);
            const currentUser = await userModel.findById(currentUserId);
            const creator = await userModel.findById(group.creator_id);

            if (currentUser.connecting.includes(id)) {
                await group.updateOne({ $pull: { join_requests: currentUserId }});
                await currentUser.updateOne({ $pull: { connecting: id } });
                await creator.updateOne({ $pull: { notifications: { document_id: id, notify_by: currentUserId, types: 'member_request' }}  });
                const finalResult = await userModel.findById(currentUserId);
                res.status(200).json({ user: finalResult })
            }
        } catch (error) {
            res.status(500).json({ message: 'something went wrong' });
        }
}

export const reject_membership_request = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.params
    try {
        const group = await groupModel.findById(id);
        const user = await userModel.findById(userId);
        const creator = await userModel.findById(group.creator_id);

        if (group.join_requests.includes(userId)) {
            await group.updateOne({ $pull: { join_requests: userId }});
            await user.updateOne({ $pull: { connecting: id } });
            await creator.updateOne({ $pull: { notifications: { document_id: id, notify_by: userId, types: 'member_request' }}  })
            const finalResult = await groupModel.findById(id);
            res.status(200).json({ group: finalResult })
        }
    } catch (error) {
        res.status(500).json({ message: 'something went wrong' });
    }
}

export const accept_membership_request = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.params;
    try {
        const group = await groupModel.findOne({ _id: id });
        const user = await userModel.findOne({ _id: userId });
        const creator = await userModel.findOne({ _id: group.creator_id });
        if (group.join_requests.includes(userId)) {
            await user.updateOne({ $pull: { connecting: id} });
            await group.updateOne({ $pull: { join_requests: userId }});
            await creator.updateOne({ $pull: { notifications: { document_id: id, notify_by: userId, types: 'member_request'}}})
            await user.updateOne({ $push: { memberships: id, notifications: [{ notify_by: id, types: 'member_accepted', time: Date.now(), isShow: false }] } });
            await group.updateOne({ $push: { members: userId} });
            const finalResult = await groupModel.findOne({ _id: id });
            res.status(200).json({ group: finalResult })
        }
    } catch (error) {
        res.status(500).json({ message: 'something went wrong' })
    }
}

export const groupPost = async (req, res) => {
    const posts = req.body;
    const { id } = req.params;
    try {
        const post = await postModel.create({...posts, owner_id: req.user.id, owner_name: req.user.name, post_to: id });
        const group =await groupModel.findById(id);
        await userModel.updateOne({ _id: group.creator_id }, { $push: { notifications: [{ document_id: post._id, notify_by: req.user.id, post_to: id, types: 'group_post', time: Date.now(), isShow: false }] } })
        await userModel.updateMany({ _id: group.members }, { $push: { notifications: [{ document_id: post._id, notify_by: req.user.id, post_to: id, types: 'group_post', time: Date.now(), isShow: false }] } })
        res.status(200).json({ post })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}