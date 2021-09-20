import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';

const AdmissionFinalStep = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md="8">
                    <Card className="bg-light w-100 shadow rounded my-5">
                        <Card.Body className="p-4">
                            <Form action="" method="post">
                                <fieldset>
                                    <Row>
                                        <legend>
                                            <h2 className="textPrimary">Academic Info.</h2>
                                        </legend>
                                        <h6 className="card-title textSecondary">Admission for Graduate Programs</h6>
                                        <div className="col-md-6">
                                            <fieldset>
                                                <legend>SSC Info.</legend>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Registration no.of SSC
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control type="text" className="w-100" id="ssc_regi"
                                                        placeholder="ssc registration number" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Name of the
                                                        Institution (SSC)
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control type="text" className="w-100"
                                                        id="ssc_inst_name" placeholder="ssc institution name" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Roll
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control type="text" className="w-100" id="ssc_roll"
                                                        placeholder="ssc roll" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Group
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control type="text" className="w-100" id="ssc_group"
                                                        placeholder="ssc group" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Year
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control type="text" className="w-100"
                                                        id="ssc_inst_year" placeholder="ssc year" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Board
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control type="text" className="w-100" id="ssc_board"
                                                        placeholder="ssc board" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>GPA
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control type="text" className="w-100" id="ssc_gpa"
                                                        placeholder="ssc gpa" />
                                                </Form.Group>
                                            </fieldset>
                                        </div>
                                        <Col md="6">
                                            <fieldset>
                                                <legend>HSC Info.</legend>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Registration no.of HSC
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control type="text" className="w-100" id="hsc_regi"
                                                        placeholder="hsc registration number" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Name of the
                                                        Institution (HSC)
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control type="text" className="w-100"
                                                        id="hsc_inst_name" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Roll
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control type="text" className="w-100" id="hsc_roll"
                                                        placeholder="hsc roll" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Group
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control type="text" className="w-100" id="hsc_group"
                                                        placeholder="hsc group" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Year
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control type="text" className="w-100"
                                                        id="hsc_inst_year" placeholder="hsc year" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Board
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control type="text" className="w-100" id="hsc_board"
                                                        placeholder="hsc board" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>GPA
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control type="text" className="w-100" id="hsc_gpa"
                                                        placeholder="hsc gpa" />
                                                </Form.Group>
                                            </fieldset>
                                        </Col>
                                    </Row>
                                </fieldset>
                                <fieldset>
                                    <Row>
                                        <legend>Upload Documents</legend>
                                        <Col md="6">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Upload Applicant's Photo
                                                    (Max 1 MB)
                                                    <span className="text-danger fw-bolder">*</span></Form.Label>
                                                <Form.Control type="file" className="w-100" id="applicant_photo" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Upload Guardian's Photo
                                                    (Max 1 MB)
                                                    <span className="text-danger fw-bolder">*</span></Form.Label>
                                                <Form.Control type="file" className="w-100" id="guardian_photo" />
                                            </Form.Group>
                                        </Col>
                                        <Col md="6">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Upload SSC Transcript
                                                    (Max 1 MB)
                                                    <span className="text-danger fw-bolder">*</span></Form.Label>
                                                <Form.Control type="file" className="w-100" id="ssc_transcript" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Upload HSC Transcript
                                                    (Max 1 MB)
                                                    <span className="text-danger fw-bolder">*</span></Form.Label>
                                                <Form.Control type="file" className="w-100" id="hsc_transcript" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </fieldset>
                                <hr />
                                <div className="text-end">
                                    <a href="#" className="btn bg-primary text-white px-5">Submit</a>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AdmissionFinalStep;