import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./FriendCard.css";
import { useSelector } from "react-redux";
import Avatar from '../../../images/avatar.jpeg';
import { useHistory, useParams } from "react-router-dom";

const FriendCard = () => {
    const history = useHistory();
    const params = useParams();
    const { id } = params;
    const { currentUser } = useSelector(state => state.auth);
    const { people } = useSelector(state => state.people);
    const connections = people.filter(connect => currentUser?.connection.includes(connect._id));
    const paramUser = people.filter(person => person._id === id);

    return (
        <div className="mb-4">
            {paramUser.length === 0 && (
                <Card className="w-100 rounded-3">
                    <Card.Body>
                        <Card.Title>
                            <div className="d-flex justify-content-between align-items-center">
                                <h4>Connections</h4>
                                <h6 className="mb-2 textHover">See all</h6>
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <Row>
                                {connections.map(connection => (
                                    <Col md="4" className="mb-2">
                                        <img src={connection.profile_picture ?
                                            `/api/files/storage/${connection.profile_picture}` :
                                            Avatar} style={{ cursor: 'pointer', height: "12vh" }} className="card-img-top rounded-3" alt="" onClick={() => {
                                                history.push(`/profile/${connection._id}`);
                                                document.documentElement.scrollTop = 0;
                                            }} />
                                        <h6 className="textHover cursor">{connection.name}</h6>
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

export default FriendCard