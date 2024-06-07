import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { FaPhone, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import Avatar from "../../../../images/avatar.jpeg";

const ProfileInfo = ({ show, handleClose }) => {
    const { currentUser } = useSelector(state => state.auth)

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="d-flex align-items-center p-2 ms-2 pb-3 bg-info rounded-3">
                        <Link to="/socialProfile">
                            <img width="45" className="rounded-circle me-2" src={currentUser?.profile_picture ? `/api/files/storage/${currentUser?.profile_picture}` : Avatar} alt=".." />
                        </Link>
                        <div className="">
                            <strong>{currentUser?.name}</strong><br />
                            <small>{currentUser?.current_position}</small>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="mb-2 cardHover p-2 rounded-3">
                            <FaPhone className="me-2" />
                            Calls
                        </div>
                        <div className="cardHover p-2 rounded-3">
                            <FaTools className="me-2" />
                            Setting
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default ProfileInfo;