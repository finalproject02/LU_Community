import React, { useState } from 'react';
import jahed from "../../images/jahed.jpg";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Button from '@restart/ui/esm/Button';

const StudentDetails = () => {
    const [value, setValue] = useState("");


    const checkResults = () => {

    }
    const handleSubmit = () => {

    }

    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col md="10">
                        <Card className="bg-light w-100 shadow rounded my-5">
                            <Card.Body className="card-body">
                                <Form onSubmit={handleSubmit}>
                                    <fieldset>
                                        <legend>
                                            <h2 className="textPrimary">
                                                Leading University Admission Form
                                            </h2>
                                        </legend>
                                        <h6 className="card-title textSecondary">
                                            Admission for Undergraduate Programs
                                        </h6>
                                        <hr className="mt-5" />
                                        <fieldset>
                                            <Row>
                                                <legend>Basic Info.</legend>
                                                <Col md="6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Selected Program</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Full Name of the Applicant</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Father Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Father's Occupation</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Mother Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Mother Occupation</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Father's/Mother's NID No.</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Mobile</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Email</Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's National ID / Birth Certificate No.
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Date of Birth
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Gender </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Religion</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Nationality</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Marital Status</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Blood Group</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </fieldset>
                                        <hr />
                                        <fieldset>
                                            <Row>
                                                <legend>Guardian's Info.</legend>
                                                <Col md="6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Guardian's Name and Address
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Guardian's Contact No</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            value={value}
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </fieldset>
                                        <hr />
                                        <fieldset>
                                            <Row>
                                                <legend>Address</legend>
                                                <Col md="6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Permanent Address</Form.Label>
                                                        <Form.Control as="textarea" className="w-100" name="Permanent_Address" rows={4} value={value} />
                                                    </Form.Group>
                                                </Col>
                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Present Address
                                                        </Form.Label>
                                                        <Form.Control as="textarea" className="w-100" name="Present_Address" rows={4} value={value} />
                                                    </Form.Group>
                                                </div>
                                            </Row>
                                        </fieldset>
                                        <hr />
                                        <fieldset>
                                            <Row>
                                                <legend>Academic Info.</legend>
                                                <Col md="6">
                                                    <fieldset>
                                                        <legend>SSC Info.</legend>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Registration no. of SSC</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={value}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Name of the Institution (SSC)</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={value}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Roll</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={value}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Group</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={value}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label >Year</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={value}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Board</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={value}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>GPA</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={value}
                                                            />
                                                        </Form.Group>
                                                        <div className="mt-3 mb-1">
                                                            <Button className="btn bg-success" onClick={checkResults}
                                                            >Check SSC Result</Button>
                                                        </div>
                                                        <small className="text-success">
                                                            <FaCheckCircle></FaCheckCircle>
                                                            The result is matched
                                                        </small>
                                                        <br />
                                                        <small className="text-danger d-none">
                                                            <FaTimesCircle></FaTimesCircle>
                                                            The result is not matched
                                                        </small>
                                                    </fieldset>
                                                </Col>
                                                <div className="col-md-6">
                                                    <fieldset>
                                                        <legend>HSC Info.</legend>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Registration no. of HSC</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={value}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Name of the Institution (HSC)
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={value}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Roll</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={value}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Group</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={value}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Year</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={value}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Board</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={value}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>GPA</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={value}
                                                            />
                                                        </Form.Group>

                                                        <div className="mt-3 mb-1">
                                                            <Button className="btn bg-success" onClick={checkResults}
                                                            >Check HSC Result</Button>
                                                        </div>
                                                        <small className="text-success">
                                                            <FaCheckCircle></FaCheckCircle>
                                                            The result is matched
                                                        </small>
                                                        <br />
                                                        <small className="text-danger d-none">
                                                            <FaTimesCircle></FaTimesCircle>
                                                            The result is not matched
                                                        </small>
                                                    </fieldset>
                                                </div>
                                            </Row>
                                        </fieldset>
                                        <hr />
                                        <fieldset>
                                            <Row>
                                                <legend>Documents</legend>
                                                <Col md="6" className="d-flex justify-content-center document">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Photo</Form.Label>
                                                        <Card.Img
                                                            src={jahed}
                                                            className="img-fluid w-75 p-2 img-thumbnail"
                                                            alt="image_name"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Guardian's Photo</Form.Label>
                                                        <Card.Img
                                                            src={jahed}
                                                            className="img-fluid w-75 p-2 img-thumbnail"
                                                            alt="image_name"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6" className="d-flex justify-content-center">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>SSC Transcript</Form.Label>
                                                        <Card.Img
                                                            src={jahed}
                                                            className="img-fluid w-75 p-2 img-thumbnail"
                                                            alt="image_name"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>HSC Transcript</Form.Label>
                                                        <Card.Img
                                                            src={jahed}
                                                            className="img-fluid w-75 p-2 img-thumbnail"
                                                            alt="image_name"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </fieldset>
                                        <br />
                                        <div className="d-flex justify-content-between px-3">
                                            <div>
                                                <input type="submit" value="Reject Request" className="btn btn-danger" />
                                            </div>
                                            <div>
                                                <input type="submit" value="Accept Request" className="btn btn-success" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default StudentDetails;