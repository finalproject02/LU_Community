import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jahed from "../../../images/Jahed.jpg";
import "./FriendCard.css";

const FriendCard = () => {
    return (
        <div className="mb-4">
            <Card className="w-100 rounded-3">
                <Card.Body>
                    <Card.Title>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="card-title">Connections</h4>
                            <h6 className="card-subtitle mb-2 text-muted textHover">See All</h6>
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <Row>
                            <Col md="4" className="mb-2">
                                <img src={jahed} className="img-fluid rounded-3" alt="" />
                                <Link href="#" className="textHover fontSize text-dark">
                                    Md Jahed Miah
                                </Link>
                            </Col>
                            <Col md="4" className="mb-2">
                                <img src={jahed} className="img-fluid rounded-3" alt="" />
                                <Link href="#" className="textHover fontSize text-dark">
                                    Md Jahed Miah
                                </Link>
                            </Col>
                            <Col md="4" className="mb-2">
                                <img src={jahed} className="img-fluid rounded-3" alt="" />
                                <Link href="#" className="textHover fontSize text-dark">
                                    Md Jahed Miah
                                </Link>
                            </Col>
                            <Col md="4" className="mb-2">
                                <img src={jahed} className="img-fluid rounded-3" alt="" />
                                <Link href="#" className="textHover fontSize text-dark">
                                    Md Jahed Miah
                                </Link>
                            </Col>
                            <Col md="4" className="mb-2">
                                <img src={jahed} className="img-fluid rounded-3" alt="" />
                                <Link href="#" className="textHover fontSize text-dark">
                                    Md Jahed Miah
                                </Link>
                            </Col>
                            <Col md="4" className="mb-2">
                                <img src={jahed} className="img-fluid rounded-3" alt="" />
                                <Link href="#" className="textHover fontSize text-dark">
                                    Md Jahed Miah
                                </Link>
                            </Col>
                            <Col md="4" className="mb-2">
                                <img src={jahed} className="img-fluid rounded-3" alt="" />
                                <Link href="#" className="textHover fontSize text-dark">
                                    Md Jahed Miah
                                </Link>
                            </Col>
                            <Col md="4" className="mb-2">
                                <img src={jahed} className="img-fluid rounded-3" alt="" />
                                <Link href="#" className="textHover fontSize text-dark">
                                    Md Jahed Miah
                                </Link>
                            </Col>
                            <Col md="4" className="mb-2">
                                <img src={jahed} className="img-fluid rounded-3" alt="" />
                                <Link href="#" className="textHover fontSize text-dark">
                                    Md Jahed Miah
                                </Link>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FriendCard;