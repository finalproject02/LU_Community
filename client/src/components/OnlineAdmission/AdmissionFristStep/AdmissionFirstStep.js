import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Header from "../../Header/Header";
import MainNavbar from "../../MainNavbar/MainNavbar";
import { useHistory } from "react-router-dom";
import {ApplicationFirstStep} from "../../../actions/applications";
import {useDispatch, useSelector} from "react-redux";
import {clearError} from "../../../actions/errors";

const AdmissionFirstStep = () => {
  const history = useHistory();
  const { message, field } = useSelector(state => state.errors);
  const dispatch = useDispatch()
  const [firstFormData, setFirstFormData] = useState({ program_name: '', applicant_email: '', applicant_name: '', applicant_birth_or_nid_number: '', applicant_fatherName: '', applicant_date_of_birth: '', applicant_father_occupation: '', applicant_gender: 'male', applicant_motherName: '', applicant_religion: 'islam', applicant_mother_occupation: '', applicant_nationality: '', father_or_mother_nid: '', applicant_marital_status: '', applicant_mobile: '', applicant_blood_group: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ApplicationFirstStep(firstFormData, history));
    dispatch(clearError())
    if (field === 'program_name' || field === 'applicant_name' || field === 'applicant_fatherName' || field === 'applicant_email' || field === 'nid_or_birth' || field === 'applicant_date_of_birth') {
      document.documentElement.scrollTop = 1
    }
  }
  const handleChange = (e) => setFirstFormData({ ...firstFormData, [e.target.name]: e.target.value });
  useEffect(() => {
    setFirstFormData(JSON.parse(localStorage.getItem('firstStep')))
  }, [])
  useEffect(() => {
    localStorage.setItem('firstStep', JSON.stringify(firstFormData))
  }, [firstFormData])
  const AreYouSure = () => {
    const confirm = window.confirm("Do you want close? if close it! Your data will lost")
    if (confirm) {
      localStorage.removeItem('firstStep')
      localStorage.removeItem('secondStep')
      localStorage.removeItem('finalStep')
      history.push('/');
      dispatch(clearError());
    }
  }
  return (
      <div>
        <Header />
        <MainNavbar />
        <Row className="justify-content-center">
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
                            Select the Program
                            <span className="text-danger fw-bolder">*</span>
                          </Form.Label>
                          {field === 'program_name' && (
                              <h6 style={{color: 'red'}}>{message}</h6>
                          )}

                          <Form.Select
                              className="w-100"
                              name="program_name"
                              onChange={handleChange}
                          >
                            <option value={firstFormData?.program_name}>{firstFormData?.program_name ? firstFormData?.program_name : '--select program--'}</option>
                            <option value="BBA">BBA</option>
                            <option value="CSE">CSE</option>
                            <option value="English">English</option>
                            <option value="EEE">EEE</option>
                            <option value="Civil">Civil</option>
                            <option value="Architecture">Architecture</option>
                            <option value="Law">Law</option>
                            <option value="Islamic Studies">Islamic Studies</option>
                            <option value="Public health">Public health</option>
                            <option value="Tourism and Hospitality Management">Tourism and Hospitality Management</option>
                            <option value="Bangla">Bangla</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Name of the Applicant (Full Name)
                            <span className="text-danger fw-bolder">*</span>
                          </Form.Label>
                          {field === 'applicant_name' && (
                              <h6 style={{color: 'red'}}>{message}</h6>
                          )}
                          <Form.Control
                              className="w-100"
                              type="text"
                              placeholder="applicant name"
                              name={'applicant_name'}
                              value={firstFormData?.applicant_name}
                              onChange={handleChange}

                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Applicant's Father Name (Full Name)
                            <span className="text-danger fw-bolder">*</span>
                          </Form.Label>
                          <br />
                          {field === 'applicant_fatherName' && (
                              <h6 style={{color: 'red'}}>{message}</h6>
                          )}
                          <Form.Control
                              type="text"
                              className="w-100"
                              placeholder="applicant father name"
                              name={'applicant_fatherName'}
                              onChange={handleChange}
                              value={firstFormData?.applicant_fatherName}

                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Applicant's Father's Occupation
                          </Form.Label>
                          <Form.Control
                              type="text"
                              className="w-100"
                              placeholder="applicant's father occupation"
                              onChange={handleChange}
                              value={firstFormData?.applicant_father_occupation}
                              name={'applicant_father_occupation'}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Applicant's Mother Name (Full Name)
                            <span className="text-danger fw-bolder">*</span>
                          </Form.Label>
                          {field === 'applicant_motherName' && (
                              <h6 style={{color: 'red'}}>{message}</h6>
                          )}
                          <Form.Control
                              type="text"
                              className="w-100"
                              placeholder="applicant's mother name"
                              name={'applicant_motherName'}
                              value={firstFormData?.applicant_motherName}
                              onChange={handleChange}

                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Applicant's Mother Occupation
                          </Form.Label>
                          <Form.Control
                              type="text"
                              className="w-100"
                              placeholder="applicant's mother occupation"
                              onChange={handleChange}
                              name={'applicant_mother_occupation'}
                              value={firstFormData?.applicant_mother_occupation}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Father's/Mother's NID No.
                            <span className="text-danger fw-bolder">*</span>
                          </Form.Label>
                          {field === 'father_or_mother_nid' && (
                              <h6 style={{color: 'red'}}>{message}</h6>
                          )}
                          <Form.Control
                              type="number"
                              className="w-100"
                              id="nid"
                              placeholder="father's/mother's nid"
                              name={'father_or_mother_nid'}
                              value={firstFormData?.father_or_mother_nid}
                              onChange={handleChange}

                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Applicant's Mobile
                            <span className="text-danger fw-bolder">*</span>
                          </Form.Label>
                          {field === 'applicant_mobile' && (
                              <h6 style={{color: 'red'}}>{message}</h6>
                          )}
                          <Form.Control
                              type="number"
                              className="w-100"
                              placeholder="applicant's mobile"
                              name={'applicant_mobile'}
                              onChange={handleChange}
                              value={firstFormData?.applicant_mobile}
                          />
                        </Form.Group>
                      </Col>
                      <Col md="6">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Applicant's Email
                            <span className="text-danger fw-bolder">*</span>
                          </Form.Label>
                          {field === 'applicant_email' && (
                              <h6 style={{color: 'red'}}>{message}</h6>
                          )}
                          <Form.Control
                              type="text"
                              className="w-100"
                              placeholder="applicant's email"
                              name={'applicant_email'}
                              onChange={handleChange}
                              value={firstFormData?.applicant_email}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Applicant's National ID / Birth Certificate No.
                            <span className="text-danger fw-bolder">*</span>
                          </Form.Label>
                          {field === 'nid_or_birth' && (
                              <h6 style={{color: 'red'}}>{message}</h6>
                          )}
                          <Form.Control
                              type="number"
                              className="w-100"
                              placeholder="applicant's nid/birth certificate no. "
                              onChange={handleChange}
                              name={'applicant_birth_or_nid_number'}
                              value={firstFormData?.applicant_birth_or_nid_number}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Applicant's Date of Birth
                            <span className="text-danger fw-bolder">*</span>
                          </Form.Label>
                          {field === 'applicant_date_of_birth' && (
                              <h6 style={{color: 'red'}}>{message}</h6>
                          )}

                          <Form.Control
                              type="date"
                              className="w-100"
                              id="applicant_birthday"
                              placeholder="applicant's date of birth"
                              onChange={handleChange}
                              name={'applicant_date_of_birth'}
                              value={firstFormData?.applicant_date_of_birth}
                              reqired
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Applicant's Gender
                          </Form.Label>
                          <Form.Select
                              className="w-100 "
                              name="applicant_gender"
                              onChange={handleChange}
                              value={firstFormData?.applicant_gender}
                              reqired
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Applicant's Religion
                          </Form.Label>
                          <Form.Select
                              className="w-100 "
                              name="applicant_religion"
                              onChange={handleChange}
                              value={firstFormData?.applicant_religion}
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
                              onChange={handleChange}
                              value={firstFormData?.applicant_nationality}

                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Applicant's Marital Status
                            <span className="text-danger fw-bolder">*</span>
                          </Form.Label>
                          <Form.Select
                              className="w-100"
                              name="applicant_marital_status"
                              onChange={handleChange}
                          >
                            <option>--select status--</option>
                            <option value="Married">Married</option>
                            <option value="Unmarried">Unmarried</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Applicant's Blood Group
                          </Form.Label>
                          <Form.Control
                              type="text"
                              className="w-100"
                              name="applicant_blood_group"
                              onChange={handleChange}
                              placeholder="applicant's blood group"
                              value={firstFormData?.applicant_blood_group}
                          />
                        </Form.Group>
                      </Col>
                      <hr />
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <button className="btn bg-primary text-white px-5" type={'button'} onClick={() => {
                        AreYouSure()
                      }}>Cancel</button>
                      <button className="btn bg-primary text-white px-5" type={'submit'}>Next</button>
                    </div>
                  </fieldset>
                </Form>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </div>
  );
};

export default AdmissionFirstStep;