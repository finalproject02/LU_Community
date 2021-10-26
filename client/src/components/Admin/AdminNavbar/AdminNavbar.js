import React, {useEffect, useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import "./AdminNavbar.css";
import { FaRegBell } from 'react-icons/fa';
import {Nav, NavDropdown, NavLink} from "react-bootstrap";
import Avatar from "../../../images/avatar.jpeg";
import { Logout } from "../../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const AdminNavbar = () => {
    const history = useHistory();
    const [sidebar, setSidebar] = useState(false);
    const { token, currentUser } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const sideBarData = SidebarData()
    useEffect(() => {
        if (!token) {
            history.push('/');
        }
    }, [token])

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div>
            <>
                <IconContext.Provider value={{ color: '#fff' }}>
                    <div className='navbar'>
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>
                        <Nav className="d-flex justify-content-end align-items-center">
                            <Link to="/socialPlatform" className="text-decoration-none text-white">Social Platform</Link>
                            <NavDropdown
                                className="nav-dropdown text-white"
                                title={<span className="text-white">Notification</span> }
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item
                                    className="dropdownItem py-3"
                                    href="#"
                                >
                                    notification
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown
                                className="me-4 nav-dropdown navFontSize"
                                title={<div className="d-flex align-items-center">
                                    <img src={currentUser?.profile_picture ? `/api/files/storage/${currentUser?.profile_picture}` : Avatar} alt="" widths="45" height="45" className="rounded-circle me-2" />
                                    <div>
                                        <small className="text-warning">{currentUser?.position}</small>
                                        <h6 className="text-white">{currentUser?.name}</h6>
                                    </div>
                                </div>}
                                id="collasible-nav-dropdown"
                            >
                                {currentUser?.position === 'Teacher' && (
                                    <NavDropdown.Item
                                        className="dropdownItem py-3"
                                        href="/teacherProfile"
                                    >
                                    <FaIcons.FaUser className="me-2" />View Profile
                                    </NavDropdown.Item>
                                )}
                                {currentUser?.position === 'Student' && (
                                    <NavDropdown.Item
                                        className="dropdownItem py-3"
                                        href="/studentProfile"
                                    >
                                        <FaIcons.FaUser className="me-2" />View Profile
                                    </NavDropdown.Item>
                                )}
                                {currentUser?.name === 'Administrator' && (
                                    <NavDropdown.Item
                                        className="dropdownItem py-3"
                                        href="/adminProfile"
                                    >
                                        <FaIcons.FaUser className="me-2" />View Profile
                                    </NavDropdown.Item>
                                )}

                                <NavDropdown.Item
                                    className="dropdownItem py-3"
                                    href="/settings"
                                >
                                    <FaIcons.FaToolbox className="me-3" />Account Setting
                                </NavDropdown.Item>
                                <hr className="hr" />
                                <NavDropdown.Item
                                    className="dropdownItem py-3"
                                    onClick={() => {
                                        dispatch(Logout());
                                        history.push('/')
                                    }}
                                >
                                    <FaIcons.FaArrowCircleRight className="me-2"  />Sign out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </div>
                    <nav className={sidebar ? 'nav-menu active zIndex' : 'nav-menu zIndex'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle'>
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            {sideBarData?.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </IconContext.Provider>
            </>
        </div>
    );
};

export default AdminNavbar;