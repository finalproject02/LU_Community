import React, { useState } from 'react';
import { Card, Col, Container, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AboutClub from '../../AboutClub/AboutClub';
import UserProfileHome from './UserProfileHome';
import AllFriend from "../../AllFriend/AllFriend";
import AllPhotos from "../../AllPhotos/AllPhotos.js";
import AllVideos from "../../AllVideos/AllVideos.js";
import profileCardData from "../../ProfileCard/ProfileCardData.js";
import { FaAddressBook, FaBirthdayCake, FaConnectdevelop, FaEnvelopeOpen, FaPhone, FaUserCircle } from 'react-icons/fa';


const UserProfileCard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [post, setPost] = useState(true);
    const [about, setAbout] = useState(false);
    const [connection, setConnection] = useState(false);
    const [photo, setPhoto] = useState(false);
    const [video, setVideo] = useState(false);

    const handleChangePost = () => {
        setPost(true);
        setPhoto(false);
        setVideo(false);
        setConnection(false);
        setAbout(false);
    }

    const handleChangeAbout = () => {
        setPost(false);
        setPhoto(false);
        setVideo(false);
        setConnection(false);
        setAbout(true);
    }
    const handleChangeConnection = () => {
        setPost(false);
        setAbout(false);
        setPhoto(false);
        setVideo(false);
        setConnection(true);
    }
    const handleChangePhoto = () => {
        setPost(false);
        setAbout(false);
        setConnection(false);
        setVideo(false);
        setPhoto(true);
    }
    const handleChangeVideo = () => {
        setPost(false);
        setAbout(false);
        setConnection(false);
        setPhoto(false);
        setVideo(true);
    }

    const [coverPhoto, setCoverPhoto] = useState();
    const [profilePhoto, setProfilePhoto] = useState();

    return (
        <div>
            <div className="overflow-hidden">
                {
                    profileCardData.map(item => (
                        <div key={item.id}>
                            <Row>
                                <Card className="w-100 shadow-sm mb-4 rounded-3">
                                    <Container>
                                        <Card.Body className="pt-0">
                                            <label htmlFor="coverPhoto" className="w-100">
                                                {
                                                    coverPhoto && coverPhoto.type.startsWith("image") ? (<Card.Img className="w-100 img-fluid" src={URL.createObjectURL(coverPhoto)} alt="name" style={{ height: "20rem" }} />) : (<Card.Img className="w-100 img-fluid" src={item.coverPhoto} alt={item.name} style={{ height: "20rem" }} />)
                                                }
                                                <Form.Control onChange={(e) => setCoverPhoto(e.target.files[0])} accept="image/*" id="coverPhoto" type="file" className="d-none" >
                                                </Form.Control>
                                            </label>
                                            <Row className="mb-2 position-relative">
                                                <label htmlFor="profilePhoto" className="userPosition">
                                                    {
                                                        profilePhoto && profilePhoto.type.startsWith("image") ? (<Card.Img style={{ height: '150px' }} className="img-fluid w-25 rounded-pill p-2 bg-light" src={URL.createObjectURL(profilePhoto)} alt="name" />) : (<img src={item.profilePhoto} className="img-fluid userProfile p-2 bg-light" alt={item.name} style={{ height: '150px' }} />)
                                                    }
                                                    <Form.Control onChange={(e) => setProfilePhoto(e.target.files[0])} accept="image/*" id="profilePhoto" type="file" className="d-none" >
                                                    </Form.Control>
                                                </label>
                                                <Col className="mt-5 ms-sm-5 ms-3">
                                                    <h5 className="ms-3 mt-5 fw-bold fs-3">{item.name}</h5>
                                                    <p className="ms-3 mb-0 text-lead fs-5">{item.position}</p>
                                                    <p className="text-muted ms-3 mb-0">{item.address}
                                                        <span data-bs-toggle="modal"
                                                            data-bs-target="#contactModal">
                                                            <Link to="#" className="textHover textPrimary" onClick={handleShow}>Contact info</Link>
                                                        </span>
                                                    </p>
                                                    <p className="ms-3">
                                                        <Link to="#" className="textHover textPrimary">{item.totalConnection}</Link>
                                                    </p>
                                                    <div className="mb-2">
                                                        <Link to="#" className="btn btn-primary me-2">Connect</Link>
                                                        <Link to="#" className="btn btn-primary me-2">Message</Link>
                                                        <Link to="#" className="btn btn-primary me-2">Share Profile</Link>
                                                        <Link to="#" className="btn btn-primary me-2">Remove Connection</Link>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Container>
                                    <Row>
                                        <nav class="py-2 bg-light border-bottom sticky-top">
                                            <div class="container d-flex flex-wrap">
                                                <ul class="nav me-auto">
                                                    <li class="nav-item">
                                                        <p class="nav-link link-dark px-2 active"
                                                            aria-current="page" onClick={handleChangePost}>Posts</p>
                                                    </li>
                                                    <li class="nav-item">
                                                        <p class="nav-link link-dark ps-4 px-2" onClick={handleChangeAbout}>About</p>
                                                    </li>
                                                    <li class="nav-item">
                                                        <p class="nav-link link-dark ps-4 px-2" onClick={handleChangeConnection}>connections</p>
                                                    </li>
                                                    <Dropdown as="li">
                                                        <Dropdown.Toggle variant="light">
                                                            More
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={handleChangePhoto}>Photos</Dropdown.Item>
                                                            <Dropdown.Item onClick={handleChangeVideo}>Videos</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </ul>
                                                <ul class="nav">
                                                    <li class="nav-item">
                                                        <Link to="#" class="nav-link link-dark px-2">
                                                            <form class="col-12 col-lg-auto mb-3 mb-lg-0">
                                                                <input type="search" class="form-control" placeholder="Search..."
                                                                    aria-label="Search" />
                                                            </form>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </Row>
                                </Card>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>
                                            <h5 className="fs-5">Md. Jahed Miah</h5>
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="d-flex align-items-center pt-3 mb-2">
                                            <p className="fs-5">Contact Info</p>
                                        </div>

                                        <div className="mb-2">
                                            <div className=" d-flex align-items-center">
                                                <FaUserCircle className="fs-5" />
                                                <h6 className="fs-6 ps-2 pt-2">Your Profile</h6>
                                            </div>
                                            <Link to="#" className="textHover textPrimary ms-4">lucommunity.com/lusp/md-jahed-miah-1601b3211</Link>
                                        </div>
                                        <div className="mb-2">
                                            <div className="d-flex align-items-center">
                                                <FaEnvelopeOpen className="fs-5" />
                                                <h6 className="fs-6 ps-2 pt-2">Email</h6>
                                            </div>
                                            <Link href="#" className="textHover textPrimary ms-4">mdjahedahmed512@gmail.com</Link>
                                        </div>
                                        <div className="mb-2">
                                            <div className="d-flex align-items-center">
                                                <FaPhone className="fs-5" />
                                                <h6 className="fs-6 ps-2 pt-2">Phone</h6>
                                            </div>
                                            <Link href="#" className="textHover textPrimary ms-4">01797213005</Link>
                                        </div>
                                        <div className="mb-2">
                                            <div className="d-flex align-items-center">
                                                <FaBirthdayCake className="fs-5" />
                                                <h6 className="fs-6 ps-2 pt-2">Birthday</h6>
                                            </div>
                                            <p className="ms-4">January 16</p>
                                        </div>
                                        <div className="mb-2">
                                            <div className="d-flex align-items-center">
                                                <FaConnectdevelop className="fs-5" />
                                                <h6 className="fs-6 ps-2 pt-2">Connected</h6>
                                            </div>
                                            <p className="ms-4">January 16, 2021</p>
                                        </div>
                                        <div className="mb-4">
                                            <div className="d-flex align-items-center">
                                                <FaAddressBook className="fs-5" />
                                                <h6 className="fs-6 ps-2 pt-2">Address</h6>
                                            </div>
                                            <p className="ms-4">Sylhet, Bangladesh</p>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </Row>
                        </div>
                    ))
                }

                {
                    post && <UserProfileHome />
                }
                {
                    about && <AboutClub />
                }
                {
                    connection && <AllFriend />
                }
                {
                    photo && <AllPhotos />
                }
                {
                    video && <AllVideos />
                }
            </div>
        </div>
    );
};

export default UserProfileCard;