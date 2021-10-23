import React from 'react';
import { Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import AdminNavbar from '../../AdminNavbar/AdminNavbar';

const SemesterRegiDetails = () => {
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
                                            <h6><span className="text-lead">Name:</span> Md Jahed Miah</h6>
                                            <h6><span className="text-lead">ID:</span> 173200009</h6>
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
                                        <tr>
                                            <td>English Reading &amp; Speaking</td>
                                            <td>ENG-1111</td>
                                            <td>3.0</td>
                                            <td className="form-group">
                                                <select name id className="form-control">
                                                    <option value={1}>1</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>English Reading &amp; Speaking</td>
                                            <td>ENG-1111</td>
                                            <td>3.0</td>
                                            <td className="form-group">
                                                <select name id className="form-control">
                                                    <option value={1}>1</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>English Reading &amp; Speaking</td>
                                            <td>ENG-1111</td>
                                            <td>3.0</td>
                                            <td className="form-group">
                                                <select name id className="form-control">
                                                    <option value={1}>1</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>English Reading &amp; Speaking</td>
                                            <td>ENG-1111</td>
                                            <td>3.0</td>
                                            <td className="form-group">
                                                <select name id className="form-control">
                                                    <option value={1}>1</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>English Reading &amp; Speaking</td>
                                            <td>ENG-1111</td>
                                            <td>3.0</td>
                                            <td className="form-group">
                                                <select name id className="form-control">
                                                    <option value={1}>1</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={2}>Total Credit</td>
                                            <td>15</td>
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
                                                <p className="text-center textSecondary fs-2">15</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md="4">
                                        <Card class="p-3">
                                            <Card.Body>
                                                <Card.Title className="text-center fs-5">Regular Credits</Card.Title>
                                                <p className="text-center textSecondary fs-2">15</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md="4">
                                        <Card class="p-3">
                                            <Card.Body>
                                                <Card.Title className="text-center fs-5">Regular Credits</Card.Title>
                                                <p className="text-center textSecondary fs-2">15</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md="4">
                                        <Card class="p-3">
                                            <Card.Body>
                                                <Card.Title className="text-center fs-5">Tution Fees</Card.Title>
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