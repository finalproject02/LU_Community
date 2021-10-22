import express from "express";
import { addDepartment, addCourse, editCourse, deleteCourse, addTeacher } from "../controllers/department.js";
const router = express.Router();

router.post('/', addDepartment)
router.post('/course', addCourse);
router.patch('/course/:id', editCourse);
router.delete('/course/:id', deleteCourse);
router.post('/teacher', addTeacher)

export default router;