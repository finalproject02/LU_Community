import {GET_APPLICATIONS, LOADING, LOADED, CHECKED_SSC_RESULT, CHECKED_HSC_RESULT, GET_APPLICATION} from "./types";
import * as api from "../api";
import {getError} from "./errors";
import {fetchApplication} from "../api";

export const getAllApplication = () => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data : { applications } } = await api.fetchAllApplication();
        dispatch({
            type: GET_APPLICATIONS,
            payload: applications
        })
        dispatch({ type: LOADED })
    } catch (error) {
        getError(error.response.data, error.response.status)
    }
}

export const getApplication = (id) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data } = await fetchApplication(id);
        dispatch({
            type: GET_APPLICATION,
            payload: data.application
        })
        dispatch({ type: LOADED })
    } catch (error) {
        getError(error.response.data, error.response.status)
    }
}

export const checkSSCResult = (id) => async (dispatch) => {
    try {
        dispatch({ type: LOADING });
        const {data} = await api.checkSscCredential(id);
        dispatch({
            type: CHECKED_SSC_RESULT,
            payload: data
        })
        dispatch({ type: LOADED })
    } catch (error) {
        getError (error.response.data, error.response.status)
    }
}

export const checkHSCResult = (id) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data } = await api.checkHscCredential(id);
        dispatch({
            type: CHECKED_HSC_RESULT,
            payload: data
        })
        dispatch({ type: LOADED })
    } catch (error) {
        getError (error.response.data, error.response.status)
    }
}