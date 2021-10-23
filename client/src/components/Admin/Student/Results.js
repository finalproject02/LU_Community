import React, { useState } from 'react';
import { Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import MainSidebar from '../../MainSidebar/MainSidebar';
import AdminNavbar from '../AdminNavbar/AdminNavbar';


const Results = () => {
    const [data, setData] = useState();
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="justify-content-center my-5">
                    <Col md="10">
                        <Card className="shadow-sm p-5">
                            <Form onSubmit={handleSubmit}>
                                <h2 className="textPrimary">Check Result</h2>
                                <Row className="d-flex align-items-center">
                                    <Col md="4">
                                        <Form.Floating className="mb-3">
                                            <Form.Control type="text" placeholder="Student_id" onChange={handleChange} name="student_id" />
                                            <label for="floatingInput">Student ID</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md="4">
                                        <Form.Floating className="mb-3">
                                            <Form.Control type="text" placeholder="Date of Birth (Y-m-d)" onChange={handleChange} name="date_of_birth" />
                                            <label for="floatingInput">Date of Birth (Y-m-d)</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md="4" className="d-flex">
                                        <Form.Control type="submit" value="Fetch Result" className="btn w-100 bg-success text-white" />
                                    </Col>
                                </Row>
                            </Form>

                            <Row className="my-5">
                                <Col md="6">
                                    <strong>Student Name :</strong> Md Jahed Miah
                                </Col>
                                <Col md="6">
                                    <strong>Student ID :</strong> 1732020009
                                </Col>
                                <Col md="6">
                                    <strong>CGPA :</strong> 3.90
                                </Col>
                                <Col md="6">
                                    <strong>Grade :</strong> A
                                </Col>
                                <Col md="6">
                                    <strong>Credit Completed :</strong> 149
                                </Col>
                                <Col md="6">
                                    <strong>Semester :</strong> Fall-2017
                                </Col>
                                <Col md="12">
                                    <strong>Program :</strong> B.Sc. (Honours) in Computer Science &amp; Engineering
                                </Col>
                                <Col md="12">
                                    <strong>Department :</strong> Computer Science &amp; Engineering
                                </Col>
                            </Row>
                            <div className="my-2">
                                <h2 className="textPrimary">Fall - 2017</h2>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th scope="col">Course Code</th>
                                            <th scope="col">Course Title</th>
                                            <th scope="col">Credit</th>
                                            <th scope="col">GP</th>
                                            <th scope="col">Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ENG-1111</td>
                                            <td>English Reading &amp; Speaking</td>
                                            <td>3.0</td>
                                            <td>3.75</td>
                                            <td>A</td>
                                        </tr>
                                        <tr>
                                            <td>CSE-1111</td>
                                            <td>Introduction to Computers</td>
                                            <td>2.0</td>
                                            <td>4.0</td>
                                            <td>A+</td>
                                        </tr>
                                        <tr>
                                            <td>MAT-1111</td>
                                            <td>Differential &amp; Integral Calculus</td>
                                            <td>3.0</td>
                                            <td>4</td>
                                            <td>A+</td>
                                        </tr>
                                        <tr>
                                            <td>CSE-1112</td>
                                            <td>Introduction to Computers Sessional</td>
                                            <td>1.0</td>
                                            <td>4.0</td>
                                            <td>A+</td>
                                        </tr>
                                        <tr>
                                            <td>CHE-2311</td>
                                            <td>Chemistry</td>
                                            <td>2.0</td>
                                            <td>4.0</td>
                                            <td>A+</td>
                                        </tr>
                                        <tr>
                                            <td>CEE-2110</td>
                                            <td>Engineering Drawing</td>
                                            <td>1.5</td>
                                            <td>4.0</td>
                                            <td>A+</td>
                                        </tr>
                                        <tr className="text-dark fw-bold">
                                            <td colSpan={2} />
                                            <td>13.5</td>
                                            <td>3.94</td>
                                            <td>A</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="mb-2">
                                <h2 className="textPrimary">Spring - 2018</h2>
                                <table className="table table-sm text-muted">
                                    <thead>
                                        <tr>
                                            <th scope="col">Course Code</th>
                                            <th scope="col">Course Title</th>
                                            <th scope="col">Credit</th>
                                            <th scope="col">GP</th>
                                            <th scope="col">Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>ENG-1111</td>
                                            <td>English Reading &amp; Speaking</td>
                                            <td>3.0</td>
                                            <td>3.75</td>
                                            <td>A</td>
                                        </tr>
                                        <tr>
                                            <td>CSE-1111</td>
                                            <td>Introduction to Computers</td>
                                            <td>2.0</td>
                                            <td>4.0</td>
                                            <td>A+</td>
                                        </tr>
                                        <tr>
                                            <td>MAT-1111</td>
                                            <td>Differential &amp; Integral Calculus</td>
                                            <td>3.0</td>
                                            <td>4</td>
                                            <td>A+</td>
                                        </tr>
                                        <tr>
                                            <td>CSE-1112</td>
                                            <td>Introduction to Computers Sessional</td>
                                            <td>1.0</td>
                                            <td>4.0</td>
                                            <td>A+</td>
                                        </tr>
                                        <tr>
                                            <td>CHE-2311</td>
                                            <td>Chemistry</td>
                                            <td>2.0</td>
                                            <td>4.0</td>
                                            <td>A+</td>
                                        </tr>
                                        <tr>
                                            <td>CEE-2110</td>
                                            <td>Engineering Drawing</td>
                                            <td>1.5</td>
                                            <td>4.0</td>
                                            <td>A+</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} />
                                            <td>13.5</td>
                                            <td>3.94</td>
                                            <td>A</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};
export default Results;