import {LOADING, LOADED, CREATE_CLUB, ALL_CLUB, CLUB_UPDATE} from "../actions/types";

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
        case CLUB_UPDATE:
            return {
                ...state,
                clubs: [action.payload, ...state.clubs],
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