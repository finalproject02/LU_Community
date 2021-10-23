import React, { useState } from 'react'
import { Card, Col, Container, Row, Table, Modal, Form } from 'react-bootstrap';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import jahed from "../../../images/Jahed.jpg";
import { FaRegEdit } from "react-icons/fa";

const AdminProfile = () => {
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
                <Row className="justify-content-center my-5">
                    <Col md="8">
                        <Card className="shadow-sm p-5 mb-4">
                            <Card.Title className="textPrimary mb-4 fs-4">About Me</Card.Title>
                            <Card.Body>
                                <div className="d-flex align-items-center mb-4">
                                    <img src={jahed} alt="" width="100" height="100" className="rounded-3 me-3" />
                                    <div>
                                        <div className="d-flex justify-content-between align-items-start">
                                            <h5 className="fw-bold">Md Jahed Miah</h5>
                                            <FaRegEdit className="fs-5" onClick={handleShow} />
                                        </div>
                                        <small>Professor | Department of Computer science and engineering</small>
                                    </div>
                                </div>
                                <Row>
                                    <Col md="12">
                                        <Row>
                                            <Col md="4">
                                                <p className="text-lead">Name:</p>
                                                <p className="text-lead">ID:</p>
                                                <p className="text-lead">E-Mail:</p>
                                                <p className="text-lead">Phone:</p>
                                                <p className="text-lead">Address::</p>
                                                <p className="text-lead">Joining Date:</p>
                                            </Col>
                                            <Col md="8">
                                                <p className="fw-bold">Md Jahed Miah</p>
                                                <p className="fw-bold">415646</p>
                                                <p className="fw-bold">mdjahedahmed12@gmail.com</p>
                                                <p className="fw-bold">01797213005</p>
                                                <p className="fw-bold">Tengra, Lalabazar, Bishwanath, Sylhet</p>
                                                <p className="fw-bold">27-08-2017</p>
                                            </Col>
                                            <Modal show={show} onHide={handleClose} centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Edit</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form onSubmit={handleSubmit}>
                                                        <Form.Floating className="mb-3">
                                                            <Form.Control type="text" onChange={handleChange} name="phone" placeholder="Phone" />
                                                            <label for="floatingInput">Phone</label>
                                                        </Form.Floating>
                                                        <Form.Floating className="mb-3">
                                                            <Form.Control type="text" onChange={handleChange} name="address" placeholder="Address" />
                                                            <label for="floatingInput">Address</label>
                                                        </Form.Floating>
                                                        <div className="bgSecondary text-center mt-4 rounded-3">
                                                            <input type="submit" value="Save Changes" className="btn w-100 text-white" onClick={handleClose} />
                                                        </div>
                                                    </Form>
                                                </Modal.Body>
                                            </Modal>
                                        </Row>
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

export default AdminProfile;
