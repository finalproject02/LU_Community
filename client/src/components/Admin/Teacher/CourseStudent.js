import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { Col, Container, Row, Table } from "react-bootstrap";

const CourseStudent = () => {
    return (
        <div>
            <AdminNavbar />
            <Container>
                <h2 className="text-center my-2 textPrimary">Couse Title: Introduction to Computer <br /> Course Code: CSE-1111</h2>
                <Row className="d-flex justify-content-center mt-4 overflow-scroll">
                    <Col md="10">
                        <Table striped bordered hover>
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">ID</th>
                                    <th scope="col" className="px-5">Name</th>
                                    <th scope="col" colSpan="4">Mark</th>
                                    <th scope="col">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1732020020</td>
                                    <td>Md Jahed Miah</td>
                                    <td>
                                        <input className="form-control w-75" type="text" name placeholder="Attendence" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Assignment" /></td>
                                    <td colSpan="">
                                        <input className="form-control w-75" type="text" name placeholder="Mid" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Final" /></td>

                                    <td><input className="form-control w-75" type="text" name placeholder="Grade" /></td>
                                </tr>
                                <tr>
                                    <td>1732020020</td>
                                    <td>Md Jahed Miah</td>

                                    <td>
                                        <input className="form-control w-75" type="text" name placeholder="Attendence" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Assignment" /></td>
                                    <td colSpan="">
                                        <input className="form-control w-75" type="text" name placeholder="Mid" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Final" /></td>

                                    <td><input className="form-control w-75" type="text" name placeholder="Grade" /></td>
                                </tr>
                                <tr>
                                    <td>1732020020</td>
                                    <td>Md Jahed Miah</td>

                                    <td>
                                        <input className="form-control w-75" type="text" name placeholder="Attendence" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Assignment" /></td>
                                    <td colSpan="">
                                        <input className="form-control w-75" type="text" name placeholder="Mid" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Final" /></td>

                                    <td><input className="form-control w-75" type="text" name placeholder="Grade" /></td>
                                </tr>
                                <tr>
                                    <td>1732020020</td>
                                    <td>Md Jahed Miah</td>

                                    <td>
                                        <input className="form-control w-75" type="text" name placeholder="Attendence" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Assignment" /></td>
                                    <td colSpan="">
                                        <input className="form-control w-75" type="text" name placeholder="Mid" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Final" /></td>

                                    <td><input className="form-control w-75" type="text" name placeholder="Grade" /></td>
                                </tr>
                                <tr>
                                    <td>1732020020</td>
                                    <td>Md Jahed Miah</td>

                                    <td>
                                        <input className="form-control w-75" type="text" name placeholder="Attendence" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Assignment" /></td>
                                    <td colSpan="">
                                        <input className="form-control w-75" type="text" name placeholder="Mid" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Final" /></td>

                                    <td><input className="form-control w-75" type="text" name placeholder="Grade" /></td>
                                </tr>
                                <tr>
                                    <td>1732020020</td>
                                    <td>Md Jahed Miah</td>

                                    <td>
                                        <input className="form-control w-75" type="text" name placeholder="Attendence" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Assignment" /></td>
                                    <td colSpan="">
                                        <input className="form-control w-75" type="text" name placeholder="Mid" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Final" /></td>

                                    <td><input className="form-control w-75" type="text" name placeholder="Grade" /></td>

                                </tr>
                                <tr>
                                    <td>1732020020</td>
                                    <td>Md Jahed Miah</td>

                                    <td>
                                        <input className="form-control w-75" type="text" name placeholder="Attendence" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Assignment" /></td>
                                    <td colSpan="">
                                        <input className="form-control w-75" type="text" name placeholder="Mid" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Final" /></td>

                                    <td><input className="form-control w-75" type="text" name placeholder="Grade" /></td>
                                </tr>
                                <tr>
                                    <td>1732020020</td>
                                    <td>Md Jahed Miah</td>

                                    <td>
                                        <input className="form-control w-75" type="text" name placeholder="Attendence" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Assignment" /></td>
                                    <td colSpan="">
                                        <input className="form-control w-75" type="text" name placeholder="Mid" /></td>
                                    <td><input className="form-control w-75" type="text" name placeholder="Final" /></td>

                                    <td><input className="form-control w-75" type="text" name placeholder="Grade" /></td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className="row">
                            <div className="col-md-12 text-end">
                                <button className="btn btn-success mr-5 rounded-3" href="#">Upload Result</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default CourseStudent;