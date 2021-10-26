import React from 'react';
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const AccountHome = () => {
    return (
        <div>
            <AdminNavbar />
            <Container>
                <h2 className="textPrimary p-2 text-center">New Admission Request</h2>
                <Row className="d-flex justify-content-center">
                    <Col md="12">
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th scope="col">ID</th>
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
                                <td>1732020020</td>
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
                                <td>1732020020</td>
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
                                <td>1732020020</td>
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
                                <td>1732020020</td>
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
                                <td>1732020020</td>
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
                                <td>1732020020</td>
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
                                <td>1732020020</td>
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
                                <td>1732020020</td>
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
                </Row>
            </Container>
        </div>
    );
};

export default AccountHome;