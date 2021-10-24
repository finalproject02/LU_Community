import React, {useState} from 'react';
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import {Card, Col, Container, Form, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {ChangePassword} from "../../../actions/auth";

const Settings = () => {
    const [data, setData] = useState({password: '', newPassword: '', confirmPassword: ''});
    const dispatch = useDispatch();
    const { Types, message } = useSelector(state => state.errors)
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        dispatch(ChangePassword(data));
    }
    return (
        <div>
            <AdminNavbar/>
            <Container className="mt-5">
                <Row className="d-flex justify-content-center">
                    <Col md={8}>
                        <Card>
                            <Card.Title className={"p-4 textPrimary"}>Change Password</Card.Title>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    {Types === 'CHANGE_PASSWORD_ERROR' && (
                                        <h6 style={{color: 'red'}}>{message}</h6>
                                    )}
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="password" onChange={handleChange} name="password" placeholder="Current Password" />
                                        <label>Current Password</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="password" onChange={handleChange} name="newPassword" placeholder="New Password" />
                                        <label>New Password</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="password" onChange={handleChange} name="confirmPassword" placeholder="Confirm Password" />
                                        <label>Confirm Password</label>
                                    </Form.Floating>
                                    <div className="bgSecondary text-center mt-4 rounded-3">
                                        <input type="submit" value="Save Changes" className="btn w-100 text-white"  />
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

export default Settings;
