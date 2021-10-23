import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { Container, Table } from "react-bootstrap";

const ApproveResultCourse = () => {
    return (
        <div>
            <AdminNavbar />
            <Container>
                <h2 className="text-center my-2 textPrimary">Couse Title: Introduction to Computer <br /> Course Code: CSE-1111</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Mark</th>
                            <th scope="col">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1732020020</td>
                            <td>Md Jahed Miah</td>
                            <td>
                                <input className="form-control w-75" type="text" name placeholder="mark" /></td>

                            <td><input className="form-control w-75" type="text" name placeholder="Grade" /></td>
                        </tr>
                        <tr>
                            <td>1732020020</td>
                            <td>Md Jahed Miah</td>

                            <td>
                                <input className="form-control w-75" type="text" name placeholder="mark" /></td>

                            <td><input className="form-control w-75" type="text" name placeholder="Grade" /></td>
                        </tr>
                        <tr>
                            <td>1732020020</td>
                            <td>Md Jahed Miah</td>

                            <td>
                                <input className="form-control w-75" type="text" name placeholder="mark" /></td>

                            <td><input className="form-control w-75" type="text" name placeholder="Grade" /></td>
                        </tr>
                        <tr>
                            <td>1732020020</td>
                            <td>Md Jahed Miah</td>

                            <td>
                                <input className="form-control w-75" type="text" name placeholder="mark" /></td>

                            <td><input className="form-control w-75" type="text" name placeholder="Grade" /></td>
                        </tr>
                        <tr>
                            <td>1732020020</td>
                            <td>Md Jahed Miah</td>

                            <td>
                                <input className="form-control w-75" type="text" name placeholder="mark" /></td>

                            <td><input className="form-control w-75" type="text" name placeholder="Grade" /></td>
                        </tr>
                        <tr>
                            <td>1732020020</td>
                            <td>Md Jahed Miah</td>

                            <td>
                                <input className="form-control w-75" type="text" name placeholder="mark" /></td>

                            <td><input className="form-control w-75" type="text" name placeholder="Grade" /></td>

                        </tr>
                        <tr>
                            <td>1732020020</td>
                            <td>Md Jahed Miah</td>

                            <td>
                                <input className="form-control w-75" type="text" name placeholder="mark" /></td>

                            <td><input className="form-control w-75" type="text" name placeholder="Grade" /></td>
                        </tr>
                        <tr>
                            <td>1732020020</td>
                            <td>Md Jahed Miah</td>

                            <td>
                                <input className="form-control w-75" type="text" name placeholder="mark" /></td>

                            <td><input className="form-control w-75" type="text" name placeholder="Grade" /></td>
                        </tr>
                    </tbody>
                </Table>
                <div className="row">
                    <div className="col-md-12 text-end">
                        <button className="btn btn-success mr-5 rounded-3" href="#">Approve Result</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ApproveResultCourse;