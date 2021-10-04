import React from 'react';
import { Card } from 'react-bootstrap';
import clubSuggestions from '../ClubSuggestions/ClubSuggestionsData';

const AllGroup = () => {
    return (
        <div>
            <Card className="w-100 rounded-3">
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between align-items-center">
                        <h5>You May Join</h5>
                        <h6 className="textHover">See all</h6>
                    </Card.Title>
                    <Card.Text>
                        {
                            clubSuggestions.map(item => (
                                <div key={item.id} className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                        <img src={item.imageUrl} alt={item.name} className="img-fluid sideProfile me-3" />
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h6 className="textHover text-dark">{item.name}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <strong className="textSecondary cursor">Join</strong>
                                </div>
                            ))
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllGroup;