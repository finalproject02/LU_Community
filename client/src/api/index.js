import axios from "axios";

export const newAdmission = (applicantData) => axios.post('/api/onlineAdmission', applicantData);
export const fileUpload = (fileData) => axios.post('/api/files/storage', fileData)