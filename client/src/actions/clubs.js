import * as api from '../api'
import {LOADING, LOADED, CREATE_CLUB, ALL_CLUB} from "./types";
import {getErrors} from "./errors";
import ShowToast from "../services/ShowToast";

export const CreateNewClub = (clubData, handleClose) => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const {data : { club, message }} = await api.createClub(clubData, getState);
        handleClose(true);
        ShowToast(1, message)
        dispatch({
            type: CREATE_CLUB,
            payload: club
        });
        dispatch({
            type: LOADED
        })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'CLUB_ERROR'))
    }
}

export const ALlClub = () => async (dispatch, getState) => {
    try {
        dispatch({ type: LOADING })
        const { data: { clubs } } = await api.allClub(getState);
        dispatch({
            type: ALL_CLUB,
            payload: clubs
        })
        dispatch({ type: LOADED })
    } catch (error) {
        dispatch(getErrors(error.response.data, 'ALL_CLUB_ERROR'))
    }
}