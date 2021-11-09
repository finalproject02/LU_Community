import * as api from '../api'
import {LOADING, LOADED, CREATE_CLUB, ALL_CLUB, CLUB_UPDATE, CLUB_FOLLOW, CLUB_UNFOLLOW, CLUB_POST} from "./types";
import {getErrors} from "./errors";
import ShowToast from "../services/ShowToast";

export const CreateNewClub = (clubData, handleClose) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const {data : { club, message }} = await api.createClub(clubData, getState);
        handleClose(true);
        ShowToast(1, message)
        dispatch({
            type: CREATE_CLUB,
            payload: club
        });
        dispatch({
            type: LOADED
        })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'CLUB_ERROR'))
    }
}

export const ALlClub = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data: { clubs } } = await api.allClub(getState);
        dispatch({
            type: ALL_CLUB,
            payload: clubs
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'ALL_CLUB_ERROR'))
    }
}

export const ClubUpdate = (clubData, id) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data: { club } } = await api.clubUpdate(getState, clubData, id)
        dispatch({
            type: CLUB_UPDATE,
            payload: club
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'CLUB_UPDATE'))
    }
}

export const ClubFollow = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data: { user } } = await api.clubFollow(getState, id)
        dispatch({
            type: CLUB_FOLLOW,
            payload: user
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'CLUB_FOLLOW'))
    }
}

export const ClubUnfollow = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data: { user } } = await api.clubUnfollow(getState, id)
        dispatch({
            type: CLUB_UNFOLLOW,
            payload: user
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'CLUB_UNFOLLOW'))
    }
}

export const ClubPost = (id, postData) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data: { post } } = await api.clubPost(getState,postData, id)
        dispatch({
            type: CLUB_POST,
            payload: post
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'CLUB_POST_ERROR'))
    }
}