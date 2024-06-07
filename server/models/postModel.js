import mongoose from "mongoose";

const postModel = new mongoose.Schema({
    owner_name: {
        type: String,
        required: true
    },
    owner_id: {
        type: String,
        required: true
    },
    owner_position: {
        type: String,
        default: 'own_post'
    },
    post_to: String,
    description: String,
    filename: String,
    likes: {
        type: Array,
        default: []
    },
    comments: {
        type: Array,
        default: []
    },
    tags: {
        type: Array,
        default: []
    },
    admin_to: String,
    post_status: {
        type: String,
        default: 'Public',
        trim: true
    }
},
    {timestamps: true}
)

export default mongoose.model('post', postModel)