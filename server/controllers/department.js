import departmentModel from "../models/departmentModel.js";
import courseModel from "../models/courseModel.js";
import userModel from "../models/userModel.js";
import {generateUniquePassword} from "../services/functions.js";
import {addTeacherSMS} from "../services/smsService.js";
import bcrypt from "bcryptjs";

export const addDepartment = async (req, res) => {
    const { department_name, faculty } = req.body;
   try {
        const isExists = await departmentModel.findOne({  department_name  });
        if (!department_name || faculty) {
            res.status(400).json({ message: 'Please enter all fields' })
        }
        else if (isExists) {
            res.status(400).json({ message: 'Please change department name' })
        } else {
            await departmentModel.create({ department_name, faculty })
        }
   } catch (error) {
       res.status(500).json({  message: 'Something went wrong..'  })
   }
}

export const addCourse = async (req, res) => {
    const { course_code, course_title, course_prerequisite, credit, curriculum, semester, department_id, department_name } = req.body
    try {
        const check_course_code = await courseModel.findOne({ course_code  });
        const check_course_title = await courseModel.findOne({ course_title  });
        if (!course_code) {
            res.status(400).json({ message: 'Please enter course code' })
        }
        else if (!course_title) {
            res.status(400).json({ message: 'Please enter course title' })
        }
        else if (!credit) {
            res.status(400).json({ message: 'Please enter course credit' })
        }
        else if (!semester) {
            res.status(400).json({ message: 'Please enter semester' })
        }
        else if (check_course_code) {
            res.status(400).json({ message: 'Please change course code. Course code should be unique' });
        } else if (check_course_title) {
            res.status(400).json({ message: 'Please change course title.It should be different from other' });
        } else {
            const course = await courseModel.create({course_code, course_title, course_prerequisite, credit, curriculum, semester, department_id, department_name});
            res.status(200).json({ course })
        }

    } catch (error) {
        res.status(500).json({  message: 'Something went wrong..'  })
    }
}

export const editCourse = async (req, res) => {
    const { id } = req.params;
    const { course_code, course_title, course_prerequisite, credit, curriculum, semester } = req.body
    try {
        const course = await courseModel.findByIdAndUpdate(id, {course_code, course_title, course_prerequisite, credit, curriculum, semester});
        res.status(200).json({ course })
    } catch (error) {
        res.status(500).json({  message: 'Something went wrong..'  })
    }
}

export const deleteCourse = async (req, res) => {
    const { id } = req.params;
    try {
        await courseModel.findByIdAndRemove(id)
        res.status(200).json({ message: 'Course deleted success' })
    } catch (error) {
        res.status(500).json({  message: 'Something went wrong..'  })
    }
}

export const addTeacher = async (req, res) => {
    const emailPattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
    const phonePattern = /[0-9]{11,13}/;
    const { name, email, mobile, department, designation, profile_picture } = req.body
    try {
        const isExists = await userModel.findOne({ email })
        if (!name || !email || !mobile || !department || !designation || !profile_picture) {
            res.status(400).json({ message: 'Please enter all fields' });
        } else if (!emailPattern.test(email)) {
            res.status(400).json({ message: 'Please provide a valid email' });
        } else if (!phonePattern.test(mobile)) {
            res.status(400).json({ message: 'Please check phone number length' });
        } else if (isExists) {
            res.status(400).json({ message: 'Please change email address. It already exists' });
        } else {
           const password = generateUniquePassword();
           addTeacherSMS(name, mobile, designation, department, email, password)
           const hashedPassword = await bcrypt.hash(password, 10)
           const teacher = await userModel.create({name, email, mobile, department, designation, profile_picture, isTeacher: true, password: hashedPassword});
           res.status(200).json({ teacher })
        }

    } catch (error) {
        res.status(500).json({ message: 'Something went to wrong' })
    }
}

export const addStudent = async (req, res) => {
    const { name, email, mobile, department, profile_picture, student_id } = req.body
    try {

    } catch (error) {

    }
}
