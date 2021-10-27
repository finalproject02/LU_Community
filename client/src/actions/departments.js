import {
    ADD_DEPARTMENT, ADD_COURSE, ADD_STUDENT, ADD_TEACHER, ALL_SEMESTERS, APPROVE_SEMESTER_REGISTRATION,
    ALL_DEPARTMENT, ALL_STUDENT, ALL_TEACHER, ALL_COURSE, LOADED, LOADING, SEMESTER_REGISTRATION, ASSIGN_TEACHER
} from "./types";
import {clearError, getErrors} from "./errors";
import * as api from '../api'
import ShowToast from "../services/ShowToast";


export const departmentAdd = (departmentData, handleClose) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data: { department } } = await api.addDepartment(getState, departmentData);
        handleClose()
        dispatch({
            type: ADD_DEPARTMENT,
            payload: department
        })
        dispatch({ type: LOADED });
    } catch (error) {
       dispatch(getErrors(error.response.data, 'ADD_DEPARTMENT_ERROR'))
    }
}

export const Departments = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data: { departments } } = await api.departments(getState);
        dispatch({
            type: ALL_DEPARTMENT,
            payload: departments
        })
        dispatch({ type: LOADED });
    } catch (error) {
        dispatch(getErrors(error.response.data, 'DEPARTMENTS_ERROR'))
    }
}

export const courseAdd = (courseData, handleClose) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data: { course } } = await api.addCourse(getState, courseData);
        handleClose();
        dispatch(clearError())
        dispatch({
            type: ADD_COURSE,
            payload: course
        })
        dispatch({ type: LOADED });
    } catch (error) {
        dispatch(getErrors(error.response.data, 'ADD_COURSE_ERROR'))
    }
}

export const Course = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data: { courses } } = await api.courses(getState)
        dispatch({
            type: ALL_COURSE,
            payload: courses
        })
        dispatch({ type: LOADED });
    } catch (error) {
        dispatch(getErrors(error.response.data, 'COURSES_ERROR'))
    }
}

export const TeacherAdd = (teacherData) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data: { teacher } } = await api.addTeacher(getState, teacherData)
        dispatch({
            type: ADD_TEACHER,
            payload: teacher
        })
        dispatch({ type: LOADED });
    } catch (error) {
        dispatch(getErrors(error.response.data, 'ADD_TEACHER_ERROR'))
    }
}

export const Teacher = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data: { teachers } } = await api.teachers(getState)
        dispatch({
            type: ALL_TEACHER,
            payload: teachers
        })
        dispatch({ type: LOADED });
    } catch (error) {
        dispatch(getErrors(error.response.data, 'TEACHERS_ERROR'))
    }
}

export const StudentAdd = (studentData) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data: { student } } = await api.addStudent(getState, studentData);
        ShowToast(1, 'Student add success');
        setTimeout(() => {
            window.location.reload()
        }, 1000)
        dispatch({
            type: ADD_STUDENT,
            payload: student
        })
        dispatch({ type: LOADED });
    } catch (error) {
        dispatch(getErrors(error.response.data, 'ADD_STUDENT_ERROR'))
    }
}

export const Student = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data: { students } } = await api.students(getState)
        dispatch({
            type: ALL_STUDENT,
            payload: students
        })
        dispatch({ type: LOADED });
    } catch (error) {
        dispatch(getErrors(error.response.data, 'STUDENTS_ERROR'))
    }
}

export const SemesterRegistration = (studentData) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data: { semester } } = await api.semesterRegistration(getState, studentData)
        ShowToast(1, 'Semester Registration success');
        dispatch({
            type: SEMESTER_REGISTRATION,
            payload: semester
        })
        dispatch({ type: LOADED });
    } catch (error) {
        dispatch(getErrors(error.response.data, 'SEMESTER_REGISTRATION_ERROR'))
    }
}

export const ApproveSemesterRegistration = (studentId) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data: { message } } = await api.approveSemesterRegistration(getState, studentId)
        ShowToast(1, message);
        dispatch({
            type: APPROVE_SEMESTER_REGISTRATION,
            payload: studentId
        })
        dispatch({ type: LOADED });
    } catch (error) {
        dispatch(getErrors(error.response.data, 'APPROVE_SEMESTER_REGISTRATION_ERROR'))
    }
}

export const Semester = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data: { semesters } } = await api.semesters(getState)
        dispatch({
            type: ALL_SEMESTERS,
            payload: semesters
        })
        dispatch({ type: LOADED });
    } catch (error) {
        dispatch(getErrors(error.response.data, 'SEMESTERS_ERROR'))
    }
}

export const AssignTeacher = (teacherId, courseId) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data: { message } } = await api.assignTeacher(getState, teacherId, courseId);
        ShowToast(1, message);
        dispatch({
            type: ASSIGN_TEACHER,
            payload: message
        });
        dispatch({ type: LOADED });
    } catch (error) {
        dispatch(getErrors(error.response.data, 'ASSIGN_TEACHER_ERROR'))
    }
}



