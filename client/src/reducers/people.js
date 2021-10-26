import {
    SUGGESTIONS, APPROVE_SEMESTER_REGISTRATION,
    LOADING, LOADED, CONFIRM_ADMISSION,
    ALL_USERS, APPROVE_ADMISSION
} from "../actions/types";

export default (state = { suggestions: [], isLoading: false, people: [] }, action) => {
    switch (action.type) {
        case SUGGESTIONS:
            return {
                ...state,
                suggestions: action.payload,
                isLoading: false
            }
        case LOADING:
            return {
                ...state,
                isLoading: true
            }
        case LOADED:
            return {
                ...state,
                isLoading: false
            }
        case ALL_USERS:
            return {
                ...state,
                people: action.payload,
                isLoading: false
            };
        case APPROVE_ADMISSION:
        case CONFIRM_ADMISSION:
        case APPROVE_SEMESTER_REGISTRATION:
            return {
                ...state,
                people: state.people.filter(person => person._id !== action.payload)
            }
        default:
            return state
    }
}