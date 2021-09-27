import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const SignupForm = () => {
    const [signup, setSignup] = useState(false);
    const [data, setData] = useState({
        studentName: '', studentEmail: '', studentId: '', password: '', confirmPassword: ''
    });
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSignup(true);
    }
    return (
        <div className="mt-5 p-4">
            <h2 className="text-center textPrimary">Signup</h2>
            <Form onSubmit={handleSubmit} className="shadow p-5">
                <Form.Group className="mb-3">
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name={'studentName'} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Student Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name={'studentEmail'} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Student Id</Form.Label>
                    <Form.Control type="number" placeholder="Enter id" name={'studentId'} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" name={'password'} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-5">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter confirm Password" name={'confirmPassword'} onChange={handleChange} required />
                </Form.Group>

                {/* <Button type="submit" className="btn btn-primary px-4">
                    LOG IN
                </Button> */}
                <div className="bgSecondary text-center">
                    <input type="submit" value="SIGN UP" className="btn w-100 text-white" />
                </div>

            </Form>
        </div>
    );
};

export default SignupForm;