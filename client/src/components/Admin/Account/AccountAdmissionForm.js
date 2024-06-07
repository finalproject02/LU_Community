import React from 'react';
import {Card, Col, Container, Form, Row, Table} from "react-bootstrap";
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import {useDispatch, useSelector} from "react-redux";
import {AccountAdmissionFeeApprove} from "../../../actions/applications";
import {Link} from "react-router-dom";

const AccountAdmissionForm = () => {
    const dispatch = useDispatch()
    const { people } = useSelector(state => state.people);
    const newAdmission = people?.filter(person => person.position === 'paid admission register fee' && person.approval === 4);
    return (
        <div>
            <AdminNavbar/>
            <Container>
                <Row>
                    <Col md="4" className="mb-2">
                        <Link to="/dashboard" className="textHover text-dark">
                            <Card className="mb-2 p-4 rounded-3 bg-info text-white">
                                <Card.Body className="text-center">
                                    <h4>Approve Admission Form  Fee</h4>
                                    <small>40</small>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col md="4" className="mb-2">
                        <Link to="/approveAccountAdmissionFee" className="textHover text-dark">
                            <Card className="mb-2 p-4 rounded-3 bg-success text-white">
                                <Card.Body className="text-center">
                                    <h4>Approve Admission  Fee</h4>
                                    <small>222</small>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>

                </Row>
                <h2 className="textPrimary p-2 text-center">New Admission Request</h2>
                <Row className="d-flex justify-content-center">
                    <Col md="12">
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Department</th>
                                <th scope="col">Reference Number</th>
                                <th scope="col">Payment</th>
                                <th scope="col">Approve</th>
                            </tr>
                            </thead>
                            <tbody>
                            {newAdmission.map(admission => (
                                <tr>
                                    <td>{admission.name}</td>
                                    <td>{admission.email}</td>
                                    <td>{admission.mobile}</td>
                                    <td>{admission.program_name}</td>
                                    <td>{admission.reference_no}</td>
                                    <td>{admission.payment_history.map(history => history.admission_register_fee)}</td>
                                    <td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => dispatch(AccountAdmissionFeeApprove(admission._id))}>Approve</button>

                                        </td>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AccountAdmissionForm;