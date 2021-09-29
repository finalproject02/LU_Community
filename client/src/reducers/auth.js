import {
    CREATE_ACCOUNT_SUCCESS,
    LOGIN_ACCOUNT_SUCCESS,
    CREATE_ACCOUNT_FAILED,
    LOGIN_ACCOUNT_FAILED,
    LOGOUT_SUCCESS,
    CURRENT_USER,
    LOADING,
    LOADED, UPDATE_INFO
} from "../actions/types";

export default (state = { token: localStorage.getItem('token'), currentUser: null, isAuthenticated: false, isLoading: false }, action) => {
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
                isAuthenticated: true,
                isLoading: false
            };
        case UPDATE_INFO:
            return {
                ...state,
                currentUser: action.payload,
                isAuthenticated: true
            }
        default:
            return state
    }
}