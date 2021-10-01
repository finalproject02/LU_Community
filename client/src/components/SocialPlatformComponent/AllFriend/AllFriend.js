import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import friendSuggestion from '../Suggestions/FriendSuggestionsData';

const AllFriend = () => {
    return (
        <div className="mb-4">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="8">
                        <Card className="w-100">
                            <Card.Body>
                                <Card.Title>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h5 className="card-title">All Connections</h5>
                                        <Link to="#" className="mb-2 text-muted textHover">See all</Link>
                                    </div>
                                </Card.Title>
                                <Card.Text as="div">
                                    <Row>
                                        {
                                            friendSuggestion.map(item => (
                                                <>
                                                    <div key={item.id} className="d-flex justify-content-between align-items-center">
                                                        <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                                            <img src={item.imageUrl} alt={item.name} className="img-fluid sideProfile me-3" />
                                                            <div className="d-flex align-items-center">
                                                                <div>
                                                                    <h6>
                                                                        <Link to="#" class="textHover text-dark">{item.name}</Link>
                                                                    </h6>
                                                                    <span className="text-muted">{item.position}</span>
                                                                    <br />
                                                                    <span className="text-muted">{item.homeTown}</span>
                                                                    <br />
                                                                    <span className="text-muted">{item.mutual} Mutual friends</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Link className="btn rounded-3 border-dark">Message</Link>
                                                    </div>
                                                    <div><hr /></div>
                                                </>
                                            ))
                                        }
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AllFriend;