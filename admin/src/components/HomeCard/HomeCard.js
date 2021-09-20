import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HomeCard = () => {
    return (
        <div>
            <Container fluid>
                <div>
                    <Row>
                        <Col md="4">
                            <div className="p-4 bg-info">
                                <div className="p-2">
                                    <h3>150</h3>
                                    <p>Results</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag"></i>
                                </div>
                            </div>
                        </Col>

                        <Col md="4">
                            <div className="p-4 bg-info">
                                <div className="p-2">
                                    <h3>44</h3>
                                    <p>Notice</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add"></i>
                                </div>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="p-4 bg-info">
                                <div className="p-2">
                                    <h3>65</h3>
                                    <p>Admission Request</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-pie-graph"></i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default HomeCard;