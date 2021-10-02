import React from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';

const AboutModal = ({ show, handleClose, value, valueType, showInput, handleInputClose }) => {

    return (
        <div>
            {
                show &&
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="pt-3 mb-1">
                            <Row className="mb-2">
                                <Col md="12">
                                    <h6 className="">{value.first}</h6>
                                    <Form.Control type="text" />
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col md="12">
                                    <h6 className="">Department</h6>
                                    <Form.Control type="text" />
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col md="12">
                                    <h6 className="">Field of Study</h6>
                                    <Form.Control type="text" />
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md="6">
                                    <h6 className="">Start date</h6>
                                    <Form.Control type="date" />
                                </Col>
                                <Col md="6">
                                    <h6 className="">End date</h6>
                                    <Form.Control type="date" />
                                </Col>
                            </Row>
                            <Row className="bgSecondary text-center m-2 rounded-3">
                                <input type="submit" value="Save Changes" className="btn w-100 text-white" onClick={handleClose} />
                            </Row>
                        </Form>
                    </Modal.Body>
                </Modal>
            }
            <Modal show={showInput} onHide={handleInputClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="pt-3 mb-1">
                        <Row className="mb-2">
                            <Col md="12">
                                <h6 className="">{value.title}</h6>
                                <Form.Control type={valueType} />
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

export default AboutModal;