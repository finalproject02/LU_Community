import { CLEAR_ERRORS, GET_ERRORS } from "./types";

export const returnErrors = (message, status) => {
    return {
        type: GET_ERRORS,
        payload: { message, status }
    }
}
export const clearError = () => {
    return {
        type: CLEAR_ERRORS
    }
}