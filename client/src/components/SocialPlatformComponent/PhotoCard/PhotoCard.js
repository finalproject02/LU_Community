import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import jahed from "../../../images/Jahed.jpg";

const PhotoCard = () => {
    return (
        <div className="mb-4">
            <Card className="w-100">
                <Card.Body>
                    <Card.Title>
                        <div class="d-flex justify-content-between align-items-center">
                            <h4>Photos</h4>
                            <h6 class="card-subtitle mb-2 text-muted textHover">See All</h6>
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <Row>
                            <Col md="4" className="mb-2">
                                <img src={jahed} class="img-fluid rounded-3 mb-2" alt="" />
                            </Col>
                            <Col md="4" className="mb-2">
                                <img src={jahed} class="img-fluid rounded-3 mb-2" alt="" />
                            </Col>
                            <Col md="4" className="mb-2">
                                <img src={jahed} class="img-fluid rounded-3 mb-2" alt="" />
                            </Col>
                            <Col md="4" className="mb-2">
                                <img src={jahed} class="img-fluid rounded-3 mb-2" alt="" />
                            </Col>
                            <Col md="4" className="mb-2">
                                <img src={jahed} class="img-fluid rounded-3 mb-2" alt="" />
                            </Col>
                            <Col md="4" className="mb-2">
                                <img src={jahed} class="img-fluid rounded-3 mb-2" alt="" />
                            </Col>
                            <Col md="4" className="mb-2">
                                <img src={jahed} class="img-fluid rounded-3 mb-2" alt="" />
                            </Col>
                            <Col md="4" className="mb-2">
                                <img src={jahed} class="img-fluid rounded-3 mb-2" alt="" />
                            </Col>
                            <Col md="4" className="mb-2">
                                <img src={jahed} class="img-fluid rounded-3 mb-2" alt="" />
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PhotoCard;