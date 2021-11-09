import {CLEAR_ERRORS, GET_ERRORS} from "../actions/types";

export default (state = { message: null, Types: null, field: null }, action) => {
    switch (action.type) {
        case GET_ERRORS:
            return {
                ...state,
                message: action.payload.message.message,
                field: action.payload.message.field,
                Types: action.payload.Types
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                message: null,
                Types: null
            }
        default:
            return state
    }
}