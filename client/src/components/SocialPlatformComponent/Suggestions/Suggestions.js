import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Suggestions.css";
import { useSelector } from "react-redux";
import Avatar from "../../../images/avatar.jpeg";
import { useHistory } from "react-router-dom";

const Suggestions = (props) => {
    const history = useHistory();
    const { suggestions } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth);
    const finalSuggestion = suggestions?.filter(suggestion => (suggestion._id !== currentUser?._id) && (!currentUser?.connection.includes(suggestion._id)) && (!currentUser?.connection_requests.includes(suggestion._id)) && (!currentUser?.connecting.includes(suggestion._id)))
    return (
        <div className="mb-4">
            {finalSuggestion.length !== 0 && (
                <Card className="w-100 rounded-3">
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between align-items-center">
                            <h5>You may know</h5>
                            <h6 className="mb-2 textHover">See all</h6>
                        </Card.Title>
                        <Card.Text>
                            {
                                finalSuggestion.map(suggestion => (
                                    <div key={suggestion.id} className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                            <img src={suggestion.profile_picture ? `/api/files/storage/${suggestion.profile_picture}` : Avatar} alt={suggestion.name} style={{ cursor: 'pointer' }} width="52" height="52" className="rounded-circle me-2" onClick={() => history.push(`/profile/${suggestion._id}`)} />
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <h6>
                                                        <span class="textHover text-dark" className="img-fluid sideProfile me-3" style={{ cursor: 'pointer' }} onClick={() => history.push(`/profile/${suggestion._id}`)}>{suggestion.name}</span>
                                                    </h6>
                                                    <span className="text-muted">{suggestion.current_position}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Link class="textPrimary text-decoration-none fw-bold">Connect</Link>
                                    </div>
                                ))
                            }
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default Suggestions;