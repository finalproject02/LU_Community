import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

export default (state = { message: {}, status: null}, action) => {
    switch (action.type) {
        case GET_ERRORS:
            return {
                ...state,
                message: action.payload.message,
                status: action.payload.status,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                message: {},
                status: null,
            }
        default:
            return state
    }
}