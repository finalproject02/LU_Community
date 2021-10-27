import React, { useState } from 'react';
import { Badge, Container, Dropdown, Form, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaRegBell, FaRegCommentDots, FaTh, FaUserPlus } from 'react-icons/fa';
import './SocialNavbar.css';
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../../../actions/auth";
import { useHistory } from "react-router-dom";
import Avatar from '../../../images/avatar.jpeg'
import { updateProfile } from "../../../actions/auth";
import moment from "moment";
import { AcceptRequest, RejectRequest } from "../../../actions/groups";

const SocialNavbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [search, setSearch] = useState('');
    const { currentUser, token } = useSelector(state => state.auth);
    const { notifications } = useSelector(state => state.posts);
    const { people } = useSelector(state => state.people);
    const { groups } = useSelector(state => state.groups);
    const { clubs } = useSelector(state => state.clubs);

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            history.push(`/search?searchKey=${search}`);
        }
    }

    const getUserProfilePicture = (notify_by, types, documentId) => {
        if (types === 'club_post') {
            const person = clubs.filter(usr => usr._id === notify_by);
            const pic = person.map(u => u.profile_picture);
            const check = pic.map(i => i == null);
            if (check.includes(true)) {
                return null
            } else {
                return person.map(u => u.profile_picture)
            }
        } else if (types === 'member_accepted') {
            const person = groups.filter(usr => usr._id === notify_by);
            const pic = person.map(u => u.cover_picture);
            const check = pic.map(i => i == null);
            if (check.includes(true)) {
                return null
            } else {
                return person.map(u => u.cover_picture)
            }
        } else {
            const person = people.filter(usr => usr._id === notify_by);
            const pic = person.map(u => u.profile_picture);
            const check = pic.map(i => i == null);
            if (check.includes(true)) {
                return null
            } else {
                return person.map(u => u.profile_picture)
            }
        }

    }

    const getUserName = (notify_by, types, documentId) => {
        const person = people.filter(usr => usr._id === notify_by);
        return person.map(u => u.name)
    }

    const getClubOrGroupName = (notify_by, types, documentId, post_to) => {
        if (types === 'club_post') {
            const club = clubs.filter(club => club._id === notify_by);
            return club.map(u => u.name)
        } else if (types === 'club_following') {
            const club = clubs.filter(club => club._id === documentId);
            return club.map(u => u.name)
        } else if (types === 'group_post') {
            const group = groups.filter(group => group._id === post_to);
            return group.map(u => u.name)
        } else if (types === 'member_request') {
            const group = groups.filter(group => group._id === documentId);
            return group.map(u => u.name)
        } else if (types === 'member_accepted') {
            const group = groups.filter(group => group._id === notify_by);
            return group.map(u => u.name)
        }
    }
    const getTypesInfo = (notify_by, types, documentId, post_to) => {
        switch (types) {
            case 'club_post':
                return `${getClubOrGroupName(notify_by, types, documentId, post_to)} add a new post`;
            case 'group_post':
                return `${getUserName(notify_by, types, documentId)} posted in ${getClubOrGroupName(notify_by, types, documentId, post_to)}`;
            case 'club_following':
                return `${getUserName(notify_by, types, documentId)} started following ${getClubOrGroupName(notify_by, types, documentId, post_to)}`;
            case 'member_request':
                return `${getUserName(notify_by, types, documentId)} requested to join ${getClubOrGroupName(notify_by, types, documentId, post_to)}`;
            case 'member_accepted':
                return `Now you are member of ${getClubOrGroupName(notify_by, types, documentId, post_to)}`;
            case 'user_post_like':
                return `${getUserName(notify_by, types, documentId)} likes a post`;
            case 'user_post_comment':
                return `${getUserName(notify_by, types, documentId)} comments a post`;
            case 'user_commented_post':
                return `${getUserName(notify_by, types, documentId)} commented a post where you comment`;
            case 'connection_accepted':
                return `Now you are connected with ${getUserName(notify_by, types, documentId)}`;
            default:
                return ''
        }
    }

    const action = (types, documentId, notify_by) => {
        switch (types) {
            case 'club_post':
            case 'group_post':
            case 'user_post_like':
            case 'user_post_comment':
            case 'user_commented_post':
                return `/post/${documentId}`
            case 'club_following':
                return `/clubDetails/${documentId}`
            case 'member_request':
                return `/group/${documentId}`
            case 'member_accepted':
                return `/group/${notify_by}`;
            case 'connection_accepted':
                return `/profile/${notify_by}`
            default:
                return ''
        }

    }
    return (
        <div className="zIndex">
            {token && (
                <header className="p-3 bgPrimary shadow-sm">
                    <Container>
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <div>
                                <Link to="/socialplatform" className="d-flex align-items-center pb-1 mb-lg-0 text-decoration-none fs-2 fw-bold bgSecondary rounded-3 px-2 text-white">
                                    LUSP
                                </Link>
                            </div>
                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-4">
                                <li><Link to="/socialplatform" className="nav-link px-2 link-secondary d-flex">
                                    <FaHome className="iconFont text-white" />
                                    <span className="d-none d-sm-block text-white me-4">Home</span>
                                </Link>
                                </li>
                                <li><Link to="/connection" className="nav-link px-2 link-dark position-relative d-flex">
                                    {currentUser?.notifications.filter(notification => notification.isShow === false && notification.types === 'connection_request').length !== 0 && (
                                        <Badge bg="success" className='connectionCount'>{currentUser?.notifications.filter(notification => notification.isShow === false && notification.types === 'connection_request').length}</Badge>
                                    )}
                                    <FaUserPlus className="iconFont text-white" />
                                    <span className="d-none d-sm-block text-white me-4">Connection</span>
                                </Link>
                                </li>
                                <li><Link to="/chat" className="nav-link px-2 link-dark d-flex">
                                    <FaRegCommentDots className="iconFont text-white" />
                                    <span className="d-none d-sm-block text-white me-4">Messaging</span>
                                </Link>
                                </li>
                                <div className='position-relative d-flex align-items-center' >
                                    <NavDropdown
                                        className="navFontSize"
                                        title={
                                            <div className="d-flex" >
                                                <FaRegBell className="iconFont text-white" />
                                                {currentUser?.notifications.filter(notification => notification.isShow === false && notification.types !== 'connection_request').length !== 0 && (
                                                    <Badge bg="danger" className="notificationCount text-white fw-bold">{currentUser?.notifications.filter(notification => notification.isShow === false && notification.types !== 'connection_request').length}</Badge>
                                                )}
                                                <span className="text-dark d-none d-sm-block text-white">Notification</span>
                                            </div>}>

                                        {currentUser?.notifications.filter(notify => notify !== 'connection_requests').slice(currentUser?.notifications.length - 4, currentUser?.notifications.length).sort((a, b) => new Date(b.time) - new Date(a.time)).map(notification => (
                                            <>
                                                {notification.types !== 'member_request' ? (
                                                    <>
                                                        <NavDropdown.Item className="py-3">
                                                            <div className="text-decoration-none text-dark" onClick={() => {
                                                                dispatch(updateProfile({ isShow: true }))
                                                                history.push(action(notification.types, notification.document_id, notification.notify_by))
                                                            }}>
                                                                <img src={getUserProfilePicture(notification.notify_by, notification.types, notification.document_id) !== null ? `/api/files/storage/${getUserProfilePicture(notification.notify_by, notification.types, notification.document_id)}` : Avatar} alt="..." width="30" height="30" className="rounded-circle me-2" />
                                                                {getTypesInfo(notification.notify_by, notification.types, notification.document_id, notification.post_to)}
                                                                <div className="text-muted text-sm">{moment(notification.time).fromNow()}</div>
                                                            </div>
                                                        </NavDropdown.Item>
                                                        <NavDropdown.Divider />
                                                    </>
                                                ) : (
                                                    <>
                                                        <NavDropdown.Item className="py-3">
                                                            <div className="text-decoration-none text-dark" >
                                                                <div className="d-flex">
                                                                    <img src={getUserProfilePicture(notification.notify_by, notification.types, notification.document_id) !== null ? `/api/files/storage/${getUserProfilePicture(notification.notify_by, notification.types, notification.document_id)}` : Avatar} alt="..." width="30" height="30" className="rounded-circle" />
                                                                    <Link to={action(notification.types, notification.document_id, notification.notify_by)} className="text-muted text-sm ms-2 text-decoration-none"><strong>{getTypesInfo(notification.notify_by, notification.types, notification.document_id, notification.post_to)}</strong></Link>
                                                                </div>
                                                                <span className="text-muted text-sm ms-4">{moment(notification.time).fromNow()}</span>
                                                                <div className="mt-1 ms-4">
                                                                    <div className="btn btn-primary me-2 btn-sm" onClick={(e) => {
                                                                        dispatch(AcceptRequest(notification.document_id, notification.notify_by));
                                                                        e.stopPropagation();
                                                                    }}>Accept</div>
                                                                    <div className="btn btn-danger btn-sm" onClick={(e) => {
                                                                        dispatch(RejectRequest(notification.document_id, notification.notify_by));
                                                                        e.stopPropagation();
                                                                    }}>Reject</div>
                                                                </div>
                                                            </div>
                                                        </NavDropdown.Item>
                                                        <NavDropdown.Divider />
                                                    </>
                                                )}
                                            </>
                                        ))}
                                        <Dropdown.Item href="/allNotification">
                                            See All Notifications
                                        </Dropdown.Item>
                                    </NavDropdown>
                                </div>
                            </ul>
                            <Form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <Form.Control type="search" placeholder="Search..." name={'search'} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
                            </Form>
                            <NavDropdown
                                className="navFontSize"
                                title={<FaTh className="iconFont mb-1 text-white" />}
                            >
                                <NavDropdown.Item className="dropdownItem py-3">
                                    <Link to="/club" className="text-dark text-decoration-none">Club</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item className="dropdownItem py-3">
                                    <Link to="/groupInitial" className="text-dark text-decoration-none">Group</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item className="dropdownItem py-3">
                                    <Link to="/settings" className="text-dark text-decoration-none">Settings</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                className="navFontSize text-dark"
                                title={<img src={currentUser?.profile_picture ? `/api/files/storage/${currentUser?.profile_picture}` : Avatar} alt="mdo" width="32" height="32" className="rounded-circle" />}
                            >
                                <NavDropdown.Item className="dropdownItem py-3">
                                    <Link to="/socialProfile" className="text-dark text-decoration-none">Profile</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item className="dropdownItem py-3">
                                    <Link to="/settings" className="text-dark text-decoration-none">Settings</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className="dropdownItem py-3"
                                    onClick={() => {
                                        dispatch(Logout());
                                        history.push('/')
                                    }}
                                >
                                    Sign out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Container>
                </header>
            )
            }
        </div>
    );
};

export default SocialNavbar;