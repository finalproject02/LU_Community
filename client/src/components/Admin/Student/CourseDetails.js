import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const CourseDetails = () => {
    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="d-flex justify-content-center mt-5">
                    <Col md="8">
                        <Card >
                            <Card.Title className="p-4 textPrimary">English Reading and Speaking</Card.Title>
                            <Card.Body>
                                <Row>
                                    <Col md="4">
                                        <p className="text-lead">Course Title:</p>
                                        <p className="text-lead">Course Code:</p>
                                        <p className="text-lead">Course Credit:</p>
                                        <p className="text-lead">Course Semester:</p>
                                        <p className="text-lead">Course Prerequisite:</p>
                                        <p className="text-lead">Course Teacher:</p>
                                        <p className="text-lead">Course Students:</p>
                                        <p className="text-lead">Course Curriculum:</p>
                                    </Col>
                                    <Col md="8">
                                        <p className="fw-bold">English Reading and Speaking</p>
                                        <p className="fw-bold">ENG-1111</p>
                                        <p className="fw-bold">3</p>
                                        <p className="fw-bold">1st</p>
                                        <p className="fw-bold">Null</p>
                                        <p className="fw-bold">Md Adil chow.</p>
                                        <p className="fw-bold">22</p>
                                        <p className="fw-bold">B.Sc. (Honours) in CSE (2014 Curriculum) </p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;