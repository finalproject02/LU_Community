import React from 'react';
import { Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { FaTimesCircle } from "react-icons/fa";

const SemesterRegi = () => {
    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="justify-content-center my-5">
                    <Col md="10">
                        <Card className="shadow-sm p-5">
                            <Card.Title className="text-center textPrimary mb-4 fs-4">Semester Registration</Card.Title>
                            <Card.Body className="overflow-scroll">
                                <div className="d-flex justify-content-between">
                                    <p className="card-text fs-5 fw-bolder">Regular Courses</p>
                                    <Form.Group className="w-25">
                                        <label htmlFor="inputSection" className="form-label fw-bold">Section</label>
                                        <select name id className="form-select px-2">
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                            <option value={11}>11</option>
                                            <option value={12}>12</option>
                                        </select>
                                    </Form.Group>
                                </div>
                                <Table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Course Title</th>
                                            <th scope="col">Course Code</th>
                                            <th scope="col">Credit</th>
                                            <th scope="col">Section</th>
                                            <th scope="col">Action</th>
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
                                            <td className="text-center cursor"><FaTimesCircle /></td>
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
                                            <td className="text-center cursor"><FaTimesCircle /></td>
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
                                            <td className="text-center cursor"><FaTimesCircle /></td>
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
                                            <td className="text-center cursor"><FaTimesCircle /></td>
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
                                            <td className="text-center cursor"><FaTimesCircle /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3">
                                                <Form.Label>
                                                    Add Course
                                                </Form.Label>
                                            </td>
                                            <td colSpan="2" className="d-flex align-items-start text-center">
                                                <Form.Group className="mb-3 me-2" controlId="formBasicEmail">
                                                    <Form.Select
                                                        className="w-100"
                                                        name="program_name"

                                                    >
                                                        <option value="cse">Select Course</option>
                                                        <option value="cse">English Reading &amp; Speaking</option>
                                                        <option value="cse">Introduction to computer</option>
                                                        <option value="english">Introduction to computer</option>
                                                        <option value="eee">Introduction to computer</option>
                                                        <option value="civil">Introduction to computer</option>
                                                        <option value="civil">Introduction to computer</option>
                                                        <option value="civil">Introduction to computer</option>
                                                        <option value="civil">Introduction to computer</option>
                                                        <option value="civil">Introduction to computer</option>
                                                        <option value="civil">Introduction to computer</option>
                                                        <option value="bangla">Introduction to computer</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <div className="bgSecondary rounded-3">
                                                    <button className="btn">Add</button>
                                                </div>
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
                                                <Card.Title className="text-center fs-5">Retake Credits</Card.Title>
                                                <p className="text-center textSecondary fs-2">15</p>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md="4">
                                        <Card class="p-3">
                                            <Card.Body>
                                                <Card.Title className="text-center fs-5">Total Credits</Card.Title>
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
                                <p className="text-muted mt-4">Waiver of 25% applied to the tution fees of regular courses.<br />
                                    Current registration status: <strong>Approved.</strong></p>
                            </Card.Footer>
                            <div className="my-2 text-center bgSecondary rounded-3">
                                <span href="#" className="btn text-white">Submit</span>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SemesterRegi;