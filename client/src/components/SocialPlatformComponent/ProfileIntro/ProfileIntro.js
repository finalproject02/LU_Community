import React, { useState } from 'react';
import { Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBlog, FaBook, FaGraduationCap, FaHome, FaPhone, FaRegComment, FaRegEdit } from 'react-icons/fa';
import { useSelector } from "react-redux";

const ProfileIntro = () => {
    const { currentUser } = useSelector(state => state.auth)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [save, setSave] = useState(false);
    const [data, setData] = useState({
        position: '', education: '', batch: '', homeTown: '', currentTown: ''
    });
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSave(true);
    }
    return (
        <div>
            <Card className="mb-4">
                <Card.Body>
                    <Card.Text as="div" className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title pt-2">Intro</h5>
                        <FaRegEdit className="fs-5" onClick={handleShow} />
                    </Card.Text>
                    <hr />
                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaBook className="fs-5" />
                        <p className="card-text ps-2 fs-5">Full stack web developer
                        </p>
                    </Card.Text>
                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaGraduationCap className="fs-1 me-2" />
                        <p className="card-text fs-5">Studying at Computer Science & Engineering at Leading
                            University, Sylhet</p>
                    </Card.Text>
                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaBook className="fs-5" />
                        <p className="card-text ps-2 fs-5"><span>46</span>th batch</p>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaHome className="fs-5" />
                        <p className="card-text ps-2 fs-5">Lives in Sylhet</p>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaHome className="fs-5" />
                        <p className="card-text ps-2 fs-5">From Sylhet</p>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaBlog className="fs-5" />
                        <p className="card-text ps-2 fs-5"><span>{currentUser?.followings.length+1}</span> followers</p>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaBlog className="fs-5" />
                        <p className="card-text ps-2 fs-5">Joined<span>September 2021</span></p>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaRegComment className="fs-5" />
                        <Link to="#" className="anchor">
                            <p className="card-text ps-2 fs-5">Send Message</p>
                        </Link>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-3">
                        <FaPhone className="fs-5" />
                        <Link to="#" className="anchor">
                            <p className="card-text ps-2 fs-5"> 01719-373476</p>
                        </Link>
                    </Card.Text>
                    <div className="bgSecondary text-center">
                        <Link to="#" className="btn w-100 text-white">View More</Link>
                    </div>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit intro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit} className="pt-3 mb-1">
                        <Row className="mb-2">
                            <Col md="12">
                                <h6 className="">Position</h6>
                                <Form.Control type="text" onChange={handleChange} name="position" />
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md="12">
                                <h6 className="">Education</h6>
                                <Form.Control type="text" onChange={handleChange} name="education" />
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md="12">
                                <h6 className="">Batch</h6>
                                <Form.Control type="text" onChange={handleChange} name="batch" />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md="6">
                                <h6 className="">Home Town</h6>
                                <Form.Control type="text" onChange={handleChange} name="homeTown" />
                            </Col>
                            <Col md="6">
                                <h6 className="">Current Town</h6>
                                <Form.Control type="text" onChange={handleChange} name="currentTown" />
                            </Col>
                        </Row>
                        <Row className="bgSecondary text-center m-2">
                            <input type="submit" value="Save Changes" className="btn w-100 text-white" onClick={handleClose} />
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ProfileIntro;