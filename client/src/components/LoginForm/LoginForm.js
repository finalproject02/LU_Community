import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./LoginForm.css";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "../../actions/auth";
import { useHistory } from "react-router-dom";
import { clearError } from "../../actions/errors";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { message, Types } = useSelector(state => state.errors);
    const history = useHistory();
    const dispatch = useDispatch();
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({ email: '', password: '' });

    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin(true);
        if (Types === 'SIGN_IN_ERROR') {
            document.documentElement.scrollTop = 0
        }
        dispatch(SignIn(data, history));

    }
    useEffect(() => {
        dispatch(clearError())
    }, [])
    return (
        <div className="mt-5 p-4">
            <h2 className="text-center textPrimary">Login</h2>
            <Form onSubmit={handleSubmit} className="shadow p-5">
                {Types === 'SIGN_IN_ERROR' && <h6 style={{ color: 'red' }}>{message}</h6>}
                <Form.Group className="mb-3">
                    <Form.Label>Enter Student Id or Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name={'email'} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={showPassword ? "text": "password"} placeholder="Password" name={'password'} onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Show password" onClick={() => setShowPassword((prevalue) => !prevalue)}/>
                </Form.Group>

                <div className="bgSecondary text-center mb-2">
                    <input type="submit" value="LOG IN" className="btn w-100 text-white" />
                </div>
                <div className="text-center">
                    <span className="textSecondary textHover">Don't have an account?</span>
                    <Link to="signup" className="textSecondary textHover"> signup</Link>
                </div>

            </Form>
        </div>
    );
};

export default LoginForm;