import messageModel from "../models/messageModel.js";
import userModel from "../models/userModel.js";
import clubModel from "../models/clubModel.js";

export const createPeer = async (req, res) => {
    const { id } = req.params;
    try {
       const user = await userModel.findById(id);
       const currentUser = await userModel.findById(req.user.id)
       const club = await clubModel.findById(id)
        if (user) {
            if (!currentUser.peers.includes(id)) {
                await currentUser.updateOne({ $push: { peers: id } });
                await user.updateOne({ $push: { peers: req.user.id } });
                const finalUser = await userModel.findById(req.user.id);
                res.status(200).json({ user: finalUser })
            } else {
                const finalUser = await userModel.findById(req.user.id);
                res.status(200).json({ user: finalUser })
            }
        }
        if (club) {
            if (!currentUser.peers.includes(id)) {
                await currentUser.updateOne({ $push: { peers: id } });
                await club.updateOne({ $push: { peers: req.user.id } });
                const finalUser = await userModel.findById(req.user.id);
                res.status(200).json({ user: finalUser })
            } else {
                const finalUser = await userModel.findById(req.user.id);
                res.status(200).json({ user: finalUser })
            }
        }
    } catch (error) {
        res.status(500).json({ message: 'Something went to wrong..' })
    }
}

export const message = async (req, res) => {
    const { message, receiver } = req.body
    try {
       const chat = await messageModel.create({ sender: req.user.id, receiver: receiver, message: message  });
       res.status(200).json({ message: chat })
    } catch (error) {
       res.status(500).json({ message: 'Something went to wrong' })
    }
}

export const getMessage = async (req, res) => {
    const {id} = req.user;
    try {
        const messages = await messageModel.find({ $or : [ { sender: id }, { receiver: id } ], })
        res.status(200).json({ messages })
    } catch (error) {
        res.status(500).json({ message: 'Something went to wrong' })
    }
}