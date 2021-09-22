import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import admissionRequestData from "./AdmissionRequestData.js";
import { Link } from "react-router-dom";

const AdmissionRequest = () => {
    return (
        <div className="mt-5 bg-light">
            <Container>
                <Row>
                    {
                        admissionRequestData.map(item => (
                            <Col md="3">
                                <Card className="w-100 mb-4">
                                    <Card.Img className="img-fluid w-100 img-thumbnail" variant="top" src={item.imgUrl} />
                                    <Card.Body>
                                        <Card.Title>Name: <b>{item.name}</b></Card.Title>
                                        <Card.Text>
                                            Program: <b>{item.program}</b>
                                        </Card.Text>
                                        <Card.Text>
                                            Email: <b>{item.email}</b>
                                        </Card.Text>
                                        <Card.Text>
                                            Phone: <b>{item.phone}</b>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small class="text-muted">3 mins ago</small>
                                    </Card.Footer>
                                    <Link className="btn btn-primary w-100" to="/studentDetails">Show details</Link>
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