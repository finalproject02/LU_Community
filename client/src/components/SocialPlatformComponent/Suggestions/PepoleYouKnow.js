import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import Avatar from '../../../images/avatar.jpeg'
import {useHistory} from "react-router-dom";

const PepoleYouKnow = () => {
    const history = useHistory();
    const { suggestions } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth);
    const finalSuggestion = suggestions?.filter(suggestion => (suggestion._id !== currentUser._id) && (!currentUser?.connection.includes(suggestion._id)) && (!currentUser?.connection_requests.includes(suggestion._id) ) && (!currentUser?.connecting.includes(suggestion._id) ));

    return (
        <div className="mb-4">
            {finalSuggestion.length !== 0 && (
                <Card className="w-100">
                    <Card.Body>
                        <Card.Title>
                            <div className="d-flex justify-content-between align-suggestions-center">
                                <h5 className="card-title">People You May Know</h5>
                                <Link to="#" className="mb-2 text-muted textHover">See all</Link>
                            </div>
                        </Card.Title>
                        <Card.Text as="div">
                            <Row>
                                {
                                    finalSuggestion?.map(suggestion => (
                                        <Col key={suggestion.id} md="3" className="mb-2">
                                            <Card className="w-100">
                                                <Card.Img onClick={() => history.push(`/profile/${suggestion._id}`)} style={{cursor:'pointer'}} src={suggestion.profile_picture ? `/api/files/storage/${suggestion.profile_picture}` : Avatar} className="card-img-top rounded-3" alt="..." />
                                                <Card.Body>
                                                    <Card.Title onClick={() => history.push(`/profile/${suggestion._id}`)} style={{cursor:'pointer'}}>{suggestion.name}</Card.Title>
                                                    <h6>{suggestion.current_position}</h6>
                                                    <small className="card-subtitle text-muted">
                                                        <FaLink className="me-2" />
                                                        <span>{suggestion.mutual}</span> Mutual Friends
                                                    </small>
                                                    <Card.Text as="div" className="mt-2">
                                                        <div className="bgPrimary text-center rounded-3 mb-2">
                                                            <Link to="#" className="btn w-100 text-white">Connect</Link>
                                                        </div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default PepoleYouKnow;