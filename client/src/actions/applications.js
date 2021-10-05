import { NEW_APPLICATION, LOADED, LOADING } from "./types";
import { returnErrors } from "./erros";
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
        returnErrors(
            error.response.data,
            error.response.status
        )
    }
}