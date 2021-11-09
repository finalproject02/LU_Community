import {LOADING, LOADED, CREATE_GROUP, ALL_GROUP, GROUP_UPDATE, REJECT_REQUEST, ACCEPT_REQUEST} from "../actions/types";

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
        case GROUP_UPDATE:
            return {
                ...state,
                groups: [action.payload, ...state.groups],
                isLoading: false,
            }
        case REJECT_REQUEST:
        case ACCEPT_REQUEST:
            return {
                ...state,
                groups: [action.payload.group, ...state.groups],
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