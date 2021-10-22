import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const AddCourses = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState();
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose()
    }
    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="d-flex justify-content-center mt-5">
                    <Col md="10">
                        <Card>
                            <Card.Body>
                                <div className="bgPrimary text-center rounded-3">
                                    <span className="btn w-100 cursor text-white" onClick={handleShow}>Add Course</span>
                                </div>
                                <Card.Text as="div" className="mt-4">
                                    <Card className="mb-2">
                                        <Card.Body>
                                            <p><span className="fw-bold">Course Title:</span> English Reading and Speaking</p>
                                            <p><span className="fw-bold">Course Code:</span> ENG-1111</p>
                                            <p><span className="fw-bold">Course Credit:</span> 3</p>
                                            <p><span className="fw-bold">Course Semester:</span> 1st</p>
                                            <p><span className="fw-bold">Course Prerequisite:</span></p>
                                            <p><span className="fw-bold">Course Curriculum:</span></p>
                                        </Card.Body>
                                    </Card>
                                    <Card className="mb-2">
                                        <Card.Body>
                                            <p><span className="fw-bold">Course Title:</span> English Writing and Listening</p>
                                            <p><span className="fw-bold">Course Code:</span> ENG-1311</p>
                                            <p><span className="fw-bold">Course Credit:</span> 3</p>
                                            <p><span className="fw-bold">Course Semester:</span> 2nd</p>
                                            <p><span className="fw-bold">Course Prerequisite:</span> ENG-1111</p>
                                            <p><span className="fw-bold">Course Curriculum:</span></p>
                                        </Card.Body>
                                    </Card>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="course_title" placeholder="Course Title" />
                            <label for="floatingInput">Course Title</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="course_code" placeholder="Course Code" />
                            <label for="floatingInput">Course Code</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="course_credit" placeholder="Credit" />
                            <label for="floatingInput">Credit</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="number" onChange={handleChange} name="semester" placeholder="Semester" />
                            <label for="floatingInput">Semester</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="curriculum" placeholder="Curriculum" />
                            <label for="floatingInput">Curriculum</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="prerequisite" placeholder="Prerequisite" />
                            <label for="floatingInput">Prerequisite</label>
                        </Form.Floating>
                        <div className="bgSecondary text-center mt-4 rounded-3">
                            <input type="submit" value="Save Changes" className="btn w-100 text-white" onClick={handleClose} />
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AddCourses;