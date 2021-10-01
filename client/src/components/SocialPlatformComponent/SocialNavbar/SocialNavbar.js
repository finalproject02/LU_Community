import React, {useEffect} from 'react';
import { Container, Dropdown, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaLightbulb, FaRegBell, FaRegCommentDots, FaTh, FaUserPlus } from 'react-icons/fa';
import './SocialNavbar.css';
import {useSelector, useDispatch} from "react-redux";
import { Logout } from "../../../actions/auth";
import { useHistory } from "react-router-dom";
import Avatar from '../../../images/avatar.jpeg'
import Loading from "../../../services/Loading";
import {Suggestions} from "../../../actions/people";

const SocialNavbar = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const { currentUser, token } = useSelector(state => state.auth);

    return (
        <div>
            { token && (
                <header className="p-3 sticky-top bg-light shadow-sm">
                    <Container>
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <Link to="/socialPlatform" className="d-flex align-items-center pb-1 mb-lg-0 text-dark text-decoration-none fs-2 fw-bold mt-1">
                                LUSP
                            </Link>

                        <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-4">
                            <div><Link to="/socialPlatform" className="nav-link navFont px-2 link-secondary">
                                <FaHome className="me-2 iconFont mt-0 pt-0" />
                                Home</Link>
                            </div>
                            <div><Link to="/connection" className="nav-link navFont px-2 link-dark">
                                <FaUserPlus className="me-2 iconFont" />
                                Connection
                            </Link>
                            </div>
                            <div><Link to="/innovation" className="nav-link navFont px-2 link-dark">
                                <FaLightbulb className="me-2 iconFont" />
                                Innovation</Link>
                            </div>
                            <div><Link to="/message" className="nav-link navFont px-2 link-dark">
                                <FaRegCommentDots className="me-2 iconFont" />
                                Messaging</Link>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                    <FaRegBell className="me-2 iconFont" />
                                    <span className="notificationCount text-danger fw-bold">5</span>
                                    Notification
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/">
                                        <i className="fas fa-users mr-1"></i>
                                        Jahed liked your post
                                        <div className="text-muted text-sm">12 hours</div>
                                    </Dropdown.Item>
                                    <div className="dropdown-divider"></div>
                                    <Dropdown.Item href="/">
                                        <i className="fas fa-users mr-1"></i>
                                        Tanvir commented your post
                                        <div className="text-muted text-sm">12 hours</div>
                                    </Dropdown.Item>
                                    <div className="dropdown-divider"></div>
                                    <Dropdown.Item href="/">
                                        <i className="fas fa-file mr-1"></i>
                                        3 new reports
                                        <div className="text-muted text-sm">2 days</div>
                                    </Dropdown.Item>
                                    <div className="dropdown-divider"></div>
                                    <Dropdown.Item>
                                        <Link to="/allNotification" className="text-decoration-none text-dark">See All Notifications</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <Form.Control type="search" placeholder="Search..." />
                        </Form>
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                <FaTh className="me-2 iconFont mb-1" />
                            </Dropdown.Toggle>
                            <div className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-4">
                                <div><Link to="/socialPlatform" className="nav-link navFont px-2 link-secondary">
                                    <FaHome className="me-2 iconFont mt-0 pt-0" />
                                    Home</Link>
                                </div>
                                <div><Link to="/connection" className="nav-link navFont px-2 link-dark">
                                    <FaUserPlus className="me-2 iconFont" />
                                    Connection
                                </Link>
                                </div>
                                <div><Link to="/innovation" className="nav-link navFont px-2 link-dark">
                                    <FaLightbulb className="me-2 iconFont" />
                                    Innovation</Link>
                                </div>
                                <div><Link to="/message" className="nav-link navFont px-2 link-dark">
                                    <FaRegCommentDots className="me-2 iconFont" />
                                    Messaging</Link>
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                                        <FaRegBell className="me-2 iconFont" />
                                        <span className="notificationCount text-danger fw-bold">5</span>
                                        Notification
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/">
                                            <i className="fas fa-users mr-1"></i>
                                            Jahed liked your post
                                            <div className="text-muted text-sm">12 hours</div>
                                        </Dropdown.Item>
                                        <div className="dropdown-divider"></div>
                                        <Dropdown.Item href="/">
                                            <i className="fas fa-users mr-1"></i>
                                            Tanvir commented your post
                                            <div className="text-muted text-sm">12 hours</div>
                                        </Dropdown.Item>
                                        <div className="dropdown-divider"></div>
                                        <Dropdown.Item href="/">
                                            <i className="fas fa-file mr-1"></i>
                                            3 new reports
                                            <div className="text-muted text-sm">2 days</div>
                                        </Dropdown.Item>
                                        <div className="dropdown-divider"></div>
                                        <Dropdown.Item href="/allNotification">
                                            See All Notifications
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <Form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <Form.Control type="search" placeholder="Search..." />
                            </Form>
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                    <FaTh className="me-2 iconFont mb-1" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/club">Clubs</Dropdown.Item>
                                    <Dropdown.Item href="/group">Groups</Dropdown.Item>
                                    <Dropdown.Item href="/setting">Settings</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                    <img src={currentUser?.profile_picture ? `/api/files/storage/${currentUser?.profile_picture}` : Avatar} alt="mdo" width="32" height="32" className="rounded-circle" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="/project">New project</Dropdown.Item>
                                    <Dropdown.Item href="/socialProfile">Profile</Dropdown.Item>
                                    <Dropdown.Item href="/setting">Settings</Dropdown.Item>
                                    <div className="dropdown-divider"></div>
                                    <Dropdown.Item onClick={() => {
                                        dispatch(Logout());
                                        history.push('/')
                                    }}>Sign out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Container>
                </header>
            )}
        </div>
    );
};

export default SocialNavbar;