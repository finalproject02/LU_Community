import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Avatar from '../../../images/avatar.jpeg'
import { useHistory } from "react-router-dom";
import { Accept_Connection_Request, Disconnect } from "../../../actions/users";

const NewConnection = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { people } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth);

    const connectionRequests = people?.filter(person => currentUser?.connection_requests.includes(person._id));
    return (
        <div className="mt-4 mb-4">
            {connectionRequests.length !== 0 && (
                <Card className="w-100">
                    <Card.Body>
                        <Card.Title>
                            <div className="d-flex justify-content-between align-items-center">
                                <h5>New Connection</h5>
                                <Link to="#" className="mb-2 textHover text-dark">See all</Link>
                            </div>
                        </Card.Title>
                        <Card.Text as="div">
                            <Row>
                                {
                                    connectionRequests.map(requests => (
                                        <Col key={requests.id} md="3" className=" mb-2">
                                            <Card className="w-100" style={{ cursor: 'pointer' }}>
                                                <Card.Img src={requests.profile_picture ? `/api/files/storage/${requests.profile_picture}` : Avatar} style={{ cursor: 'pointer', height: "20vh" }} className="card-img-top rounded-3 w-100" alt="name" onClick={() => { history.push(`/profile/${requests._id}`) }} />
                                                <Card.Body>
                                                    <Card.Title onClick={() => { history.push(`/profile/${requests._id}`) }}>{requests.name}</Card.Title>
                                                    <small className="card-subtitle text-muted mb-2">
                                                        <FaLink className="me-2" />
                                                        <span>{requests.mutual}</span> Mutual Friends
                                                    </small>
                                                    <Card.Text as="div" className="mt-2">
                                                        <div className="bgSecondary text-center rounded-3 mb-2">
                                                            <Link to="#" className="btn w-100 text-white" onClick={() => {
                                                                dispatch(Accept_Connection_Request(requests._id));
                                                                window.location.reload();
                                                            }

                                                            }>Accept</Link>
                                                        </div>
                                                        <div className="bg-secondary text-center rounded-3">
                                                            <Link to="#" className="btn w-100 text-white" onClick={() => {
                                                                dispatch(Disconnect(requests._id));
                                                                window.location.reload()
                                                            }}>Ignore</Link>
                                                        </div>
                                                    </Card.Text>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <small className="text-muted"> <span>{requests.time}</span> days ago</small>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}

        </div>
    );
};

export default NewConnection;