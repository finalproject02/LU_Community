import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { FaEllipsisV } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import notification from './NotificationData';

const Notification = () => {
    return (
        <div>
            <Card className="w-100 mt-4">
                <Card.Body>
                    <Card.Title>Notifications</Card.Title>
                    <Card.Text>
                        {
                            notification.map(item => (
                                <div className="d-flex justify-content-between align-items-center pt-3 mb-2">
                                    <div className="d-flex align-items-center">
                                        <img src={item.imgUrl} alt={item.name} className="img-fluid smallProfile" />
                                        <div className="d-flex align-items-center ms-2">
                                            <div className="pt-2">
                                                <p className="mb-0 pt-1">
                                                    <Link href="/" className="textHover text-dark">{item.action}</Link></p>
                                                <p className="text-muted text-sm"><span>{item.time}</span> hours ago</p>
                                            </div>
                                        </div>
                                    </div>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                                            <FaEllipsisV />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Mark as read</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Remove this notification</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Turn off notification about his
                                                page</Dropdown.Item>
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