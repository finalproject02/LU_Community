import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import friendSuggestion from "./FriendSuggestionsData.js";
import "./Suggestions.css";

const Suggestions = () => {
    console.log(friendSuggestion);
    return (
        <div className="mb-4">
            <Card className="w-100 rounded-3">
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">People you may know</h5>
                        <h6 className="card-subtitle mb-2 text-muted textHover">See All</h6>
                    </Card.Title>
                    <Card.Text>
                        {
                            friendSuggestion.map(item => (
                                <div key={item.id} className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                        <img src={item.imageUrl} alt={item.name} className="img-fluid sideProfile me-3" />
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h6>
                                                    <Link to="#" class="textHover text-dark">{item.name}</Link>
                                                </h6>
                                                <span className="text-muted">{item.position}</span>
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
        </div>
    );
};

export default Suggestions;