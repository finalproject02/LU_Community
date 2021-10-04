import {
    NEW_POST,
    POSTS,
    LOADED,
    LOADING,
    DELETE_POST,
    LIKE_AND_DISLIKE,
    COMMENT,
    NOTIFICATIONS,
    SHOW_NOTIFICATIONS
} from "../actions/types";

export default (state = { posts:[], notifications: [], isLoading: false }, action) => {
    switch (action.type) {
        case NEW_POST:
            return {
                ...state,
                posts: [action.payload.post, ...state.posts],
                isLoading: false
            }
        case POSTS:
            return {
                ...state,
                posts: action.payload,
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
        case LIKE_AND_DISLIKE:
        case COMMENT:
            return {
                ...state,
                isLoading: false,
                posts: state.posts.map(post => (post._id === action.payload._id ? action.payload : post))
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !==  action.payload)
            }
        case NOTIFICATIONS:
        case SHOW_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.payload
            }
        default:
            return state
    }
}