import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllFriend = () => {
    return (
        <div className="mb-4">
            <Container>
                <Card className="w-100">
                    <Card.Body>
                        <Card.Title>
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="card-title">All friends</h5>
                                <Link to="#" className="mb-2 text-muted textHover">See all</Link>
                            </div>
                        </Card.Title>
                        <Card.Text as="div">
                            {/*<Row>*/}
                            {/*    {*/}
                            {/*        friendSuggestion.map(item => (*/}
                            {/*            <Col key={item.id} md="3" className="mb-2">*/}
                            {/*                <Card className="w-100">*/}
                            {/*                    <Card.Img src={item.imageUrl} className="card-img-top rounded-3" alt="..." />*/}
                            {/*                    <Card.Body>*/}
                            {/*                        <Card.Title>{item.name}</Card.Title>*/}
                            {/*                        <h6>{item.position}</h6>*/}
                            {/*                        <small className="card-subtitle text-muted">*/}
                            {/*                            <FaLink className="me-2" />*/}
                            {/*                            <span>{item.mutual}</span> Mutual Friends*/}
                            {/*                        </small>*/}
                            {/*                        <Card.Text as="div" className="mt-2">*/}
                            {/*                            <div className="bgPrimary text-center rounded-3 mb-2">*/}
                            {/*                                <Link to="#" className="btn w-100 text-white">Chat</Link>*/}
                            {/*                            </div>*/}
                            {/*                            <div className="bgPrimary text-center rounded-3 mb-2">*/}
                            {/*                                <Link to="#" className="btn w-100 text-white">View profile</Link>*/}
                            {/*                            </div>*/}
                            {/*                        </Card.Text>*/}
                            {/*                    </Card.Body>*/}
                            {/*                </Card>*/}
                            {/*            </Col>*/}
                            {/*        ))*/}
                            {/*    }*/}
                            {/*</Row>*/}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default AllFriend;