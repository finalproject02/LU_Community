import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { updateProfile } from "../../../actions/auth";
import { useHistory } from 'react-router-dom';
import Avatar from '../../../images/avatar.jpeg'
import { useDispatch } from "react-redux";
import { Peer } from "../../../actions/messages";

const AllFriend = ({ connections, paramsConnection, setPost }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    return (
        <div className="mb-4">
            <Container>
                <Card className="w-100">
                    <Card.Body>
                        <Card.Title>
                            <div className="d-flex justify-content-between align-connections-center">
                                {connections?.length !== 0 || paramsConnection?.length !== 0 && <h5 className="card-title">All Connections</h5>}
                            </div>
                        </Card.Title>
                        <Card.Text as="div">
                            <Row>
                                {
                                    connections?.map(connection => (
                                        <Col key={connection.id} md="3" className="mb-2">
                                            <Card className="w-100">
                                                <Card.Img src={connection.profile_picture ? `/api/files/storage/${connection.profile_picture}` : Avatar} style={{ height: "22vh" }} className="card-img-top rounded-3 cursor" alt="..." onClick={() => {
                                                    history.push(`/profile/${connection._id}`);
                                                    document.documentElement.scrollTop = 0
                                                }} />
                                                <Card.Body>
                                                    <Card.Title style={{ cursor: 'pointer' }} onClick={() => {
                                                        history.push(`/profile/${connection._id}`);
                                                        document.documentElement.scrollTop = 0;
                                                    }}>{connection.name}</Card.Title>
                                                    <h6>{connection.position}</h6>
                                                    <Card.Text as="div" className="mt-2">
                                                        <div className="bgPrimary text-center rounded-3 mb-2">
                                                            <strong className="btn w-100 text-white" onClick={() => {
                                                                dispatch(Peer(connection._id))
                                                                history.push(`/chat`);
                                                            }}>Chat</strong>
                                                        </div>
                                                        <div className="bgPrimary text-center rounded-3 mb-2">
                                                            <button className="btn w-100 text-white" onClick={() => {
                                                                history.push(`/profile/${connection._id}`);
                                                                document.documentElement.scrollTop = 0;
                                                            }}>View profile</button>
                                                        </div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))

                                }
                                {paramsConnection && (
                                    paramsConnection.map(PConnections => PConnections.map(PConnection => (
                                        <Col key={PConnection.id} md="3" className="mb-2">
                                            <Card className="w-100">
                                                <Card.Img src={PConnection.profile_picture ? `/api/files/storage/${PConnection.profile_picture}` : Avatar} style={{ height: "20vh" }} className="card-img-top rounded-3 cursor" alt="..." onClick={() => {
                                                    setPost(true)
                                                    history.push(`/profile/${PConnection._id}`);
                                                    document.documentElement.scrollTop = 0;
                                                }} />
                                                <Card.Body>
                                                    <Card.Title style={{ cursor: 'pointer' }} onClick={() => {
                                                        history.push(`/profile/${PConnection._id}`);
                                                        document.documentElement.scrollTop = 0;
                                                    }}>{PConnection.name}</Card.Title>
                                                    <h6>{PConnection.position}</h6>
                                                    <Card.Text as="div" className="mt-2">
                                                        <div className="bgPrimary text-center rounded-3 mb-2">
                                                            <strong className="btn w-100 text-white">Chat</strong>
                                                        </div>
                                                        <div className="bgPrimary text-center rounded-3 mb-2">
                                                            <button className="btn w-100 text-white" onClick={() => {
                                                                history.push(`/profile/${PConnection._id}`);
                                                                setPost(true)
                                                                document.documentElement.scrollTop = 0;
                                                            }}>View profile</button>
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

export default AllFriend;