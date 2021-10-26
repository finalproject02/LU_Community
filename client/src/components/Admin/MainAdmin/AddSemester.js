import React, { useState } from 'react';
import { Card, Form, Container, Row, Col } from "react-bootstrap";
import Switch from "react-switch";
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const AddSemester = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(true);
    }
    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="8">
                        <Card className="mt-4">
                            <Card.Title className="textPrimary px-4 pt-4">Add Semester</Card.Title>
                            <Card.Body className="">
                                <Form className="">
                                    <Form.Floating className="mb-3">
                                        <Form.Control type="text" onChange={handleChange} name="add_year" placeholder="Add Year" />
                                        <label>Add Year</label>
                                    </Form.Floating>
                                    <div className="bgSecondary text-center mt-4 rounded-3">
                                        <input type="submit" value="Add" className="btn w-100 text-white" />
                                    </div>
                                </Form>
                                <div className="p-4">
                                    <h4>Switch on current Semester</h4>
                                    <label className="d-flex mb-2">
                                        <span className="me-2">Spring-2021</span>
                                        <Switch onClick={handleChange} />
                                    </label>
                                    <label className="d-flex mb-2">
                                        <span className="me-2">Summer-2021</span>
                                        <Switch onClick={handleChange} />
                                    </label>
                                    <label className="d-flex mb-2">
                                        <span className="me-2">Fall-2021</span>
                                        <Switch onClick={handleChange} checked={false} />
                                    </label>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default AddSemester;
