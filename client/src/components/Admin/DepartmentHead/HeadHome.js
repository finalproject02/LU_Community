import React from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import {useSelector} from "react-redux";

const HeadHome = () => {
    const history = useHistory();
    const { currentUser } = useSelector(state => state.auth);
    const { people } = useSelector(state => state.people);

    const semesterRegStudent = people?.filter(person => (person.status === 'semester_register_submitted') && (person.department === currentUser?.department))

    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="10">
                        <h2 className="text-center textSecondary my-2">Welcome Mr. Jahed!</h2>
                        <Row>
                            <Col md="4" className="mb-2">
                                <Link to="courseDetails" className="textHover text-dark">
                                    <Card className="mb-2 p-4 rounded-3 bg-info text-white">
                                        <Card.Body className="text-center">
                                            <h4>Total Course</h4>
                                            <small>40</small>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col md="4" className="mb-2">
                                <Link to="courseDetails" className="textHover text-dark">
                                    <Card className="mb-2 p-4 rounded-3 bg-success text-white">
                                        <Card.Body className="text-center">
                                            <h4>Total Student</h4>
                                            <small>222</small>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col md="4" className="mb-2">
                                <Link to="courseDetails" className="textHover text-dark">
                                    <Card className="mb-2 p-4 rounded-3 bg-info text-white">
                                        <Card.Body className="text-center">
                                            <h4>Total Teacher</h4>
                                            <small>22</small>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                        <Card className="mb-4">
                            <Card.Title className="textPrimary px-4 pt-4">New Semester Registration Request</Card.Title>
                            <Card.Body>
                                <Row className="d-flex justify-content-center">
                                    <Col md="12">
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Section</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Phone</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {semesterRegStudent?.map(req => (
                                                <tr style={{cursor: 'pointer'}} onClick={() => {history.push(`/semesterRegiDetails/${req._id}`)}}>
                                                    <td>{req.student_id}</td>
                                                    <td>{req.name}</td>
                                                    <td>B</td>
                                                    <td>{req.email}</td>
                                                    <td>{req.mobile}</td>
                                                </tr>
                                            ))}

                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Title className="textPrimary px-4 pt-4">Current taking Courses</Card.Title>
                            <Card.Body>
                                <Row>
                                    <Col md="4" className="mb-2">
                                        <Link to="/courseStudents" className="textHover text-dark">
                                            <Card className="rounded-3">
                                                <Card.Body className="text-center p-4">
                                                    <h4>English Reading and Speaking</h4>
                                                    <small>Eng-1111</small>
                                                    <p>1st semester</p>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                    <Col md="4" className="mb-2">
                                        <Link to="/courseStudents" className="textHover text-dark">
                                            <Card>
                                                <Card.Body className="text-center p-4 bg-light">
                                                    <h4>English Reading and Speaking</h4>
                                                    <small>Eng-1111</small>
                                                    <p>1st semester</p>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                    <Col md="4" className="mb-2">
                                        <Link to="/courseStudents" className="textHover text-dark">
                                            <Card className="rounded-3">
                                                <Card.Body className="text-center p-4 ">
                                                    <h4>English Reading and Speaking</h4>
                                                    <small>Eng-1111</small>
                                                    <p>1st semester</p>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                    <Col md="4" className="mb-2">
                                        <Link to="/courseStudents" className="textHover text-dark">
                                            <Card >
                                                <Card.Body className="text-center p-4 bg-light">
                                                    <h4>English Reading and Speaking</h4>
                                                    <small>Eng-1111</small>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                    <Col md="4" className="mb-2">
                                        <Link to="courseDetails" className="textHover text-dark">
                                            <Card className="rounded-3">
                                                <Card.Body className="text-center p-4">
                                                    <h4>English Reading and Speaking</h4>
                                                    <small>Eng-1111</small>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                    <Col md="4" className="mb-2">
                                        <Link to="courseDetails" className="textHover text-dark">
                                            <Card>
                                                <Card.Body className="text-center p-4 bg-light">
                                                    <h4>English Reading and Speaking</h4>
                                                    <small>Eng-1111</small>
                                                </Card.Body>
                                            </Card>
                                        </Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeadHome;