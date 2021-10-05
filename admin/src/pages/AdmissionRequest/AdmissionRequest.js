import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import {Link, useHistory} from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import avatar from '../../images/avatar.jpeg'

const AdmissionRequest = () => {
    const history = useHistory();
    const { applications } = useSelector(state => state.applications)
    return (
        <div className="mt-5 bg-light">
            <Container>
                <Row>
                    {
                        applications.map(applicants => (
                            <Col md="3">
                                <Card className="w-100 mb-4">
                                    <Card.Img className="img-fluid w-100 img-thumbnail" variant="top" src={!applicants.applicant_photo ? avatar : `/api/files/storage/${applicants.applicant_photo}`} />
                                    <Card.Body>
                                        <Card.Title>Name: <b>{applicants.applicant_name}</b></Card.Title>
                                        <Card.Text>
                                            Program: <b>{applicants.program_name}</b>
                                        </Card.Text>
                                        <Card.Text>
                                            Email: <b>{applicants.applicant_email}</b>
                                        </Card.Text>
                                        <Card.Text>
                                            Phone: <b>{applicants.applicant_mobile}</b>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small class="text-muted">{moment(applicants.createdAt).fromNow()}</small>
                                    </Card.Footer>
                                    <button className="btn btn-primary w-100" onClick={() => history.push(`/studentDetails/${applicants._id}`)}>Show details</button>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default AdmissionRequest;