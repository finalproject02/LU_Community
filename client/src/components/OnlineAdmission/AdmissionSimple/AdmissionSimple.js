import React, { useState } from 'react';
import Header from "../../Header/Header";
import MainNavbar from "../../MainNavbar/MainNavbar";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {CreateReference} from "../../../actions/applications";

const AdmissionSimple = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({});
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const { departments } = useSelector(state => state.departments);
    const {Types, message} = useSelector(state => state.errors)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(CreateReference(data))
    }
    return (
        <div>
            <Header/>
            <MainNavbar/>
            <Container className="mt-5">
                <Row className="d-flex justify-content-center">
                    <Col md={8}>
                        <Card>
                            <Card.Title className="textPrimary px-4 text-center p-2 fs-4">Online Admission</Card.Title>
                            <Card.Body>
                                {Types === 'CREATE_REFERENCE_ERROR' && (
                                    <h6 style={{color: 'red'}}>{message}</h6>
                                )}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="text" onChange={handleChange} name="name"
                                            placeholder="Your name" />
                                        <label for="floatingInput">Your name</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="number" onChange={handleChange} name="mobile"
                                            placeholder="Phone Number" />
                                        <label for="floatingInput">Phone Number</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="text" onChange={handleChange} name="email"
                                            placeholder="Email" />
                                        <label for="floatingInput">Email</label>
                                    </Form.Floating>
                                    <Form.Select
                                        className="w-100 mb-3"
                                        name="program_name"
                                        onChange={handleChange}
                                    >
                                        <option value="cse">Select Program</option>
                                        {departments?.map(department => (
                                            <option value={department.department_name}>{department.department_name}</option>
                                        ))}
                                    </Form.Select>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="number" onChange={handleChange} name="ssc_gpa" step={'any'}
                                            placeholder="SSC GPA" />
                                        <label for="floatingInput">SSC GPA</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="number" onChange={handleChange} name="hsc_gpa"
                                            placeholder="HSC GPA" step={'any'} />
                                        <label for="floatingInput">HSC GPA</label>
                                    </Form.Floating>
                                    <Form.Select
                                        className="w-100"
                                        name="via"
                                        onChange={handleChange}
                                    >
                                        <option value="cse">How Did You Find Us</option>
                                        <option value="Via Friend">Via Friend</option>
                                        <option value="via Internet">via Internet</option>
                                        <option value="Via Newspaper">Via Newspaper</option>
                                    </Form.Select>
                                    <div className="bgPrimary text-center mt-4 rounded-3">
                                        <input type="submit" value="Send" className="btn w-100 text-white" />
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AdmissionSimple;