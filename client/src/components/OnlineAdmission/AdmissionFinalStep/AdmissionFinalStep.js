import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import admissionSuccessful from '../admissionSuccessful/admissionSuccessful';

const AdmissionFinalStep = ({ secondFormData }) => {
    const [finalStep, setFinalStep] = useState(false);
    const [finalFormData, setFinalFormData] = useState({ sscRegino: '', ssc_inst_name: '', ssc_roll: '', ssc_group: '', ssc_year: '', ssc_board: '', ssc_gpa: '', hscRegino: '', hsc_inst_name: '', hsc_roll: '', hsc_group: '', hscc_year: '', hsc_board: '', hsc_gpa: '', applicant_photo: '', guardian_photo: '', ssc_transcript: '', hsc_transcript: '' });

    const handleChange = (e) => setFinalFormData({ ...secondFormData, ...finalFormData, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault();
        setFinalStep(true)
    }

    return (
        <Container>
            <Row className="justify-content-center">
                {
                    !finalStep ?
                        <Col md="8">
                            <Card className="bg-light w-100 shadow rounded my-5">
                                <Card.Body className="p-4">
                                    <Form onSubmit={handleSubmit}>
                                        <fieldset>
                                            <Row>
                                                <legend>
                                                    <h2 className="textPrimary">Academic Info.</h2>
                                                </legend>
                                                <h6 className="card-title textSecondary">Admission for Graduate Programs</h6>
                                                <div className="col-md-6">
                                                    <fieldset>
                                                        <legend>SSC Info.</legend>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Registration no.of SSC
                                                                <span className="text-danger fw-bolder">*</span></Form.Label>
                                                            <Form.Control onChange={handleChange} type="text" className="w-100" name={'sscRegino'}
                                                                placeholder="ssc registration number" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Name of the
                                                                Institution (SSC)
                                                                <span className="text-danger fw-bolder">*</span></Form.Label>
                                                            <Form.Control onChange={handleChange} type="text" className="w-100"
                                                                name={"ssc_inst_name"} placeholder="ssc institution name" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Roll
                                                                <span className="text-danger fw-bolder">*</span></Form.Label>
                                                            <Form.Control onChange={handleChange} type="text" className="w-100" name={"ssc_roll"}
                                                                placeholder="ssc roll" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3"   >
                                                            <Form.Label>Group
                                                                <span className="text-danger fw-bolder">*</span></Form.Label>
                                                            <Form.Control onChange={handleChange} type="text" className="w-100" name={"ssc_group"}
                                                                placeholder="ssc group" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3"   >
                                                            <Form.Label>Year
                                                                <span className="text-danger fw-bolder">*</span></Form.Label>
                                                            <Form.Control onChange={handleChange} type="text" className="w-100"
                                                                name={"ssc_year"} placeholder="ssc year" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3"   >
                                                            <Form.Label>Board
                                                                <span className="text-danger fw-bolder">*</span></Form.Label>
                                                            <Form.Control onChange={handleChange} type="text" className="w-100" name={"ssc_board"}
                                                                placeholder="ssc board" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3"   >
                                                            <Form.Label>GPA
                                                                <span className="text-danger fw-bolder">*</span></Form.Label>
                                                            <Form.Control onChange={handleChange} type="text" className="w-100" name={"ssc_gpa"}
                                                                placeholder="ssc gpa" />
                                                        </Form.Group>
                                                    </fieldset>
                                                </div>
                                                <Col md="6">
                                                    <fieldset>
                                                        <legend>HSC Info.</legend>
                                                        <Form.Group className="mb-3"   >
                                                            <Form.Label>Registration no.of HSC
                                                                <span className="text-danger fw-bolder">*</span></Form.Label>
                                                            <Form.Control onChange={handleChange} type="text" className="w-100" name={"hsc_regi"}
                                                                placeholder="hsc registration number" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3"   >
                                                            <Form.Label>Name of the
                                                                Institution (HSC)
                                                                <span className="text-danger fw-bolder">*</span></Form.Label>
                                                            <Form.Control onChange={handleChange} type="text" className="w-100"
                                                                name={"hsc_inst_name"} placeholder="hsc_inst_name" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3"   >
                                                            <Form.Label>Roll
                                                                <span className="text-danger fw-bolder">*</span></Form.Label>
                                                            <Form.Control onChange={handleChange} type="text" className="w-100" name={"hsc_roll"}
                                                                placeholder="hsc roll" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3"   >
                                                            <Form.Label>Group
                                                                <span className="text-danger fw-bolder">*</span></Form.Label>
                                                            <Form.Control onChange={handleChange} type="text" className="w-100" name={"hsc_group"}
                                                                placeholder="hsc group" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3"   >
                                                            <Form.Label>Year
                                                                <span className="text-danger fw-bolder">*</span></Form.Label>
                                                            <Form.Control onChange={handleChange} type="text" className="w-100"
                                                                name={"hsc_year"} placeholder="hsc year" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3"   >
                                                            <Form.Label>Board
                                                                <span className="text-danger fw-bolder">*</span></Form.Label>
                                                            <Form.Control onChange={handleChange} type="text" className="w-100" name={"hsc_board"}
                                                                placeholder="hsc board" />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3"   >
                                                            <Form.Label>GPA
                                                                <span className="text-danger fw-bolder">*</span></Form.Label>
                                                            <Form.Control onChange={handleChange} type="text" className="w-100" name={"hsc_gpa"}
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
                                                    <Form.Group className="mb-3"   >
                                                        <Form.Label>Upload Applicant's Photo
                                                            (Max 1 MB)
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control onChange={handleChange} type="file" className="w-100" name={"applicant_photo"} />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3"   >
                                                        <Form.Label>Upload Guardian's Photo
                                                            (Max 1 MB)
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control onChange={handleChange} type="file" className="w-100" name={"guardian_photo"} />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="mb-3"   >
                                                        <Form.Label>Upload SSC Transcript
                                                            (Max 1 MB)
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control onChange={handleChange} type="file" className="w-100" name={"ssc_transcript"} />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3"   >
                                                        <Form.Label>Upload HSC Transcript
                                                            (Max 1 MB)
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control onChange={handleChange} type="file" className="w-100" name={"hsc_transcript"} />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </fieldset>
                                        <hr />
                                        <div className="d-flex align-items-center justify-content-between">
                                            <button className="btn bg-primary text-white px-5" type={'submit'}>
                                                Prev
                                            </button>
                                            <button className="btn bg-primary text-white px-5" type={'submit'}>
                                                Next
                                            </button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col> : <admissionSuccessful finalFormData={finalFormData}></admissionSuccessful>
                }
            </Row>
        </Container>
    );
};

export default AdmissionFinalStep;