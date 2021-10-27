import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Header from "../../Header/Header";
import MainNavbar from "../../MainNavbar/MainNavbar";
import { useHistory } from "react-router-dom";
import {ApplicationFirstStep} from "../../../actions/applications";
import {useDispatch, useSelector} from "react-redux";
import {clearError} from "../../../actions/errors";

const AdmissionFirstStep = () => {
  const { departments } = useSelector(state =>  state.departments)
  const history = useHistory();
  const { message, field } = useSelector(state => state.errors);
  const dispatch = useDispatch()
  const [firstFormData, setFirstFormData] = useState({ department: '',  birth_or_nid_number: '', father_name: '', date_of_birth: '',  gender: '', mother_name: '', religion: '', nationality: '',  marital_status: '', blood_group: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ApplicationFirstStep(firstFormData, history));
    dispatch(clearError())
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
                            Select the Department
                            <span className="text-danger fw-bolder">*</span>
                          </Form.Label>
                          {field === 'department' && (
                              <h6 style={{color: 'red'}}>{message}</h6>
                          )}

                          <Form.Select
                              className="w-100"
                              name="department"
                              onChange={handleChange}
                          >
                            <option value={firstFormData?.department}>{firstFormData?.department ? firstFormData?.department : '--select program--'}</option>
                            {departments?.map(department => (
                                <option value={department.department_name}>{department.department_name}</option>
                            ))}

                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Father Name (Full Name)
                            <span className="text-danger fw-bolder">*</span>
                          </Form.Label>
                          <br />
                          {field === 'father_name' && (
                              <h6 style={{color: 'red'}}>{message}</h6>
                          )}
                          <Form.Control
                              type="text"
                              className="w-100"
                              placeholder="applicant father name"
                              name={'father_name'}
                              onChange={handleChange}
                              value={firstFormData?.father_name}

                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                             Mother Name (Full Name)
                            <span className="text-danger fw-bolder">*</span>
                          </Form.Label>
                          {field === 'mother_name' && (
                              <h6 style={{color: 'red'}}>{message}</h6>
                          )}
                          <Form.Control
                              type="text"
                              className="w-100"
                              placeholder="applicant's mother name"
                              name={'mother_name'}
                              value={firstFormData?.mother_name}
                              onChange={handleChange}

                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Marital Status
                            <span className="text-danger fw-bolder">*</span>
                          </Form.Label>
                          <Form.Select
                              className="w-100"
                              name="marital_status"
                              onChange={handleChange}
                          >
                            <option>--select status--</option>
                            <option value="Married">Married</option>
                            <option value="Unmarried">Unmarried</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Blood Group
                          </Form.Label>
                          <Form.Control
                              type="text"
                              className="w-100"
                              name="blood_group"
                              onChange={handleChange}
                              placeholder="applicant's blood group"
                              value={firstFormData?.blood_group}
                          />
                        </Form.Group>
                      </Col>
                      <Col md="6">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            National ID / Birth Certificate No.
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
                              name={'birth_or_nid_number'}
                              value={firstFormData?.birth_or_nid_number}
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Applicant's Date of Birth
                            <span className="text-danger fw-bolder">*</span>
                          </Form.Label>
                          {field === 'date_of_birth' && (
                              <h6 style={{color: 'red'}}>{message}</h6>
                          )}

                          <Form.Control
                              type="date"
                              className="w-100"
                              id="applicant_birthday"
                              placeholder="applicant's date of birth"
                              onChange={handleChange}
                              name={'date_of_birth'}
                              value={firstFormData?.date_of_birth}
                              reqired
                          />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Gender
                          </Form.Label>
                          <Form.Select
                              className="w-100 "
                              name="gender"
                              onChange={handleChange}
                              value={firstFormData?.gender}
                              reqired
                          >
                            <option>--select gender--</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                           Religion
                          </Form.Label>
                          <Form.Select
                              className="w-100 "
                              name="religion"
                              onChange={handleChange}
                              value={firstFormData?.religion}
                          >
                            <option>--select religion--</option>
                            <option value="islam">Islam</option>
                            <option value="chirstian">Chirstian</option>
                            <option value="hindu">Hindu</option>
                            <option value="buddist">Buddist</option>
                            <option value="other">Other</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>
                            Nationality
                            <span className="text-danger fw-bolder">*</span>
                          </Form.Label>
                          <Form.Control
                              type="text"
                              className="w-100"
                              placeholder="applicant's nationality"
                              name={'nationality'}
                              onChange={handleChange}
                              value={firstFormData?.nationality}

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