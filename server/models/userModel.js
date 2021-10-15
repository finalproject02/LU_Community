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
    cover_picture: {
        type: String,
        default: null
    },
    date_of_birth: {
      type: String,
      default: null
    },
    current_position: {
        type: String,
        default: null
    },
    batch: {
        type: String,
        default: null
    },
    present_address: {
        type: String,
        default: null
    },
    permanent_address: {
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
    connection: {
        type: Array,
        default: []
    },
    connecting: {
        type: Array,
        default: []
    },
    connection_requests: {
        type: Array,
        default: []
    },
    followings: {
        type: Array,
        default: []
    },
    education_background: {
        type: Array,
        default:[]
    },

    memberships: {
        type: Array,
        default: []
    },
    jobs: {
        type: Array,
        default: []
    },
    type: {
        type: String,
        default: 'user'
    },
    language: String,
    website: String,
    notifications: Array,
    peers: Array,
    lastLogin: Date,
},
    { timestamps: true }

)

export default mongoose.model('user', userModel)