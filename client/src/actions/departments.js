import { ADD_DEPARTMENT, ADD_COURSE, ADD_STUDENT, ADD_TEACHER,
    ALL_DEPARTMENT, ALL_STUDENT, ALL_TEACHER, ALL_COURSE, LOADED, LOADING } from "./types";
import {clearError, getErrors} from "./errors";
import * as api from '../api'


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


