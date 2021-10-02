import {NEW_POST, POSTS, LOADED, LOADING, DELETE_POST} from "../actions/types";

export default (state = { posts:[], isLoading: false }, action) => {
    switch (action.type) {
        case NEW_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts],
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !==  action.payload)
            }
        default:
            return state
    }
}