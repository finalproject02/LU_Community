import mongoose from "mongoose";

const postModel = new mongoose.Schema({
    creator_name: {
        type: String,
        required: true
    },
    creator_id: {
        type: String,
        required: true
    },
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
    post_status: {
        type: String,
        default: 'Public',
        trim: true
    }
},
    {timestamps: true}
)

export default mongoose.model('post', postModel)