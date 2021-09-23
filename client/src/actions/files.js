import { LOADING, FILE_FAIL, FILE_UPLOAD } from "./types";
import * as API from '../api'

export const uploadFile = (fileData) => async (dispatch) => {
    try {
        dispatch({ type: LOADING });
        const { data } = await API.fileUpload(fileData)
        dispatch({
            type: FILE_UPLOAD,
            payload: data
        })

    } catch (error) {
        dispatch({type: FILE_FAIL})
    }
}
