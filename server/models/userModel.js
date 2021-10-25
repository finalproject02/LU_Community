import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name: String,
    email:String,
    program_name: String,
    birth_or_nid_number: Number,
    father_name: String,
    mother_name: String,

    ssc_regis_no: Number,
    ssc_institute_name: String,
    ssc_roll_no: Number,
    ssc_board: String,
    ssc_gpa: Number,

    hsc_regis_no: Number,
    hsc_institute_name: String,
    hsc_roll_no: Number,
    hsc_board: String,
    hsc_gpa: Number,

    guardian_name: String,
    religion: String,
    guardian_contact: String,
    guardian_photo: String,
    marital_status: String,
    gender: String,
    nationality: String,
    blood_group: String,
    password: String,
    student_id: {
        type: Number,
        minlength: 10,
        maxlength: 10
    },
    profile_picture: String,
    cover_picture: String,
    date_of_birth: String,
    current_position: String,
    batch: String,
    present_address: String,
    permanent_address: String,
    department: String,
    mobile: String,
    connection: Array,
    connecting: Array,
    connection_requests: Array,
    followings: Array,
    semester: String,
    section: String,
    approval: Number,
    via: String,
    current_course: Array,
    completed_course: Array,
    payment_history: Array,
    reference_no: Number,
    education_background: Array,
    memberships: Array,
    jobs: Array,
    teacher_id: Number,
    isTeacher: {
        type: Boolean,
        default: false
    },
    position: String,
    type: {
        type: String,
        default: 'user'
    },
    designation: String,
    language: String,
    website: String,
    notifications: Array,
    peers: Array,
    lastLogin: Date,
},
    { timestamps: true }

)

export default mongoose.model('user', userModel)