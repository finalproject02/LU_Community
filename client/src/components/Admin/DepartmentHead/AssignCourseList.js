import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import jahed from "../../../images/Jahed.jpg";
import { FaTrashAlt } from 'react-icons/fa';

const AssignCourseList = () => {
    return (
        <div>
            <AdminNavbar />
            <div>
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col md="10">
                            <Card className="mt-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div to="/assignCourseList" className="textHover text-dark d-flex justify-content-start align-items-center">
                                            <img src={jahed} alt=".." width="40" height="40" className="rounded-circle" />
                                            <div>
                                                <strong className="ms-2 mt-0">Md Jahed Miah</strong><br />
                                                <span className="mt-0">Lecturer</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <Form.Label>
                                                    Add Course
                                                </Form.Label>
                                            </div>
                                            <div colSpan="3">
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Select
                                                        className="w-100"
                                                        name="program_name"

                                                    >
                                                        <option value="cse">--Assign Course--</option>
                                                        <option value="cse">English Reading &amp; Speaking</option>
                                                        <option value="cse">Introduction to computer</option>
                                                        <option value="english">Introduction to computer</option>
                                                        <option value="eee">Introduction to computer</option>
                                                        <option value="civil">Introduction to computer</option>
                                                        <option value="civil">Introduction to computer</option>
                                                        <option value="civil">Introduction to computer</option>
                                                        <option value="civil">Introduction to computer</option>
                                                        <option value="civil">Introduction to computer</option>
                                                        <option value="civil">Introduction to computer</option>
                                                        <option value="bangla">Introduction to computer</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <ul className="d-flex align-items-center">
                                            <li className="me-2">
                                                <div>Introduction to computer</div>
                                            </li>
                                            <FaTrashAlt />
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AssignCourseList;