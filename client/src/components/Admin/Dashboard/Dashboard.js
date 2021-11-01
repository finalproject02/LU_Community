import React from 'react';
import StudentHome from '../Student/StudentHome';
import TeacherHome from '../Teacher/TeacherHome';
import "./Dashboard.css";
import { useSelector } from "react-redux";
import HeadHome from "../../Admin/DepartmentHead/HeadHome";
import AdminHome from "../MainAdmin/AdminHome";
import AdmissionHome from "../Admission/AdmissionHome";
import AccountHome from "../Account/AccountHome";
import ControllerHome from "../ExamController/ControllerHome";

function Dashboard() {
    const { currentUser } = useSelector(state => state.auth)
    return (
        <>
            {currentUser?.position === 'Teacher' && currentUser?.designation.toLowerCase() !== 'head' && (
                <TeacherHome />
            )}
            {currentUser?.position === 'Student' && (
                <StudentHome />
            )}
            {currentUser?.name === 'Account' && (
                <AccountHome />
            )}
            {currentUser?.position === 'Teacher' && currentUser?.designation.toLowerCase() === 'head' && (
                <HeadHome />
            )}
            {currentUser?.name === 'Administrator' && (
                <AdminHome />
            )}
            {currentUser?.name === 'Admission' && (
                <AdmissionHome />
            )}
			{currentUser?.name === 'Controller' && (
				<ControllerHome/>
			)}

        </>
    )
}

export default Dashboard
