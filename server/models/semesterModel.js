import mongoose from "mongoose";

const semesterModel = new mongoose.Schema({
    course_title: String,
    courseDocId: String,
    course_code: String,
    credit: Number,
    semester: Number,
    department_id: String,
    student_id: String,
    student_name: String,
    studentDocId: String,
    teacherDocId: String,
    attendance: Number,
    assignment: Number,
    mid_term: Number,
    final_term: Number,
    department_name: String,
    result_approve: Number,
    status: {
        type: String,
        default: 'submitted'
    }
}, {timestamps: true});

export default mongoose.model('semester', semesterModel)