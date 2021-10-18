import React, { useEffect, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import Header from "../../Header/Header";
import MainNavbar from "../../MainNavbar/MainNavbar";
import { useHistory } from "react-router-dom";

const AdmissionSecondStep = () => {
    const history = useHistory();
    const [secondFormData, setSecondForm] = useState({ guardian_name: '', guardian_contact: '', present_address: '', permanent_address: '' });
    const handleChange = (e) => setSecondForm({ ...secondFormData, [e.target.name]: e.target.value })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(secondFormData)
    }
    useEffect(() => {
        setSecondForm(JSON.parse(localStorage.getItem('secondStep')))
    }, []);
    useEffect(() => {
        localStorage.setItem('secondStep', JSON.stringify(secondFormData))
    }, [secondFormData])
    return (
        <div>
            <Header />
            <MainNavbar />
            <Row className="justify-content-center">
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
                                            Admission for Undergraduate Programs
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
                                                            value={secondFormData?.guardian_name}
                                                            
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
                                                            value={secondFormData?.guardian_contact}
                                                            
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
                                                            
                                                            value={secondFormData?.permanent_address}
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
                                                            value={secondFormData?.present_address}
                                                            
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </fieldset>
                                        <hr />
                                    </Row>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <button className="btn bg-primary text-white px-5" type={'button'} onClick={() => history.push('/firstStep')}>
                                            Previous
                                        </button>
                                        <button className="btn bg-primary text-white px-5" type={'submit'} onClick={() => history.push('/finalStep')}>
                                            Next
                                        </button>
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

export default AdmissionSecondStep;
