import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({ email: '', password: '' });

    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin(true);
    }

    return (
        <Row className="d-flex justify-content-center">
            <Col md="6">
                <div className="mt-5 p-4">
                    <h2 className="text-center textPrimary">Login</h2>
                    <Form onSubmit={handleSubmit} className="shadow p-5">
                        <Form.Group className="mb-3">
                            <Form.Label>Enter Student Id or Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name={'email'} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name={'password'} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>

                        <div className="bgSecondary text-center mb-2">
                            <input type="submit" value="LOG IN" className="btn w-100 text-white" />
                        </div>
                        <div className="text-center">
                            <span className="textSecondary textHover">Forgot your password?</span>
                            <Link to="/signup" className="textSecondary textHover"> signup</Link>
                        </div>
                    </Form>
                </div>
            </Col>
        </Row>
    );
};

export default Login;