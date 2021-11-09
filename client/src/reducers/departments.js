import {
    ALL_DEPARTMENT, ALL_COURSE, ALL_TEACHER, ALL_STUDENT, LOADED, SEMESTER_REGISTRATION,
    ADD_DEPARTMENT, ADD_COURSE, ADD_TEACHER, ADD_STUDENT, LOADING, ALL_SEMESTERS,
} from "../actions/types";

export default (state = { departments: [], teachers: [], students: [], courses: [], semesters: [], isLoading: false }, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: true
            }
        case LOADED:
            return {
                ...state,
                isLoading: true
            }
        case ALL_DEPARTMENT:
            return {
                ...state,
                departments: action.payload,
            }
        case ADD_DEPARTMENT:
            return {
                ...state,
                departments: [action.payload, ...state.departments],
            }
        case ALL_COURSE:
            return {
                ...state,
                courses: action.payload,
            }
        case ADD_COURSE:
            return {
                ...state,
                courses: [action.payload, ...state.courses],
            }
        case ALL_TEACHER:
            return {
                ...state,
                teachers: action.payload,
            }
        case ADD_TEACHER:
            return {
                ...state,
                teachers: [action.payload, ...state.teachers],
            }
        case ALL_STUDENT:
            return {
                ...state,
                students: action.payload,
            }
        case ADD_STUDENT:
            return {
                ...state,
                students: [action.payload, ...state.students],
            }
        case ALL_SEMESTERS:
            return {
                ...state,
                semesters: action.payload
            }
        case SEMESTER_REGISTRATION: {
            return {
                ...state,
                semesters: [action.payload, ...state.semesters]
            }
        }
        default:
            return state
    }
}