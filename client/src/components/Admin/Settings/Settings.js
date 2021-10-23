import React, {useState} from 'react';
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import {Card, Col, Container, Form, Row} from "react-bootstrap";

const Settings = () => {
    const [data, setData] = useState();
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
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
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="text" onChange={handleChange} name="current_password" placeholder="Current Password" />
                                        <label>Current Password</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="text" onChange={handleChange} name="new-password" placeholder="New Password" />
                                        <label>New Password</label>
                                    </Form.Floating>
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="text" onChange={handleChange} name="confirm-password" placeholder="Confirm Password" />
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
