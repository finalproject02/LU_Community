import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import moment from "moment";
import {AcceptRequest, RejectRequest} from "../../../actions/groups";
import Avatar from "../../../images/avatar.jpeg";

const GroupMember = () => {
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = params;
    const { people } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth);
    const { groups } = useSelector(state => state.groups);

    const paramsGroup = groups?.filter(group => group._id === id);
    const getUserProfilePicture = (userId) => {
        const person = people.filter(usr => usr._id === userId);
        const pic = person.map(u => u.profile_picture);
        const check = pic.map(i => i == null);
        if (check.includes(true)) {
            return null
        } else {
            return person.map(u => u.profile_picture)
        }
    }

    const getUserName = (userId) => {
        const person = people.filter(usr => usr._id === userId);
        return person.map(u => u.name)
    };
    const getUserPosition = (userId) => {
        const person = people.filter(usr => usr._id === userId);
        return person.map(u => u.current_position)
    };
    const getRequestTime = (userId) => {
        const findUser = currentUser?.notifications.filter(notification => notification.notify_by === userId && notification.types === 'member_request');
        console.log(findUser)
        return parseInt(findUser.map(user => user.time).toString())
    }
    const isCreator = groups?.filter(group => group.creator_id === currentUser._id && group._id === id);
    console.log(paramsGroup.map(group => group.join_requests.length))
    return (
        <div>
            <Container>
                {isCreator.length !== 0 &&  <Card className="mb-4">
                    <Card.Body>
                        <Card.Title>
                            <div className="d-flex justify-content-between align-connections-center">
                                {paramsGroup.map(group => group.join_requests.length) > 0 && <h5>New Request</h5>}
                                {paramsGroup.map(group => group.join_requests.length) > 3 && <p className="mb-2 textHover">See all</p>}
                            </div>
                        </Card.Title>
                        <Row>
                            {paramsGroup.slice(0, 1).map(group => group.join_requests.map(request => (
                                <Col md="3">
                                    <Card className="w-100">
                                        <Card.Img src={getUserProfilePicture(request) !== null ? `/api/files/storage/${getUserProfilePicture(request)}` : Avatar} style={{ height: "20vh" }} className="card-img-top rounded-3 cursor" alt="..." />
                                        <Card.Body>
                                            <Card.Title>{getUserName(request)}</Card.Title>
                                            <Card.Text as="div" className="mt-2">
                                                <div className="bgSecondary text-center rounded-3 mb-2">
                                                    <strong className="btn w-100 text-white" onClick={() => dispatch(AcceptRequest(id, request))}>Accept</strong>
                                                </div>
                                                <div className="bg-secondary text-center rounded-3">
                                                    <strong className="btn w-100 text-white" onClick={() => dispatch(RejectRequest(id, request))}>Reject</strong>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted"> {moment(getRequestTime(request)).fromNow()}</small>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )))}
                        </Row>
                    </Card.Body>
                </Card>}
                <div>
                <Row>
                    {paramsGroup.slice(0, 1).map(group => group.members.map(member  => (
                        <Col  md="3" className="mb-2">
                            <Card className="w-100">
                                <Card.Img src={getUserProfilePicture(member) ? `/api/files/storage/${getUserProfilePicture(member)}` : Avatar} style={{ height: "20vh" }} className="card-img-top rounded-3 cursor" alt="..." onClick={() => {
                                    history.push(`/profile/${member}`);
                                    document.documentElement.scrollTop = 0
                                }} />
                                <Card.Body>
                                    <Card.Title style={{cursor: 'pointer'}} onClick={() => {
                                        history.push(`/profile/${member}`);
                                        document.documentElement.scrollTop = 0;
                                    }}>{getUserName(member)}</Card.Title>
                                    <h6>{getUserPosition(member)}</h6>
                                    <Card.Text as="div" className="mt-2">
                                        <div className="bgPrimary text-center rounded-3 mb-2">
                                            <strong className="btn w-100 text-white">Chat</strong>
                                        </div>
                                        <div className="bgPrimary text-center rounded-3 mb-2">
                                            <button className="btn w-100 text-white" onClick={() => {
                                                history.push(`/profile/${member}`);
                                                document.documentElement.scrollTop = 0;
                                            }}>View profile</button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )))}
                </Row>
                </div>
            </Container>
        </div>
    );
};

export default GroupMember;