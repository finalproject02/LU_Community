import React from 'react';
import { Container, Dropdown, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaLightbulb, FaRegBell, FaRegCommentDots, FaTh, FaUserPlus } from 'react-icons/fa';
import './SocialNavbar.css';
import img from '../../../images/facebook.png';

const SocialNavbar = () => {
    return (
        <div>
            <header className="p-3 sticky-top bg-light">
                <Container>
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link to="#" className="d-flex align-items-center pb-1 mb-lg-0 text-dark text-decoration-none fs-2 fw-bold mt-1">
                            LUSP
                        </Link>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-4">
                            <li><Link to="social.html" className="nav-link navFont px-2 link-secondary">
                                <FaHome className="me-2 iconFont mt-0 pt-0" />
                                Home</Link>
                            </li>
                            <li><Link to="friends.html" className="nav-link navFont px-2 link-dark">
                                <FaUserPlus className="me-2 iconFont" />
                                Connection
                            </Link>
                            </li>
                            <li><Link to="innovation.html" className="nav-link navFont px-2 link-dark">
                                <FaLightbulb className="me-2 iconFont" />
                                Innovation</Link>
                            </li>
                            <li><Link to="message.html" className="nav-link navFont px-2 link-dark">
                                <FaRegCommentDots className="me-2 iconFont" />
                                Messaging</Link>
                            </li>
                            <li className="dropdown">
                                <Link className="nav-link navFont px-2 link-dark" data-bs-toggle="dropdown" to="allNotification.html">
                                    <FaRegBell className="me-2 iconFont" />
                                    <span
                                        className="notificationCount text-danger fw-bold">5</span>
                                    Notification</Link>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                    <span className="dropdown-item dropdown-header">5 Notifications</span>
                                    <div className="dropdown-divider"></div>
                                    <Link to="#" className="dropdown-item">
                                        <i className="fas fa-users mr-1"></i> Jahed liked your post
                                        <div className="text-muted text-sm">12 hours</div>
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="#" className="dropdown-item">
                                        <i className="fas fa-users mr-1"></i>Tanvir commented your post
                                        <div className="text-muted text-sm">12 hours</div>
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="#" className="dropdown-item">
                                        <i className="fas fa-file mr-1"></i> 3 new reports
                                        <div className="text-muted text-sm">2 days</div>
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to="allnotification.html" className="dropdown-item dropdown-footer">See All
                                        Notifications</Link>
                                </div>
                            </li>
                        </ul>
                        <Form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <Form.Control type="search" placeholder="Search..." />
                        </Form>
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                <FaTh className="me-2 iconFont mb-1" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Clubs</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Groups</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                <img src={img} alt="mdo" width="32" height="32" className="rounded-circle" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">New project</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
                                <div className="dropdown-divider"></div>
                                <Dropdown.Item href="#/action-3">Sign out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Container>
            </header>
        </div>
    );
};

export default SocialNavbar;