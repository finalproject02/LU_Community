import React, {useState} from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Avatar from '../../../images/avatar.jpeg'
import { useHistory } from "react-router-dom";
import { Accept_Connection_Request, Disconnect } from "../../../actions/auth";
import moment from "moment";

const NewConnection = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { people } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth);
    const [showMore, setShowMore] = useState(false)

    const getUserProfilePicture = (id) => {
        const person = people.filter(usr => usr._id === id);
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
    };
    const getRequestTime = (id) => {
        const findUser = currentUser?.notifications.filter(notification => notification.notify_by === id);
        return parseInt(findUser.map(user => user.time).toString())
    }

    return (
        <div className="mt-4 mb-4">
            {currentUser?.connection_requests.length !== 0 &&(
                <Card className="w-100">
                    <Card.Body>
                        <Card.Title>
                            <div className="d-flex justify-content-between align-items-center">
                                <h5>New Connection</h5>
                                {!showMore && currentUser?.connection_requests.length > 4 && <span className="mb-2 textHover text-dark" style={{cursor:'pointer'}} onClick={() => setShowMore(true)}>See all</span>}
                            </div>
                        </Card.Title>
                        <Card.Text as="div">
                            <Row>
                                {!showMore && currentUser?.connection_requests.slice(0, 4).sort().map(requests => (

                                    <Col  md="3" className=" mb-2">
                                        <Card className="w-100" style={{ cursor: 'pointer' }}>
                                            <Card.Img src={getUserProfilePicture(requests) !== null ? `/api/files/storage/${getUserProfilePicture(requests)}` : Avatar} style={{ cursor: 'pointer', height: "20vh" }} className="card-img-top rounded-3 w-100" alt="name" onClick={() => { history.push(`/profile/${requests}`) }} />
                                            <Card.Body>
                                                <Card.Title onClick={() => { history.push(`/profile/${requests}`) }}>{getUserName(requests)}</Card.Title>
                                                <Card.Text as="div" className="mt-2">
                                                    <div className="bgSecondary text-center rounded-3 mb-2">
                                                        <Link to="#" className="btn w-100 text-white" onClick={() => {
                                                            dispatch(Accept_Connection_Request(requests));
                                                        }

                                                        }>Accept</Link>
                                                    </div>
                                                    <div className="bg-secondary text-center rounded-3">
                                                        <Link to="#" className="btn w-100 text-white" onClick={() => {
                                                            dispatch(Disconnect(requests));
                                                        }}>Ignore</Link>
                                                    </div>
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted"> {moment(getRequestTime(requests)).fromNow()}</small>
                                            </Card.Footer>
                                        </Card>
                                    </Col>




                                ))}

                                {showMore && currentUser?.connection_requests.sort().map(requests => (

                                    <Col key={requests.userId} md="3" className=" mb-2">
                                        <Card className="w-100" style={{ cursor: 'pointer' }}>
                                            <Card.Img src={getUserProfilePicture(requests) !== null ? `/api/files/storage/${getUserProfilePicture(requests)}` : Avatar} style={{ cursor: 'pointer', height: "20vh" }} className="card-img-top rounded-3 w-100" alt="name" onClick={() => { history.push(`/profile/${requests}`) }} />
                                            <Card.Body>
                                                <Card.Title onClick={() => { history.push(`/profile/${requests}`) }}>{getUserName(requests)}</Card.Title>
                                                <Card.Text as="div" className="mt-2">
                                                    <div className="bgSecondary text-center rounded-3 mb-2">
                                                        <Link to="#" className="btn w-100 text-white" onClick={() => {
                                                            dispatch(Accept_Connection_Request(requests));
                                                        }

                                                        }>Accept</Link>
                                                    </div>
                                                    <div className="bg-secondary text-center rounded-3">
                                                        <Link to="#" className="btn w-100 text-white" onClick={() => {
                                                            dispatch(Disconnect(requests));
                                                        }}>Ignore</Link>
                                                    </div>
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted"> <span></span> {getRequestTime(requests)}</small>
                                            </Card.Footer>
                                        </Card>
                                    </Col>




                                ))}
                            </Row>

                        </Card.Text>
                    </Card.Body>
                </Card>

            )}


        </div>
    );
};

export default NewConnection;