import { LOADED, LOADING, NEW_APPLICATION } from "../actions/types";

export default (state = { isLoading: false, admission: [] }, action) => {
    switch (action.type) {
        case NEW_APPLICATION:
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