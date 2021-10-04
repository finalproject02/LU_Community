import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaGraduationCap, FaPencilAlt } from 'react-icons/fa';

const UserProfileAbout = () => {

    return (
        <div>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="8">
                        <Card className="w-100">
                            <Card.Body>
                                <Card.Title>About</Card.Title>
                                <Card.Text as="div">
                                    <div className="ps-2">
                                        <h6>High School</h6>
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
                                            <h6>College</h6>
                                        </div>

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
                                            <h6>University</h6>
                                        </div>

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
                                            <h6>Job</h6>
                                        </div>
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
                                            <h6>Current Town</h6>
                                        </div>
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>Lives in Sylhet</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Home Town</h6>
                                        </div>
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>From Sylhet</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Mobile</h6>
                                        </div>
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>01797213005</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Email</h6>
                                        </div>
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>mdjahed@gmail.com</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Website</h6>
                                        </div>
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
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>Bangla,Hindi,English</span>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserProfileAbout;