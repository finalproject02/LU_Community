import axios from "axios";

export const fetchAllApplication = () => axios.get('/api/onlineAdmissions');
export const fetchApplication = (id) => axios.get(`/api/onlineAdmission/${id}`)
export const deleteApplication = (id) => axios.delete(`/api/onlineAdmission/${id}`)
export const checkSscCredential = (id) => axios.patch(`/api/onlineAdmissions/${id}/SSCCredentialCheck`);
export const checkHscCredential = (id) => axios.patch(`/api/onlineAdmissions/${id}/HSCCredentialCheck`);