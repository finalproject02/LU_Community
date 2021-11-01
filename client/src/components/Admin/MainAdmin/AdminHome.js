import React from 'react';
import { Card, Col, Container, Pagination, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn } from "react-icons/all";
import "./MainAdmin.css";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const AdminHome = () => {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="10">
                        <h2 className="text-center textSecondary my-2">Welcome Mr. Jahed!</h2>
                        <Row className="mt-4">
                            <Col md="4" className="mb-2">
                                <Link to="/courseDetails" className="text-dark text-decoration-none cursor">
                                    <Card className="mb-2 p-3 rounded-3 bg-info text-white shadow">
                                        <Card.Body className="text-center">
                                            <h4>Total Students</h4>
                                            <small>5000</small>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col md="4" className="mb-2">
                                <Link to="/courseDetails" className="text-dark text-decoration-none cursor">
                                    <Card className="mb-2 p-3 rounded-3 bg-success text-white shadow">
                                        <Card.Body className="text-center">
                                            <h4>Departments</h4>
                                            <small className="text-center">20</small>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col md="4" className="mb-2">
                                <Link to="/courseDetails" className="text-dark text-decoration-none cursor">
                                    <Card className="mb-2 p-3 rounded-3 bg-primary text-white shadow">
                                        <Card.Body className="text-center">
                                            <h4>Teacher</h4>
                                            <small className="text-center">250</small>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                        <Card className="bg-light w-100 shadow rounded my-5 overflow-scroll">
                            <Card.Title className="p-4 textPrimary">New Students</Card.Title>
                            <Card.Body className="card-body">
                                <Row className="d-flex justify-content-center">
                                    <Col md="12">
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Department</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Phone</th>
                                                    <th scope="col">DOB</th>
                                                    <th scope="col">Address</th>
                                                    <th scope="col">Admission date</th>
                                                    <th scope="col">Payment Reference</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1732020009</td>
                                                    <td>Md Jahed Miah</td>
                                                    <td>CSE</td>
                                                    <td>mdjahedahmed12@gmail.com</td>
                                                    <td>0179713005</td>
                                                    <td>14-02-1998</td>
                                                    <td>Lalabazar, Bishwanath, Sylhet</td>
                                                    <td>14-02-2018</td>
                                                    <td>649683215</td>
                                                </tr>
                                                <tr>
                                                    <td>1732020009</td>
                                                    <td>Md Jahed Miah</td>
                                                    <td>CSE</td>
                                                    <td>mdjahedahmed12@gmail.com</td>
                                                    <td>0179713005</td>
                                                    <td>14-02-1998</td>
                                                    <td>Lalabazar, Bishwanath, Sylhet</td>
                                                    <td>14-02-2018</td>
                                                    <td>649683215</td>
                                                </tr>
                                                <tr>
                                                    <td>1732020009</td>
                                                    <td>Md Jahed Miah</td>
                                                    <td>CSE</td>
                                                    <td>mdjahedahmed12@gmail.com</td>
                                                    <td>0179713005</td>
                                                    <td>14-02-1998</td>
                                                    <td>Lalabazar, Bishwanath, Sylhet</td>
                                                    <td>14-02-2018</td>
                                                    <td>649683215</td>
                                                </tr>
                                                <tr>
                                                    <td>1732020009</td>
                                                    <td>Md Jahed Miah</td>
                                                    <td>CSE</td>
                                                    <td>mdjahedahmed12@gmail.com</td>
                                                    <td>0179713005</td>
                                                    <td>14-02-1998</td>
                                                    <td>Lalabazar, Bishwanath, Sylhet</td>
                                                    <td>14-02-2018</td>
                                                    <td>649683215</td>
                                                </tr>
                                                <tr>
                                                    <td>1732020009</td>
                                                    <td>Md Jahed Miah</td>
                                                    <td>CSE</td>
                                                    <td>mdjahedahmed12@gmail.com</td>
                                                    <td>0179713005</td>
                                                    <td>14-02-1998</td>
                                                    <td>Lalabazar, Bishwanath, Sylhet</td>
                                                    <td>14-02-2018</td>
                                                    <td>649683215</td>
                                                </tr>
                                                <tr>
                                                    <td>1732020009</td>
                                                    <td>Md Jahed Miah</td>
                                                    <td>CSE</td>
                                                    <td>mdjahedahmed12@gmail.com</td>
                                                    <td>0179713005</td>
                                                    <td>14-02-1998</td>
                                                    <td>Lalabazar, Bishwanath, Sylhet</td>
                                                    <td>14-02-2018</td>
                                                    <td>649683215</td>
                                                </tr>
                                                <tr>
                                                    <td>1732020009</td>
                                                    <td>Md Jahed Miah</td>
                                                    <td>CSE</td>
                                                    <td>mdjahedahmed12@gmail.com</td>
                                                    <td>0179713005</td>
                                                    <td>14-02-1998</td>
                                                    <td>Lalabazar, Bishwanath, Sylhet</td>
                                                    <td>14-02-2018</td>
                                                    <td>649683215</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Pagination>{items}</Pagination>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Row className="mt-4">
                            <Col md="4" className="mb-2">
                                <Card className="mb-2 p-3 rounded-3 text-white shadow">
                                    <Card.Body className="text-center bg-1">
                                        <FaFacebookSquare />
                                        <h4>Like us on <br />
                                            Facebook</h4>
                                        <small>5000</small>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="4" className="mb-2">
                                <Card className="mb-2 p-3 rounded-3 text-white shadow">
                                    <Card.Body className="text-center bg-2">
                                        <FaInstagramSquare />
                                        <h4>Follow us on Instagram</h4>
                                        <small className="text-center">220</small>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md="4" className="mb-2">
                                <Card className="mb-2 p-3 rounded-3 text-white shadow">
                                    <Card.Body className="text-center bg-3">
                                        <FaLinkedinIn />
                                        <h4>Follow us on Linkedin</h4>
                                        <small className="text-ce68nter">250</small>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AdminHome;
