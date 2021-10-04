import {NEW_APPLICATION, LOADED, LOADING, GET_ERRORS} from "./types";
import * as API from "../api";

export const createApplication = (applicantData) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data  : { application }} = await API.newAdmission(applicantData);
        dispatch({
            type: NEW_APPLICATION,
            payload: application
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}