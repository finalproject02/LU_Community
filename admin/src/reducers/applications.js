import { GET_APPLICATIONS, LOADING, LOADED, CHECKED_HSC_RESULT, CHECKED_SSC_RESULT, GET_APPLICATION, DELETE_APPLICATIONS } from "../actions/types";

export default (state = { applications: [], isLoading: false, message : null }, action) => {
    switch (action.type) {
        case GET_APPLICATIONS:
            return {
                ...state,
                applications: action.payload,
                isLoading: false
            }
        case GET_APPLICATION:
            return {
                ...state,
                application: action.payload,
                isLoading: false
            }
        case DELETE_APPLICATIONS:
            return {
                ...state,
                applications: state.applications.filter(app => app._id !== action.payload)
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
        case CHECKED_SSC_RESULT:
        case CHECKED_HSC_RESULT:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state
    }
}