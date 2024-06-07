import { CLEAR_ERRORS, GET_ERRORS } from "./types";

export const clearError = () => {
    return {
        type: CLEAR_ERRORS
    }
}

export const getErrors = (message, Types) => {
    return {
        type: GET_ERRORS,
        payload: { message, Types }
    }
}
