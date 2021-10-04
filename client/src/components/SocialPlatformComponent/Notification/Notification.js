import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { FaEllipsisV } from 'react-icons/fa';
import { useSelector } from "react-redux";
import moment from "moment";
import Avatar from "../../../images/avatar.jpeg";

const Notification = () => {
    const { notifications } = useSelector(state => state.posts);
    const { people } = useSelector(state => state.people);

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
    return (
        <div>
            <Card className="w-100 mt-4">
                <Card.Body>
                    <Card.Title>Notifications</Card.Title>
                    <Card.Text>
                        {
                            notifications?.map(notification => (
                                <div className="d-flex justify-content-between align-items-center pt-3 mb-2">
                                    <div className="d-flex align-items-center">
                                        <img src={getUserProfilePicture(notification.notify_by) !== null ? `/api/files/storage/${getUserProfilePicture(notification.notify_by)}` : Avatar} alt={notification.creator_name} width="50" height="50" className="rounded-circle" />
                                        <div className="d-flex align-items-center ms-2">
                                            <div className="pt-2">
                                                <p className="mb-0 pt-1">
                                                    <span className="textHover text-dark">{getUserName(notification.notify_by)} {notification.position} your post</span></p>
                                                <p className="text-muted text-sm"><span>{moment(notification.createdAt).fromNow()}</span></p>
                                            </div>
                                        </div>
                                    </div>
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