import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileCardData from './ProfileCardData';
import "./ProfileCard.css";

const ProfileCard = () => {
    return (
        <div className="overflow-hidden">
            {
                profileCardData.map(item => (
                    <div key={item.id}>
                        <Row>
                            <Card className="w-100 shadow-sm mb-4">
                                <Container>
                                    <Card.Img className="w-100 h-50" src={item.coverPhoto} alt={item.name} />
                                    <Card.Body >
                                        <Row className="mb-2">
                                            <Card.Text as="div" className="userPosition">
                                                <img src={item.profilePhoto} className="img-fluid userProfile p-2 rounded-pill" alt={item.name} />
                                            </Card.Text>

                                            <Col className="mt-5 ms-sm-5 ms-3">
                                                <h5 className="ms-3 mt-5 fw-bold fs-3">{item.name}</h5>
                                                <p className="ms-3 mb-0 text-lead fs-5">{item.position}</p>
                                                <p className="text-muted ms-3 mb-0">{item.address}
                                                    <span data-bs-toggle="modal"
                                                        data-bs-target="#contactModal">
                                                        <Link to="#" className="textHover">Contact info</Link>
                                                    </span>
                                                </p>
                                                <p className="ms-3">
                                                    <Link to="#" className="textHover">{item.totalConnection}</Link>
                                                </p>
                                                <div className="mb-2">
                                                    <Link to="#" className="btn btn-primary me-2">Connect</Link>
                                                    <Link to="#" className="btn btn-primary me-2">Message</Link>
                                                    <Link to="#" className="btn btn-primary me-2">Share Profile</Link>
                                                    <Link to="#" className="btn btn-primary me-2">Remove Connection</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Container>
                            </Card>
                        </Row>


                    </div>

                ))
            }
        </div>
    );

};

export default ProfileCard;