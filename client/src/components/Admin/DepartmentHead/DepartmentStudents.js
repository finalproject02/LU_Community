import React, { useState } from 'react';
import { Col, Container, Form, Row, Table } from "react-bootstrap";
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import {ConfirmAdmission} from "../../../actions/applications";
import {useDispatch, useSelector} from "react-redux";

const DepartmentStudents = () => {
    const dispatch = useDispatch()
    const { people } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth);
    const [student_id, setStudent_id] = useState();
    const [batch, setBatch] = useState();
    const [data, setData] = useState({});
    const newAdmission = people?.filter(person => person.position === 'paid admission register fee' && person.approval === 5);
    const departmentStudent = people?.filter(person => person.position === 'Student' && person.program_name === currentUser?.department);
    const [DataSecond, setDataSecond] = useState({ search_id: '', search_name: '', search_semester: '' });
    const handleSubmitSecond = (e) => {
        e.preventDefault();
    }
    const confirmAdmission = (id) => {
        data.student_id = student_id;
        data.batch = batch
      dispatch(ConfirmAdmission(id, data));

    }
    const handleChangeSecond = (e) => setDataSecond({ ...DataSecond, [e.target.name]: e.target.value });
    return (
        <div>
            <AdminNavbar />
            <Container>
                {newAdmission.length !== 0 && (
                    <div className="mb-5">
                        <h2 className="textPrimary p-2">Confirm admission</h2>
                        <Row className="d-flex justify-content-center">
                            <Col md="12">
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Ref No</th>
                                        <th scope="col">Payment</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">Batch</th>
                                        <th scope="col">Confirm Admission</th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    {newAdmission.map(admission => (
                                        <tr>
                                            <td>{admission.name}</td>
                                            <td>{admission.email}</td>
                                            <td>{admission.mobile}</td>
                                            <td>{admission.reference_no}</td>
                                            <td>{admission.payment_history.map(history => history.admission_fee)}</td>
                                            <td><input className="form-control w-100" name={'student_id'} type="text" name placeholder="Id" onChange={(e) => setStudent_id(e.target.value)}/></td>
                                            <td><input className="form-control w-75" name={'batch'} type="text" name placeholder="Batch" onChange={(e) => setBatch(e.target.value)}/></td>
                                            <td>
                                                <button className="btn btn-primary" onClick={()  => confirmAdmission(admission._id)}>Confirm</button>

                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </div>
                )}
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
                                        <th scope="col">Batch</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {departmentStudent.map(student => (
                                    <tr>
                                        <td>{student.mobile}</td>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.student_id}</td>
                                        <td>{student.semester}</td>
                                        <td>{student.batch}</td>
                                    </tr>
                                ))}
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