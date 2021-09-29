import userModel from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
    try {
       const users = await userModel.find().sort({ createdAt: -1 }).select('-password');
       res.status(200).json({ users: users })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await userModel.findOne({ _id: req.user.id }).select('-password');
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}

export const searchUser = async (req, res) => {
    const { searchKey } = req.query;
    try {
        const name = new RegExp(searchKey, 'i')
        const users = await userModel.find({ name }).select('-password');
        res.status(200).json({ users })
    } catch (error) {
        res.status(500).json({ message: 'Something went error' })
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.user;
    const { school, degree, field_of_study, start_date, end_date } = req.body
    try {
        if (school && degree && field_of_study && start_date && end_date) {
            const findUser = await userModel.findById(id);
            const existsData = findUser.education_background.some(data => data.degree === degree );
            if (existsData === true) {
                await findUser.updateOne({$pull: { education_background: {degree}}});
                await findUser.updateOne({$push: {education_background: [req.body]}});
                const user = await userModel.findById(id);
                res.status(200).json({ user: user })
            } else {
                await findUser.updateOne({$push: { education_background: [req.body] }});
                const user = await userModel.findById(id)
                res.status(200).json({ user: user })
            }
        }
        else {
            const updateDate = await userModel.findByIdAndUpdate(id, req.body, {new: true});
            res.status(200).json({user: updateDate})
        }
    } catch (error) {
       res.status(500).json({ message: 'Something went wrong' });
    }
}

export const followOne = async (req, res) => {
    const { userId } = req.params;
    const currentUserId  = req.user.id;

    if (userId !== currentUserId) {
        try {
           const user = await userModel.findById(userId);
           const currentUser = await userModel.findById(currentUserId);

           if (!user.followers.includes(currentUserId)) {
               await user.updateOne({ $push: { followers: currentUserId  } });
               await currentUser.updateOne({ $push: { followings: userId } });
               res.status(200).json({ message: 'You have been followed' })
           } else {
               res.status(403).json({ message: 'You are already followed' })
           }

        } catch (error) {
            res.status(500).json({ message: 'Something went wrong' })
        }
    } else {
        res.status(403).json({ message: 'You can not follow your self' })
    }
}

export const unfollowOne = async (req, res) => {
    const { userId } = req.params;
    const  currentUserId  = req.user.id;

    if (userId !== currentUserId) {
        try {
            const user = await userModel.findById(userId);
            const currentUser = await userModel.findById(currentUserId);

            if (user.followers.includes(currentUserId)) {
                await user.updateOne({ $pull: { followers: currentUserId } });
                await currentUser.updateOne({ $pull: { followings: userId } });
                res.status(200).json({ message: 'You have been unfollowed' })
            } else {
                res.status(403).json({ message: 'You did not followed' })
            }
        } catch (error) {
            res.status(500).json({ message: 'something went wrong' })
        }
    } else {
        res.status(403).json({message: 'You can not follow your self'})
    }
}

export const getFollowers = async (req, res) => {
    const { id } = req.user;
    try {
       const user = await userModel.findOne({_id: id}).select('-password');
       const followers = await userModel.find({ _id: user.followers }).select('-password');
       res.status(200).json({ followers })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}

export const getFollowings = async (req, res) => {
    const { id } = req.user;
    try {
        const user = await userModel.findOne({_id: id}).select('-password');
        const followings = await userModel.find({ _id: user.followings }).select('-password');
        res.status(200).json({ followings })
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}