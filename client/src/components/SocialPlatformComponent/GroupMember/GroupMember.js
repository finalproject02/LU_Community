import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import jahed from "../../../images/Jahed.jpg";
import AllFriend from '../AllFriend/AllFriend';

const GroupMember = () => {
    return (
        <div>
            <Container>
                <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>
                            <div className="d-flex justify-content-between align-connections-center">
                                <h5>New Request</h5>
                                <p className="mb-2 textHover">See all</p>
                            </div>
                        </Card.Title>
                        <Row>
                            <Col md="3">
                                <Card className="w-100">
                                    <Card.Img src={jahed} style={{ height: "20vh" }} className="card-img-top rounded-3 cursor" alt="..." />
                                    <Card.Body>
                                        <Card.Title>Md jahed Miah</Card.Title>
                                        <Card.Text as="div" className="mt-2">
                                            <div className="bgSecondary text-center rounded-3 mb-2">
                                                <strong className="btn w-100 text-white">Accept</strong>
                                            </div>
                                            <div className="bg-secondary text-center rounded-3">
                                                <strong className="btn w-100 text-white">Reject</strong>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted"> <span>3</span> days ago</small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <div>
                    <AllFriend />
                </div>
            </Container>
        </div>
    );
};

export default GroupMember;