import {
    LOADING,
    SEARCHING,
    LOADED,
    FOLLOWINGS,
    FOLLOWERS,
    CONNECT,
    DISCONNECT,
    ACCEPT_CONNECTION_REQUEST
} from "../actions/types";

export default (state = { users: [], isLoading: false, message: null, following: [], followers: [] }, action) => {
    switch (action.type) {

        case SEARCHING:
            return {
                ...state,
                users: action.payload.users,
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