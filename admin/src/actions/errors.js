import { GET_ERRORS, CLEAR_ERROR } from "./types";

export const getError = (message, status, id = null) => dispatch => {
   return {
       type: GET_ERRORS,
       payload: { message, status, id }
   }
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERROR
    }
}