import mongoose from "mongoose";

const courseModel = new mongoose.Schema({
    course_title: String,
    course_code: String,
    credit: {
        type: Number,
        maxlength: 3
    },
    semester: Number,
    course_prerequisite: String,
    department_id: String,
    department_name: String,
    curriculum: String,
})
export default mongoose.model('course', courseModel)