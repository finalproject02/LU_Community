import mongoose from "mongoose";

const clubModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    creator_id: String,
    creator_name: String,
    profile_picture: {
        type: String,
        default: null
    },
    cover_picture: {
        type: String,
        default: null
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    committee: {
        type: Array,
        default: []
    },
    followers: {
        type: Array,
        default: []
    },
    mobile: String,
    email: String,
    website: String,
    events: {
        type: Array,
        default: []
    },
    type: {
        type: String,
        default: 'club'
    },
    peers: Array
},
    {timestamps: true}
)

export default mongoose.model('club', clubModel)