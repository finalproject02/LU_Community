import React, { useState } from 'react';
import { Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { FaEdit, FaGraduationCap, FaPencilAlt, FaTrash } from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import EducationProfileModal from "../EducationProfileModal/EducationProfileModal";
import moment from "moment";
import { DeleteEducationBackground} from "../../../actions/auth";

const ProfileEducation = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.auth)
    const [show, setShow] = useState(false);
    const [newShow, setNewShow] = useState(false);
    const [degreeName, setDegreeName] = useState([])


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const closeNewShow = () => setNewShow(false)

    return (
        <div className="mb-4">
            <Card className="w-100 rounded-3">
                <Card.Body>
                    <Card.Text as="div" className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title pt-2">Education</h5>
                        <FaEdit style={{cursor: 'pointer'}} className="fs-5" onClick={() => setNewShow(true)} />
                        <EducationProfileModal newShow={newShow} closeNewShow={closeNewShow} />
                    </Card.Text>
                    <hr />
                    {currentUser?.education_background.map(education => (
                        <>
                            <Card.Text as="div">
                                <div className="col-md-12">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex">
                                            <FaGraduationCap className="fs-4" />
                                            <p className="ps-2">{education.school}</p>
                                        </div>
                                        <div className="d-flex">
                                            <FaPencilAlt style={{cursor: 'pointer'}} title="edit" className="fs-5" onClick={(e) => {
                                                e.stopPropagation();
                                                setDegreeName(education.degree);
                                                handleShow()
                                            }} />
                                            <FaTrash style={{cursor: 'pointer'}} title="delete" className="fs-5 ms-2" onClick={() => {
                                                dispatch(DeleteEducationBackground(education.degree))
                                            }}/>
                                        </div>
                                        <EducationProfileModal DegreeName={degreeName} show={show} handleClose={handleClose} />
                                    </div>
                                    <div>
                                        <p className="mb-0">{education.degree}</p>
                                        <p className="mb-0">Degree: {education.field_of_study}</p>
                                        <p className="mt-0 pt-0">{moment(education.start_date).year()} - {moment(education.end_date).year()}</p>
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