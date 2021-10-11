import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jahed from "../../../images/Jahed.jpg";
import AllGroup from '../AllGroup/AllGroup';
import CreateGroup from '../CreateGroup/CreateGroup';
import PostCard from '../PostCard/PostCard';
import SocialNavbar from '../SocialNavbar/SocialNavbar';
import {useSelector} from "react-redux";
import Avatar from "../../../images/avatar.jpeg";

const GroupInitial = () => {
    const [show, setShow] = useState(false);
    const { groups } = useSelector(state => state.groups);
    const { currentUser } = useSelector(state => state.auth);
    const myGroup = groups?.filter(group => group.creator_id === currentUser?._id);
    const [moreShow, setMoreShow] = useState(false)
    const [moreShowJoined, setMoreShowJoined] = useState(false)

    const suggestionGroup = groups?.filter(group => (group.creator_id !== currentUser?._id) && (!currentUser?.memberships.includes(group._id) && (!currentUser?.connecting.includes(group._id)) && group.visibility === 'visible'));

    const memberGroup = groups?.filter(group => currentUser?.memberships.includes(group._id));

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                                <button className="btn w-100 text-white" onClick={handleShow}>Create New Group</button>
                                <CreateGroup show={show} handleClose={handleClose} />
                            </div>
                            {myGroup.length !== 0 && (
                                <Card className="w-100 mb-4">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h6>Your Group</h6>
                                            {!moreShow && myGroup?.length > 3 && <h6 className="textHover" style={{cursor: 'pointer'}} onClick={() =>  setMoreShow(true)}>See all</h6>}

                                        </div>
                                        {!moreShow && myGroup.slice(0, 3).map(group => (
                                            <Link to={`/group/${group._id}`} className="d-flex justify-content-start align-items-center mb-2 cardHover p-3 rounded-3 text-decoration-none text-dark">
                                                <img src={group.cover_picture ? `/api/files/storage/${group.cover_picture}` : Avatar} alt="" width="45" height="45" className="rounded-circle me-2" />
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <h6 className="mb-0">{group.name}</h6>
                                                        <small>{group.privacy}</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}

                                        {moreShow && myGroup.map(group => (
                                            <Link to={`/group/${group._id}`} className="d-flex justify-content-start align-items-center mb-2 cardHover p-3 rounded-3 text-decoration-none text-dark">
                                                <img src={group.cover_picture ? `/api/files/storage/${group.cover_picture}` : Avatar} alt="" width="45" height="45" className="rounded-circle me-2" />
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <h6 className="mb-0">{group.name}</h6>
                                                        <small>{group.privacy}</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </Card.Body>
                                </Card>
                            )}
                            {!moreShowJoined && memberGroup.length !== 0 && (
                                <Card className="w-100 mb-4">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h6>Joined Group</h6>
                                            {memberGroup.length > 3 && <h6 style={{cursor: 'pointer'}} className="textHover" onClick={() => setMoreShowJoined(true)}>See all</h6>}
                                        </div>
                                        {memberGroup.slice(0, 3).map(group => (
                                            <Link to={`/group/${group._id}`} className="d-flex justify-content-start align-items-center mb-2 cardHover p-3 rounded-3 text-decoration-none text-dark">
                                                <img src={group.cover_picture ? `/api/files/storage/${group.cover_picture}` : Avatar} alt="" width="45" height="45" className="rounded-circle me-2" />
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <h6 className="mb-0">{group.name}</h6>
                                                        <small>{group.privacy}</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </Card.Body>
                                </Card>
                            )}
                            {moreShowJoined && memberGroup.length !== 0 && (
                                <Card className="w-100 mb-4">
                                    <Card.Body>
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h6>Joined Group</h6>
                                        </div>
                                        {memberGroup.map(group => (
                                            <Link to={`/group/${group._id}`} className="d-flex justify-content-start align-items-center mb-2 cardHover p-3 rounded-3 text-decoration-none text-dark">
                                                <img src={group.cover_picture ? `/api/files/storage/${group.cover_picture}` : Avatar} alt="" width="45" height="45" className="rounded-circle me-2" />
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <h6 className="mb-0">{group.name}</h6>
                                                        <small>{group.privacy}</small>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </Card.Body>
                                </Card>
                            )}
                            <h4 className="mb-2">Recent activity</h4>
                            <PostCard />
                        </Col>
                        <Col md="4">
                            <AllGroup suggestionGroup={suggestionGroup}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default GroupInitial;