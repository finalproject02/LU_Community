import React, {useState} from 'react';
import AdminNavbar from "../../AdminNavbar/AdminNavbar";
import {Card, Col, Container, Form, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {StudentAdd} from "../../../../actions/departments";
import {useParams} from "react-router-dom";

const AddSimpleStudent = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { id } = params;
    const { Types, message } = useSelector(state => state.errors);
    const { departments } = useSelector(state => state.departments);
    const currentDepartment = departments?.filter(department => department._id === id)
    const [data, setData] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        data.department = currentDepartment?.map(department => department.department_name).toString();
        dispatch(StudentAdd(data))
    }
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
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
                                    {Types === 'ADD_STUDENT_ERROR' && (
                                        <h6 style={{color: 'red'}}>{message}</h6>
                                    )}
                                    <Row>
                                        <Col md="3">
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="name" placeholder="Name" />
                                                <label>Name</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="number" onChange={handleChange} name="student_id" placeholder="ID" />
                                                <label>ID</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="semester" placeholder="Semester" />
                                                <label>Semester</label>
                                            </Form.Floating>
                                        </Col>
                                        <Col md="3">
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="gender" placeholder="Gender" />
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
                                                <Form.Control type="text" onChange={handleChange} name="mobile" placeholder="Phone" />
                                                <label>Phone</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="permanent_address" placeholder="Permanent Address" />
                                                <label>Permanent Address</label>
                                            </Form.Floating>
                                        </Col>
                                        <Col md="3">
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="date_of_birth" placeholder="Date Of Birth" />
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
