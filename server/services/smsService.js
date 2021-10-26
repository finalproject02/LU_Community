import request from 'request';
import { referenceNumberMessage, addTeacherMessage, addStudentMessage, paymentMessage, confirmAdmissionMessage } from "./messages.js";

export const smsWithReferenceNumber = (name, number, reference_no) => {
    const options = {  'url': `http://66.45.237.70/api.php?username=rezaul123&password=GTH5FXE9&number=${number}&message=${referenceNumberMessage(name, reference_no)}` };
    request(options, (error, response) => {
        if (error) throw Error(error);
        console.log('send success')
    })
}

export const paymentSMS = (name, number) => {
    const options = {  'url': `http://66.45.237.70/api.php?username=rezaul123&password=GTH5FXE9&number=${number}&message=${paymentMessage(name)}` };
    request(options, (error, response) => {
        if (error) throw Error(error);
        console.log('send success')
    })
}

export const addTeacherSMS = (name, number, designation, department, email, password) => {
    const options = {  'url': `http://66.45.237.70/api.php?username=rezaul123&password=GTH5FXE9&number=${number}&message=${addTeacherMessage(name, designation, department, email, password)}` };
    request(options, (error, response) => {
        if (error) throw Error(error);
        console.log('send success')
    })
}

export const addStudentSMS = (name, number, department, email, password) => {
    const options = {  'url': `http://66.45.237.70/api.php?username=rezaul123&password=GTH5FXE9&number=${number}&message=${addStudentMessage(name, department, email, password)}` };
    request(options, (error, response) => {
        if (error) throw Error(error);
        console.log('send success')
    })
}

export const confirmAdmissionSMS = (name, number, student_id, batch, email, password) => {
    const options = {  'url': `http://66.45.237.70/api.php?username=rezaul123&password=GTH5FXE9&number=${number}&message=${confirmAdmissionMessage(name, student_id, batch, email, password)}` };
    request(options, (error, response) => {
        if (error) throw Error(error);
        console.log('send success')
    })
}