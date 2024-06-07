import {
    FOLLOWINGS, FOLLOWERS,
    LOADING, LOADED, GET_ERRORS
} from "../actions/types";

import * as api from '../api';


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

