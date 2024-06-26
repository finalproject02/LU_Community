import axios from "axios";
import {tokenConfig} from "../actions/auth";

export const admissionFirstStep = (applicantData, getState) => axios.patch('/api/admissionFirstStep', applicantData, tokenConfig(getState));
export const admissionSecondStep = (applicantData, getState) => axios.patch('/api/admissionSecondStep', applicantData, tokenConfig(getState));
export const admissionFinalStep = (applicantData, getState) => axios.patch('/api/admissionFinalStep', applicantData, tokenConfig(getState));
export const createReference = (data) => axios.post('/api/student', data);
export const payment = (data) => axios.patch('/api/student/payment', data);
export const approveAdmission = (getState, id) => axios.patch(`/api/student/approve/${id}`, {date: ''}, tokenConfig(getState));
export const approveAccount = (getState, id) => axios.patch(`/api/student/approveAccount/${id}`, {date: ''}, tokenConfig(getState));
export const confirmAdmission = (getState, id, data) => axios.patch(`/api/student/confirmAdmission/${id}`, data, tokenConfig(getState));
export const approveAdmissionFee = (getState, id) => axios.patch(`/api/student/approveAdmissionFee/${id}`, {data: ''}, tokenConfig(getState));
export const approveAccountAdmission = (getState, id) => axios.patch(`/api/student/approveAccountAdmissionFee/${id}`, {data: ''}, tokenConfig(getState));
export const fileUpload = (fileData) => axios.post('/api/files/storage', fileData);
export const createAccount = (userData) => axios.post('/api/auth/createAccount', userData);
export const loginAccount = (userData) => axios.post('/api/auth/loginAccount', userData);
export const changePassword = (userData, getState) => axios.patch('/api/auth/changePassword', userData, tokenConfig(getState));
export const getCurrentUser = (getState) => axios.get('/api/user', tokenConfig(getState));

export const fetchAllUsers = (getState) => axios.get('/api/AllUsers', tokenConfig(getState));
export const searchUser = (getState, searchKey) => axios.get(`/api/search?searchKey=${searchKey}`, tokenConfig(getState));
export const updateUserData = (getState, userData) => axios.patch(`/api/updateUser`, userData, tokenConfig(getState));
export const deleteEducationBackground= (getState, degree) => axios.delete(`/api/educationBackground/${degree}`, tokenConfig(getState));
export const deleteJob= (getState, company_name) => axios.delete(`/api/jobs/${company_name}`, tokenConfig(getState));
export const connect = (getState, userId) => axios.patch(`/api/user/${userId}/connect`, { data: ''},  tokenConfig(getState));
export const disconnect = (getState, userId) => axios.patch(`/api/user/${userId}/disconnect`, {data: ''}, tokenConfig(getState));
export const accept_connection_request = (getState, userId) => axios.patch(`/api/user/${userId}/accept_connection_request`, {data: ''}, tokenConfig(getState));
export const suggestions = (keyWord, getState) => axios.get(`/api/suggestions/${keyWord}`, tokenConfig(getState))

export const newPost = (postData, getState) => axios.post('/api/posts', postData, tokenConfig(getState));
export const fetchPosts = (getState) => axios.get('/api/posts', tokenConfig(getState));
export const removePosts = (getState, id) => axios.delete(`/api/posts/${id}`, tokenConfig(getState));
export const likeAndDislike = (getState, id) => axios.patch(`/api/posts/${id}/likeAndDislike`, {data: ''},tokenConfig(getState));
export const comment = (getState, id, commentContent) => axios.patch(`/api/posts/${id}/comments`, commentContent, tokenConfig(getState));
export const postNotifications = (getState) => axios.get(`/api/posts/postNotifications`, tokenConfig(getState));
export const showPostNotifications = (getState) => axios.patch(`/api/posts/showPostNotifications`,{data: ''}, tokenConfig(getState));

export const createClub = (clubDate, getState) => axios.post('/api/club/create', clubDate, tokenConfig(getState));
export const createGroup = (groupData, getState) => axios.post('/api/group/create', groupData, tokenConfig(getState));
export const allGroup = (getState) => axios.get('/api/group', tokenConfig(getState));
export const allClub = (getState) => axios.get('/api/club', tokenConfig(getState));
export const clubUpdate = (getState, clubData, id) => axios.patch(`/api/club/${id}`, clubData, tokenConfig(getState));
export const clubFollow = (getState, id) => axios.patch(`/api/club/${id}/follow`, {data: ''}, tokenConfig(getState));
export const clubUnfollow = (getState, id) => axios.patch(`/api/club/${id}/unfollow`, {data: ''}, tokenConfig(getState));
export const clubPost = (getState, postData, id) => axios.post(`/api/club/${id}/post`, postData, tokenConfig(getState));

export const groupUpdate = (getState, groupData, id) => axios.patch(`/api/group/${id}`, groupData, tokenConfig(getState));
export const member_request = (getState, id) => axios.patch(`/api/group/send_request/${id}`, {data: ''}, tokenConfig(getState));
export const cancel_request = (getState, id) => axios.patch(`/api/group/cancel_request/${id}`, {data: ''}, tokenConfig(getState));
export const reject_request = (getState, id, userId) => axios.patch(`/api/group/${id}/reject_request/${userId}`, {data: ''}, tokenConfig(getState));
export const accept_request = (getState, id, userId) => axios.patch(`/api/group/${id}/accept_request/${userId}`, {data: ''}, tokenConfig(getState));
export const groupPost = (getState, postData, id) => axios.post(`/api/group/${id}/post`, postData, tokenConfig(getState));

export const peers = (getState, id) => axios.patch(`/api/messages/peer/${id}`, {data: ''}, tokenConfig(getState));
export const sendMessage = (getState, message) => axios.post(`/api/messages`, message, tokenConfig(getState));
export const getMessage = (getState) => axios.get('/api/messages', tokenConfig(getState));

export const addDepartment = (getState, departmentData) => axios.post('/api/department', departmentData, tokenConfig(getState));
export const departments = (getState) => axios.get('/api/department',tokenConfig(getState));
export const addCourse = (getState, courseData) => axios.post('/api/department/course', courseData, tokenConfig(getState));
export const courses = (getState) => axios.get('/api/department/course', tokenConfig(getState));
export const addTeacher = (getState, teacherData) => axios.post('/api/department/teacher', teacherData, tokenConfig(getState));
export const teachers = (getState) => axios.get('/api/department/teacher', tokenConfig(getState));
export const addStudent = (getState, studentData) => axios.post('/api/department/student', studentData, tokenConfig(getState));
export const students = (getState) => axios.get('/api/department/student', tokenConfig(getState));
export const semesterRegistration = (getState, studentData) => axios.post('/api/department/semesterRegistration', studentData, tokenConfig(getState));
export const semesters = (getState) => axios.get('/api/department/semesterRegistration', tokenConfig(getState));
export const assignTeacher = (getState, teacherId, courseId) => axios.patch(`/api/department/assignTeacher/${teacherId}/${courseId}`,{data: ''}, tokenConfig(getState));
export const approveSemesterRegistration = (getState, studentId) => axios.patch(`/api/department/semesterRegistration/${studentId}`,{data: ''}, tokenConfig(getState));

export const checkSscCredential = (id) => axios.patch(`/api/onlineAdmissions/${id}/SSCCredentialCheck`);
export const checkHscCredential = (id) => axios.patch(`/api/onlineAdmissions/${id}/HSCCredentialCheck`)
export const acceptAdmission = (id, getState) => axios.patch(`/api/acceptOnlineAdmission/${id}`, {data: ''}, tokenConfig(getState));
export const rejectAdmission = (id, getState) => axios.delete(`/api/rejectOnlineAdmission/${id}`, tokenConfig(getState));

export const submitResult = (id, data, getState) => axios.patch(`/api/student/submitResult/${id}`, data, tokenConfig(getState));
export const resultApproveByHead = (id, getState) => axios.patch(`/api/student/resultApproveByHead/${id}`, {data: ''}, tokenConfig(getState));
export const resultApproveByExamController = (id, getState) => axios.patch(`/api/student/resultApproveByExamController/${id}`, {data: ''}, tokenConfig(getState));