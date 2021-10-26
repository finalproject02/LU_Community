import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const CourseDetails = () => {
    const params = useParams();
    const { id } = params;
    const { courses } = useSelector(state => state.departments);
    const courseDetails = courses?.filter(course => course._id === id);
    console.log(typeof id)
    console.log(courseDetails)
    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="d-flex justify-content-center mt-5">
                    <Col md="10">
                        <Card >
                            <Card.Title className="p-4 textPrimary">English Reading and Speaking</Card.Title>
                            <Card.Body>
                                <Row>
                                    <Col md="4">
                                        <p className="text-lead">Course Title:</p>
                                        <p className="text-lead">Course Code:</p>
                                        <p className="text-lead">Course Credit:</p>
                                        <p className="text-lead">Course Semester:</p>
                                        <p className="text-lead">Course Prerequisite:</p>
                                        <p className="text-lead">Course Teacher:</p>
                                        <p className="text-lead">Course Students:</p>
                                        <p className="text-lead">Course Curriculum:</p>
                                    </Col>
                                    {courseDetails?.map(course => (
                                        <Col md="8">
                                            <p className="fw-bold">{course.course_title}</p>
                                            <p className="fw-bold">{course.course_code}</p>
                                            <p className="fw-bold">{course.credit}</p>
                                            <p className="fw-bold">{course.semester}</p>
                                            <p className="fw-bold">{course.course_prerequisite}</p>
                                            <p className="fw-bold">Md Adil chow.</p>
                                            <p className="fw-bold">22</p>
                                            <p className="fw-bold">{course.curriculum}</p>
                                        </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;