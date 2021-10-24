import mongoose from "mongoose";

const semesterModel = new mongoose.Schema({
    course_title: String,
    courseDocId: String,
    course_code: String,
    credit: String,
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
    status: {
        type: String,
        default: 'submitted'
    }
});

export default mongoose.model('semester', semesterModel)