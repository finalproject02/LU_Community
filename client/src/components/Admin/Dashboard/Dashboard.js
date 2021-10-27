import React from 'react';
import StudentHome from '../Student/StudentHome';
import TeacherHome from '../Teacher/TeacherHome';
import "./Dashboard.css";
import { useSelector } from "react-redux";
import HeadHome from "../../Admin/DepartmentHead/HeadHome";
import AdminHome from "../MainAdmin/AdminHome";
import AdmissionHome from "../Admission/AdmissionHome";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import AccountHome from "../Account/AccountHome";

function Dashboard() {
    const { currentUser } = useSelector(state => state.auth)
    return (
        <>
            <AdminNavbar />
            {currentUser?.position === 'Teacher' && currentUser?.designation.toLowerCase() !== 'head' && (
                <TeacherHome />
            )}
            {currentUser?.position === 'Student' && (
                <StudentHome />
            )}
            {currentUser?.position === 'Account' && (
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

        </>
    )
}

export default Dashboard
