import { CURRENT_CHAT, PEER, SEND_MESSAGE, MESSAGES, LOADING, LOADED, REAL_TIME_MESSAGE } from "./types";
import * as api from '../api'
import {getErrors} from "./errors";

export const Peer = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data: { user } } = await api.peers(getState, id);
        dispatch({
            type: PEER,
            payload: user
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'PEER_ERROR'))
    }
}

export const SendMessage = (data) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data: { message } } = await api.sendMessage(getState,data)
        dispatch({
            type: SEND_MESSAGE,
            payload: message
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'SEND_MESSAGE_ERROR'))
    }
}

export const RealTimeMessage = (data) => async dispatch =>{
    try {
        dispatch({
            type: REAL_TIME_MESSAGE,
            payload: data
        })
    } catch (error) {
        // dispatch(getErrors(error.response.data, 'RealTime_MESSAGE_ERROR'))
    }

}

export const Messages = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data: { messages } } = await api.getMessage(getState)
        dispatch({
            type: MESSAGES,
            payload: messages
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'GET_MESSAGE_ERROR'))
    }
}

export const setCurrentChat = (id) => async (dispatch) => {
    dispatch({
        type: CURRENT_CHAT,
        payload: id

    })
}