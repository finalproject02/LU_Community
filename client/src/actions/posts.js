import {
    NEW_POST,
    POSTS,
    LOADED,
    LOADING,
    DELETE_POST,
    LIKE_AND_DISLIKE,
    COMMENT,
    NOTIFICATIONS,
    SHOW_NOTIFICATIONS, GET_ERRORS
} from "./types";
import * as api from '../api'

export const CreatePost = (postData) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const {data : { post }} = await api.newPost(postData, getState);
        dispatch({
            type: NEW_POST,
            payload: post
        });
        dispatch({
            type: LOADED
        })
    } catch (error) {
       console.log(error)
    }
}

export const getCurrentUserPosts = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data : { posts } } = await api.fetchPosts(getState);
        dispatch({
            type: POSTS,
            payload: posts,
        });
        dispatch({ type: LOADED })
    } catch (error) {
        console.log('error')
    }
}

export const DeletePosts = (id) => async (dispatch, getState) => {
    try {
        await api.removePosts(getState, id)
        dispatch({
            type: DELETE_POST,
            payload: id,
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const LikeAndDislike = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data : { post } } = await api.likeAndDislike(getState, id);
        dispatch({
            type: LIKE_AND_DISLIKE,
            payload: post
        });
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const Comment = (id, commentContent) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data : { post } } = await api.comment(getState, id, commentContent)
        dispatch({
            type: COMMENT,
            payload: post
        });
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const Notifications = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data: { notifications } } = await api.notifications(getState)
        dispatch({
           type: NOTIFICATIONS,
           payload: notifications
        })
        dispatch({ type: LOADED })
    } catch (error) {
        console.log('error')
    }
}

export const ShowNotifications = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data: { notifications } } = await api.showNotifications(getState)
        dispatch({
            type: SHOW_NOTIFICATIONS,
            payload: notifications
        })
        dispatch({ type: LOADED })
    } catch (error) {
        console.log('error')
    }
}