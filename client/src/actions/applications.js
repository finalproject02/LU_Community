import {
    LOADED,
    LOADING,
    ADMISSION_FIRST_STEP,
    ADMISSION_SECOND_STEP,
    APPROVE_ACCOUNT,
    ADMISSION_FINAL_STEP,
    CREATE_REFERENCE,
    PAYMENT,
    APPROVE_ADMISSION,
    CONFIRM_ADMISSION,
    CHECKED_HSC_RESULT,
    CHECKED_SSC_RESULT,
    DELETE_APPLICATIONS,
    ACCEPT_APPLICATION,
    REJECT_APPLICATION,
    APPROVE_ADMISSION_FEE,
    APPROVE_ACCOUNT_ADMISSION
} from "./types";
import * as API from "../api";
import {getErrors} from "./errors";
import ShowToast from "../services/ShowToast";
import {Logout} from "./auth";


export const ApplicationFirstStep = (applicantData, history) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        await API.admissionFirstStep(applicantData, getState)
        history.push('/secondStep');
        dispatch({ type: ADMISSION_FIRST_STEP })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'ADMISSION_FIRST_STEP'));
    }
}

export const ApplicationSecondStep = (applicantData, history) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        await API.admissionSecondStep(applicantData, getState)
        history.push('/finalStep');
        dispatch({ type: ADMISSION_SECOND_STEP })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'ADMISSION_SECOND_STEP'));
    }
}

export const ApplicationFinalStep = (applicantData, history) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data  : { application }} = await API.admissionFinalStep(applicantData, getState);
        ShowToast(1, 'Form fill up successfully complete. we will contact very soon');
        dispatch(Logout())
        dispatch({
            type: ADMISSION_FINAL_STEP,
            payload: application
        })
        history.push('/')
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'ADMISSION_FINAL_STEP'));
    }
}

export const CreateReference = (data) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data  : { message }} = await API.createReference(data)
        dispatch({
            type: CREATE_REFERENCE,
            payload: message
        })
        ShowToast(1, message);
        setTimeout(() => {
            window.location.reload();
        }, 1000)
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

export const ApproveAccount = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { message } = await API.approveAccount(getState, id);
        ShowToast(1, message)
        dispatch({
            type: APPROVE_ACCOUNT,
            payload: id
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'APPROVE_ACCOUNT_ERROR'));
    }
}


export const AdmissionFeeApprove = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { message } = await API.approveAdmissionFee(getState, id)
        ShowToast(1, message)
        dispatch({
            type: APPROVE_ADMISSION_FEE,
            payload: id
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'APPROVE_ADMISSION_FEE_ERROR'));
    }
}

export const AccountAdmissionFeeApprove = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { message } = await API.approveAccountAdmission(getState, id)
        ShowToast(1, message)
        dispatch({
            type: APPROVE_ACCOUNT_ADMISSION,
            payload: id
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'APPROVE_ACCOUNT_ADMISSION_ERROR'));
    }
}

export const ConfirmAdmission = (id, data) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING });

        await API.confirmAdmission(getState, id, data);

        dispatch({
            type: CONFIRM_ADMISSION,
            payload: id
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'CONFIRM_ADMISSION_ERROR'));
    }
}

export const checkSSCResult = (id) => async (dispatch) => {
    try {
        dispatch({ type: LOADING });
        const {data: { message }} = await API.checkSscCredential(id);
        dispatch({
            type: CHECKED_SSC_RESULT,
            payload: message
        })
        window.location.reload();
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'Verify_error'))
    }
}

export const checkHSCResult = (id) => async (dispatch) => {
    try {
        dispatch({ type: LOADING })
        const { data: { message } } = await API.checkHscCredential(id);
        window.location.reload();
        dispatch({
            type: CHECKED_HSC_RESULT,
            payload: message
        });
        window.location.reload();
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'Verify_error'))
    }
}

export const AcceptAdmission = (id, history) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        await API.acceptAdmission(id, getState);
        dispatch({
            type: ACCEPT_APPLICATION,
            payload: id
        });
        history.push('/dashboard')
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'ACCEPT_APPLICATION_ERROR'))
    }
}

export const RejectAdmission = (id, history) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        await API.rejectAdmission(id, getState)
        dispatch({
            type: REJECT_APPLICATION,
            payload: id
        });
        history.push('/dashboard')
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'REJECT_APPLICATION_ERROR'))
    }
}