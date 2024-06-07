import {
    LOADING,
    SEARCHING,
    LOADED,
    FOLLOWINGS,
    FOLLOWERS,
} from "../actions/types";

export default (state = { searchResult: [], isLoading: false, message: null, following: [], followers: [] }, action) => {
    switch (action.type) {

        case SEARCHING:
            return {
                ...state,
                searchResult: action.payload.searchResult,
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