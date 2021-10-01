import { NEW_POST, POSTS, LOADED, LOADING, DELETE_POST } from "./types";
import { returnErrors } from "./erros";
import * as api from '../api'
import data from "bootstrap/js/src/dom/data";

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
        returnErrors(error.response.data, error.response.status)
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
        returnErrors(error.response.data, error.response.status)
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
        returnErrors(error.response.data, error.response.status)
    }
}