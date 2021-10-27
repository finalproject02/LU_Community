import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { Col, Container, Row, Table } from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const CourseStudent = () => {
    const params = useParams();
    const { id } = params;
    const { courses, semesters } = useSelector(state => state.departments);
    const courseInfo = courses.filter(course => course._id === id);
    const studentInfo = semesters.filter(student => student.course_title === courseInfo.map(info => info.course_title).toString() && student.status === 'Approve');
    return (
        <div>
            <AdminNavbar />
            <Container>
                {courseInfo.map(course => <h2 className="text-center my-2 textPrimary">Course Title: {course.course_title} <br /> Course Code: {course.course_code}</h2>)}
                <Row className="d-flex justify-content-center mt-4 overflow-scroll">
                    <Col md="10">
                        <Table striped bordered hover>
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">ID</th>
                                    <th scope="col" className="px-5">Name</th>
                                    <th scope="col" colSpan="4">Mark</th>
                                    <th scope="col">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                            {studentInfo.map(student => (
                                <tr>
                                    <td>{student.student_id}</td>
                                    <td>{student.student_name}</td>
                                    <td>
                                        <input className="form-control w-75" type="text" name placeholder="Attendence" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Assignment" /></td>
                                    <td colSpan="">
                                        <input className="form-control w-75" type="text" name placeholder="Mid" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Final" /></td>

                                    <td><button className="btn btn-success mr-5 rounded-3" href="#">Submit</button></td>
                                </tr>
                            ))}

                            </tbody>
                        </Table>
                        <div className="row">
                            <div className="col-md-12 text-end">

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default CourseStudent;