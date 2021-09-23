import { combineReducers } from "redux";
import application from './applications';
import errors from './errors';
import files from "./files";

export default combineReducers({
    application,
    errors,
    files
})