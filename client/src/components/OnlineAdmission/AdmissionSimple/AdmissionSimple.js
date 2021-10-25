import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../../Header/Header";
import MainNavbar from "../../MainNavbar/MainNavbar";

const AdmissionSimple = () => {
    const [data, setData] = useState({ name: '', phone: '', email: '', program_name: '', ssc_gpa: '', hsc_gpa: '', find_us: '' });
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <Header />
            <MainNavbar />
            <Container className="mt-5">
                <Row className="d-flex justify-content-center">
                    <Col md={8}>
                        <Card>
                            <Card.Title className="textPrimary px-4 text-center p-2 fs-4">Online Admission</Card.Title>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="text" onChange={handleChange} name="name"
                                            placeholder="Your name" />
                                        <label for="floatingInput">Your name</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="number" onChange={handleChange} name="phone"
                                            placeholder="Phone Number" />
                                        <label for="floatingInput">Phone Number</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="text" onChange={handleChange} name="email"
                                            placeholder="Email" />
                                        <label for="floatingInput">Email</label>
                                    </Form.Floating>
                                    <Form.Select
                                        className="w-100 mb-3 py-3"
                                        name="program_name"
                                        onChange={handleChange}
                                    >
                                        <option value="cse">Select Program</option>
                                        <option value="cse">BBA</option>
                                        <option value="cse">CSE</option>
                                        <option value="english">English</option>
                                        <option value="eee">EEE</option>
                                        <option value="civil">Civil</option>
                                        <option value="civil">Architecture</option>
                                        <option value="civil">Law</option>
                                        <option value="civil">Islamic Studies</option>
                                        <option value="civil">Public health</option>
                                        <option value="civil">Tourism and Hospitality Management</option>
                                        <option value="bangla">Bangla</option>
                                    </Form.Select>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="number" onChange={handleChange} name="ssc_gpa"
                                            placeholder="SSC GPA" />
                                        <label for="floatingInput">SSC GPA</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="number" onChange={handleChange} name="hsc_gpa"
                                            placeholder="HSC GPA" />
                                        <label for="floatingInput">HSC GPA</label>
                                    </Form.Floating>
                                    <Form.Select
                                        className="w-100 py-3"
                                        name="fine_us"
                                        onChange={handleChange}
                                    >
                                        <option value="cse">How Did You Find Us</option>
                                        <option value="cse">Via Friend</option>
                                        <option value="cse">via Internet</option>
                                        <option value="english">Via Newspaper</option>
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