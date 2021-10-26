import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Header from "../Header/Header";
import MainNavbar from "../MainNavbar/MainNavbar";
import {useDispatch, useSelector} from "react-redux";
import {PPayment} from "../../actions/applications";

const PaymentDemo = () => {
    const dispatch = useDispatch();
    const { Types, message } = useSelector(state => state.errors)
    const [data, setData] = useState({ reference_no: '', amount: '' });
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(PPayment(data))
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
                                    {Types === "PAYMENT_ERROR" && (
                                        <h6 style={{color: 'red'}}>{message}</h6>
                                    )}
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="number" onChange={handleChange} name="reference_no"
                                            placeholder="Reference Number" />
                                        <label for="floatingInput">Reference No</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="text" onChange={handleChange} name="amount"
                                            placeholder="Payment Amount" />
                                        <label for="floatingInput">Amount</label>
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