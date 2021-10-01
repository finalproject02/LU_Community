import React, { useState } from 'react';
import { Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import { FaGraduationCap, FaHome, FaLocationArrow, FaPencilAlt } from 'react-icons/fa';

const ProfileAbout = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="8">
                        <Card className="w-100">
                            <Card.Body>
                                <Card.Title>About</Card.Title>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add High School</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>Safat Ullah High School</span>
                                        <br />
                                        <span className="ms-4">Science</span>
                                        <br />
                                        <span className="ms-4">2010-2015</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add College</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>Dakshin Surma College</span>
                                        <br />
                                        <span className="ms-4">Science</span>
                                        <br />
                                        <span className="ms-4">2015-2017</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add University</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>Leading University</span>
                                        <br />
                                        <span className="ms-4">Depertment of CSE</span>
                                        <br />
                                        <span className="ms-4">2017-2021</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add Job</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>Facebook</span>
                                        <br />
                                        <span className="ms-4">Web developer</span>
                                        <br />
                                        <span className="ms-4">2010-2015</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add Current Town</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>Lives in Sylhet</span>
                                        <br />
                                        <span className="ms-4">2010-2015</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add Current Town</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>From Sylhet</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add Mobile</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>01797213005</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add Email</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>mdjahed@gmail.com</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add Website</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>mdjahed.com</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Birthday</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>16-01-1990</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Language</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>Bangla,Hindi,English</span>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Education</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form className="pt-3 mb-1">
                                <Row className="mb-2">
                                    <Col md="12">
                                        <h6 className="">School</h6>
                                        <Form.Control type="text" />
                                    </Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col md="12">
                                        <h6 className="">Department</h6>
                                        <Form.Control type="text" />
                                    </Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col md="12">
                                        <h6 className="">Field of Study</h6>
                                        <Form.Control type="text" />
                                    </Col>
                                </Row>
                                <Row className="mb-4">
                                    <Col md="6">
                                        <h6 className="">Start date</h6>
                                        <Form.Control type="date" />
                                    </Col>
                                    <Col md="6">
                                        <h6 className="">End date</h6>
                                        <Form.Control type="date" />
                                    </Col>
                                </Row>
                                <Row className="bgSecondary text-center m-2 rounded-3">
                                    <input type="submit" value="Save Changes" className="btn w-100 text-white" onClick={handleClose} />
                                </Row>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </Row>
            </Container>
        </div>
    );
};

export default ProfileAbout;