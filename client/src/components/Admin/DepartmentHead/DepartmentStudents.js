import React, { useState } from 'react';
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const DepartmentStudents = () => {
    const [DataSecond, setDataSecond] = useState({ search_id: '', search_name: '', search_semester: '' });
    const handleSubmitSecond = (e) => {
        e.preventDefault();
    }
    const handleChangeSecond = (e) => setDataSecond({ ...DataSecond, [e.target.name]: e.target.value });
    return (
        <div>
            <AdminNavbar />
            <Container>
                <div className="mb-5">
                    <h2 className="textPrimary p-2">New Students</h2>
                    <Row className="d-flex justify-content-center">
                        <Col md="12">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">Section</th>
                                        <th scope="col">Batch</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Md Jahed Miah</td>
                                        <td>mdjahedahmed12@gmail.com</td>
                                        <td>0179713005</td>
                                        <td><input className="form-control w-100" type="text" name placeholder="Id" /></td>
                                        <td><input className="form-control w-100" type="text" name placeholder="Section" /></td>
                                        <td><input className="form-control w-100" type="text" name placeholder="Batch" /></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>
                <div>
                    <h2 className="textPrimary p-2">All Students</h2>
                    <Row>
                        <Col md="12">
                            <Form onSubmit={handleSubmitSecond}>
                                <Row className="ps-4 d-flex align-items-start">
                                    <Col md="3">
                                        <Form.Floating className="mb-3">
                                            <Form.Control type="text" onChange={handleChangeSecond} name="search_id" placeholder="Search By ID" />
                                            <label>Search By ID</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md="3">
                                        <Form.Floating className="mb-3">
                                            <Form.Control type="text" onChange={handleChangeSecond} name="search_name" placeholder="Search By Name" />
                                            <label>Search By Name</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md="3">
                                        <Form.Floating className="mb-3">
                                            <Form.Control type="text" onChange={handleChangeSecond} name="search_semester" placeholder="Search By Semester" />
                                            <label>Search By Semester</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md="3">
                                        <div className="mt-1">
                                            <input type="submit" value="Search" className="btn btn-success btn-lg" />
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col md="12">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Semester</th>
                                        <th scope="col">Section</th>
                                        <th scope="col">Batch</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0179713005</td>
                                        <td>Md Jahed Miah</td>
                                        <td>mdjahedahmed12@gmail.com</td>
                                        <td>12345678</td>
                                        <td>1</td>
                                        <td>B</td>
                                        <td>46</td>
                                    </tr>
                                    <tr>
                                        <td>0179713005</td>
                                        <td>Md Jahed Miah</td>
                                        <td>mdjahedahmed12@gmail.com</td>
                                        <td>12345678</td>
                                        <td>2</td>
                                        <td>B</td>
                                        <td>46</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    );
};

export default DepartmentStudents;