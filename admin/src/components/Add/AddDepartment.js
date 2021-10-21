import React, { useState } from 'react';
import { Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const AddDepartment = () => {
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
                                    <span className="btn w-100 cursor text-white" onClick={handleShow}>Add Department</span>
                                </div>
                                <Card.Text as="div" className="mt-4">
                                    <Card className="mb-2">
                                        <Card.Body>
                                            <p><span className="fw-bold">Department Name:</span> Computer Science & Engineering </p>
                                            <p><span className="fw-bold">Faculty:</span> Faculty of Modern Science</p>
                                        </Card.Body>
                                    </Card>
                                    <Card className="mb-2">
                                        <Card.Body>
                                            <p><span className="fw-bold">Department Name:</span> Electrical & Electronic Engineering </p>
                                            <p><span className="fw-bold">Faculty:</span> Faculty of Modern Science</p>
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
                    <Modal.Title>Add Department</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="department_name" placeholder="Department Name" />
                            <label for="floatingInput">Department Name</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="faculty" placeholder="Faculty" />
                            <label for="floatingInput">Faculty</label>
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

export default AddDepartment;