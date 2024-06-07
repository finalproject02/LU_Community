import React from 'react';
import "./Dashboard.css";
import { useSelector } from "react-redux";
import AdmissionHome from "../Admission/AdmissionHome";
import AccountHome from "../Account/AccountHome";

function Dashboard() {
    const { currentUser } = useSelector(state => state.auth)
    return (
        <>
            {currentUser?.name === 'Account' && (
                <AccountHome />
            )}
            {currentUser?.name === 'Admission' && (
                <AdmissionHome/>
            )}

        </>
    )
}

export default Dashboard
