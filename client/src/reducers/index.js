import { combineReducers } from "redux";
import application from './applications';
import files from "./files";
import auth from './auth';
import users from './users';
import posts from "./posts";
import people from "./people";
import clubs from "./clubs";
import groups from "./groups";
import errors from "./errors";
import messages from './messages';
import departments from "./departments";

export default combineReducers({
    application, files, auth, departments,
    users, posts, people, clubs, groups, errors, messages
})