import { LOADING, LOADED, CREATE_GROUP, ALL_GROUP } from "../actions/types";

export default (state = { groups: [], isLoading: false}, action) => {
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
        case CREATE_GROUP:
            return {
                ...state,
                groups: [...state.groups, action.payload],
                isLoading: false,
            }
        case ALL_GROUP: {
            return {
                ...state,
                groups: action.payload,
                isLoading: false
            }
        }
        default:
            return state
    }
}