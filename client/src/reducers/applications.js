import {
    LOADED, LOADING,
    ADMISSION_FIRST_STEP
} from "../actions/types";

export default (state = { isLoading: false, admission: [] }, action) => {
    switch (action.type) {
        case ADMISSION_FIRST_STEP:
            return {
                ...state,
                admission: action.payload,
                isLoading: false
            }
        case LOADING:
            return  {
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