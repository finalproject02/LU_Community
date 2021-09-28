import React from 'react';
import { Card } from 'react-bootstrap';
import { FaDotCircle } from 'react-icons/fa';
import friendSuggestion from '../Suggestions/FriendSuggestionsData';

const Online = () => {
    return (
        <div className="mb-4">
            <Card className="w-100">
                <Card.Body>
                    <Card.Title>
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 className="">Online</h5>
                            <h6 className="mb-2 text-muted textHover">See All</h6>
                        </div>
                    </Card.Title>
                    <Card.Text>
                        {
                            friendSuggestion.map(item => (
                                <div class="d-flex justify-content-between align-items-center pt-3 mb-2">
                                    <div class="d-flex justify-content-start align-items-center">
                                        <img src={item.imageUrl} alt={item.name} class="img-fluid sideProfile me-3" />
                                        <h6>{item.name}</h6>
                                    </div>
                                    <div class="pb-2">
                                        <FaDotCircle className="text-success" />
                                    </div>
                                </div>
                            ))
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Online;