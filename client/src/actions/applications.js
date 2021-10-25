import {
    LOADED, LOADING,
    ADMISSION_FIRST_STEP,
    ADMISSION_SECOND_STEP,
    ADMISSION_FINAL_STEP, CREATE_REFERENCE
} from "./types";
import * as API from "../api";
import {getErrors} from "./errors";
import ShowToast from "../services/ShowToast";


export const ApplicationFirstStep = (applicantData, history) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        await API.admissionFirstStep(applicantData)
        history.push('/secondStep');
        dispatch({ type: ADMISSION_FIRST_STEP })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'ADMISSION_FIRST_STEP'));
    }
}

export const ApplicationSecondStep = (applicantData, history) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        await API.admissionSecondStep(applicantData)
        history.push('/finalStep');
        dispatch({ type: ADMISSION_SECOND_STEP })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'ADMISSION_SECOND_STEP'));
    }
}

export const ApplicationFinalStep = (applicantData, history) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data  : { application }} = await API.admissionFinalStep(applicantData);
        dispatch({
            type: ADMISSION_FINAL_STEP,
            payload: application
        })
        ShowToast(1, 'Application successfully completed. We will with you contact very soon.')
        history.push('/')
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'ADMISSION_FINAL_STEP'));
    }
}

export const CreateReference = (data) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data  : { message }} = await API.createReference(data);
        dispatch({
            type: CREATE_REFERENCE,
            payload: message
        })
        ShowToast(1, message)
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'CREATE_REFERENCE_ERROR'));
    }
}