import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Suggestions.css";
import {useDispatch, useSelector} from "react-redux";
import Avatar from "../../../images/avatar.jpeg";
import { useHistory } from "react-router-dom";
import {Connect} from "../../../actions/auth";

const Suggestions = (props) => {
    const [expandStudent, setExpandStudent] = useState();
    const [expandTeacher, setExpandTeacher] = useState();
    const dispatch = useDispatch()
    const history = useHistory();
    const { suggestions } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth);
    const teacherSuggestion = suggestions?.filter(suggestion => (suggestion._id !== currentUser?._id) && (!currentUser?.connection.includes(suggestion._id)) && (!currentUser?.connection_requests.includes(suggestion._id)) && (!currentUser?.connecting.includes(suggestion._id)) && suggestion.position === "Teacher");
    const studentSuggestion = suggestions?.filter(suggestion => (suggestion._id !== currentUser?._id) && (!currentUser?.connection.includes(suggestion._id)) && (!currentUser?.connection_requests.includes(suggestion._id)) && (!currentUser?.connecting.includes(suggestion._id)) && suggestion.position === "Student");
    return (
        <div className="mb-4">
            {teacherSuggestion.length !== 0 && (
                <Card className="w-100 rounded-3">
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between align-items-center">
                            <h5>You may know</h5>
                            <h6 className="mb-2 textHover" style={{cursor: 'pointer'}} onClick={() => setExpandTeacher((prevalue) => !prevalue)}>{expandTeacher ? "Collapse" : "See all"}</h6>
                        </Card.Title>
                        <Card.Text>
                            <h6>Teachers</h6>
                            {expandTeacher ? teacherSuggestion.map(suggestion => (
                                    <div key={suggestion.id} className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                            <img src={suggestion.profile_picture ? `/api/files/storage/${suggestion.profile_picture}` : Avatar} alt={suggestion.name} style={{ cursor: 'pointer' }} width="52" height="52" className="rounded-circle me-2" onClick={() => history.push(`/profile/${suggestion._id}`)} />
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <h6 className="textHover text-dark mb-0 fw-bold" style={{ cursor: 'pointer' }} onClick={() => history.push(`/profile/${suggestion._id}`)}>{suggestion.name}</h6>
                                                    <small className="text-muted">{suggestion.current_position}</small>
                                                </div>
                                            </div>
                                        </div>
                                        <strong class="textSecondary cursor" onClick={() => { dispatch(Connect(suggestion._id)) }}>Connect</strong>
                                    </div>
                                )) : teacherSuggestion.splice(0, 3).map(suggestion => (
                                <div key={suggestion.id} className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                        <img src={suggestion.profile_picture ? `/api/files/storage/${suggestion.profile_picture}` : Avatar} alt={suggestion.name} style={{ cursor: 'pointer' }} width="52" height="52" className="rounded-circle me-2" onClick={() => history.push(`/profile/${suggestion._id}`)} />
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h6 className="textHover text-dark mb-0 fw-bold" style={{ cursor: 'pointer' }} onClick={() => history.push(`/profile/${suggestion._id}`)}>{suggestion.name}</h6>
                                                <small className="text-muted">{suggestion.current_position}</small>
                                            </div>
                                        </div>
                                    </div>
                                    <strong class="textSecondary cursor" onClick={() => { dispatch(Connect(suggestion._id)) }}>Connect</strong>
                                </div>
                            ))
                            }
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
            <br/>
            {studentSuggestion.length !== 0 && (
                <Card className="w-100 rounded-3">
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between align-items-center">
                            <h5>You may know</h5>
                            <h6 className="mb-2 textHover" style={{cursor: 'pointer'}} onClick={() => setExpandStudent((prevalue) => !prevalue)}>{expandStudent ? "Collapse" : "See all"}</h6>
                        </Card.Title>
                        <Card.Text>
                            <h6>Students</h6>
                            {expandStudent ? studentSuggestion.map(suggestion => (
                                <div key={suggestion.id} className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                        <img src={suggestion.profile_picture ? `/api/files/storage/${suggestion.profile_picture}` : Avatar} alt={suggestion.name} style={{ cursor: 'pointer' }} width="52" height="52" className="rounded-circle me-2" onClick={() => history.push(`/profile/${suggestion._id}`)} />
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h6 className="textHover text-dark mb-0 fw-bold" style={{ cursor: 'pointer' }} onClick={() => history.push(`/profile/${suggestion._id}`)}>{suggestion.name}</h6>
                                                <small className="text-muted">{suggestion.current_position}</small>
                                            </div>
                                        </div>
                                    </div>
                                    <strong class="textSecondary cursor" onClick={() => { dispatch(Connect(suggestion._id)) }}>Connect</strong>
                                </div>
                            )) : studentSuggestion.splice(0, 3).map(suggestion => (
                                <div key={suggestion.id} className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                        <img src={suggestion.profile_picture ? `/api/files/storage/${suggestion.profile_picture}` : Avatar} alt={suggestion.name} style={{ cursor: 'pointer' }} width="52" height="52" className="rounded-circle me-2" onClick={() => history.push(`/profile/${suggestion._id}`)} />
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h6 className="textHover text-dark mb-0 fw-bold" style={{ cursor: 'pointer' }} onClick={() => history.push(`/profile/${suggestion._id}`)}>{suggestion.name}</h6>
                                                <small className="text-muted">{suggestion.current_position}</small>
                                            </div>
                                        </div>
                                    </div>
                                    <strong class="textSecondary cursor" onClick={() => { dispatch(Connect(suggestion._id)) }}>Connect</strong>
                                </div>
                            ))
                            }
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default Suggestions;