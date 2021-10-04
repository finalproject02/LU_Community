import mongoose from "mongoose";

const postNotificationModel = new  mongoose.Schema({
    post_id: String,
    creator_id: String,
    creator_name: String,
    position: String,
    notify_by: String,
    notification: { type: Boolean, default: true },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model('postNotification', postNotificationModel)