import mongoose from "mongoose";

const notifications = new mongoose.Schema({
    documentId: String,
    types: String,
    post_to: String,
    notify_by: String,
    createdAt: Date.now()
})

export default mongoose.model('notification', notifications)