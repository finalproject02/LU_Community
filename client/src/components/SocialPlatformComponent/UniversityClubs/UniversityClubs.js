import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import clubSuggestions from '../ClubSuggestions/ClubSuggestionsData';

const UniversityClubs = () => {
    return (
        <div>
            <Container>
                <Row>
                    <div className="d-flex justify-content-center">
                        <Col md="8" className="mt-4">
                            <Card className="w-100">
                                <Card.Body>
                                    <Card.Title className="text-center mb-2 fs-4">University Clubs</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted text-center mb-2">Students Activities</Card.Subtitle>
                                    {
                                        clubSuggestions.map(item => (
                                            <Link to="/clubDetails" key={item.id} className="textHover text-dark">
                                                <Card className="cardHover rounded mb-2">
                                                    <div className="d-flex p-2 align-items-center">
                                                        <img src={item.imageUrl} className="img-fluid smallProfile" alt={item.name} />
                                                        <p className="card-text ps-2 fs-5">{item.name}</p>
                                                    </div>
                                                </Card>
                                            </Link>
                                        ))
                                    }
                                    <div className="mt-3 text-center">
                                        <button className="btn btn-outline-primary">
                                            <div className="d-flex align-items-center pt-2">
                                                <i className="fa fa-plus pb-2" aria-hidden="true" />
                                                <p className="ps-2 pt-2">Create an Activity</p>
                                            </div>
                                        </button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default UniversityClubs;