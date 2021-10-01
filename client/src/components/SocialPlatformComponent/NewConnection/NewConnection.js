import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import newConnectionData from './NewConnectionData';

const NewConnection = () => {
    return (
        <div className="mt-4 mb-4">
            <Card className="w-100">
                <Card.Body>
                    <Card.Title>
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title">New Connection</h5>
                            <Link to="#" className="mb-2 text-muted textHover">See all</Link>
                        </div>
                    </Card.Title>
                    <Card.Text as="div">
                        <Row>
                            {
                                newConnectionData.map(item => (
                                    <Col key={item.id} md="3" className=" mb-2">
                                        <Card className="w-100">
                                            <Card.Img src={item.Photo} className="w-100 rounded-3" alt="..." />
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <small className="card-subtitle text-muted mb-2">
                                                    <FaLink className="me-2" />
                                                    <span>{item.mutual}</span> Mutual Friends
                                                </small>
                                                <Card.Text as="div" className="mt-2">
                                                    <div className="bgSecondary text-center rounded-3 mb-2">
                                                        <Link to="#" className="btn w-100 text-white">Accept</Link>
                                                    </div>
                                                    <div className="bg-secondary text-center rounded-3">
                                                        <Link to="#" className="btn w-100 text-white">Ignore</Link>
                                                    </div>
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted"> <span>{item.time}</span> days ago</small>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default NewConnection;