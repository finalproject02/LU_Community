import React, {useState} from 'react';
import AdminNavbar from "../../AdminNavbar/AdminNavbar";
import {Card, Col, Container, Form, Row} from "react-bootstrap";

const AddSimpleStudent = () => {
    const [Data, setData] = useState({ name: '',id:'',semester:'',blood_group:'',section:'',dob:'',religion:'',present_address:'', email: '',phone:'',permanent_address:'' });
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => setData({ ...Data, [e.target.name]: e.target.value });
    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="justify-content-center">
                    <Col md="10">
                        <Card className="bg-light w-100 shadow rounded my-5">
                            <Card.Title className="p-4 textPrimary">Add New Student</Card.Title>
                            <Card.Body className="card-body">
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md="3">
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="name" placeholder="Name" />
                                                <label>Name</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="number" onChange={handleChange} name="id" placeholder="ID" />
                                                <label>ID</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="semester" placeholder="Semester" />
                                                <label>Semester</label>
                                            </Form.Floating>
                                        </Col>
                                        <Col md="3">
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="Gender" placeholder="Gender" />
                                                <label>Gender</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="blood_group" placeholder="Blood Group" />
                                                <label>Blood Group</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="section" placeholder="Section" />
                                                <label>Section</label>
                                            </Form.Floating>
                                        </Col>
                                        <Col md="3">
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="email" placeholder="Email" />
                                                <label>Email</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="phone" placeholder="Phone" />
                                                <label>Phone</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="permanent_address" placeholder="Permanent Address" />
                                                <label>Permanent Address</label>
                                            </Form.Floating>
                                        </Col>
                                        <Col md="3">
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="dob" placeholder="Date Of Birth" />
                                                <label>Date Of Birth</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="religion" placeholder="Religion" />
                                                <label>Religion</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="present_address" placeholder="Present Address" />
                                                <label>Present Address</label>
                                            </Form.Floating>
                                        </Col>
                                    </Row>
                                    <div className="px-3 text-end">
                                        <div>
                                            <input type="submit" value="Add Student" className="btn btn-success" />
                                        </div>
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

export default AddSimpleStudent;
