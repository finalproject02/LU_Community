import React, { useState } from 'react';
import { Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { FaEdit, FaGraduationCap, FaPencilAlt } from 'react-icons/fa';
import { useSelector } from "react-redux";
import EducationProfileModal from "../EducationProfileModal/EducationProfileModal";

const ProfileEducation = () => {

    const { currentUser } = useSelector(state => state.auth)
    const [show, setShow] = useState(false);
    const [newShow, setNewShow] = useState(false);
    const [editShow, setEditShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const closeNewShow = () => setNewShow(false)

    return (
        <div className="mb-4">
            <Card className="w-100 rounded-3">
                <Card.Body>
                    <Card.Text as="div" class="d-flex justify-content-between align-items-center">
                        <h5 class="card-title pt-2">Education</h5>
                        <FaEdit className="fs-5" onClick={() => setNewShow(true)} />
                        <EducationProfileModal newShow={newShow} closeNewShow={closeNewShow}/>
                    </Card.Text>
                    <hr />
                    {currentUser?.education_background.map(education => (
                        <>
                            <Card.Text as="div">
                                <div class="col-md-12">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="d-flex">
                                            <FaGraduationCap className="fs-4" />
                                            <p class="ps-2">{education.school}</p>
                                        </div>
                                        <FaPencilAlt className="fs-5" onClick={() => {education={education}; handleShow()} } />
                                        <EducationProfileModal education={education} show={show} handleClose={handleClose}/>
                                    </div>
                                    <div>
                                        <p class="mb-0">{education.degree}</p>
                                        <p class="mb-0">Degree: {education.field_of_study}</p>
                                        <p class="mt-0 pt-0">{education.start_date} - {education.end_date}</p>
                                    </div>
                                </div>
                            </Card.Text>

                        </>
                    ))}
                </Card.Body>
            </Card>

        </div>
    );
};

export default ProfileEducation;