import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { FaEllipsisV } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import moment from "moment";
import Avatar from "../../../images/avatar.jpeg";

const Notification = () => {
    const { notifications } = useSelector(state => state.posts);
    const { people } = useSelector(state => state.people);

    const getUserProfilePicture= (id) => {
        const person = people.filter(usr => usr._id === id);
        const pic = person.map(u => u.profile_picture);
        const check = pic.map(i => i == null);
        if (check.includes(true)) {
            return null
        } else {
            return person.map(u => u.profile_picture)
        }
    }

    const getUserName= (id) => {
        const person = people.filter(usr => usr._id === id);
        return person.map(u => u.name)
    }
    return (
        <div>
            <Card className="w-100 mt-4">
                <Card.Body>
                    <Card.Title>Notifications</Card.Title>
                    <Card.Text>
                        {
                            notifications?.map(notification => (
                                <div className="d-flex justify-content-between align-notifications-center pt-3 mb-2">
                                    <div className="d-flex align-notifications-center">
                                        <img src={getUserProfilePicture(notification.notify_by) !== null ? `/api/files/storage/${getUserProfilePicture(notification.notify_by)}` : Avatar} alt={notification.creator_name} className="img-fluid smallProfile" />
                                        <div className="d-flex align-notifications-center ms-2">
                                            <div className="pt-2">
                                                <p className="mb-0 pt-1">
                                                    <span className="textHover text-dark">{getUserName(notification.notify_by)} {notification.position} your post</span></p>
                                                <p className="text-muted text-sm"><span>{moment(notification.createdAt).fromNow()}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                                            <FaEllipsisV />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.notification >Mark as read</Dropdown.notification>
                                            <Dropdown.notification>Remove this notification</Dropdown.notification>
                                            <Dropdown.notification>Turn off notification about his
                                                page</Dropdown.notification>
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