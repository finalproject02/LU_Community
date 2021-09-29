import React, { useState } from 'react';
import { Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBlog, FaBook, FaGraduationCap, FaHome, FaPhone, FaRegComment, FaRegEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {updateProfile} from "../../../actions/auth";

const ProfileIntro = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.auth)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [save, setSave] = useState(false);
    const [data, setData] = useState();
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSave(true);
        dispatch(updateProfile(data))
    }
    return (
        <div>
            <Card className="mb-4 rounded-3">
                <Card.Body>
                    <Card.Text as="div" className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title pt-2">Intro</h5>
                        <FaRegEdit className="fs-5" onClick={handleShow} />
                    </Card.Text>
                    <hr />
                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaBook className="fs-5" />
                        <p className="card-text ps-2 fs-6">{currentUser?.current_position}
                        </p>
                    </Card.Text>
                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaGraduationCap className="fs-1 me-2" />
                        <p className="card-text fs-6">Studying at {currentUser?.department} at Leading
                            University, Sylhet</p>
                    </Card.Text>
                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaBook className="fs-5" />
                        <p className="card-text ps-2 fs-6"><span>{currentUser?.batch}</span></p>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaHome className="fs-5" />
                        <p className="card-text ps-2 fs-6">Lives in {currentUser?.present_address}</p>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaHome className="fs-5" />
                        <p className="card-text ps-2 fs-6">From {currentUser?.permanent_address}</p>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaBlog className="fs-5" />
                        <p className="card-text ps-2 fs-6"><span>{currentUser?.connections}</span> followers</p>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaBlog className="fs-5" />
                        <p className="card-text ps-2 fs-6">Joined <span>{moment(currentUser?.createdAt).format('dddd, MMMM Do YYYY')}</span></p>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaRegComment className="fs-5" />
                        <Link to="#" className="textHover">
                            <p className="card-text ps-2 fs-6 textPrimary">Send Message</p>
                        </Link>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-3">
                        <FaPhone className="fs-5" />
                        <Link to="#" className="textHover">
                            <p className="card-text ps-2 fs-6 textPrimary">{currentUser?.mobile}</p>
                        </Link>
                    </Card.Text>
                    <div className="bgPrimary text-center rounded-3">
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
                                <Form.Control defaultValue={currentUser?.current_position} type="text" onChange={handleChange} name="current_position" />
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md="12">
                                <h6 className="">Department</h6>
                                <Form.Control defaultValue={currentUser?.department} type="text" onChange={handleChange} name="department" />
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md="12">
                                <h6 className="">Batch</h6>
                                <Form.Control type="text" defaultValue={currentUser?.batch} onChange={handleChange} name="batch" />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md="6">
                                <h6 className="">Home Town</h6>
                                <Form.Control type="text" defaultValue={currentUser?.permanent_address} onChange={handleChange} name="permanent_address" />
                            </Col>
                            <Col md="6">
                                <h6 className="">Current Town</h6>
                                <Form.Control type="text" defaultValue={currentUser?.present_address} onChange={handleChange} name="present_address" />
                            </Col>
                        </Row>
                        <Row className="bgSecondary text-center m-2 rounded-3">
                            <input type="submit" value="Save Changes" className="btn w-100 text-white" onClick={handleClose} />
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ProfileIntro;