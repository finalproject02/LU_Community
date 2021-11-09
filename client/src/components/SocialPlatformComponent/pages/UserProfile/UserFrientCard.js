import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../FriendCard/FriendCard.css";
import { useSelector } from "react-redux";
import Avatar from '../../../../images/avatar.jpeg';
import { useHistory, useParams } from "react-router-dom";
import React from "react";

const UserFriendCard = ({ setPost, setPhoto, setAbout, setConnection }) => {
    const history = useHistory();
    const params = useParams();
    const { id } = params;
    const { people } = useSelector(state => state.people);

    const paramUser = people?.filter(person => person._id === id);
    const paramsConnection = paramUser.map(users => people.filter(person => users.connection.includes(person._id)))

    return (
        <div className="mb-4">
            {paramsConnection.length !== 0 && (
                <Card className="w-100 rounded-3">
                    <Card.Body>
                        <Card.Title>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6>Connections</h6>
                                {paramsConnection.map(user => user.length > 6 &&
                                    <h6 className="mb-2 textHover" style={{cursor: 'pointer'}} onClick={() => {
                                        setAbout(false);
                                        setConnection(true);
                                        setPost(false);
                                        setPhoto(false)
                                    }}>See all</h6>
                                )}

                            </div>
                        </Card.Title>
                        <Card.Text>
                            <Row>
                                {paramUser.length !== 0 && (
                                    paramsConnection.map(connections => connections.slice(0, 6).map(connection => (
                                        <Col md="4" className="mb-2">
                                            <img src={connection.profile_picture ?
                                                `/api/files/storage/${connection.profile_picture}` :
                                                Avatar} style={{ cursor: 'pointer', height: "15vh" }} className="card-img-top rounded-3" alt="" onClick={() => {
                                                history.push(`/profile/${connection._id}`);
                                            }} />
                                            <span className="textHover cursor" onClick={() => {
                                                history.push(`/profile/${connection._id}`);
                                            }}>{connection.name}</span>
                                        </Col>
                                    )))
                                )}
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default UserFriendCard

