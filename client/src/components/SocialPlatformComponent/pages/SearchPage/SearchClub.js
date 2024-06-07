import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import Avatar from "../../../../images/avatar.jpeg";
import {useDispatch, useSelector} from "react-redux";
import { ClubFollow, ClubUnfollow } from "../../../../actions/clubs";
import {useHistory} from "react-router-dom";

const SearchClub = ({clubs}) => {
    const history = useHistory();
    const dispatch = useDispatch()
    const { currentUser } = useSelector(state => state.auth);
    const [showMore, setShowMore] = useState(false)
    return (
        <div className="mb-4">
            {clubs?.length !== 0 && (
                <Card>
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between">
                            <h5>Club</h5>
                        </Card.Title>
                        {!showMore && (
                            clubs.slice(0, 4).map(club => (
                                    <Card.Text as="div" className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                            <img src={club.profile_picture ? `/api/files/storage/${club.profile_picture}` : Avatar} alt="jahed" width="55" height="55" className="rounded-circle me-3" />
                                            <div className="d-flex align-items-center">
                                                <h6 className="textHover text-dark" style={{cursor: 'pointer'}} onClick={() => history.push(`/clubDetails/${club._id}`)}>{club.name}</h6>
                                            </div>
                                        </div>
                                        {club.creator_id !== currentUser?._id && (
                                            !currentUser?.followings.includes(club._id) ? (
                                                <strong className="textSecondary cursor" onClick={() => dispatch(ClubFollow(club._id))}>Follow</strong>
                                            ) : (
                                                <strong className="textSecondary cursor" onClick={() => dispatch(ClubUnfollow(club._id))}>Unfollow</strong>
                                            )
                                        )}
                                    </Card.Text>
                                ))
                        )}

                        {showMore && (
                            clubs.map(club => (
                                <Card.Text as="div" className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                        <img src={club.profile_picture ? `/api/files/storage/${club.profile_picture}` : Avatar} alt="jahed" width="55" height="55" className="rounded-circle me-3" />
                                        <div className="d-flex align-items-center">
                                            <h6 className="textHover text-dark" style={{cursor: 'pointer'}} onClick={() => history.push(`/clubDetails/${club._id}`)}>{club.name}</h6>
                                        </div>
                                    </div>
                                    {club.creator_id !== currentUser?._id && (
                                        !currentUser?.followings.includes(club._id) ? (
                                            <strong className="textSecondary cursor" onClick={() => dispatch(ClubFollow(club._id))}>Follow</strong>
                                        ) : (
                                            <strong className="textSecondary cursor" onClick={() => dispatch(ClubUnfollow(club._id))}>Unfollow</strong>
                                        )
                                    )}
                                </Card.Text>
                            ))
                        )}

                        {!showMore && (
                            clubs.length > 4 &&
                              <div className="bgPrimary text-center rounded-3 mt-4">
                                        <strong className="btn w-100 text-white" onClick={() =>  setShowMore(true)}>View More</strong>
                              </div>
                        )}
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default SearchClub;