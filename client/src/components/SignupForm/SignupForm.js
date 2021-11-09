import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { SignUp } from "../../actions/auth";
import {useHistory} from "react-router-dom";

const SignupForm = () => {
    const history = useHistory();
    const { message, Types } = useSelector(state => state.errors);
    const { departments } = useSelector(state => state.departments);
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false)

    const [signup, setSignup] = useState(false);
    const [isTeacher, setIsTeacher] = useState(false);
    const [data, setData] = useState();
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSignup(true);
        if (isTeacher) {
            data.isTeacher = true;
        }
        if (Types === 'SIGNUP_ERROR') {
            document.documentElement.scrollTop = 0
        }

        if (data.password !== data.confirmPassword) {
            alert("Those passwords didn't match. Try again.")
        }
        dispatch(SignUp(data, history));
    }
    return (
        <div className="mt-5 p-4">
            <h2 className="text-center textPrimary">Student Signup</h2>
            {Types === 'SIGNUP_ERROR' && <h6>{message}</h6>}
            <Form onSubmit={handleSubmit} className="shadow p-5">
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name={'name'} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name={'email'} onChange={handleChange} />
                </Form.Group>
                {isTeacher ? (
                    <>
                        <Form.Group className="mb-3">
                            <Form.Label>Teacher Id</Form.Label>
                            <Form.Control type="text" placeholder="Teacher Id" name={'teacher_id'} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" placeholder="Designation" name={'designation'} onChange={handleChange} />
                        </Form.Group>
                    </>

                ) : (
                    <Form.Group className="mb-3">
                        <Form.Label>Student Id</Form.Label>
                        <Form.Control type="number" placeholder="Enter id" name={'student_id'} onChange={handleChange} />
                    </Form.Group>
                )}
                <Form.Select
                    className="w-100 mb-3"
                    name="department"
                    onChange={handleChange}
                >
                    <option value="cse">Select Program</option>
                    {departments?.map(department => (
                        <option value={department.department_name}>{department.department_name}</option>
                    ))}
                </Form.Select>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={showPassword ? "text" : "password"} placeholder="Enter password" name={'password'} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-5">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type={showPassword ? "text" : "password"} placeholder="Enter confirm Password" name={'confirmPassword'} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Show password" onClick={() => setShowPassword((prevalue) => !prevalue)}/>
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