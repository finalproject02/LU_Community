import { SUGGESTIONS, LOADING, LOADED, ALL_USERS } from "../actions/types";

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
        default:
            return state
    }
}