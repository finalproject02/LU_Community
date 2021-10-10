import React, {useState} from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Avatar from "../../../images/avatar.jpeg"
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const ClubFollower = ({ paramsClub }) => {
    const history = useHistory()
    const { people } = useSelector(state => state.people);
    const [showMore, setShowMore] = useState(false);
    const getUserProfilePicture = (id) => {
        const person = people?.filter(usr => usr._id === id);
        const pic = person.map(u => u.profile_picture);
        const check = pic.map(i => i == null);
        if (check.includes(true)) {
            return null
        } else {
            return person.map(u => u.profile_picture)
        }
    }

    const getUserName = (id) => {
        const person = people.filter(usr => usr._id === id);
        return person.map(u => u.name)
    }

    const getUserPosition = (id) => {
        const person = people.filter(usr => usr._id === id);
        return person.map(u => u.current_position)
    }
    return (
        <div className="mt-4">
            <Container>
                <Card className="w-100">
                    <Card.Body>
                        <Card.Title>
                            <div className="d-flex justify-content-between align-connections-center">
                                <h5 className="card-title">All Followers</h5>
                                {paramsClub.map(club => club.followers.map(follower => follower)).length > 4 &&  <p className="mb-2 textHover" onClick={() => setShowMore(true)}>See all</p>}
                            </div>
                        </Card.Title>
                        <Card.Text as="div">
                            <Row>
                                {!showMore && (
                                    paramsClub.slice(0, 4).map(club => club.followers.map(follower => (
                                            <Col md="3" className="mb-2">
                                                <Card className="w-100">
                                                    <Card.Img src={getUserProfilePicture(follower) ? `/api/files/storage/${getUserProfilePicture(follower)}` : Avatar} />
                                                    <Card.Body>
                                                        <Card.Title>{getUserName(follower)}</Card.Title>
                                                        <h6>{getUserPosition(follower)}</h6>
                                                        <Card.Text as="div" className="mt-2">
                                                            <div className="bgPrimary text-center rounded-3 mb-2">
                                                                <button className="btn w-100 text-white" onClick={() => {history.push(`/profile/${follower}`)}}>View profile</button>
                                                            </div>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )))
                                )}
                                {showMore && (
                                    paramsClub.map(club => club.followers.map(follower => (
                                        <Col md="3" className="mb-2">
                                            <Card className="w-100">
                                                <Card.Img src={getUserProfilePicture(follower) ? `/api/files/storage/${getUserProfilePicture(follower)}` : Avatar} />
                                                <Card.Body>
                                                    <Card.Title>{getUserName(follower)}</Card.Title>
                                                    <h6>{getUserPosition(follower)}</h6>
                                                    <Card.Text as="div" className="mt-2">
                                                        <div className="bgPrimary text-center rounded-3 mb-2">
                                                            <button className="btn w-100 text-white" onClick={() => {history.push(`/profile/${follower}`)}}>View profile</button>
                                                        </div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )))
                                )}

                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ClubFollower;