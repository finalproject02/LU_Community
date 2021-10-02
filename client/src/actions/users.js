import {
    FOLLOWINGS,
    FOLLOWERS, SEARCHING,
    LOADING, LOADED,
    CONNECT,DISCONNECT,
    ACCEPT_CONNECTION_REQUEST
} from "../actions/types";
import * as api from '../api';
import {returnErrors} from "./erros";



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
        returnErrors(error.response.data, error.response.status)
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
        returnErrors(error.response.data, error.response.status)
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
        returnErrors(error.response.data, error.response.status)
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
        returnErrors(error.response.data, error.response.status)
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
        returnErrors(error.response.data, error.response.status)
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
        returnErrors(error.response.data, error.response.status)
    }
}