import {
    LOADED, LOADING,
    ADMISSION_FIRST_STEP,
    ADMISSION_SECOND_STEP,
    ADMISSION_FINAL_STEP, CREATE_REFERENCE, PAYMENT, APPROVE_ADMISSION
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

export const PPayment = (data) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data  : { message }} = await API.payment(data)
        dispatch({
            type: PAYMENT,
            payload: message
        })
        ShowToast(1, message)
        setTimeout(() => {
            window.location.reload();
        }, 500)
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'PAYMENT_ERROR'));
    }
}

export const ApproveAdmission = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        await API.approveAdmission(getState, id)
        dispatch({
            type: APPROVE_ADMISSION,
            payload: id
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'APPROVE_ADMISSION_ERROR'));
    }
}