import mongoose from "mongoose";

const departmentModel = new mongoose.Schema({
    department_name: String,
    faculty: String,
    students: Array,
    teachers: Array,
    courses: Array,
    tuition_fee_per_credit: Number
});

export default mongoose.model('department', departmentModel)