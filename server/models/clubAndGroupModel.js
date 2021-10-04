import mongoose from "mongoose";

const clubAndGroupModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    profile_picture: {
        type: String,
        default: null
    },
    cover_picture: {
        type: String,
        default: null
    },
    members: {
        type: Array,
    },
    followers: {
        type: Array,
    },
    website: {
        type: String,
        default: null
    },
    isClub: Boolean,
    isGroup: Boolean,
    email: {
        type: String,
        default: null
    },
    phone: {
        type: String,
        default: null
    },
    join_requests: Array,
    started_time: String
},
    {timestamps: true}
    )

export default mongoose.model('clubAndGroup', clubAndGroupModel)