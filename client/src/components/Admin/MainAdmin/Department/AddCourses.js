import React, { useState } from 'react';
import { Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import AdminNavbar from '../../AdminNavbar/AdminNavbar';
import {useDispatch, useSelector} from "react-redux";
import {courseAdd} from "../../../../actions/departments";
import {clearError} from "../../../../actions/errors";
import {useParams} from "react-router-dom";

const AddCourses = () => {
    const params = useParams();
    const { Types, message } = useSelector(state => state.errors);
    const { courses, departments } = useSelector(state => state.departments);

    const { id } = params;
    const currentDepartment = departments?.filter(department => department._id === id);
    const currentDepartmentCourses = courses?.filter(course => course.department_id === id);

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        dispatch(clearError())
    }
    const handleShow = () => setShow(true);

    const [data, setData] = useState({});
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        data.department_id = id;
        data.department_name = currentDepartment?.map(department => department.department_name).toString();
        console.log(data)
        dispatch(courseAdd(data, handleClose))
    }
    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="d-flex justify-content-center mt-5">
                    <Col md="10">
                        <Card>
                            <Card.Body>
                                <div className="bgPrimary text-center rounded-3">
                                    <span className="btn w-100 cursor text-white" onClick={handleShow}>Add Course</span>
                                </div>
                                <Card.Text as="div" className="mt-4">
                                    {currentDepartmentCourses?.map(course => (
                                        <Card className="mb-2">
                                            <Card.Body>
                                                <p><span className="fw-bold">Course Title:</span> {course.course_title}</p>
                                                <p><span className="fw-bold">Course Code:</span> {course.course_code}</p>
                                                <p><span className="fw-bold">Course Credit:</span> {course.credit}</p>
                                                <p><span className="fw-bold">Course Semester:</span> {course.semester}</p>
                                                {course.course_prerequisite && (
                                                    <p><span className="fw-bold">Course Prerequisite:</span> {course.course_prerequisite}</p>
                                                )}
                                                {course.curriculum && (
                                                    <p><span className="fw-bold">Course Curriculum:</span> {course.curriculum}</p>
                                                )}
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        {Types === 'ADD_COURSE_ERROR' && (
                            <h6 style={{color: 'red'}}>{message}</h6>
                        )}
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="course_title" placeholder="Course Title" />
                            <label for="floatingInput">Course Title</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="course_code" placeholder="Course Code" />
                            <label for="floatingInput">Course Code</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="credit" placeholder="Credit" />
                            <label for="floatingInput">Credit</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="number" onChange={handleChange} name="semester" placeholder="Semester" />
                            <label for="floatingInput">Semester</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="curriculum" placeholder="Curriculum" />
                            <label for="floatingInput">Curriculum</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="course_prerequisite" placeholder="Prerequisite" />
                            <label for="floatingInput">Prerequisite</label>
                        </Form.Floating>
                        <div className="bgSecondary text-center mt-4 rounded-3">
                            <input type="submit" value="Save Changes" className="btn w-100 text-white"/>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AddCourses;