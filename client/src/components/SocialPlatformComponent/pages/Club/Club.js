import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';
import UniversityClubs from '../../UniversityClubs/UniversityClubs';
import jahed from "../../../../images/Jahed.jpg";
import PostCard from '../../PostCard/PostCard';
import { Link } from 'react-router-dom';
import ClubSuggestions from '../../ClubSuggestions/ClubSuggestions';
import Suggestions from '../../Suggestions/Suggestions';
import ClubSuggestionsCard from '../../ClubSuggestionsCard/ClubSuggestionsCard';

const Club = () => {
    return (
        <div>
            <div>
                <SocialNavbar />
            </div>
            <div>
                <Container>
                    <Row className="mt-4 mb-4">
                        <Col md="8">
                            <Card className="w-100 mb-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h6>Following Club</h6>
                                        <h6 className="textHover">See all</h6>
                                    </div>
                                    <Link to="/clubDetails" className="d-flex justify-content-start align-items-center mb-2 cardHover p-3 rounded-3 text-decoration-none text-dark">
                                        <img src={jahed} alt="" width="45" height="45" className="rounded-circle me-2" />
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h6 className="mb-0">Leading University Computer Club</h6>
                                                <small>Computer club</small>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/group" className="d-flex justify-content-start align-items-center mb-2 cardHover p-3 rounded-3 text-decoration-none text-dark">
                                        <img src={jahed} alt="" width="45" height="45" className="rounded-circle me-2" />
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h6 className="mb-0">CSE 46th Batch</h6>
                                                <small>DBMS</small>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Body>
                            </Card>
                            <h4 className="mb-2">Recent activity</h4>
                            <PostCard />
                        </Col>
                        <Col md="4">
                            <ClubSuggestionsCard />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Club;