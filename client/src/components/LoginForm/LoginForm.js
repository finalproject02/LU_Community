import React, {useEffect, useState} from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./LoginForm.css";
import {useDispatch, useSelector} from "react-redux";
import {SignIn} from "../../actions/auth";
import { useHistory } from "react-router-dom";
import ShowToast from "../../services/ShowToast";

const LoginForm = () => {
    const { message } = useSelector(state => state.auth)
    const history = useHistory();
    const dispatch = useDispatch();
    const [login, setLogin] = useState(false);
    const [data, setData] = useState({email: '', password: ''});

    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setLogin(true);
        dispatch(SignIn(data));

    }
    useEffect(() => {
        if (message) {
            ShowToast(3, message)
        }
    }, [message])
    return (
        <div className="mt-5 p-4">
            <h2 className="text-center textPrimary">Login</h2>
            <Form onSubmit={handleSubmit} className="shadow p-5">
                <Form.Group className="mb-3">
                    <Form.Label>Enter Student Id or Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name={'email'} onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name={'password'} onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <div className="bgSecondary text-center mb-2">
                    <input type="submit" value="LOG IN" className="btn w-100 text-white" />
                </div>
                <div className="text-center">
                    <Link to="#" className="textSecondary textHover">Forgot your password?</Link>
                </div>

            </Form>
        </div>
    );
};

export default LoginForm;