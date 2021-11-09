import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Form, Row, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import {useDispatch, useSelector} from "react-redux";
import {AdmissionFeeApprove} from "../../../actions/applications";

const ApproveAdmissionFee = () => {
    const dispatch = useDispatch()
    const { people } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth);
    const [admissionFeePaid, setAdmissionFeePain] = useState([]);
    const getAdmissionReq = people?.filter(person => person.position === 'paid admission register fee' && person.approval === 3);
    useEffect(() => {
        if (getAdmissionReq) {
            setAdmissionFeePain(getAdmissionReq)
        }
    }, [getAdmissionReq]);
    return (
        <div>
            <AdminNavbar/>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="10">
                        <h2 className="text-center textSecondary my-2">{currentUser?.name}</h2>
                        <Row>
                            <Col md="4" className="mb-2">
                                <Link to="/dashboard" className="textHover text-dark">
                                    <Card className="mb-2 p-4 rounded-3 bg-info text-white">
                                        <Card.Body className="text-center">
                                            <h4>Check Admission Fee</h4>
                                            <small>40</small>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col md="4" className="mb-2">
                                <Link to="/approveAdmissionForm" className="textHover text-dark">
                                    <Card className="mb-2 p-4 rounded-3 bg-success text-white">
                                        <Card.Body className="text-center">
                                            <h4>Approve Admission Form Fee</h4>
                                            <small>222</small>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col md="4" className="mb-2">
                                <Link to="/approveAdmission" className="textHover text-dark">
                                    <Card className="mb-2 p-4 rounded-3 bg-info text-white">
                                        <Card.Body className="text-center">
                                            <h4>Approve Admission Fee</h4>
                                            <small>22</small>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                        <Card className="mb-4">
                            <Card.Title className="textPrimary px-4 pt-4">New Admission Request</Card.Title>
                            <Card.Body>
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
                                            {admissionFeePaid?.map(admissionReq => (
                                                <tr>
                                                    <td>{admissionReq.name}</td>
                                                    <td>{admissionReq.email}</td>
                                                    <td>{admissionReq.mobile}</td>
                                                    <td>{admissionReq.program_name}</td>
                                                    <td>{admissionReq.reference_no}</td>
                                                    <td>{admissionReq.payment_history.map(history => history.admission_register_fee).toString()}</td>
                                                    <td>
                                                        <button className="btn btn-primary" onClick={() => dispatch(AdmissionFeeApprove(admissionReq._id))}>Approve</button>

                                                    </td>
                                                </tr>
                                            ))}

                                            </tbody>
                                        </Table>

                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default ApproveAdmissionFee;