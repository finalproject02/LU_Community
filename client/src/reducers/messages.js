import {SEND_MESSAGE, MESSAGES, LOADING, LOADED} from "../actions/types";

export default (state = { messages: [], isLoading: false }, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
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
        default:
            return state
    }
}