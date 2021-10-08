import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { FaPhone, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import jahed from "../../../../images/Jahed.jpg"

const ProfileInfo = ({ show, handleClose }) => {

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="d-flex align-items-center p-2 ms-2 pb-3 bg-info rounded-3">
                        <Link to="/socialProfile">
                            <img width="45" className="rounded-circle me-2" src={jahed} alt=".." />
                        </Link>
                        <div className="">
                            <strong>Md Jahed Miah</strong><br />
                            <small>Web develope</small>
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