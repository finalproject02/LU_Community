import { FOLLOW, UNFOLLOW,
    ALL_USERS, FOLLOWINGS,
    FOLLOWERS, SEARCHING,
    LOADING, LOADED
} from "../actions/types";
import * as api from '../api';
import {returnErrors} from "./erros";

export const ALlUser = () => async (dispatch, getState) => {
    try {
       dispatch({ type: LOADING });
       const { data : { users } } = await api.fetchAllUsers(getState)
       dispatch({
           type: ALL_USERS,
           payload: users
       });
       dispatch({ type: LOADED })
    } catch (error) {
        returnErrors(error.response.data, error.response.status)
    }
}

export const searchPeople = (searchKey) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data : { users } } = await api.searchUser(getState, searchKey)
        dispatch({
            type: SEARCHING,
            payload: users
        });
        dispatch({ type: LOADED });
    } catch (error) {
        returnErrors(error.response.data, error.response.status)
    }
}

export const follow = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type:LOADING });
        const { data } = await api.followUser(getState, id);
        dispatch({
            type: FOLLOW,
            payload: data
        })
        dispatch({ type:LOADED});
    } catch (error) {
        returnErrors(error.response.data, error.response.status)
    }
}

export const unfollow = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type:LOADING });
        const { data } = await api.unfollowUser(getState, id);
        dispatch({
            type: UNFOLLOW,
            payload: data
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