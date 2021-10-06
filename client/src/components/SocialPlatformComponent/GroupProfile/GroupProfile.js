import React, { useState } from 'react';
import { Card, Col, Container, Dropdown, Form, NavDropdown, Row } from 'react-bootstrap';
import { FaPlus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AllPhotos from '../AllPhotos/AllPhotos';
import AllVideos from '../AllVideos/AllVideos';
import jahed from "../../../images/Jahed.jpg";
import GroupHome from '../GroupHome/GroupHome';
import AboutGroup from '../AboutGroup/AboutGroup';
import GroupMember from '../GroupMember/GroupMember';

const GroupProfile = () => {
    const [about, setAbout] = useState(false);
    const [post, setPost] = useState(true);
    const [groupMember, setGroupMember] = useState(false);
    const [photo, setPhoto] = useState(false);
    const [video, setVideo] = useState(false);
    const [coverPhoto, setCoverPhoto] = useState();
    const [profilePhoto, setProfilePhoto] = useState();

    const handleChangeHome = () => {
        setPost(true);
        setPhoto(false);
        setVideo(false);
        setGroupMember(false);
        setAbout(false);
    }

    const handleChangeAbout = () => {
        setPost(false);
        setPhoto(false);
        setVideo(false);
        setGroupMember(false);
        setAbout(true);
    }
    const handleChangeGroupMember = () => {
        setPost(false);
        setAbout(false);
        setPhoto(false);
        setVideo(false);
        setGroupMember(true);
    }
    const handleChangePhoto = () => {
        setPost(false);
        setAbout(false);
        setGroupMember(false);
        setVideo(false);
        setPhoto(true);
    }
    const handleChangeVideo = () => {
        setPost(false);
        setAbout(false);
        setGroupMember(false);
        setPhoto(false);
        setVideo(true);
    }
    return (
        <div className="overflow-hidden">
            <div>
                <Row>
                    <Card className="w-100 shadow-sm mb-4 rounded-3">
                        <Container>
                            <Card.Body className="pt-0">
                                <label htmlFor="coverPhoto" className="w-100">
                                    {
                                        coverPhoto && coverPhoto.type.startsWith("image") ? (<Card.Img style={{ width: "100%", height: "30vh" }} src={URL.createObjectURL(coverPhoto)} alt="name" />) : (<Card.Img src={jahed} alt="jahed" style={{ width: "100%", height: "30vh" }} />)
                                    }
                                    <Form.Control onChange={(e) => setCoverPhoto(e.target.files[0])} accept="image/*" id="coverPhoto" type="file" className="d-none" >
                                    </Form.Control>
                                </label>
                                <Row>
                                    <div className="d-flex align-items-center mb-4">
                                        <Col md="8">
                                            <h5 className="ms-3 mt-5 fw-bold fs-3">Leading University CSE Group</h5>
                                            <p className="ms-3 mb-0 text-lead fs-5"><small>Private group. <span>450 members</span></small></p>
                                        </Col>
                                        <Col md="4">
                                            <div className="bgPrimary rounded-3 w-75 ms-2 text-center">
                                                <div className="btn text-white">
                                                    <FaUserPlus className="me-1 mb-1" />
                                                    Join
                                                </div>
                                            </div>
                                        </Col>
                                    </div>
                                </Row>
                            </Card.Body>
                        </Container>
                        <Row className="sticky-top">
                            <nav className="py-2 bg-light border-bottom">
                                <div className="container d-flex flex-wrap">
                                    <ul className="nav me-auto">
                                        <li className="nav-item cardHover rounded-3">
                                            <p className="nav-link link-dark px-2 active"
                                                aria-current="page" onClick={handleChangeHome}>Home</p>
                                        </li>
                                        <li className="nav-item cardHover rounded-3">
                                            <p className="nav-link link-dark px-2" onClick={handleChangeAbout}>About</p>
                                        </li>
                                        <li className="nav-item cardHover rounded-3">
                                            <p className="nav-link link-dark px-2" onClick={handleChangeGroupMember}>Members</p>
                                        </li>
                                        <NavDropdown className="navFontSize text-dark cardHover rounded-3"
                                            title={<span className="text-dark">More</span>}>
                                            <NavDropdown.Item className="py-2 cardHover rounded-3" onClick={handleChangePhoto}>
                                                Photos
                                            </NavDropdown.Item>
                                            <NavDropdown.Item className="py-2 cardHover rounded-3" onClick={handleChangeVideo}>
                                                Videos
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </ul>
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <Link to="#" className="textPrimary px-2 mt-1 btn">
                                                <FaPlus className="me-1 mb-1" />
                                                Invite
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="#" className="nav-link link-dark px-2">
                                                <Form className="col-12 col-lg-auto mb-3 mb-lg-0">
                                                    <input type="search" className="form-control" placeholder="Search..."
                                                        aria-label="Search" />
                                                </Form>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </Row>
                    </Card>
                </Row>
            </div>

            {
                post && <GroupHome />
            }
            {
                about && <AboutGroup />
            }
            {
                groupMember && <GroupMember />
            }
            {
                photo && <AllPhotos />
            }
            {
                video && <AllVideos />
            }

        </div>
    );
};

export default GroupProfile;