import {
    CREATE_ACCOUNT_SUCCESS,
    LOGIN_ACCOUNT_SUCCESS,
    LOGOUT_SUCCESS, CURRENT_USER,
    LOADING, LOADED, UPDATE_INFO,
    SEARCHING, CONNECT,
    DISCONNECT, ACCEPT_CONNECTION_REQUEST, DELETE_EDUCATION_BACKGROUND, DELETE_JOB
} from "./types";
import * as api from '../api';
import {getErrors} from "./errors";


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
       dispatch(getErrors(error.response.data, 'SIGNUP_ERROR'));
       console.log(error)

    }
}

export const SignIn = (userData, history)  => async (dispatch) => {
    try {
        dispatch({ type: LOADING });
        const { data : { user, token } } = await api.loginAccount(userData);
        dispatch({
            type: LOGIN_ACCOUNT_SUCCESS,
            payload: { user, token }
        });
        history.push('/dashboard')
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'SIGN_IN_ERROR'))
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
       console.log('error')
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

    try {
        dispatch({ type: LOADING });
        const {data: { user }} = await api.updateUserData(getState, userData);
        dispatch({
            type: UPDATE_INFO,
            payload: user
        })
        dispatch({ type: LOADED });
    } catch (error) {
        getErrors(error.response.data, 'UPDATE_ERROR')
    }
}

export const search = (searchKey) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data } = await api.searchUser(getState, searchKey)
        dispatch({
            type: SEARCHING,
            payload: data
        });
        dispatch({ type: LOADED });
    } catch (error) {
        getErrors(error.response.data, 'SEARCH_ERROR')
    }
}

export const Connect = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type:LOADING });
        const { data : {user}  } = await api.connect(getState, id);
        dispatch({
            type: CONNECT,
            payload: user
        })
        dispatch({ type:LOADED});
    } catch (error) {
        getErrors(error.response.data, 'CONNECT_ERROR')
    }
}

export const Disconnect = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type:LOADING });
        const { data : { user } } = await api.disconnect(getState, id);
        dispatch({
            type: DISCONNECT,
            payload: user
        })
        dispatch({ type:LOADED});
    } catch (error) {
       getErrors(error.response.data, 'DISCONNECT_ERROR')
    }
}

export const Accept_Connection_Request = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type:LOADING });
        const { data : { user } } = await api.accept_connection_request(getState, id);
        dispatch({
            type: ACCEPT_CONNECTION_REQUEST,
            payload: user
        })
        dispatch({ type:LOADED});
    } catch (error) {
        getErrors(error.response.data, 'ACCEPT_ERROR')
    }
}

export const DeleteEducationBackground = (degree) => async (dispatch, getState) => {
    try {
       dispatch({ type: LOADING })
       const { data : { user }} = await api.deleteEducationBackground(getState, degree);
       dispatch({
           type: DELETE_EDUCATION_BACKGROUND,
           payload: user
       })
       dispatch({ type: LOADED })
    } catch (error) {
        getErrors(error.response.data, 'DELETE_EDUCATION_ERROR')
    }
}

export const DeleteJob = (company_name) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data : { user }} = await api.deleteJob(getState, company_name);
        dispatch({
            type: DELETE_JOB,
            payload: user
        })
        dispatch({ type: LOADED })
    } catch (error) {
        getErrors(error.response.data, 'DELETE_JOB_ERROR')
    }
}