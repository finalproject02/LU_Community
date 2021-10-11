import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { FaEllipsisV } from 'react-icons/fa';
import { useSelector } from "react-redux";
import moment from "moment";
import Avatar from "../../../images/avatar.jpeg";
import {Link, useHistory} from 'react-router-dom';

const Notification = () => {
    const history = useHistory();
    const { people } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth)

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
    }
    const getTypesInfo = (types) => {
        switch (types) {
            case types === 'club_post':
                return '';
            case types === 'group_post':
                return '';
            case types === 'club_following':
                return '';
            case types === 'member_request':
                return '';
            case types === 'member_accepted':
                return '';
            case types === 'user_post_like':
                return '';
            case types === 'user_post_comment':
                return '';
            case types === 'user_commented_post':
                return '';
            case types === 'connection_accepted':
                return '';
            default:
                return ''
        }
    }

    const action = (types, documentId) => {
        switch (types) {
            case types === 'club_post':
            case types === 'group_post':
            case types === 'user_post_like':
            case types === 'user_post_comment':
            case types === 'user_commented_post':
                return history.push(`/postDetails/${documentId}`)
            case types === 'club_following':
                return
            case types === 'member_request':
                return '';
            case types === 'member_accepted':
                return '';
            case types === 'connection_accepted':
                return '';
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
                            currentUser?.notifications.filter(noti => noti.types !== 'connection_request').sort((a, b) => new Date(b.time) - new Date(a.time)).map(notification => (
                                <div className="d-flex justify-content-between align-items-center mb-2 cardHover">
                                    <Link to="/notificationPostPage" className="d-flex align-items-center ps-2 text-decoration-none text-dark">
                                        <img src={getUserProfilePicture(notification.notify_by) !== null ? `/api/files/storage/${getUserProfilePicture(notification.notify_by)}` : Avatar} alt={notification.creator_name} width="50" height="50" className="rounded-circle" />
                                        <div className="d-flex align-items-center ms-2">
                                            <div className="pt-2">
                                                <p className="mb-0 pt-1">
                                                    <span>{getUserName(notification.notify_by)} {getTypesInfo(notification.types)}</span></p>
                                                <p className="text-muted text-sm"><span>{moment(notification.time).fromNow()}</span></p>
                                            </div>
                                        </div>
                                    </Link>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="light">
                                            <FaEllipsisV />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Remove this notification</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
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