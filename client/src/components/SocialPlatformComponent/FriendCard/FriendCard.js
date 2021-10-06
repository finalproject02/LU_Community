import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./FriendCard.css";
import { useSelector } from "react-redux";
import Avatar from '../../../images/avatar.jpeg';
import { useHistory, useParams } from "react-router-dom";

const FriendCard = ({ setPhoto, setPost, setAbout, setConnection }) => {
    const history = useHistory();
    const { currentUser } = useSelector(state => state.auth);
    const { people } = useSelector(state => state.people);
    const connections = people.filter(connect => currentUser?.connection.includes(connect._id));

    return (
        <div className="mb-4">
            {connections.length !== 0 && (
                <Card className="w-100 rounded-3">
                    <Card.Body>
                        <Card.Title>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6>Connections</h6>
                                {connections.length > 6 && <h6 className="mb-2 textHover" style={{cursor: 'pointer'}} onClick={() => {
                                    setPost(false);
                                    setPhoto(false);
                                    setConnection(true);
                                    setAbout(false)
                                }}>See all</h6>}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <Row>
                                {connections.slice(0, 6).map(connection => (
                                    <Col md="4" className="mb-2">
                                        <img src={connection.profile_picture ?
                                            `/api/files/storage/${connection.profile_picture}` :
                                            Avatar} style={{ cursor: 'pointer', height: "12vh" }} className="card-img-top rounded-3" alt="" onClick={() => {
                                                history.push(`/profile/${connection._id}`);
                                            }} />
                                        <span className="textHover cursor" onClick={() => {
                                            history.push(`/profile/${connection._id}`);
                                        }}>{connection.name}</span>
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