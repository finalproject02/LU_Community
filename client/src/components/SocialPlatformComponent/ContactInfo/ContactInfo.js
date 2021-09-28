import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const ContactInfo = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5 class="modal-title fs-5" id="contactModalLabel">Md. Jahed Miah</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="d-flex justify-content-between align-items-center pt-3 mb-2">
                        <p class="fs-5">Contact Info</p>
                        <i class="fa fa-edit pb-2" aria-hidden="true" data-bs-toggle="modal"
                            data-bs-target="#contactEditModal"></i>
                    </div>

                    <div>
                        <div class=" d-flex align-items-center">
                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                            <h6 class="fs-6 ps-2 pt-2">Your Profile</h6>
                        </div>
                        <a href="#" class="anchor">lucommunity.com/lusp/md-jahed-miah-1601b3211</a>
                    </div>
                    <div>
                        <div class="d-flex align-items-center pt-3">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                            <h6 class="fs-6 ps-2 pt-2">Email</h6>
                        </div>
                        <a href="#" class="anchor">mdjahedahmed512@gmail.com</a>
                    </div>
                    <div>
                        <div class="d-flex align-items-center pt-3">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                            <h6 class="fs-6 ps-2 pt-2">Phone</h6>
                        </div>
                        <a href="#" class="anchor">01797213005</a>
                    </div>
                    <div class="">
                        <div class="d-flex align-items-center pt-3">
                            <i class="fa fa-birthday-cake" aria-hidden="true"></i>
                            <h6 class="fs-6 ps-2 pt-2">Birthday</h6>
                        </div>
                        <p>January 16</p>
                    </div>
                    <div class="">
                        <div class="d-flex align-items-center pt-3">
                            <i class="fa fa-birthday-cake" aria-hidden="true"></i>
                            <h6 class="fs-6 ps-2 pt-2">Connected</h6>
                        </div>
                        <p>January 16, 2021</p>
                    </div>
                    <div class="mb-4">
                        <div class="d-flex align-items-center pt-3">
                            <i class="fa fa-birthday-cake" aria-hidden="true"></i>
                            <h6 class="fs-6 ps-2 pt-2">Address</h6>
                        </div>
                        <p>Sylhet, Bangladesh</p>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ContactInfo;