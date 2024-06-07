import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ClubEventsData from "./ClubEventsData";

const ClubEvents = () => {
    return (
        <div className="mb-4">
            <Container>
                <Card className="w-100 mb-4">
                    <Card.Body>
                        <Card.Title className="mb-2 fs-4">Upcoming Events</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted mb-2">date</Card.Subtitle>
                        <div className="d-flex justify-content-center align-items-center p-4">
                            <div>
                                <div className="text-center p-5">
                                    <i className="fa fa-calendar" aria-hidden="true" style={{ fontSize: 50 }} />
                                </div>
                                <h6 className="fs-3">No Up Coming Event</h6>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="w-100">
                    <Card.Body>
                        <Card.Title className="mb-2 fs-4">Past Events</Card.Title>
                        {
                            ClubEventsData.map(item => (
                                <Row>
                                    <Col md="4" className="mt-2">
                                        <img src={item.photo} className="w-75 mb-2 img-fluid rounded-3" alt="..." />
                                    </Col>
                                    <Col md="8">
                                        <Link to="#" className="textHover text-dark">
                                            <h4 className="mt-2 text-dark">{item.title}</h4>
                                        </Link>
                                        <p className="card-text">{item.subtitle}</p>
                                        <span>{item.date}</span>
                                    </Col>
                                    <hr />
                                </Row>
                            ))
                        }
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ClubEvents;