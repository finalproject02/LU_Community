import {
    SUGGESTIONS, APPROVE_SEMESTER_REGISTRATION, APPROVE_ACCOUNT_ADMISSION, APPROVE_RESULT_BY_EXAM_CONTROLLER,
    LOADING, LOADED, CONFIRM_ADMISSION, ACCEPT_APPLICATION, APPROVE_ADMISSION_FEE, SUBMIT_RESULT,
    ALL_USERS, APPROVE_ADMISSION, APPROVE_ACCOUNT, REJECT_APPLICATION, APPROVE_RESULT_BY_HEAD
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
        case APPROVE_ACCOUNT:
        case ACCEPT_APPLICATION:
        case REJECT_APPLICATION:
        case APPROVE_ACCOUNT_ADMISSION:
        case APPROVE_ADMISSION_FEE:
        case APPROVE_SEMESTER_REGISTRATION:
        case APPROVE_RESULT_BY_EXAM_CONTROLLER:
        case SUBMIT_RESULT:
        case APPROVE_RESULT_BY_HEAD:
            return {
                ...state,
                people: state.people.filter(person => person._id !== action.payload)
            }
        default:
            return state
    }
}