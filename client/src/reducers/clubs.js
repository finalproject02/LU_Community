import {LOADING, LOADED, CREATE_CLUB, ALL_CLUB} from "../actions/types";

export default (state = { clubs: [], isLoading: false}, action) => {
    switch (action.type) {
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
        case CREATE_CLUB:
            return {
                ...state,
                clubs: [...state.clubs, action.payload],
                isLoading: false,
            }
        case ALL_CLUB:
            return {
                ...state,
                clubs: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}