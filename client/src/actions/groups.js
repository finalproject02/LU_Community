import * as api from '../api'
import {LOADING, LOADED, CREATE_GROUP, ALL_GROUP, ALL_CLUB} from "./types";
import {getErrors} from "./errors";
import ShowToast from "../services/ShowToast";

export const CreateNewGroup = (clubData, finalClose) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const {data : { club, message }} = await api.createGroup(clubData, getState);
        ShowToast(1, message);
        finalClose()
        dispatch({
            type: CREATE_GROUP,
            payload: club
        });
        dispatch({
            type: LOADED
        })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'GROUP_ERROR'))
    }
}

export const ALlGroup = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data: { groups } } = await api.allGroup(getState)
        dispatch({
            type: ALL_GROUP,
            payload: groups
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'ALL_GROUP_ERROR'))
    }
}