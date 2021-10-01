import React, { useState } from 'react';
import { Card, Col, Collapse, Row } from 'react-bootstrap';
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import clubSuggestions from "./ClubSuggestionsData";

const ClubSuggestions = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="mb-4">
            <Card className="w-100">
                <Card.Body>
                    <Card.Title>
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title">You May Follow the Clubs</h5>
                            <Link to="#" className="mb-2 text-muted textHover" onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}>See all</Link>
                        </div>
                    </Card.Title>
                    <Card.Text as="div">
                        <Row>
                            {
                                clubSuggestions.map(item => (
                                    <Collapse in={open}>
                                        <Col key={item.id} md="3" className="mb-2">
                                            <Card className="w-100">
                                                <Card.Img src={item.imageUrl} className="card-img-top rounded-3 w-100" alt="..." />
                                                <Card.Body>
                                                    <Card.Title>{item.name}</Card.Title>
                                                    <small className="card-subtitle text-muted">
                                                        <FaLink className="me-2" />
                                                        <span>{item.following}</span>is following
                                                    </small>
                                                    <Card.Text as="div" className="mt-2">
                                                        <div className="bgPrimary text-center rounded-3 mb-2">
                                                            <Link to="#" className="btn w-100 text-white">Follow</Link>
                                                        </div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Collapse>
                                ))
                            }
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ClubSuggestions;