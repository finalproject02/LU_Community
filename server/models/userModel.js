import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    student_id: {
        type: Number,
        minlength: 10,
        maxlength: 10
    },
    profile_picture: {
        type: String,
        default: null
    },
    current_position: {
        type: String,
        default: null
    },
    current_semester: {
        type: String,
        default: null
    },

    address: {
        type: String,
        default: null
    },
    department: {
        type: String,
        default: null
    },
    isTeacher: {
       type: Boolean,
       default: false
    },
    mobile: {
        type: String,
        default: null
    },
    class_rooms: {
        type: Array,
        default: []
    },
    followers: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    }
},
    { timestamps: true }

)

export default mongoose.model('user', userModel)