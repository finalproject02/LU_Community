import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';
import Avatar from "../../../../images/avatar.jpeg";
import PostCard from '../../PostCard/PostCard';
import { Link } from 'react-router-dom';
import ClubSuggestionsCard from '../../ClubSuggestionsCard/ClubSuggestionsCard';
import CreateClub from '../../CreateClub/CreateClub';
import { useSelector } from "react-redux";

const Club = () => {

    const { clubs } = useSelector(state => state.clubs)
    const { currentUser } = useSelector(state => state.auth)
    const [show, setShow] = useState(false);
    const [moreShow, setMoreShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }
    const myClubs = clubs?.filter(club => club.creator_id === currentUser?._id);

    const suggestionClub = clubs?.filter(club => (club.creator_id !== currentUser?._id) && (!currentUser?.followings.includes(club._id)));

    const followingClub = clubs?.filter(club => currentUser?.followings.includes(club._id));

    return (
        <div>
            <div>
                <SocialNavbar />
            </div>
            <div>
                <Container>
                    <Row className="mt-4 mb-4">
                        <Col md="8">
                            <div className="bgPrimary text-center rounded-3 mb-4">
                                <button className="btn w-100 text-white" onClick={handleShow}>Create New Club</button>
                                <CreateClub show={show} handleClose={handleClose} />
                            </div>
                            {myClubs?.length !== 0 && (
                                <Card className="w-100 mb-4">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h6>Your Club</h6>
                                            {!moreShow && myClubs?.length > 3 && <h6 className="textHover" onClick={() => setMoreShow(true)} style={{ cursor: 'pointer' }}>See all</h6>}
                                        </div>

                                        {!moreShow && (
                                            myClubs.slice(0, 3).map(club => (
                                                <Link to={`/clubDetails/${club._id}`} className="d-flex justify-content-start align-items-center mb-2 cardHover p-3 rounded-3 text-decoration-none text-dark">
                                                    <img src={club.profile_picture ? `/api/files/storage/${club.profile_picture}` : Avatar} alt="" width="45" height="45" className="rounded-circle me-2" />
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <strong className="mb-0">{club.name}</strong>
                                                            <small>{club.category}</small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))
                                        )}
                                        {moreShow && (
                                            myClubs.map(club => (
                                                <Link to={`/clubDetails/${club._id}`} className="d-flex justify-content-start align-items-center mb-2 cardHover p-3 rounded-3 text-decoration-none text-dark">
                                                    <img src={club.profile_picture ? `/api/files/storage/${club.profile_picture}` : Avatar} alt="" width="45" height="45" className="rounded-circle me-2" />
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <h6 className="mb-0">{club.name}</h6>
                                                            <small>{club.category}</small>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))
                                        )}
                                    </Card.Body>
                                </Card>
                            )}
                            {followingClub?.length !== 0 && (
                                <Card className="w-100 mb-4">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h6>Following Club</h6>
                                            {followingClub?.length > 4 && <h6 className="textHover">See all</h6>}
                                        </div>

                                        {followingClub?.map(club => (
                                            <Link to={`/clubDetails/${club._id}`} className="d-flex justify-content-start align-items-center mb-2 cardHover p-3 rounded-3 text-decoration-none text-dark">
                                                <img src={club.profile_picture ? `/api/files/storage/${club.profile_picture}` : Avatar} alt="" width="45" height="45" className="rounded-circle me-2" />
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <h6 className="mb-0">{club.name}</h6>
                                                        <small>{club.category}</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </Card.Body>
                                </Card>
                            )}
                            <h5 className="mb-2">Recent activity</h5>
                            <PostCard />
                        </Col>
                        <Col md="4">
                            <ClubSuggestionsCard suggestions={suggestionClub} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Club;