import {SEND_MESSAGE, MESSAGES, LOADING, LOADED, REAL_TIME_MESSAGE} from "../actions/types";

export default (state = { messages: [], isLoading: false }, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
        case REAL_TIME_MESSAGE:
            return {
                ...state,
                isLoading: false,
                messages: [action.payload, ...state.messages]
            }
        case MESSAGES:
            return {
                ...state,
                isLoading: false,
                messages: action.payload
            }
        case LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case LOADED:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
}