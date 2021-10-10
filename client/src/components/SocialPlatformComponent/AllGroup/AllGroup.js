import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import Avatar from "../../../images/avatar.jpeg";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
import {MemberRequest} from "../../../actions/groups";

const AllGroup = ({ suggestionGroup }) => {
    const dispatch = useDispatch()
    const history = useHistory();
    const [showMore, setShowMore] = useState(false)
    return (
        <div>
            {suggestionGroup.length !== 0 && (
                <Card className="w-100 rounded-3">
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between align-items-center">
                            <h5>You May Join</h5>
                            {!showMore && suggestionGroup.length > 6 &&  <h6 className="textHover" style={{cursor: 'pointer'}} onClick={() => setShowMore(true)}>See all</h6>}
                        </Card.Title>
                        <Card.Text>
                            {!showMore && suggestionGroup.slice(0, 5).map(group => (
                                    <div key={group._id} className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                            <img src={group.cover_picture ? `/api/files/storage/${group.cover_picture}` : Avatar} alt={group.name} className="img-fluid sideProfile me-3" />
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <h6 className="textHover text-dark" style={{cursor: 'pointer'}} onClick={() => history.push(`/group/${group._id}`)}>{group.name}</h6>
                                                    <small>{group.privacy}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <strong className="textSecondary cursor" onClick={() => dispatch(MemberRequest(group._id))} >Join</strong>
                                    </div>
                                ))
                            }
                            {showMore && suggestionGroup.map(group => (
                                <div key={group._id} className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                        <img src={group.cover_picture ? `/api/files/storage/${group.cover_picture}` : Avatar} alt={group.name} className="img-fluid sideProfile me-3" />
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h6 className="textHover text-dark" style={{cursor: 'pointer'}} onClick={() => history.push(`/group/${group._id}`)}>{group.name}</h6>
                                                <small>{group.privacy}</small>
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
            )}
        </div>
    );
};

export default AllGroup;