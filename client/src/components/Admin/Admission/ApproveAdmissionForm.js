import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Form, Row, Table} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import {useDispatch, useSelector} from "react-redux";
import Avatar from '../../../images/avatar.jpeg'
import moment from "moment";
import {useHistory} from "react-router-dom";

const ApproveAdmissionForm = () => {
    const history = useHistory()
    const { people } = useSelector(state => state.people);
    const newAdmissionForm = people?.filter(form => form.position === 'credential submitted' && form.approval === 2 )
    return (
        <div>
            <AdminNavbar/>
            <div className="mt-5 bg-light">
                <Container>
                    <Row>
                        {
                            newAdmissionForm.map(applicants => (
                                <Col md="3">
                                    <Card className="w-100 mb-4">
                                        <Card.Img className="img-fluid w-100 img-thumbnail" variant="top"
                                                  src={!applicants.profile_picture ? Avatar : `/api/files/storage/${applicants.profile_picture}`}/>
                                        <Card.Body>
                                            <Card.Title>Name: <b>{applicants.name}</b></Card.Title>
                                            <Card.Text as="div">
                                                Program: <b>{applicants.department}</b>
                                            </Card.Text>
                                            <Card.Text as="div">
                                                Email: <b>{applicants.email}</b>
                                            </Card.Text>
                                            <Card.Text as="div">
                                                Phone: <b>{applicants.mobile}</b>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small
                                                className="text-muted">{moment(applicants.updatedAt).fromNow()}</small>
                                        </Card.Footer>
                                        <button className="btn btn-primary w-100"
                                                onClick={() => history.push(`/FormDetails/${applicants._id}`)}>Show
                                            details
                                        </button>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default ApproveAdmissionForm;