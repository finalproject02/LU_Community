import {
    ALL_USERS,
    LOADING,
    SEARCHING,
    LOADED,
    FOLLOWINGS,
    FOLLOWERS,
    FOLLOW,
    UNFOLLOW
} from "../actions/types";

export default (state = { users: [], isLoading: false, message: null, following: [], followers: [] }, action) => {
    switch (action.type) {
        case ALL_USERS:
            return {
                ...state,
                users: action.payload,
                isLoading: false
            };
        case SEARCHING:
            return {
                ...state,
                users: action.payload,
                isLoading: false
            };
        case LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case LOADED:
            return {
                ...state,
                isLoading: true,
            };
        case FOLLOW:
        case UNFOLLOW:
            return {
                ...state,
                message: action.payload
            };
        case FOLLOWINGS:
            return {
                ...state,
                followers: action.payload.followings
            }
       case FOLLOWERS:
            return {
                ...state,
                followers: action.payload.followers
            }
        default:
            return state
    }
}