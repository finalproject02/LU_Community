import mongoose from "mongoose";

const clubModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    creator_id: String,
    creator_name: String,
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
    }
})

export default mongoose.model('club', clubModel)