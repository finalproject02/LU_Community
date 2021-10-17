import {
    GET_APPLICATIONS,
    LOADING,
    LOADED,
    CHECKED_SSC_RESULT,
    CHECKED_HSC_RESULT,
    GET_APPLICATION,
    DELETE_APPLICATIONS
} from "./types";
import * as api from "../api";
import {getErrors} from "./errors";

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
        dispatch(getErrors(error.response.data, 'ALL_Application_error'))
    }
}

export const getApplication = (id) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data } = await api.fetchApplication(id);
        dispatch({
            type: GET_APPLICATION,
            payload: data.application
        })
        dispatch({ type: LOADED })
    } catch (error) {
        getErrors(error.response.data, error.response.status)
    }
}

export const DeleteApplication = (id, history) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        await api.deleteApplication(id)
        dispatch({
            type: DELETE_APPLICATIONS,
            payload: id
        })
        history.push('/admissionRequest')
        dispatch({ type: LOADED })
    } catch (error) {
        getErrors(error.response.data, error.response.status)
    }
}

export const checkSSCResult = (id) => async (dispatch) => {
    try {
        dispatch({ type: LOADING });
        const {data: { message }} = await api.checkSscCredential(id);
        setTimeout(() => {
            window.location.reload();
        }, 3000)
        dispatch({
            type: CHECKED_SSC_RESULT,
            payload: message
        })
        dispatch({ type: LOADED })
    } catch (error) {
       dispatch(getErrors(error.response.data, 'Verify_error'))
    }
}

export const checkHSCResult = (id) => async (dispatch) => {
    try {

        dispatch({ type: LOADING })
        const { data: { message } } = await api.checkHscCredential(id);
        setTimeout(() => {
            window.location.reload();
        }, 3000)
        dispatch({
            type: CHECKED_HSC_RESULT,
            payload: message
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'Verify_error'))
    }
}