import {SEND_MESSAGE, MESSAGES, LOADING, LOADED, REAL_TIME_MESSAGE, CURRENT_CHAT} from "../actions/types";

export default (state = { messages: [], isLoading: false, current_chat: null }, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
        case REAL_TIME_MESSAGE:
            return {
                ...state,
                isLoading: false,
                messages: [...state.messages, action.payload]
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
        case CURRENT_CHAT:
            return {
                ...state,
                isLoading: false,
                current_chat: action.payload
            }
        default:
            return state
    }
}