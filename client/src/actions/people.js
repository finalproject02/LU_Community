import * as api from '../api'
import {LOADING, LOADED, SUGGESTIONS, ALL_USERS} from "./types";
import {returnErrors} from "./erros";

export const People = () => async (dispatch, getState) => {
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


export const Suggestions = (keyWord) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });
        const { data : { suggestions } } = await api.suggestions(keyWord, getState);
        dispatch({
            type: SUGGESTIONS,
            payload: suggestions
        })
        dispatch({ type: LOADED });
    } catch (error) {
        returnErrors(error.response.data, error.response.status)
    }
}