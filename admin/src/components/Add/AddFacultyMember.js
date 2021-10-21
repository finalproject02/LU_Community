import React, { useState } from 'react';
import { Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import prof from "../../images/Prof.jpg";

const AddFacultyMember = () => {
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
                                    <span className="btn w-100 cursor text-white" onClick={handleShow}>Add Faculty Members</span>
                                </div>
                                <Card.Text as="div" className="mt-4">
                                    <Card className="mb-2">
                                        <Card.Body>
                                            <Row>
                                                <Col md="6">
                                                    <p><span className="fw-bold">Name:</span> Prof. Dr. AS. Sikder</p>
                                                    <p><span className="fw-bold">Designation:</span> Professor</p>
                                                    <p><span className="fw-bold">Department:</span> Computer Science & Engineering </p>
                                                    <p><span className="fw-bold">Cell Phone:</span> 01757584584</p>
                                                    <p><span className="fw-bold">E-mail:</span> faruq_cse@lus.ac.bd</p>
                                                </Col>
                                                <Col md="4">
                                                    <img src={prof} alt="" width="140" height="140" className="rounded-3 p-1" />
                                                </Col>
                                            </Row>
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
                    <Modal.Title>Add Faculty Members</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="name" placeholder="Name" />
                            <label for="floatingInput">Name</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="designation" placeholder="Designation" />
                            <label for="floatingInput">Designation</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="Department" placeholder="Department" />
                            <label for="floatingInput">Department</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="number" onChange={handleChange} name="cell_phone" placeholder="Cell Phone" />
                            <label for="floatingInput">Cell Phone</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="email" placeholder="Email" />
                            <label for="floatingInput">Email</label>
                        </Form.Floating>
                        <Form.Group className="mb-3">
                            <label for="floatingInput">Choose Image</label>
                            <Form.Control type="file" onChange={handleChange} name="image" />
                        </Form.Group>
                        <div className="bgSecondary text-center mt-4 rounded-3">
                            <input type="submit" value="Save Changes" className="btn w-100 text-white" onClick={handleClose} />
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AddFacultyMember;