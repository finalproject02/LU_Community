import React from 'react';
import { Modal } from 'react-bootstrap';
import { FaBan, FaBellSlash, FaFile, FaHistory, FaImage, FaLink, FaTrashAlt } from 'react-icons/fa';
import jahed from "../../../../images/Jahed.jpg";

const FriendModal = ({ show, handleClose }) => {
    return (
        <div>
            {show &&
                <Modal centered show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>User Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex justify-content-start align-items-center mb-2">
                            <img src={jahed} alt="" width="52" height="52" className="rounded-circle me-2" />
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6 className="mb-0">Md Jahed Miah</h6>
                                    <small>Last seen at 5:10 pm</small>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="d-flex align-items-center cardHover px-2 py-2 rounded-3">
                                <FaImage className="me-2" />
                                Photo 38
                            </div>
                            <div className="d-flex align-items-center cardHover px-2 py-2 rounded-3">
                                <FaFile className="me-2" />
                                File 38
                            </div>
                            <div className="d-flex align-items-center cardHover px-2 py-2 rounded-3">
                                <FaLink className="me-2" />
                                Link 38
                            </div>
                        </div>
                        <div className="d-flex justify-content-between px-4 cardHover py-2 rounded-3">
                            Notification
                            <FaBellSlash className="fs-5" />
                        </div>
                        <div className="d-flex justify-content-between px-4 cardHover py-2 rounded-3">
                            Clear History
                            <FaHistory className="fs-5" />
                        </div>
                        <div className="d-flex justify-content-between px-4 cardHover py-2 rounded-3">
                            Delete Chat
                            <FaTrashAlt className="fs-5" />
                        </div>
                        <div className="mb-4 d-flex justify-content-between px-4 cardHover py-2 rounded-3">
                            Block User
                            <FaBan className="fs-5" />
                        </div>
                    </Modal.Body>
                </Modal>
            }
        </div>
    );
};

export default FriendModal;