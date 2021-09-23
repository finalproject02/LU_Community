import { CLEAR_ERRORS, GET_ERRORS } from "./types";

export const returnErrors = (message, status, id = null) => {
    return {
        type: GET_ERRORS,
        payload: { message, status, id }
    }
}
export const clearError = () => {
    return {
        type: CLEAR_ERRORS
    }
}