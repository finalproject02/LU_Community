import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import jahed from "../../../images/Jahed.jpg"

const ClubFollower = () => {
    return (
        <div className="mt-4">
            <Container>
                <Card className="w-100">
                    <Card.Body>
                        <Card.Title>
                            <div className="d-flex justify-content-between align-connections-center">
                                <h5 className="card-title">All Followers</h5>
                                <p className="mb-2 textHover">See all</p>
                            </div>
                        </Card.Title>
                        <Card.Text as="div">
                            <Row>
                                <Col md="3" className="mb-2">
                                    <Card className="w-100">
                                        <Card.Img src={jahed} />
                                        <Card.Body>
                                            <Card.Title>Md Jahed Miah</Card.Title>
                                            <h6>Web Developer</h6>
                                            <Card.Text as="div" className="mt-2">
                                                <div className="bgPrimary text-center rounded-3 mb-2">
                                                    <button className="btn w-100 text-white">View profile</button>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ClubFollower;