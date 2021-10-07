import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import clubSuggestions from '../ClubSuggestions/ClubSuggestionsData';

const ClubSuggestionsCard = ({suggestions}) => {
    return (
        <div className="mb-4">
            {suggestions?.length !== 0 &&(
                <Card className="w-100 rounded-3">
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between align-suggestions-center">
                            <h5>You May Follow</h5>
                            <h6 className="mb-2 textHover">See all</h6>
                        </Card.Title>
                        <Card.Text>
                            {
                                suggestions?.map(suggestion => (
                                    <div key={suggestion.id} className="d-flex justify-content-between align-suggestions-center">
                                        <div className="d-flex justify-content-start align-suggestions-center pt-3 mb-2">
                                            <img src={suggestion.imageUrl} alt={suggestion.name} className="img-fluid sideProfile me-3" />
                                            <div className="d-flex align-suggestions-center">
                                                <div>
                                                    <h6>
                                                        <Link to="#" class="textHover text-dark">{suggestion.name}</Link>
                                                    </h6>
                                                    <span className="text-muted">{suggestion.category}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <strong class="textSecondary cursor">Follow</strong>
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

export default ClubSuggestionsCard;