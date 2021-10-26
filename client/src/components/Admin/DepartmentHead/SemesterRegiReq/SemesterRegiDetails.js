import React from 'react';
import { Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import AdminNavbar from '../../AdminNavbar/AdminNavbar';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const SemesterRegiDetails = () => {
    const params = useParams();
    const { id } = params;
    const { semesters } = useSelector(state => state.departments);
    const { people } = useSelector(state => state.people);
    const studentInfo = people?.filter(person => person._id === id)
    const registerCourses = semesters?.filter(semester => semester.studentDocId === id)
    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="justify-content-center my-5">
                    <Col md="8">
                        <Card className="shadow-sm p-5">
                            <Card.Title className="text-center textPrimary mb-4 fs-4">Semester Registration</Card.Title>
                            <Card.Body>
                                <div className="mb-2">
                                    <Row>
                                        <Col md="6">
                                            <h6><span className="text-lead">Name:</span>{studentInfo?.map(student => student.name)}</h6>
                                            <h6><span className="text-lead">ID:</span>{studentInfo?.map(student => student.student_id)}</h6>
                                        </Col>
                                        <Col md="6">
                                            <h6><span className="text-lead">Semester:</span> 1st</h6>
                                            <h6><span className="text-lead">Batch:</span> 46<sup>th</sup></h6>
                                            <h6><span className="text-lead">Section:</span> B</h6>
                                        </Col>
                                    </Row>
                                </div>
                                <h4 className="card-text">Taken Courses</h4>
                                <Table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Course Title</th>
                                            <th scope="col">Course Code</th>
                                            <th scope="col">Credit</th>
                                            <th scope="col">Section</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {registerCourses?.map(course => (
                                        <tr>
                                            <td>{course.course_title}</td>
                                            <td>{course.course_code}</td>
                                            <td>{course.credit}</td>
                                            <td className="form-group">
                                                <select name id className="form-control">
                                                    <option value={1}>{course.semester}</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))}

                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={2}>Total Credit</td>
                                            <td>{registerCourses.map(c => c.credit).reduce((total, num) => { return total + num })}</td>
                                        </tr>
                                    </tfoot>
                                </Table>
                            </Card.Body>
                            <Col md="12">
                                <h3 className="text-center textSecondary mb-4">Registration Summary</h3>
                                <Row>
                                    <Col md="4">
                                        <Card class="p-3">
                                            <Card.Body>
                                                <Card.Title className="text-center fs-5">Regular Credits</Card.Title>
                                                <p className="text-center textSecondary fs-2">{registerCourses.map(c => c.credit).reduce((total, num) => { return total + num })}</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md="4">
                                        <Card class="p-3">
                                            <Card.Body>
                                                <Card.Title className="text-center fs-5">Regular Credits</Card.Title>
                                                <p className="text-center textSecondary fs-2">{registerCourses.map(c => c.credit).reduce((total, num) => { return total + num })}</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md="4">
                                        <Card class="p-3">
                                            <Card.Body>
                                                <Card.Title className="text-center fs-5">Regular Credits</Card.Title>
                                                <p className="text-center textSecondary fs-2">{registerCourses.map(c => c.credit).reduce((total, num) => { return total + num })}</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md="4">
                                        <Card class="p-3">
                                            <Card.Body>
                                                <Card.Title className="text-center fs-5">Tuition Fees</Card.Title>
                                                <p className="text-center textSecondary fs-2">৳ 4,275.00</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md="4">
                                        <Card class="p-3">
                                            <Card.Body>
                                                <Card.Title className="text-center fs-5">Other Fees</Card.Title>
                                                <p className="text-center textSecondary fs-2">৳ 5,000.00</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md="4">
                                        <Card class="p-3">
                                            <Card.Body>
                                                <Card.Title className="text-center fs-5">Total Fees</Card.Title>
                                                <p className="text-center textSecondary fs-2">৳ 9,275.00</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Card.Footer>
                                <p className="text-muted mt-4">Waiver of 25% applied to the tution fees of regular courses.</p>
                            </Card.Footer>
                            <div className="my-2 text-center bgSecondary rounded-3">
                                <span href="#" className="btn text-white">Approve</span>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SemesterRegiDetails;