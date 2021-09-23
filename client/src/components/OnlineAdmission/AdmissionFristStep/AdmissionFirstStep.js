import React, {useState} from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import AdmissionSecondStep from "../AdmissionSecondStep/AdmissionSecondStep";

const AdmissionFirstStep = () => {
  const [firstStep, setFirstStep] = useState(false);
  const [firstFormData, setFirstFormData] = useState({ program_name: 'css', applicant_email: '', applicant_name: '', applicant_birth_or_nid_number: '', applicant_fatherName: '', applicant_date_of_birth: '', applicant_father_occupation: '', applicant_gender: 'male', applicant_motherName: '', applicant_religion: 'islam', applicant_mother_occupation: '', applicant_nationality: '', father_or_mother_nid: '', applicant_marital_status: '', applicant_mobile: '', applicant_blood_group: ''});
  const handleChane = (e) => setFirstFormData({...firstFormData, [e.target.name]: e.target.value});
  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstStep(true)
  }
  return (
    <Container>
      <Row className="justify-content-center">
        {!firstStep ?
            <Col md="8">
              <Card className="card w-100 shadow-sm rounded my-5">
                <Card.Body className="card-body p-4">
                  <Form onSubmit={handleSubmit}>
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
                                name="program_name"
                                onChange={handleChane}
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
                                placeholder="applicant name"
                                name={'applicant_name'}
                                onChange={handleChane}
                                required
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
                                placeholder="applicant father name"
                                name={'applicant_fatherName'}
                                onChange={handleChane}
                                required
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
                                placeholder="applicant's father occupation"
                                onChange={handleChane}
                                name={'applicant_father_occupation'}
                                required
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
                                placeholder="applicant's mother name"
                                name={'applicant_motherName'}
                                onChange={handleChane}
                                required
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
                                placeholder="applicant's mother occupation"
                                onChange={handleChane}
                                name={'applicant_mother_occupation'}
                                required
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                              Father's/Mother's NID No.
                              <span className="text-danger fw-bolder">*</span>
                            </Form.Label>
                            <Form.Control
                                type="number"
                                className="w-100"
                                id="nid"
                                placeholder="father's/mother's nid"
                                name={'father_or_mother_nid'}
                                onChange={handleChane}
                                required
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                              Applicant's Mobile
                              <span className="text-danger fw-bolder">*</span>
                            </Form.Label>
                            <Form.Control
                                type="number"
                                className="w-100"
                                placeholder="applicant's mobile"
                                name={'applicant_mobile'}
                                onChange={handleChane}
                                required
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
                                placeholder="applicant's email"
                                name={'applicant_email'}
                                onChange={handleChane}
                                required
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                              Applicant's National ID / Birth Certificate No.
                              <span className="text-danger fw-bolder">*</span>
                            </Form.Label>
                            <Form.Control
                                type="number"
                                className="w-100"
                                placeholder="applicant's nid/birth certificate no. "
                                onChange={handleChane}
                                name={'applicant_birth_or_nid_number'}
                                required
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
                                onChange={handleChane}
                                name={'applicant_date_of_birth'}
                                required
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                              Applicant's Gender
                              <span className="text-danger fw-bolder">*</span>
                            </Form.Label>
                            <Form.Select
                                className="w-100 "
                                name="applicant_gender"
                                onChange={handleChane}
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
                                name="applicant_religion"
                                onChange={handleChane}
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
                                placeholder="applicant's nationality"
                                name={'applicant_nationality'}
                                onChange={handleChane}
                                required
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
                                name="applicant_marital_status"
                                onChange={handleChane}
                                placeholder="applicant's marital status"
                                required
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
                                name="applicant_blood_group"
                                onChange={handleChane}
                                placeholder="applicant's blood group"
                                required
                            />
                          </Form.Group>
                        </Col>
                        <hr />
                      </div>
                      <div className="text-end">
                        <button className="btn bg-primary text-white px-5" type={'submit'}>
                          Next
                        </button>
                      </div>
                    </fieldset>
                  </Form>
                </Card.Body>
              </Card>
            </Col> : <AdmissionSecondStep firstFormData={firstFormData}/>

        }
      </Row>
    </Container>
  );
};

export default AdmissionFirstStep;
