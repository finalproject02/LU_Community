import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
    const paramsConnection = paramUser.map(users => people.filter(person => users.connection.includes(person._id)))


    return (
        <div className="mb-4">
            <Card className="w-100 rounded-3">
                <Card.Body>
                    <Card.Title>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="card-title">Connections</h4>
                            <h6 className="mb-2 textHover">See all</h6>
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <Row>
                            {paramUser.length === 0 && (
                                connections.map(connection => (
                                    <Col md="4" className="mb-2">
                                        <img src={connection.profile_picture ?
                                            `/api/files/storage/${connection.profile_picture}` :
                                            Avatar} className="img-fluid rounded-3" alt="" onClick={() => {
                                                history.push(`/profile/${connection._id}`);
                                                document.documentElement.scrollTop = 0;
                                            }} />
                                        <Link href="#" className="textHover fontSize text-dark">{connection.name}</Link>
                                    </Col>
                                ))
                            )
                            }
                            {paramUser.length !== 0 && (
                                paramsConnection.map(connections => connections.map(connection => (
                                    <Col md="4" className="mb-2">
                                        <img src={connection.profile_picture ?
                                            `/api/files/storage/${connection.profile_picture}` :
                                            Avatar} className="img-fluid rounded-3" alt="" onClick={() => {
                                                history.push(`/profile/${connection._id}`);
                                                document.documentElement.scrollTop = 0;
                                            }} />
                                        <Link href="#" className="textHover fontSize text-dark">{connection.name}</Link>
                                    </Col>
                                )))
                            )}
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default FriendCard