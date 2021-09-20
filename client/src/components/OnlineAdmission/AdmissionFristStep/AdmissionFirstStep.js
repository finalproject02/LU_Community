import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

const AdmissionFirstStep = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="8">
          <Card className="card w-100 shadow-sm rounded my-5">
            <Card.Body className="card-body p-4">
              <Form faction="" method="post">
                <fieldset>
                  <div className="row">
                    <legend>
                      <h2 className="textPrimary">Basic Info.</h2>
                    </legend>
                    <h6 className="card-title textSecondary">
                      Admission for Graduate Programs
                    </h6>
                    <Col md="6">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Form.Select the Program
                          <span className="text-danger fw-bolder">*</span>
                        </Form.Label>
                        <Form.Select
                          className="w-100"
                          name="program"
                          id="program"
                        >
                          <option value="cse">CSE</option>
                          <option value="eee">EEE</option>
                          <option value="civil">Civil</option>
                          <option value="english">English</option>
                          <option value="bangla">Bangla</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Name of the Applicant (Full Name)
                          <span className="text-danger fw-bolder">*</span>
                        </Form.Label>
                        <Form.Control
                          className="w-100"
                          type="text"
                          id="name"
                          placeholder="applicant name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Applicant's Father Name (Full Name)
                          <span className="text-danger fw-bolder">*</span>
                        </Form.Label>
                        <br />
                        <Form.Control
                          type="text"
                          className="w-100"
                          id="f_name"
                          placeholder="applicant father name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Applicant's Father's Occupation
                          <span className="text-danger fw-bolder">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="w-100"
                          id="f_occupation"
                          placeholder="applicant's father occupation"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Applicant's Mother Name (Full Name)
                          <span className="text-danger fw-bolder">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="w-100"
                          id="m_name"
                          placeholder="applicant's mother name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Applicant's Mother Occupation
                          <span className="text-danger fw-bolder">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="w-100"
                          id="m_occupation"
                          placeholder="applicant's mother occupation"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Father's/Mother's NID No.
                          <span className="text-danger fw-bolder">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="w-100"
                          id="nid"
                          placeholder="father's/mother's nid"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Applicant's Mobile
                          <span className="text-danger fw-bolder">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="w-100"
                          id="applicant_mobile"
                          placeholder="applicant's mobile"
                        />
                      </Form.Group>
                    </Col>
                    <Col md="6">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Applicant's Email
                          <span className="text-danger fw-bolder">*</span>
                        </Form.Label>
                        <Form.Control
                          type="email"
                          className="w-100"
                          id="applicant's email"
                          placeholder="applicant's email"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Applicant's National ID / Birth Certificate No.
                          <span className="text-danger fw-bolder">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="w-100"
                          id="applicant's_nid_birth"
                          placeholder="applicant's nid/birth certificate no. "
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Applicant's Date of Birth
                          <span className="text-danger fw-bolder">*</span>
                        </Form.Label>
                        <Form.Control
                          type="date"
                          className="w-100"
                          id="applicant_birthday"
                          placeholder="applicant's date of birth"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Applicant's Gender
                          <span className="text-danger fw-bolder">*</span>
                        </Form.Label>
                        <Form.Select
                          className="w-100 "
                          name="program"
                          id="pplicant_gender"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Applicant's Religion
                          <span className="text-danger fw-bolder">*</span>
                        </Form.Label>
                        <Form.Select
                          className="w-100 "
                          name="program"
                          id="applicant_religion"
                        >
                          <option value="islam">Islam</option>
                          <option value="chirstian">Chirstian</option>
                          <option value="hindu">Hindu</option>
                          <option value="buddist">Buddist</option>
                          <option value="other">Other</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Applicant's Nationality
                          <span className="text-danger fw-bolder">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="w-100"
                          id="applicant_nationality"
                          placeholder="applicant's nationality"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Applicant's Marital Status
                          <span className="text-danger fw-bolder">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="w-100"
                          id="applicant_marital"
                          placeholder="applicant's marital status"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Applicant's Blood Group
                          <span className="text-danger fw-bolder">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="w-100"
                          id="applicant_bloodgrp"
                          placeholder="applicant's blood group"
                        />
                      </Form.Group>
                    </Col>
                    <hr />
                  </div>
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

export default AdmissionFirstStep;
