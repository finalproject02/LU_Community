import mongoose from "mongoose";

const groupModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    creator_id: String,
    creator_name: String,
    cover_picture: {
        type: String,
        default: null
    },
    admin: {
        type: Array,
        default: []
    },
    privacy: {
        type: String,
        default: 'public'
    },
    visibility: {
        type: String,
        default: 'visible'
    },
    members: {
        type: Array,
        default: []
    },
    join_requests: {
        type: Array,
        default: []
    },
    rules: {
        type: Array,
        default: []
    }
})

export default mongoose.model('group', groupModel)