import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import { SignUp } from "../../actions/auth";

const SignupForm = () => {
    const { message } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const [signup, setSignup] = useState(false);
    const [isTeacher, setIsTeacher] = useState(false)
    const [data, setData] = useState();
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSignup(true);
        if (isTeacher) {
            data.isTeacher = true;
        }
        dispatch(SignUp(data))
    }
    return (
        <div className="mt-5 p-4">
            <h2 className="text-center textPrimary">Signup</h2>
            {message && <h3>{message}</h3>}
            <Form onSubmit={handleSubmit} className="shadow p-5">
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name={'name'} onChange={handleChange}  />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name={'email'} onChange={handleChange}  />
                </Form.Group>
                {isTeacher ? (
                    <>
                        <Form.Group className="mb-3">
                            <Form.Label>Department</Form.Label>
                            <Form.Control type="text" placeholder="Department" name={'department'} onChange={handleChange}  />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Position</Form.Label>
                            <Form.Control type="text" placeholder="Current Position" name={'current_position'} onChange={handleChange}  />
                        </Form.Group>
                    </>

                ): (
                    <Form.Group className="mb-3">
                        <Form.Label>Student Id</Form.Label>
                        <Form.Control type="number" placeholder="Enter id" name={'student_id'} onChange={handleChange}  />
                    </Form.Group>
                )}
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" name={'password'} onChange={handleChange}  />
                </Form.Group>
                <Form.Group className="mb-5">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter confirm Password" name={'confirmPassword'} onChange={handleChange}  />
                </Form.Group>
                <p onClick={()=> setIsTeacher(prevalue => !prevalue)}>{isTeacher ? 'Student Signup' : 'Teacher Signup' }</p>
                <div className="bgSecondary text-center">

                    <input type="submit" value="SIGN UP" className="btn w-100 text-white" />
                </div>

            </Form>
        </div>
    );
};

export default SignupForm;