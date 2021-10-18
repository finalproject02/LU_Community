import React, { useEffect, useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Signup = () => {
    const [signup, setSignup] = useState(false);
    const [data, setData] = useState();
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSignup(true);
    }
    return (
        <Row className="d-flex justify-content-center mt-5">
            <Col md="6">
                <h2 className="text-center textPrimary">Signup</h2>
                <Form onSubmit={handleSubmit} className="shadow p-5">
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name={'name'} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name={'email'} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Department</Form.Label>
                        <Form.Control type="text" placeholder="Department" name={'department'} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Designation</Form.Label>
                        <Form.Control type="text" placeholder="Designation" name={'designation'} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" name={'password'} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-5">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter confirm Password" name={'confirmPassword'} onChange={handleChange} />
                    </Form.Group>
                    <div className="bgSecondary text-center">
                        <input type="submit" value="SIGN UP" className="btn w-100 text-white" />
                    </div>
                </Form>
            </Col>
        </Row>
    );
};

export default Signup;