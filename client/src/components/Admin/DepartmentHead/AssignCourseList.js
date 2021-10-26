import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { FaTimesCircle, FaTrashAlt } from 'react-icons/fa';

const AssignCourseList = () => {
    const [data, setData] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="10">
                        <Card className="mt-4">
                            <Card.Body className="p-2 text-center">
                                <Form onSubmit={handleSubmit} className="d-flex justify-content-center">
                                    <Form.Group className="mb-3 w-100">
                                        <Form.Select
                                            className="w-100"
                                            name="teacher_name"
                                            onChange={handleChange}
                                        >
                                            <option value="cse">Assign Teacher</option>
                                            <option value="civil">Md Jahed Miah</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <div>
                                        <input className="btn btn-primary" type="submit" value="Add" />
                                    </div>
                                </Form>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <div>Md Jahed Miah</div>
                                    </div>
                                    <FaTimesCircle className="text-danger" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AssignCourseList;