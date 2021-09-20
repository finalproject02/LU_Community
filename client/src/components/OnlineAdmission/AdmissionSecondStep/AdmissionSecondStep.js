import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

const AdmissionSecondStep = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md="8">
                    <Card className="w-100 shadow-sm rounded my-5">
                        <Card.Body className="p-4">
                            <Form action="" method="post">
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
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>
                                                            Guardian's Name
                                                            <span className="text-danger fw-bolder">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            id="g_name"
                                                            placeholder="guardian's name"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="formBasicEmail"
                                                    >
                                                        <Form.Label>
                                                            Guardian's Contact No
                                                            <span className="text-danger fw-bolder">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            id="g_contact"
                                                            placeholder="guardian's contact no"
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
                                                        className="mb-3"
                                                        controlId="formBasicEmail"
                                                    >
                                                        <Form.Label>
                                                            Permanent Address
                                                            <span className="text-danger fw-bolder">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            className="w-100"
                                                            as="textarea"
                                                            rows={5}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="formBasicEmail"
                                                    >
                                                        <Form.Label>
                                                            Present Address
                                                            <span className="text-danger fw-bolder">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            className="w-100"
                                                            as="textarea"
                                                            rows={5}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </fieldset>
                                        <hr />
                                    </Row>
                                    <div className="text-end">
                                        <a href="#" className="btn bg-primary text-white px-5">
                                            Next
                                        </a>
                                    </div>
                                </fieldset>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AdmissionSecondStep;
