import React, { useState } from 'react'
import { Card, Col, Container, Row, Modal, Form } from 'react-bootstrap';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import jahed from "../../../images/Jahed.jpg";
import { FaRegEdit } from "react-icons/fa";

function AccountProfile () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState();
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose()
    }

    const [showSecond, setShowSecond] = useState(false);
    const handleCloseSecond = () => setShowSecond(false);
    const handleShowSecond = () => setShowSecond(true);
    const [dataSecond, setDataSecond] = useState();
    const handleChangeSecond = (e) => setDataSecond({ ...dataSecond, [e.target.name]: e.target.value });
    const handleSubmitSecond = (e) => {
        e.preventDefault();
        handleCloseSecond()
    }
    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="justify-content-center my-5">
                    <Col md="8">
                        <Card className="shadow-sm p-5 mb-4">
                            <Card.Title className="textPrimary mb-4 fs-4">About Accountant</Card.Title>
                            <Card.Body>
                                <div className="d-flex align-items-center mb-4">
                                    <img src={jahed} alt="" width="100" height="100" className="rounded-3 me-3" />
                                    <div>
                                        <div className="d-flex justify-content-between align-items-start">
                                            <h5 className="fw-bold">Md Jahed Miah</h5>
                                            <FaRegEdit className="fs-5" onClick={handleShow} />
                                        </div>
                                        <small>Assistant Professor & Head (Acting) | Department of Computer science and engineering</small>
                                    </div>
                                </div>
                                <Row>
                                    <Col md="12">
                                        <Row>
                                            <Col md="4">
                                                <p className="text-lead">Name:</p>
                                                <p className="text-lead">Gender:</p>
                                                <p className="text-lead">Religion:</p>
                                                <p className="text-lead">ID:</p>
                                                <p className="text-lead">E-Mail:</p>
                                                <p className="text-lead">Phone:</p>
                                                <p className="text-lead">Adress::</p>
                                                <p className="text-lead">Joining Date:</p>
                                            </Col>
                                            <Col md="8">
                                                <p className="fw-bold">Md Jahed Miah</p>
                                                <p className="fw-bold">Male</p>
                                                <p className="fw-bold">Islam</p>
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
                                        <hr />
                                        <div className="my-3">
                                            <div className="d-flex justify-content-between align-items-start">
                                                <h3>Area of Study</h3>
                                                <FaRegEdit className="fs-5" onClick={handleShowSecond} />
                                            </div>
                                            <div>
                                                <p className="fw-bold">Biography </p>
                                                <p> I was born in Howapara, Sylhet, Bangladesh in 1978. I received the B.Sc. degree in Computer Science from East-West University, Dhaka, in 2001 and the M.Sc. degree in Computer Science from Umeå University, Umeå, Sweden in 2005. I am currently working as an Assistant Professor in the Dept. of CSE, Leading University, Sylhet. Besides that, I am pursuing a Ph.D. degree in computer science at Shahjalal University of Science and Technology (SUST), Sylhet, Bangladesh.
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Modal show={showSecond} onHide={handleCloseSecond} centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Area of Studies</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form onSubmit={handleSubmitSecond}>
                                                <Form.Floating className="mb-3">
                                                    <Form.Control type="text" onChange={handleChangeSecond} name="title" placeholder="Title" />
                                                    <label for="floatingInput">Title</label>
                                                </Form.Floating>
                                                <Form.Floating className="mb-3">
                                                    <Form.Control as="textarea" rows={3} onChange={handleChangeSecond} name="description" placeholder="Description" />
                                                    <label for="floatingInput">Description</label>
                                                </Form.Floating>
                                                <div className="bgSecondary text-center mt-4 rounded-3">
                                                    <input type="submit" value="Save Changes" className="btn w-100 text-white" onClick={handleClose} />
                                                </div>
                                            </Form>
                                        </Modal.Body>
                                    </Modal>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AccountProfile;
