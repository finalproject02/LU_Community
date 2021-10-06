import React, { useState } from 'react';
import { Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { FaCalendar, FaEye, FaGlobe, FaRegEdit, FaTrashAlt, FaUsers } from 'react-icons/fa';

const AboutGroup = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showSecond, setShowshowSecond] = useState(false);
    const handleCloseSecond = () => setShowshowSecond(false);
    const handleShowSecond = () => setShowshowSecond(true);

    const [data, setData] = useState({ group_Name: '', group_Privacy: '', group_Visibility: '' });
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setData(true);
    }

    const [dataSecond, setDataSecond] = useState({ title: '', description: '' });
    const handleChangeSecond = (e) => setData({ ...dataSecond, [e.target.name]: e.target.value });
    const handleSubmitSecond = (e) => {
        e.preventDefault();
        setDataSecond(true);
    }
    return (
        <div>
            <Row className="d-flex justify-content-center">
                <Col md="8">
                    <Card className="w-100 mb-4">
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <Card.Title className="m-3">About Group</Card.Title>
                                <FaRegEdit className="m-3" onClick={handleShow} />
                            </div>
                            <hr />
                            <Card.Text className="p-3">
                                <Card.Text as="div">
                                    <h5>This is group for the 46th batch of CSE Department</h5>
                                </Card.Text>
                                <Card.Text as="div">
                                    <h6 className="pt-2">
                                        <FaGlobe className="me-2" />
                                        Public
                                    </h6>
                                    <p className="ms-4">Anyone can see who's in the group and what they post.</p>
                                </Card.Text>
                                <Card.Text as="div">
                                    <h6 className="pt-2">
                                        <FaEye className="me-2" />
                                        Visible
                                    </h6>
                                    <p className="ms-4">Anyone can find this group.</p>
                                </Card.Text>
                                <Card.Text as="div">
                                    <h6 className="pt-2">
                                        <FaCalendar className="me-2" />
                                        Created
                                    </h6>
                                    <p className="ms-4">05-Oct-21</p>
                                </Card.Text>
                                <Card.Text as="div">
                                    <h6 className="pt-2">
                                        <FaUsers className="me-2" />
                                        Total Members
                                    </h6>
                                    <p className="ms-4">21 members</p>
                                </Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="w-100">
                        <Card.Body>
                            <div className="d-flex justify-content-between">
                                <Card.Title className="m-3">Group rules from the admins</Card.Title>
                                <FaRegEdit className="m-3" onClick={handleShowSecond} />
                            </div>
                            <hr />
                            <Card.Text className="p-3">
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="pt-2">1. Be kind and courteous</h6>
                                        <FaTrashAlt />
                                    </div>
                                    <p>We're all in this together to create a welcoming environment. Let's treat everyone with respect. Healthy debates are natural, but kindness is required.</p>
                                </Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit About</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" placeholder="Group Name" onChange={handleChange} name="group_Name" />
                            <label for="floatingInput">Group Name</label>
                        </Form.Floating>
                        <Form.Select className="mb-3 py-2" onChange={handleChange} name="group_Privacy">
                            <option>Choose Privacy</option>
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </Form.Select>
                        <Form.Select className="mb-3 py-2" onChange={handleChange} name="group_Visibility">
                            <option>Choose Visibility</option>
                            <option value="visible">Visible</option>
                            <option value="hidden">Hidden</option>
                        </Form.Select>
                        <div className="bgSecondary text-center mt-4 rounded-3">
                            <input type="submit" value="Save Changes" className="btn w-100 text-white" onClick={handleClose} />
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>

            <Modal
                show={showSecond}
                onHide={handleCloseSecond}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Group Rules</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmitSecond}>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChangeSecond} name="title" />
                            <label for="floatingInput">Title</label>
                        </Form.Floating>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={handleChangeSecond} name="description" />
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

export default AboutGroup;