import {
    CREATE_ACCOUNT_SUCCESS,
    LOGIN_ACCOUNT_SUCCESS,
    CREATE_ACCOUNT_FAILED,
    LOGIN_ACCOUNT_FAILED,
    LOGOUT_SUCCESS,
    CURRENT_USER,
    LOADING,
    LOADED,
    UPDATE_INFO
} from "./types";
import * as api from '../api';
import {returnErrors} from './erros';


export const SignUp = (userData) => async (dispatch) => {
    try {
        dispatch({ type: LOADING });
        const { data : { user, token } } = await api.createAccount(userData);
        dispatch({
            type: CREATE_ACCOUNT_SUCCESS,
            payload: { user, token }
        });
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch({type: CREATE_ACCOUNT_FAILED});
        returnErrors(error.response.message, error.response.status)
    }
}

export const SignIn = (userData)  => async (dispatch) => {
    try {
        dispatch({ type: LOADING });
        const { data : { user, token } } = await api.loginAccount(userData);
        dispatch({
            type: LOGIN_ACCOUNT_SUCCESS,
            payload: { user, token }
        });
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch({ type: LOGIN_ACCOUNT_FAILED });
        returnErrors(error.response.message, error.response.status)
    }
}

export const Logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}
export const LoadingCurrentUser = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const {data: { user }} = await api.getCurrentUser(getState);
        dispatch({
            type: CURRENT_USER,
            payload: user
        });
        dispatch({ type: LOADED })
    } catch (error) {
        returnErrors(error.response.data, error.response.status)
    }
}
export const tokenConfig = (getState) => {
    const token = getState().auth.token;

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    if (token) {
        config.headers['authenticate-token'] = token
    }
    return config
}

export const updateProfile = (userData) => async (dispatch, getState) => {

    console.log('first token: ', getState)
    try {
        dispatch({ type: LOADING });
        const {data: { user }} = await api.updateUserData(getState, userData);
        dispatch({
            type: UPDATE_INFO,
            payload: user
        })
        dispatch({ type: LOADED });
    } catch (error) {
        returnErrors(error.response.data, error.response.status)
    }
}