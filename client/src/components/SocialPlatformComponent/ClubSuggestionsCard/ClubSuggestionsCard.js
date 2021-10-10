import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from "../../../images/avatar.jpeg";
import { ClubFollow } from "../../../actions/clubs";
import {useDispatch} from "react-redux";

const ClubSuggestionsCard = ({suggestions}) => {
    const dispatch = useDispatch();
    return (
        <div className="mb-4">
            {suggestions?.length !== 0 &&(
                <Card className="w-100 rounded-3">
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between align-suggestions-center">
                            <h5>You May Follow</h5>
                            {suggestions?.length > 3 && <h6 className="mb-2 textHover">See all</h6>}
                        </Card.Title>
                        <Card.Text>
                            {
                                suggestions?.map(suggestion => (
                                    <div key={suggestion.id} className="d-flex justify-content-between align-suggestions-center">
                                        <Link to={`/clubDetails/${suggestion._id}`} className="d-flex justify-content-start align-items-center mb-2 p-3 rounded-3 text-decoration-none text-dark">
                                            <img src={suggestion.profile_picture ? `/api/files/storage/${suggestion.profile_picture}` : Avatar} alt={suggestion.name} className="img-fluid sideProfile me-3" />
                                            <div className="d-flex align-suggestions-center">
                                                <div>
                                                    <h6 className="mb-0">{suggestion.name}</h6>
                                                    <small>{suggestion.category}</small>
                                                </div>
                                            </div>
                                        </Link>
                                        <strong class="textSecondary cursor" onClick={() => dispatch(ClubFollow(suggestion._id))}>Follow</strong>
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