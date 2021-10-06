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
export const deleteEducationBackground= (getState, degree) => axios.delete(`/api/educationBackground/${degree}`, tokenConfig(getState));
export const deleteJob= (getState, company_name) => axios.delete(`/api/jobs/${company_name}`, tokenConfig(getState));
export const connect = (getState, userId) => axios.patch(`/api/user/${userId}/connect`, { data: ''},  tokenConfig(getState));
export const disconnect = (getState, userId) => axios.patch(`/api/user/${userId}/disconnect`, {data: ''}, tokenConfig(getState));
export const accept_connection_request = (getState, userId) => axios.patch(`/api/user/${userId}/accept_connection_request`, {data: ''}, tokenConfig(getState));
export const fetchFollowers = (getState) => axios.get('/api/followers', tokenConfig(getState));
export const fetchFollowings= (getState) => axios.get('/api/followings', tokenConfig(getState));
export const suggestions = (keyWord, getState) => axios.get(`/api/suggestions/${keyWord}`, tokenConfig(getState))

export const newPost = (postData, getState) => axios.post('/api/posts', postData, tokenConfig(getState));
export const fetchPosts = (getState) => axios.get('/api/posts', tokenConfig(getState));
export const removePosts = (getState, id) => axios.delete(`/api/posts/${id}`, tokenConfig(getState));
export const likeAndDislike = (getState, id) => axios.patch(`/api/posts/${id}/likeAndDislike`, {data: ''},tokenConfig(getState));
export const comment = (getState, id, commentContent) => axios.patch(`/api/posts/${id}/comments`, commentContent, tokenConfig(getState));
export const postNotifications = (getState) => axios.get(`/api/posts/postNotifications`, tokenConfig(getState));
export const showPostNotifications = (getState) => axios.patch(`/api/posts/showPostNotifications`,{data: ''}, tokenConfig(getState));