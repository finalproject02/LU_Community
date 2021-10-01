import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Suggestions.css";
import {useSelector} from "react-redux";
import Avatar from "../../../images/avatar.jpeg";
import {useHistory} from "react-router-dom";

const Suggestions = (props) => {
    const history = useHistory();
    const { suggestions } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth);
    const finalSuggestion = suggestions?.filter(suggestion => (suggestion._id !== currentUser?._id) && (!currentUser?.connection.includes(suggestion._id)) && (!currentUser?.connection_requests.includes(suggestion._id)) && (!currentUser?.connecting.includes(suggestion._id) ))
    return (
        <div className="mb-4">
            {finalSuggestion.length !== 0 && (
                <Card className="w-100 rounded-3">
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between align-suggestions-center">
                            <h5 className="card-title">People you may know</h5>
                            <h6 className="card-subtitle mb-2 text-muted textHover">See All</h6>
                        </Card.Title>
                        <Card.Text>
                            {
                                finalSuggestion.map(suggestion => (
                                    <div key={suggestion.id} className="d-flex justify-content-between align-suggestions-center">
                                        <div className="d-flex justify-content-start align-suggestions-center pt-3 mb-2">
                                                <img src={suggestion.profile_picture ? `/api/files/storage/${suggestion.profile_picture}` : Avatar} alt={suggestion.name} style={{cursor:'pointer'}} className="img-fluid sideProfile me-3" onClick={() => history.push(`/profile/${suggestion._id}`)}/>
                                            <div className="d-flex align-suggestions-center">
                                                <div>
                                                    <h6>
                                                        <span class="textHover text-dark"  className="img-fluid sideProfile me-3" style={{cursor:'pointer'}} onClick={() => history.push(`/profile/${suggestion._id}`)}>{suggestion.name}</span>
                                                    </h6>
                                                    <span className="text-muted">{suggestion.current_position}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <strong class="textPrimary">Connect</strong>
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