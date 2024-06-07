import {
    FILE_UPLOAD,
    FILE_FAIL,
    LOADING, LOADED
}  from "../actions/types";

export default (state = { message: null, isLoading: true }, action) => {
    switch (action.type) {
        case FILE_UPLOAD:
            return {
                ...state,
                message: action.payload,
                isLoading: false
            }
        case FILE_FAIL:
            return {
                ...state,
                message: null,
                isLoading: false
            };
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
        default:
            return state
    }
}