import {
    FOLLOWINGS,
    FOLLOWERS, SEARCHING,
    LOADING, LOADED,
    CONNECT, DISCONNECT,
    ACCEPT_CONNECTION_REQUEST, GET_ERRORS
} from "../actions/types";
import * as api from '../api';


export const searchPeople = (searchKey) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data } = await api.searchUser(getState, searchKey)
        dispatch({
            type: SEARCHING,
            payload: data
        });
        dispatch({ type: LOADED });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const Connect = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type:LOADING });
        const { data : { message, user } } = await api.connect(getState, id);
        dispatch({
            type: CONNECT,
            payload: { message, user }
        })
        dispatch({ type:LOADED});
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const Disconnect = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type:LOADING });
        const { data : { message, user } } = await api.disconnect(getState, id);
        dispatch({
            type: DISCONNECT,
            payload: { message, user }
        })
        dispatch({ type:LOADED});
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const Accept_Connection_Request = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type:LOADING });
        const { data : { message, user } } = await api.accept_connection_request(getState, id);
        dispatch({
            type: ACCEPT_CONNECTION_REQUEST,
            payload: { message, user }
        })
        dispatch({ type:LOADED});
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const followings = () =>  async ( dispatch, getState ) => {
    try {
        dispatch({ type:LOADING });
        const { data } = await api.fetchFollowings(getState)
        dispatch({
            type: FOLLOWINGS,
            payload: data
        })
        dispatch({ type:LOADED});
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const followers = () =>  async ( dispatch, getState ) => {
    try {
        dispatch({ type:LOADING });
        const { data } = await api.fetchFollowers(getState)
        dispatch({
            type: FOLLOWERS,
            payload: data
        })
        dispatch({ type:LOADED});
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}