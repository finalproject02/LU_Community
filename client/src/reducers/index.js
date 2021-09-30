import { combineReducers } from "redux";
import application from './applications';
import errors from './errors';
import files from "./files";
import auth from './auth';
import users from './users';
import posts from "./posts";

export default combineReducers({
    application,
    errors,
    files,
    auth,
    users,
    posts
})