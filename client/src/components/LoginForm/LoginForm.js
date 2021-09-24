import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import "./LoginForm.css";

const LoginForm = () => {
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({
        emailorid: '', password: ''
    });
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin(true);
    }
    return (
        <div className="mt-5 p-4">
            <h2 className="text-center textPrimary">Login</h2>
            <Form onSubmit={handleSubmit} className="shadow p-5">
                <Form.Group className="mb-3">
                    <Form.Label>Enter Student Id or Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name={'emailorid'} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name={'password'} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                {/* <Button type="submit" className="btn btn-primary px-4">
                    LOG IN
                </Button> */}
                <div className="bgSecondary w-100 text-center">
                    <input type="submit" value="LOG IN" className="btn text-white" />
                </div>

            </Form>
        </div>
    );
};

export default LoginForm;