import React, { useState } from 'react';
import { Badge, Container, Dropdown, Form, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBell, FaFile, FaHome, FaRegBell, FaRegCommentDots, FaSearch, FaTh, FaUser, FaUserPlus } from 'react-icons/fa';
import './SocialNavbar.css';
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../../../actions/auth";
import { useHistory } from "react-router-dom";
import Avatar from '../../../images/avatar.jpeg'
import DropdownItem from '@restart/ui/esm/DropdownItem';

const SocialNavbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [search, setSearch] = useState('');
    const { currentUser, token } = useSelector(state => state.auth);

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            history.push(`/search?searchKey=${search}`);
        }
    }
    return (
        <div>
            {token && (
                <header className="p-3 sticky-top bg-light shadow-sm">
                    <Container>
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <div>
                                <Link to="/socialplatform" className="d-flex align-items-center pb-1 mb-lg-0 text-dark text-decoration-none fs-2 fw-bold">
                                    LUSP
                                </Link>
                            </div>
                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-4">
                                <li><Link to="/socialplatform" className="nav-link px-2 link-secondary d-flex">
                                    <FaHome className="iconFont me-1" />
                                    <span className="d-none d-sm-block">Home</span>
                                </Link>
                                </li>
                                <li><Link to="/connection" className="nav-link px-2 link-dark position-relative d-flex">
                                    <Badge bg="success" className='connectionCount'>2</Badge>
                                    <FaUserPlus className="iconFont me-1" />
                                    <span className="d-none d-sm-block">Connection</span>
                                </Link>
                                </li>
                                <li><Link to="/message" className="nav-link px-2 link-dark d-flex">
                                    <FaRegCommentDots className="iconFont me-1" />
                                    <span className="d-none d-sm-block">Messaging</span>
                                </Link>
                                </li>
                                <div className='position-relative d-flex align-items-center'>
                                    <NavDropdown
                                        className="navFontSize"
                                        title={<div className="d-flex">
                                            <FaRegBell className="iconFont me-1 text-dark" />
                                            <Badge bg="danger" className='notificationCount'>9</Badge>
                                            <span className="text-dark d-none d-sm-block">Notification</span>
                                        </div>
                                        }>
                                        <NavDropdown.Item className="py-3">
                                            <Link>
                                                <FaUser className="me-1" />
                                                Jahed liked your post
                                                <div className="text-muted text-sm">12 hours</div>
                                            </Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className="py-3">
                                            <Link>
                                                <FaUser className="me-1" />
                                                Tanvir commented your post
                                                <div className="text-muted text-sm">12 hours</div>
                                            </Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className="py-3">
                                            <Link>
                                                <FaFile className="me-1" />
                                                3 new reports
                                                <div className="text-muted text-sm">2 days</div>
                                            </Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item className="py-3">
                                            <Link to="/allNotification" className="text-dark text-decoration-none">See All Notifications</Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                            </ul>
                            <Form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                                <Form.Control type="search" placeholder="Search..." name={'search'} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
                            </Form>
                            <NavDropdown
                                className="navFontSize"
                                title={<FaTh className="iconFont mb-1 text-dark" />}
                            >
                                <NavDropdown.Item className="dropdownItem py-3">
                                    <Link to="/club" className="text-dark text-decoration-none">Club</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item className="dropdownItem py-3">
                                    <Link to="/group" className="text-dark text-decoration-none">Group</Link>
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
                                    <Link to="/newproject" className="text-dark text-decoration-none">New project</Link>
                                </NavDropdown.Item>
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
        </div >
    );
};

export default SocialNavbar;