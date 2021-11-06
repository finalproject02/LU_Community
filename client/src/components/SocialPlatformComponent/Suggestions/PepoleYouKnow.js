import React, {useState} from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import Avatar from '../../../images/avatar.jpeg'
import { useHistory } from "react-router-dom";
import {Connect} from "../../../actions/auth";

const PepoleYouKnow = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const [expandTeacher, setExpandTeacher] = useState(false);
    const [expandStudent, setExpandStudent] = useState(false);
    const { suggestions } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth);
    const TeacherSuggestion = suggestions?.filter(suggestion => (suggestion._id !== currentUser._id) && (!currentUser?.connection.includes(suggestion._id)) && (!currentUser?.connection_requests.includes(suggestion._id)) && (!currentUser?.connecting.includes(suggestion._id)) && suggestion.position === 'Teacher');
    const StudentSuggestion = suggestions?.filter(suggestion => (suggestion._id !== currentUser._id) && (!currentUser?.connection.includes(suggestion._id)) && (!currentUser?.connection_requests.includes(suggestion._id)) && (!currentUser?.connecting.includes(suggestion._id)) && suggestion.position === 'Student');

    return (
        <div className="mb-4">
            {TeacherSuggestion.length !== 0 && (
                <Card className="w-100">
                    <Card.Body>
                        <Card.Title>
                            <div className="d-flex justify-content-between align-suggestions-center">
                                <h5 className="card-title">You May Know</h5>
                                <p to="#" className="mb-2 textHover" style={{cursor: 'pointer'}} onClick={() => setExpandTeacher((prevalue) => !prevalue)}>{expandTeacher ? "Collapse" : "See all"}</p>
                            </div>
                        </Card.Title>
                        <Card.Text as="div">
                            <h6 className="card-title">Teachers</h6>
                            <Row>
                                {expandTeacher ?
                                    TeacherSuggestion?.map(suggestion => (
                                        <Col key={suggestion.id} md="3" className="mb-2">
                                            <Card className="w-100">
                                                <Card.Img onClick={() => history.push(`/profile/${suggestion._id}`)} style={{ cursor: 'pointer', height: "20vh" }} src={suggestion.profile_picture ? `/api/files/storage/${suggestion.profile_picture}` : Avatar} className="img-fluid rounded-3" alt="." />
                                                <Card.Body>
                                                    <Card.Title onClick={() => history.push(`/profile/${suggestion._id}`)} style={{ cursor: 'pointer' }}>{suggestion.name}</Card.Title>
                                                    <h6>{suggestion.current_position}</h6>
                                                    <Card.Text as="div" className="mt-2">
                                                        <div className="bgPrimary text-center rounded-3 mb-2">
                                                            <Link to="#" className="btn w-100 text-white" onClick={() => { dispatch(Connect(suggestion._id)) }}>Connect</Link>
                                                        </div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )) : TeacherSuggestion?.slice(0,  4).map(suggestion => (
                                        <Col key={suggestion.id} md="3" className="mb-2">
                                            <Card className="w-100">
                                                <Card.Img onClick={() => history.push(`/profile/${suggestion._id}`)} style={{ cursor: 'pointer', height: "20vh" }} src={suggestion.profile_picture ? `/api/files/storage/${suggestion.profile_picture}` : Avatar} className="img-fluid rounded-3" alt="." />
                                                <Card.Body>
                                                    <Card.Title onClick={() => history.push(`/profile/${suggestion._id}`)} style={{ cursor: 'pointer' }}>{suggestion.name}</Card.Title>
                                                    <h6>{suggestion.current_position}</h6>
                                                    <Card.Text as="div" className="mt-2">
                                                        <div className="bgPrimary text-center rounded-3 mb-2">
                                                            <Link to="#" className="btn w-100 text-white" onClick={() => { dispatch(Connect(suggestion._id)) }}>Connect</Link>
                                                        </div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}

            {TeacherSuggestion.length !== 0 && (
                <Card className="w-100">
                    <Card.Body>
                        <Card.Title>
                            <div className="d-flex justify-content-between align-suggestions-center">
                                <h5 className="card-title">You May Know</h5>
                                <p to="#" className="mb-2 textHover" style={{cursor: 'pointer'}} onClick={() => setExpandStudent(prevalue => !prevalue)}>{expandStudent ? "Collapse" : "See all"}</p>
                            </div>
                        </Card.Title>
                        <Card.Text as="div">
                            <h6 className="card-title">Students</h6>
                            <Row>
                                {expandStudent ? StudentSuggestion?.map(suggestion => (
                                        <Col key={suggestion.id} md="3" className="mb-2">
                                            <Card className="w-100">
                                                <Card.Img onClick={() => history.push(`/profile/${suggestion._id}`)} style={{ cursor: 'pointer', height: "20vh" }} src={suggestion.profile_picture ? `/api/files/storage/${suggestion.profile_picture}` : Avatar} className="img-fluid rounded-3" alt="." />
                                                <Card.Body>
                                                    <Card.Title onClick={() => history.push(`/profile/${suggestion._id}`)} style={{ cursor: 'pointer' }}>{suggestion.name}</Card.Title>
                                                    <h6>{suggestion.current_position}</h6>
                                                    <Card.Text as="div" className="mt-2">
                                                        <div className="bgPrimary text-center rounded-3 mb-2">
                                                            <Link to="#" className="btn w-100 text-white" onClick={() => { dispatch(Connect(suggestion._id)) }}>Connect</Link>
                                                        </div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )) : StudentSuggestion?.splice(0, 4).map(suggestion => (
                                    <Col key={suggestion.id} md="3" className="mb-2">
                                        <Card className="w-100">
                                            <Card.Img onClick={() => history.push(`/profile/${suggestion._id}`)} style={{ cursor: 'pointer', height: "20vh" }} src={suggestion.profile_picture ? `/api/files/storage/${suggestion.profile_picture}` : Avatar} className="img-fluid rounded-3" alt="." />
                                            <Card.Body>
                                                <Card.Title onClick={() => history.push(`/profile/${suggestion._id}`)} style={{ cursor: 'pointer' }}>{suggestion.name}</Card.Title>
                                                <h6>{suggestion.current_position}</h6>
                                                <Card.Text as="div" className="mt-2">
                                                    <div className="bgPrimary text-center rounded-3 mb-2">
                                                        <Link to="#" className="btn w-100 text-white" onClick={() => { dispatch(Connect(suggestion._id)) }}>Connect</Link>
                                                    </div>
                                                </Card.Text>
                                            </Card.Body>
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

export default PepoleYouKnow;