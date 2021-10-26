import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const TeacherHome = () => {
    const { currentUser } = useSelector(state => state.auth)
    return (
        <div>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="10">
                        <h2 className="text-center textSecondary my-2">Welcome {currentUser?.name}!</h2>
                        <Row>
                            <Col md="4" className="mb-2">
                                <Link to="courseDetails" className="textHover text-dark">
                                    <Card className="mb-2 p-4 rounded-3 bg-info text-white">
                                        <Card.Body className="text-center">
                                            <h4>Total Course</h4>
                                            <small>12</small>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col md="4" className="mb-2">
                                <Link to="courseDetails" className="textHover text-dark">
                                    <Card className="mb-2 p-4 rounded-3 bg-success text-white">
                                        <Card.Body className="text-center">
                                            <h4>Total Student</h4>
                                            <small>22</small>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col md="4" className="mb-2">
                                <Link to="courseDetails" className="textHover text-dark">
                                    <Card className="mb-2 p-4 rounded-3 bg-info text-white">
                                        <Card.Body className="text-center">
                                            <h4>upcoming Exam</h4>
                                            <small>12-03-2021</small>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                        <Card>
                            <div className="d-flex justify-content-between align-items-center">
                                <Card.Title className="textPrimary px-4 pt-4">Current Courses</Card.Title>
                                <span className="me-2 textHover">See all</span>
                            </div>
                            <Card.Body>
                                <Row>
                                    <Col md="4" className="mb-2">
                                        <Link to="/courseStudents" className="textHover text-dark">
                                            <Card className="bg-warning  rounded-3">
                                                <Card.Body className="text-center p-4">
                                                    <h4>English Reading and Speaking</h4>
                                                    <small>Eng-1111</small>
                                                    <p>1st semester</p>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                    <Col md="4" className="mb-2">
                                        <Link to="/courseStudents" className="textHover text-dark">
                                            <Card>
                                                <Card.Body className="text-center p-4 bg-light">
                                                    <h4>English Reading and Speaking</h4>
                                                    <small>Eng-1111</small>
                                                    <p>1st semester</p>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                    <Col md="4" className="mb-2">
                                        <Link to="/courseStudents" className="textHover text-dark">
                                            <Card className="bg-warning  rounded-3">
                                                <Card.Body className="text-center p-4 ">
                                                    <h4>English Reading and Speaking</h4>
                                                    <small>Eng-1111</small>
                                                    <p>1st semester</p>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                    <Col md="4" className="mb-2">
                                        <Link to="/courseStudents" className="textHover text-dark">
                                            <Card >
                                                <Card.Body className="text-center p-4 bg-light">
                                                    <h4>English Reading and Speaking</h4>
                                                    <small>Eng-1111</small>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                    <Col md="4" className="mb-2">
                                        <Link to="courseDetails" className="textHover text-dark">
                                            <Card className="bg-danger rounded-3">
                                                <Card.Body className="text-center p-4">
                                                    <h4>English Reading and Speaking</h4>
                                                    <small>Eng-1111</small>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                    <Col md="4" className="mb-2">
                                        <Link to="courseDetails" className="textHover text-dark">
                                            <Card>
                                                <Card.Body className="text-center p-4 bg-light">
                                                    <h4>English Reading and Speaking</h4>
                                                    <small>Eng-1111</small>
                                                </Card.Body>
                                            </Card>
                                        </Link>
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

export default TeacherHome;