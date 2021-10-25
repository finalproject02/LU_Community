import React from 'react';
import {Card, Col, Container, Form, Row, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const AdmissionHome = () => {
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
                                            <h4>Total Admission</h4>
                                            <small>222</small>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col md="4" className="mb-2">
                                <Link to="courseDetails" className="textHover text-dark">
                                    <Card className="mb-2 p-4 rounded-3 bg-info text-white">
                                        <Card.Body className="text-center">
                                            <h4>New Request</h4>
                                            <small>22</small>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                        <Card className="mb-4">
                            <Card.Title className="textPrimary px-4 pt-4">New Admission Request</Card.Title>
                            <Card.Body>
                                <Row className="d-flex justify-content-center">
                                    <Col md="12">
                                        <Table striped bordered hover>
                                            <thead>
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Department</th>
                                                <th scope="col">Refrence Number</th>
                                                <th scope="col">Payment</th>
                                                <th scope="col">Approve</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Md Jahed Miah</td>
                                                <td>mdjahedahmed12@gmail.com</td>
                                                <td>0179713005</td>
                                                <td>CSE</td>
                                                <td>12345678</td>
                                                <td>20000</td>
                                                <td>
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check type="checkbox" />
                                                    </Form.Group>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Md Jahed Miah</td>
                                                <td>mdjahedahmed12@gmail.com</td>
                                                <td>0179713005</td>
                                                <td>CSE</td>
                                                <td>12345678</td>
                                                <td>20000</td>
                                                <td>
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check type="checkbox" />
                                                    </Form.Group>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Md Jahed Miah</td>
                                                <td>mdjahedahmed12@gmail.com</td>
                                                <td>0179713005</td>
                                                <td>CSE</td>
                                                <td>12345678</td>
                                                <td>20000</td>
                                                <td>
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check type="checkbox" />
                                                    </Form.Group>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Md Jahed Miah</td>
                                                <td>mdjahedahmed12@gmail.com</td>
                                                <td>0179713005</td>
                                                <td>CSE</td>
                                                <td>12345678</td>
                                                <td>20000</td>
                                                <td>
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check type="checkbox" />
                                                    </Form.Group>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Md Jahed Miah</td>
                                                <td>mdjahedahmed12@gmail.com</td>
                                                <td>0179713005</td>
                                                <td>CSE</td>
                                                <td>12345678</td>
                                                <td>20000</td>
                                                <td>
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check type="checkbox" />
                                                    </Form.Group>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Md Jahed Miah</td>
                                                <td>mdjahedahmed12@gmail.com</td>
                                                <td>0179713005</td>
                                                <td>CSE</td>
                                                <td>12345678</td>
                                                <td>20000</td>
                                                <td>
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check type="checkbox" />
                                                    </Form.Group>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Md Jahed Miah</td>
                                                <td>mdjahedahmed12@gmail.com</td>
                                                <td>0179713005</td>
                                                <td>CSE</td>
                                                <td>12345678</td>
                                                <td>20000</td>
                                                <td>
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check type="checkbox" />
                                                    </Form.Group>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Md Jahed Miah</td>
                                                <td>mdjahedahmed12@gmail.com</td>
                                                <td>0179713005</td>
                                                <td>CSE</td>
                                                <td>12345678</td>
                                                <td>20000</td>
                                                <td>
                                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                        <Form.Check type="checkbox" />
                                                    </Form.Group>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                    <div className="text-end">
                                        <button className="btn btn-primary">Accept all</button>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AdmissionHome;