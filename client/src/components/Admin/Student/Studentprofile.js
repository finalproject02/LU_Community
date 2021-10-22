import React from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import jahed from "../../../images/Jahed.jpg";

function StudentProfile() {
    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="justify-content-center my-5">
                    <Col md="8">
                        <Card className="shadow-sm p-5 mb-4">
                            <Card.Title className="textPrimary mb-4 fs-4">About Me</Card.Title>
                            <Card.Body>
                                <div className="d-flex align-items-center mb-4">
                                    <img src={jahed} alt="" width="90" height="90" className="rounded-circle me-3" />
                                    <div>
                                        <h5 className="fw-bold">Md Jahed Miah</h5>
                                        <small>12th semester | 46th batch</small>
                                    </div>
                                </div>
                                <Row>
                                    <Col md="10">
                                        <Row>
                                            <Col md="4">
                                                <p className="text-lead">Name:</p>
                                                <p className="text-lead">Semester:</p>
                                                <p className="text-lead">Section:</p>
                                                <p className="text-lead">ID:</p>
                                                <p className="text-lead">Father Name:</p>
                                                <p className="text-lead">Father Occupation:</p>
                                                <p className="text-lead">Mother Name:</p>
                                                <p className="text-lead">Mother Occupation:</p>
                                                <p className="text-lead">Date Of Birth:</p>
                                                <p className="text-lead">Religion:</p>
                                                <p className="text-lead">E-Mail:</p>
                                                <p className="text-lead">Phone:</p>
                                                <p className="text-lead">Adress::</p>
                                                <p className="text-lead">Admission Date:</p>
                                            </Col>
                                            <Col md="8">
                                                <p className="fw-bold">Md Jahed Miah</p>
                                                <p className="fw-bold">12th</p>
                                                <p className="fw-bold">Section: Null</p>
                                                <p className="fw-bold">1732020009</p>
                                                <p className="fw-bold">Md Surman Ali</p>
                                                <p className="fw-bold">Farmer</p>
                                                <p className="fw-bold">MST. Sharifa Khatun</p>
                                                <p className="fw-bold">House wife</p>
                                                <p className="fw-bold">14-02-1998</p>
                                                <p className="fw-bold">Islam</p>
                                                <p className="fw-bold">mdjahedahmed12@gmail.com</p>
                                                <p className="fw-bold">01797213005</p>
                                                <p className="fw-bold">Tengra, Lalabazar, Bishwanath, Sylhet</p>
                                                <p className="fw-bold">27-08-2017</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className="shadow-sm p-5">
                            <Card.Title className="textPrimary mb-4 fs-4">All Exam Results</Card.Title>
                            <Card.Body>
                                <Row>
                                    <Col md="12">
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Semester</th>
                                                    <th>Credit</th>
                                                    <th>CGPA</th>
                                                    <th>Grade</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>13.5</td>
                                                    <td>3.78</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>16</td>
                                                    <td>3.91</td>
                                                    <td>A</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td >14</td>
                                                    <td>3.88</td>
                                                    <td>A</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default StudentProfile;
