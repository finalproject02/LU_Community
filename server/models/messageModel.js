import mongoose from "mongoose";

const messageModel = new mongoose.Schema({
    sender: String,
    message: String,
    receiver: String,
    createdAt: { type: Date, default: Date.now() }
})

export default mongoose.model('message', messageModel)