import {
    CREATE_ACCOUNT_SUCCESS,
    LOGIN_ACCOUNT_SUCCESS,
    CREATE_ACCOUNT_FAILED,
    LOGIN_ACCOUNT_FAILED,
    LOGOUT_SUCCESS,
    CURRENT_USER, CHANGE_PASSWORD,
    LOADING, GET_ERRORS,
    LOADED, UPDATE_INFO,
    ACCEPT_CONNECTION_REQUEST,
    CONNECT, DISCONNECT, PEER,
    DELETE_EDUCATION_BACKGROUND, DELETE_JOB,
    CLUB_FOLLOW, CLUB_UNFOLLOW, MEMBER_REQUEST,
    CANCEL_REQUEST, ACCEPT_REQUEST, REJECT_REQUEST,

} from "../actions/types";

export default (state = { token: localStorage.getItem('token'), currentUser: null, isAuthenticated: false, isLoading: false, message: '' }, action) => {
    switch (action.type) {
        case CREATE_ACCOUNT_SUCCESS:
        case LOGIN_ACCOUNT_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('id', action.payload.user._id);
            return {
                ...state,
                token: action.payload.token,
                currentUser: action.payload.user,
                isAuthenticated: true,
                isLoading: false
            };
        case CREATE_ACCOUNT_FAILED:
        case LOGIN_ACCOUNT_FAILED:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            localStorage.removeItem('id');
            return {
                ...state,
                token: null,
                currentUser: null,
                isAuthenticated: false,
                isLoading: false
            };
        case CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuthenticated: true,
                isLoading: false,
            };
        case LOADING:
            return {
                ...state,
                isAuthenticated: false,
                isLoading: true,
            }
        case LOADED:
            return {
                ...state,
                isLoading: false
            };
        case UPDATE_INFO:
        case CLUB_FOLLOW:
        case CLUB_UNFOLLOW:
        case MEMBER_REQUEST:
        case CANCEL_REQUEST:
        case PEER:
        case CHANGE_PASSWORD:
            return {
                ...state,
                currentUser: action.payload,
                isAuthenticated: true
            }
        case GET_ERRORS:
            return {
                ...state,
                isAuthenticated: false,
                message: action.payload.message
            }
        case ACCEPT_CONNECTION_REQUEST:
        case CONNECT:
        case DISCONNECT:
            return {
                ...state,
                currentUser: action.payload
            };
        case DELETE_EDUCATION_BACKGROUND:
        case DELETE_JOB:
            return {
                ...state,
                currentUser: action.payload
            }
        case ACCEPT_REQUEST:
        case REJECT_REQUEST:
            return {
                ...state,
                currentUser: action.payload.creator
            }
        default:
            return state
    }
}