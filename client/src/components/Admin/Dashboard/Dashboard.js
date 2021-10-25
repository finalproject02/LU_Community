import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import StudentHome from '../Student/StudentHome';
import TeacherHome from '../Teacher/TeacherHome';
import "./Dashboard.css";
import { useSelector } from "react-redux";
import HeadHome from "../../Admin/DepartmentHead/HeadHome"

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
            {currentUser?.position === 'Teacher' && currentUser?.designation.toLowerCase() === 'head' && (
                <HeadHome />
            )}


        </>
    )
}

export default Dashboard
