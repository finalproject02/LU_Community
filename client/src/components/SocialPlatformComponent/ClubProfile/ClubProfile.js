import React, { useState } from 'react';
import { Card, Col, Container, Dropdown, Form, Row } from 'react-bootstrap';
import { FaCommentDots, FaPlus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import jahed from "../../../images/Jahed.jpg";
import AboutClub from '../AboutClub/AboutClub';
import AllPhotos from '../AllPhotos/AllPhotos';
import AllVideos from '../AllVideos/AllVideos';
import ClubEvents from '../ClubEvents/ClubEvents';
import ClubHome from '../ClubHome/ClubHome';

const ClubProfile = () => {
    const [about, setAbout] = useState(false);
    const [post, setPost] = useState(true);
    const [event, setEvent] = useState(false);
    const [photo, setPhoto] = useState(false);
    const [video, setVideo] = useState(false);
    const [coverPhoto, setCoverPhoto] = useState();
    const [profilePhoto, setProfilePhoto] = useState();

    const handleChangeHome = () => {
        setPost(true);
        setPhoto(false);
        setVideo(false);
        setEvent(false);
        setAbout(false);
    }

    const handleChangeAbout = () => {
        setPost(false);
        setPhoto(false);
        setVideo(false);
        setEvent(false);
        setAbout(true);
    }
    const handleChangeEvent = () => {
        setPost(false);
        setAbout(false);
        setPhoto(false);
        setVideo(false);
        setEvent(true);
    }
    const handleChangePhoto = () => {
        setPost(false);
        setAbout(false);
        setEvent(false);
        setVideo(false);
        setPhoto(true);
    }
    const handleChangeVideo = () => {
        setPost(false);
        setAbout(false);
        setEvent(false);
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
                                        coverPhoto && coverPhoto.type.startsWith("image") ? (<Card.Img style={{ width: "100%", height: "30vh" }} src={URL.createObjectURL(coverPhoto)} alt="name" />) : (<Card.Img className="w-100 img-fluid" src={jahed} alt="jahed" style={{ width: "100%", height: "30vh" }} />)
                                    }
                                    <Form.Control onChange={(e) => setCoverPhoto(e.target.files[0])} accept="image/*" id="coverPhoto" type="file" className="d-none" >
                                    </Form.Control>
                                </label>
                                <Row className="mb-2 position-relative">
                                    <label htmlFor="profilePhoto" className="userPosition">
                                        {
                                            profilePhoto && profilePhoto.type.startsWith("image") ? (<Card.Img style={{ width: "200px", height: "200px", borderRadius: "50%" }} className="p-2 bg-light" src={URL.createObjectURL(profilePhoto)} alt="name" />) : (<img src={jahed} alt="jahed2" style={{ width: "200px", height: "200px", borderRadius: "50%" }} className="p-2 bg-light" />)
                                        }
                                        <Form.Control onChange={(e) => setProfilePhoto(e.target.files[0])} accept="image/*" id="profilePhoto" type="file" className="d-none" >
                                        </Form.Control>
                                    </label>
                                    <Col md="12" className="mt-5 ms-sm-5 ms-3">
                                        <h5 className="ms-3 mt-5 fw-bold fs-3">Leading University Computer Club</h5>
                                        <p className="ms-3 mb-0 text-lead fs-5">@Leading.University.Computer.Club</p>
                                        <div className="mb-2 mt-4 d-flex">
                                            <div className="bgPrimary text-center rounded-3 w-25 me-2 mb-2">
                                                <div className="btn text-white">
                                                    <FaCommentDots className="me-2 mb-1" />
                                                    Send Message
                                                </div>
                                            </div>
                                            <div className="bgPrimary text-center rounded-3 w-25 mb-2">
                                                <div className="btn text-white">
                                                    <FaUserPlus className="me-2 mb-1" />
                                                    Send Membership Request
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Container>
                        <Row className="sticky-top">
                            <nav className="py-2 bg-light border-bottom">
                                <div className="container d-flex flex-wrap">
                                    <ul className="nav me-auto">
                                        <li className="nav-item cursor">
                                            <p className="nav-link link-dark px-2 active"
                                                aria-current="page" onClick={handleChangeHome}>Home</p>
                                        </li>
                                        <li className="nav-item cursor">
                                            <p className="nav-link link-dark ps-4 px-2" onClick={handleChangeAbout}>About</p>
                                        </li>
                                        <li className="nav-item cursor">
                                            <p className="nav-link link-dark ps-4 px-2" onClick={handleChangeEvent}>Event</p>
                                        </li>
                                        <Dropdown as="li">
                                            <Dropdown.Toggle variant="light">
                                                More
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={handleChangePhoto}>Photos</Dropdown.Item>
                                                <Dropdown.Item onClick={handleChangeVideo}>Videos</Dropdown.Item>
                                                <Dropdown.Item onClick={handleChangePhoto}>Events</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </ul>
                                    <ul className="nav">
                                        <li className="nav-item">
                                            <Link to="#" className="nav-link link-dark px-2 mt-1 btn">
                                                <FaPlus className="me-1 mb-1" />
                                                Follow
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
                post && <ClubHome />
            }
            {
                about && <AboutClub />
            }
            {
                event && <ClubEvents />
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

export default ClubProfile;