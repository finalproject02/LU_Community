import React, {useEffect, useState} from 'react';
import { Container, Dropdown, Form } from 'react-bootstrap';
import {Link, useLocation} from 'react-router-dom';
import { FaHome, FaLightbulb, FaRegBell, FaRegCommentDots, FaTh, FaUserPlus } from 'react-icons/fa';
import './SocialNavbar.css';
import {useSelector, useDispatch} from "react-redux";
import { Logout } from "../../../actions/auth";
import { useHistory } from "react-router-dom";
import Avatar from '../../../images/avatar.jpeg'
import {ShowNotifications} from "../../../actions/posts";
import moment from "moment";

const SocialNavbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [search, setSearch] = useState('');
    const { currentUser, token } = useSelector(state => state.auth);
    const { notifications } = useSelector(state => state.posts);
    const { people } = useSelector(state => state.people);

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            history.push(`/search?searchKey=${search}`);
        }
    }
    const getUserName = (id) => {
        const user = people.filter(person => person._id === id);
        return user.map(usr => usr.name)
    }
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
                                        <FaRegBell className="me-2 iconFont" onClick={() => dispatch(ShowNotifications())}/>
                                        {notifications.filter(notification => notification.notification===true).length !== 0 && (
                                            <span className="notificationCount text-danger fw-bold">{notifications.filter(notification => notification.notification===true).length}</span>
                                        )}

                                        Notification
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {notifications.slice(0, 4).map(notification => (
                                           <>
                                               <Dropdown.Item href="/">
                                                   <i className="fas fa-users mr-1"></i>
                                                   {getUserName(notification.notify_by)} {notification.position} your post
                                                   <div className="text-muted text-sm">{moment(notification.createdAt).fromNow()}</div>
                                               </Dropdown.Item>
                                               <div className="dropdown-divider"></div>
                                           </>
                                        ))}

                                        <Dropdown.Item href="/allNotification">
                                            See All Notifications
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <Form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <Form.Control type="search" placeholder="Search..." name={'search'} onChange={(e) => setSearch(e.target.value)}  onKeyDown={handleKeyDown}/>
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