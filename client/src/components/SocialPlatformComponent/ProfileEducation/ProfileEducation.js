import React, { useState } from 'react';
import { Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { FaEdit, FaGraduationCap, FaPencilAlt } from 'react-icons/fa';
import { useSelector } from "react-redux";
import EducationProfileModal from "../EducationProfileModal/EducationProfileModal";
import moment from "moment";

const ProfileEducation = () => {

    const { currentUser } = useSelector(state => state.auth)
    const [show, setShow] = useState(false);
    const [newShow, setNewShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [degreeName, setDegreeName] = useState([])


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
                                        <FaPencilAlt className="fs-5" onClick={(e) =>{
                                            e.stopPropagation();
                                            setDegreeName(education.degree);
                                            handleShow()} } />
                                        <EducationProfileModal DegreeName={degreeName}  show={show} handleClose={handleClose}/>
                                    </div>
                                    <div>
                                        <p class="mb-0">{education.degree}</p>
                                        <p class="mb-0">Degree: {education.field_of_study}</p>
                                        <p class="mt-0 pt-0">{moment(education.start_date).year()} - {moment(education.end_date).year()}</p>
                                    </div>
                                </div>
                            </Card.Text>

                        </>
                    ))}
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Education</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form class="pt-3 mb-1">
                        <Row className="mb-2">
                            <Col md="12">
                                <h6 class="">School</h6>
                                <Form.Control type="text" />
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md="12">
                                <h6 class="">Degree</h6>
                                <Form.Control type="text" />
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md="12">
                                <h6 class="">Field of Study</h6>
                                <Form.Control type="text" />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md="6">
                                <h6 class="">Start date</h6>
                                <Form.Control type="date" />
                            </Col>
                            <Col md="6">
                                <h6 class="">End date</h6>
                                <Form.Control type="date" />
                            </Col>
                        </Row>
                        <Row className="bgSecondary text-center m-2 rounded-3">
                            <input type="submit" value="Save Changes" className="btn w-100 text-white" onClick={handleClose} />
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ProfileEducation;