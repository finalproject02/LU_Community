import React from 'react';
import { Col, Container, Row, Table } from "react-bootstrap";
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { useDispatch, useSelector } from "react-redux";
import { ApproveAccount } from "../../../actions/applications";

const AccountHome = () => {
    const dispatch = useDispatch()
    const { people } = useSelector(state => state.people);
    const newAdmission = people?.filter(person => person.position === 'paid admission fee' && person.approval === 1);
    return (
        <div>
            <AdminNavbar />
            <Container>
                <h2 className="textPrimary p-2 text-center">New Admission Request</h2>
                <Row className="d-flex justify-content-center">
                    <Col md="10">
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
                                        <td>{admission.payment_history.map(history => history.admission_fee)}</td>
                                        <td>
                                            <td>
                                                <button className="btn btn-primary" onClick={() => dispatch(ApproveAccount(admission._id))}>Approve</button>

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

export default AccountHome;