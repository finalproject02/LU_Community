import axios from "axios";
import {tokenConfig} from "../actions/auth";

export const newAdmission = (applicantData) => axios.post('/api/onlineAdmission', applicantData);
export const fileUpload = (fileData) => axios.post('/api/files/storage', fileData);
export const createAccount = (userData) => axios.post('/api/auth/createAccount', userData);
export const loginAccount = (userData) => axios.post('/api/auth/loginAccount', userData);
export const getCurrentUser = (getState) => axios.get('/api/user', tokenConfig(getState));


export const fetchAllUsers = (getState) => axios.get('/api/AllUsers', tokenConfig(getState));
export const searchUser = (getState, searchKey) => axios.get(`/api/search?searchKey=${searchKey}`, tokenConfig(getState));
export const updateUserData = (getState, userData) => axios.patch(`/api/updateUser`, userData, tokenConfig(getState));
export const followUser = (getState, userId) => axios.patch(`/api/user/${userId}/follow`, tokenConfig(getState));
export const unfollowUser = (getState, userId) => axios.patch(`/api/user/${userId}/unfollow`, tokenConfig(getState));
export const fetchFollowers = (getState) => axios.get('/api/followers', tokenConfig(getState));
export const fetchFollowings= (getState) => axios.get('/api/followings', tokenConfig(getState));
