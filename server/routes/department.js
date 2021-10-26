import express from "express";
import { addDepartment, addCourse, editCourse, deleteCourse, Semesters, assignTeacher,
    addTeacher, Courses, Teachers, Departments, addStudent, Students, semesterRegistration } from "../controllers/department.js";
import {auth} from "../middleware/auth.js";
const router = express.Router();

router.post('/', auth, addDepartment);
router.get('/', auth, Departments);
router.post('/course', auth, addCourse);
router.get('/course', auth, Courses);
router.patch('/course/:id', auth, editCourse);
router.delete('/course/:id', auth, deleteCourse);
router.post('/teacher', auth, addTeacher);
router.get('/teacher', auth, Teachers);
router.post('/student', auth, addStudent);
router.get('/student', auth, Students);
router.post('/semesterRegistration', auth, semesterRegistration);
router.get('/semesterRegistration', auth, Semesters);
router.patch('/assignTeacher/:teacherId/:courseId', auth, assignTeacher)

export default router;