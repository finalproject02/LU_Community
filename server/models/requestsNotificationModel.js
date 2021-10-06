import mongoose from "mongoose";

const postNotificationModel = new  mongoose.Schema({
    receiver_id: String,
    sender_id: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})
export default mongoose.model('requestNotification', postNotificationModel)