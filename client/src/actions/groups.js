import * as api from '../api'
import {
    LOADING,
    LOADED,
    CREATE_GROUP,
    ALL_GROUP,
    GROUP_UPDATE,
    MEMBER_REQUEST, GROUP_POST,
    CANCEL_REQUEST, REJECT_REQUEST, ACCEPT_REQUEST
} from "./types";
import {getErrors} from "./errors";
import ShowToast from "../services/ShowToast";

export const CreateNewGroup = (clubData, finalClose) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const {data : { club, message }} = await api.createGroup(clubData, getState);
        ShowToast(1, message);
        finalClose()
        dispatch({
            type: CREATE_GROUP,
            payload: club
        });
        dispatch({
            type: LOADED
        })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'GROUP_ERROR'))
    }
}

export const ALlGroup = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data: { groups } } = await api.allGroup(getState)
        dispatch({
            type: ALL_GROUP,
            payload: groups
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'ALL_GROUP_ERROR'))
    }
}

export const GroupUpdate = (groupData, id) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data: { group } } = await api.groupUpdate(getState, groupData, id)
        dispatch({
            type: GROUP_UPDATE,
            payload: group
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'GROUP_UPDATE_ERROR'))
    }
}

export const MemberRequest = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data: { user } } = await api.member_request(getState, id)
        dispatch({
            type: MEMBER_REQUEST,
            payload: user
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'MEMBER_REQUEST_ERROR'))
    }
}

export const CancelRequest = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data: { user } } = await api.cancel_request(getState, id)
        dispatch({
            type: CANCEL_REQUEST,
            payload: user
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'CANCEL_REQUEST_ERROR'))
    }
}

export const RejectRequest = (id, userId) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data: { group } } = await api.reject_request(getState, id, userId)
        dispatch({
            type: REJECT_REQUEST,
            payload: group
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'REJECT_REQUEST_ERROR'))
    }
}

export const AcceptRequest = (id, userId) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data: { group } } = await api.accept_request(getState, id, userId)
        dispatch({
            type: ACCEPT_REQUEST,
            payload: group
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'ACCEPT_REQUEST_ERROR'))
    }
}

export const GroupPost = (id, postData) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data: { post } } = await api.groupPost(getState, postData, id)
        dispatch({
            type: GROUP_POST,
            payload: post
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'GROUP_POST_ERROR'))
    }
}