import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../Header/Header";
import MainNavbar from "../MainNavbar/MainNavbar";



const PaymentDemo = () => {
    const [data, setData] = useState({ reference_number: '', payment_mount: '' });
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
                            <Card.Title className="textPrimary px-4 text-center p-2 fs-4">Admission Payment</Card.Title>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="number" onChange={handleChange} name="reference_number"
                                            placeholder="Reference Number" />
                                        <label for="floatingInput">Reference Number</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="text" onChange={handleChange} name="payment_mount"
                                            placeholder="Payment Amount" />
                                        <label for="floatingInput">Payment Amount"</label>
                                    </Form.Floating>
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

export default PaymentDemo;