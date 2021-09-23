import React, { useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import AdmissionFinalStep from "../AdmissionFinalStep/AdmissionFinalStep";

const AdmissionSecondStep = ({ firstFormData }) => {
    const [secondStep, setSecondStep] = useState(false);
    const [secondFormData, setSecondForm] = useState({ guardian_name: '', guardian_contact: '', present_address: '', permanent_address: '' });
    const handleChange = (e) => setSecondForm({ ...firstFormData, ...secondFormData, [e.target.name]: e.target.value })
    const handleSubmit = (e) => {
        e.preventDefault();
        setSecondStep(true)
    }
    return (
        <Container>
            <Row className="justify-content-center">
                {!secondStep ?
                    <Col md="8">
                        <Card className="w-100 shadow-sm rounded my-5">
                            <Card.Body className="p-4">
                                <Form onSubmit={handleSubmit}>
                                    <fieldset>
                                        <Row>
                                            <legend>
                                                <h2 className="textPrimary">Residential Info.</h2>
                                            </legend>
                                            <h6 className="card-title textSecondary">
                                                Admission for Graduate Programs
                                            </h6>
                                            <fieldset>
                                                <Row>
                                                    <legend>Guardian's Info.</legend>
                                                    <Col md="6">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>
                                                                Guardian's Name
                                                                <span className="text-danger fw-bolder">*</span>
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                placeholder="guardian's name"
                                                                name={'guardian_name'}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md="6">
                                                        <Form.Group
                                                            className="mb-3">
                                                            <Form.Label>
                                                                Guardian's Contact No
                                                                <span className="text-danger fw-bolder">*</span>
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                id="g_contact"
                                                                placeholder="guardian's contact no"
                                                                name={'guardian_contact'}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </fieldset>
                                            <fieldset>
                                                <Row>
                                                    <legend>Address</legend>
                                                    <Col md="6">
                                                        <Form.Group
                                                            className="mb-3">
                                                            <Form.Label>
                                                                Permanent Address
                                                                <span className="text-danger fw-bolder">*</span>
                                                            </Form.Label>
                                                            <Form.Control
                                                                className="w-100"
                                                                as="textarea"
                                                                rows={5}
                                                                onChange={handleChange}
                                                                name={'permanent_address'}
                                                                required
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md="6">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label> Present Address
                                                                <span className="text-danger fw-bolder">*</span>
                                                            </Form.Label>
                                                            <Form.Control
                                                                className="w-100"
                                                                as="textarea"
                                                                rows={5}
                                                                onChange={handleChange}
                                                                name={'present_address'}
                                                                required
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </fieldset>
                                            <hr />
                                        </Row>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <button className="btn bg-primary text-white px-5" type={'button'}>
                                                Previous
                                            </button>
                                            <button className="btn bg-primary text-white px-5" type={'submit'}>
                                                Next
                                            </button>
                                        </div>
                                    </fieldset>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col> : <AdmissionFinalStep secondFormData={secondFormData} />
                }
            </Row>
        </Container>
    );
};

export default AdmissionSecondStep;
