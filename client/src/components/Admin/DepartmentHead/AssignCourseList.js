import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { FaTimesCircle, FaTrashAlt } from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {AssignTeacher} from "../../../actions/departments";


const AssignCourseList = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { id } = params;
    const { currentUser } = useSelector(state => state.auth);
    const { courses } = useSelector(state => state.departments);
    const { people } = useSelector(state => state.people);
    const teacherList = people?.filter(teacher => teacher.department === currentUser?.department && teacher.position === 'Teacher')
    const [teacherId, setTeacherId] = useState();
    const currentCourse = courses?.filter(course => course._id === id)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AssignTeacher(teacherId, id))
    }
    const getTeacherName = (TeacherId) => {
        const findTeacher = people?.filter(teacher => teacher._id === TeacherId);
        return findTeacher.map(teach => teach.name).toString()
    }

    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="10">
                        <Card className="mt-4">
                            <Card.Body className="p-2 text-center">
                                <Form onSubmit={handleSubmit} className="d-flex justify-content-center">
                                    <Form.Group className="mb-3 w-100">
                                        <Form.Select
                                            className="w-100"
                                            name="teacher_name"
                                            onChange={(e) => setTeacherId(e.target.value)}
                                        >
                                            <option value="cse">{currentCourse?.map(course => course.teacher).toString() ? getTeacherName(currentCourse?.map(course => course.teacher).toString()) : 'Assign Teacher'}</option>
                                            {teacherList?.map(teacher => (
                                                <option value={teacher._id}>{teacher.name}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                    <div>
                                        <input className="btn btn-primary" type="submit" value="Add" />
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

export default AssignCourseList;