import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { FaEllipsisV } from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import Avatar from "../../../images/avatar.jpeg";
import {Link, useHistory} from 'react-router-dom';
import {updateProfile} from "../../../actions/auth";
import {AcceptRequest, RejectRequest} from "../../../actions/groups";

const Notification = () => {
    const dispatch = useDispatch()
    const { people } = useSelector(state => state.people);
    const { clubs } = useSelector(state => state.clubs);
    const { groups } = useSelector(state => state.groups);
    const { currentUser } = useSelector(state => state.auth)

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
        } else if(types === 'member_accepted') {
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
            case  'user_post_comment':
                return `${getUserName(notify_by, types, documentId)} comments a post`;
            case  'user_commented_post':
                return `${getUserName(notify_by, types, documentId)} commented a post where you comment`;
            case  'connection_accepted':
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
        <div>
            <Card className="w-100 mt-4">
                <Card.Body>
                    <Card.Title>Notifications</Card.Title>
                    <Card.Text>
                        {
                            currentUser?.notifications.filter(notify => notify.types !== 'connection_request').sort((a, b) => new Date(b.time) - new Date(a.time)).map(notification => (
                                <div className="d-flex justify-content-between align-items-center mb-2 cardHover">
                                    {notification.types !== 'member_request' ? (
                                        <>
                                            <Link to={`${action(notification.types, notification.document_id, notification.notify_by)}`} className="d-flex align-items-center ps-2 text-decoration-none text-dark" onClick={() => dispatch(updateProfile({ isShow: true }))}>
                                                <img src={getUserProfilePicture(notification.notify_by, notification.types, notification.document_id) !== null ? `/api/files/storage/${getUserProfilePicture(notification.notify_by, notification.types, notification.document_id)}` : Avatar} alt={notification.notify_by} width="50" height="50" className="rounded-circle" />
                                                <div className="d-flex align-items-center ms-2">
                                                    <div className="pt-2">
                                                        <p className="mb-0 pt-1">
                                                            <span>{getTypesInfo(notification.notify_by, notification.types, notification.document_id, notification.post_to)}</span></p>
                                                        <p className="text-muted text-sm"><span>{moment(notification.time).fromNow()}</span></p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="light">
                                                    <FaEllipsisV />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={() => dispatch(updateProfile({ time: notification.time, types: notification.types }))}> Remove this notification</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>

                                        </>
                                    ) : (
                                        <>
                                            <div  className="text-decoration-none text-dark" >
                                                <div className="d-flex">
                                                    <img src={getUserProfilePicture(notification.notify_by, notification.types, notification.document_id) !== null ? `/api/files/storage/${getUserProfilePicture(notification.notify_by, notification.types, notification.document_id)}` : Avatar} alt="..." width="30" className="rounded-circle" />
                                                    <Link to={`${action(notification.types, notification.document_id, notification.notify_by)}`} style={{textDecoration: 'none'}} className="text-muted text-sm ms-2"><strong>{getTypesInfo(notification.notify_by, notification.types, notification.document_id, notification.post_to)}</strong></Link>
                                                </div>
                                                <span className="text-muted text-sm ms-4">{moment(notification.time).fromNow()}</span>
                                                <div className="mt-1 ms-4">
                                                    <div  className="btn btn-primary me-2 btn-sm" onClick={(e) => dispatch(AcceptRequest(notification.document_id, notification.notify_by))}>Accept</div>
                                                    <div className="btn btn-danger btn-sm" onClick={(e) => {
                                                        dispatch(RejectRequest(notification.document_id, notification.notify_by))
                                                    }}>Reject</div>
                                                </div>
                                            </div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="light">
                                                    <FaEllipsisV />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item onClick={() => dispatch(updateProfile({ time: notification.time, types: notification.types }))}> Remove this notification</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>

                                        </>
                                    )}
                                </div>
                            ))
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Notification;