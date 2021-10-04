import React, {useEffect, useState} from 'react';
import { Card, Col, Container, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import {Link, Redirect, useParams} from 'react-router-dom';
import UserProfileHome from './UserProfileHome';
import AllFriend from "../../AllFriend/AllFriend";
import AllPhotos from "../../AllPhotos/AllPhotos.js";
import AllVideos from "../../AllVideos/AllVideos.js";
import { FaAddressBook, FaBirthdayCake, FaConnectdevelop, FaEnvelopeOpen, FaPhone, FaUserCircle } from 'react-icons/fa';
import ProfileAbout from '../../ProfileAbout/ProfileAbout';
import {useSelector} from "react-redux";
import {Accept_Connection_Request, Connect, Disconnect} from "../../../../actions/users";
import moment from "moment";
import {useDispatch} from "react-redux";
import Avatar from '../../../../images/avatar.jpeg'

const UserProfileCard = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { id } = params;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { people } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth);


    const paramUser = people?.filter(person => person._id === id);
    const paramsConnection = paramUser?.map(users => people.filter(person => users.connection.includes(person._id)))
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
    const isConnected = paramUser.filter(user => currentUser?.connection.includes(user._id));
    const isConnecting = paramUser.filter(user => currentUser?.connecting.includes(user._id));
    const isConnectionRequest= paramUser.filter(user => currentUser?.connection_requests.includes(user._id));
    const otherPosition = paramUser.filter(user => !currentUser?.connection.includes(user._id) && !currentUser?.connecting.includes(user._id) && !currentUser?.connection_requests.includes(user._id))


    return (
        <div>
            <div className="overflow-hidden">
                {
                    paramUser.map(user => (
                        <div key={user.id}>
                            <Row>
                                <Card className="w-100 shadow-sm mb-4 rounded-3">
                                    <Container>
                                        <Card.Body className="pt-0">
                                            <label htmlFor="coverPhoto" className="w-100">
                                              <Card.Img className="w-100 img-fluid" src={user.cover_picture ? `/api/files/storage/${user.cover_picture}` : Avatar} alt={user.name} style={{ height: "20rem" }} />
                                            </label>
                                            <Row className="mb-2 position-relative">
                                                <label htmlFor="profilePhoto" className="userPosition">
                                                   <img  src={user.profile_picture ? `/api/files/storage/${user.profile_picture}` : Avatar} className="img-fluid userProfile p-2 bg-light" alt={user.name} style={{ height: '150px' }} />
                                                </label>
                                                <Col className="mt-5 ms-sm-5 ms-3">
                                                    <h5 className="ms-3 mt-5 fw-bold fs-3">{user.name}</h5>
                                                    <p className="ms-3 mb-0 text-lead fs-5">{user.position}</p>
                                                    <p className="text-muted ms-3 mb-0">{user.address}
                                                        <span data-bs-toggle="modal"
                                                            data-bs-target="#contactModal">
                                                            <Link to="#" className="textHover textPrimary" onClick={handleShow}>Contact info</Link>
                                                        </span>
                                                    </p>
                                                    <p className="ms-3">
                                                        <Link to="#" className="textHover textPrimary">{user.connection.length} Connections</Link>
                                                    </p>
                                                    {isConnected.length !== 0 && (
                                                        <div className="mb-2">
                                                            <Link to="#" className="btn btn-primary me-2">Connect</Link>
                                                            <Link to="#" className="btn btn-primary me-2">Message</Link>
                                                            <Link to="#" className="btn btn-primary me-2">Share Profile</Link>
                                                            <Link to="#" className="btn btn-primary me-2">Remove Connection</Link>
                                                        </div>
                                                    )}

                                                    {isConnecting.length !== 0 && (
                                                        <div className="mb-2">
                                                            <Link to="#" className="btn btn-primary me-2">Connecting</Link>
                                                            <Link to="#" className="btn btn-primary me-2">Message</Link>
                                                            <Link to="#" className="btn btn-primary me-2" onClick={() => { dispatch(Disconnect(paramUser.map(user => user._id))); window.location.reload() }}>Remove Connection</Link>
                                                        </div>
                                                    )}

                                                    {isConnectionRequest.length !== 0 && (
                                                        <div className="mb-2">
                                                            <Link to="#" className="btn btn-primary me-2" onClick={() => { dispatch(Accept_Connection_Request(paramUser.map(user => user._id))); window.location.reload() }}>Accept</Link>
                                                            <Link to="#" className="btn btn-primary me-2" onClick={() => { dispatch(Disconnect(paramUser.map(user => user._id))); window.location.reload() }}>Ignore</Link>
                                                            <Link to="#" className="btn btn-primary me-2">Message</Link>
                                                        </div>
                                                    )}
                                                    {otherPosition.length  !== 0 && (
                                                        <div className="mb-2">
                                                            <Link to="#" className="btn btn-primary me-2" onClick={() => { dispatch(Connect(paramUser.map(user => user._id))); window.location.reload() }}>Connect</Link>
                                                            <Link to="#" className="btn btn-primary me-2">Message</Link>
                                                        </div>
                                                    )}
                                                    {user._id === currentUser?._id && (
                                                        <Redirect to={'/socialProfile'}/>
                                                    )}
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Container>
                                    <Row>
                                        <nav class="py-2 bg-light border-bottom sticky-top">
                                            <div class="container d-flex flex-wrap">
                                                <ul class="nav me-auto">
                                                    <li class="nav-user">
                                                        <p class="nav-link link-dark px-2 active"
                                                            aria-current="page" onClick={handleChangePost}>Posts</p>
                                                    </li>
                                                    <li class="nav-user">
                                                        <p class="nav-link link-dark ps-4 px-2" onClick={handleChangeAbout}>About</p>
                                                    </li>
                                                    <li class="nav-user">
                                                        <p class="nav-link link-dark ps-4 px-2" onClick={handleChangeConnection}>connections</p>
                                                    </li>
                                                    <Dropdown as="li">
                                                        <Dropdown.Toggle variant="light">
                                                            More
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.user onClick={handleChangePhoto}>Photos</Dropdown.user>
                                                            <Dropdown.user onClick={handleChangeVideo}>Videos</Dropdown.user>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </ul>
                                                <ul class="nav">
                                                    <li class="nav-user">
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
                                        <div className="d-flex align-users-center pt-3 mb-2">
                                            <p className="fs-5">Contact Info</p>
                                        </div>

                                        <div className="mb-2">
                                            <div className=" d-flex align-users-center">
                                                <FaUserCircle className="fs-5" />
                                                <h6 className="fs-6 ps-2 pt-2">Your Profile</h6>
                                            </div>
                                            <Link to="#" className="textHover textPrimary ms-4">lucommunity.com/lusp/md-jahed-miah-1601b3211</Link>
                                        </div>
                                        <div className="mb-2">
                                            <div className="d-flex align-users-center">
                                                <FaEnvelopeOpen className="fs-5" />
                                                <h6 className="fs-6 ps-2 pt-2">Email</h6>
                                            </div>
                                            <Link href="#" className="textHover textPrimary ms-4">{user.email}</Link>
                                        </div>
                                        <div className="mb-2">
                                            <div className="d-flex align-users-center">
                                                <FaPhone className="fs-5" />
                                                <h6 className="fs-6 ps-2 pt-2">Phone</h6>
                                            </div>
                                            <Link href="#" className="textHover textPrimary ms-4">{user.mobile}</Link>
                                        </div>
                                        <div className="mb-2">
                                            <div className="d-flex align-users-center">
                                                <FaBirthdayCake className="fs-5" />
                                                <h6 className="fs-6 ps-2 pt-2">Birthday</h6>
                                            </div>
                                            <p className="ms-4">{moment(user.data_of_birth).format('dddd, MMMM Do')}</p>
                                        </div>
                                        <div className="mb-2">
                                            <div className="d-flex align-users-center">
                                                <FaConnectdevelop className="fs-5" />
                                                <h6 className="fs-6 ps-2 pt-2">Connected</h6>
                                            </div>
                                            <p className="ms-4">{moment(user.createdAt).format('dddd, MMMM Do YYYY')}</p>
                                        </div>
                                        <div className="mb-4">
                                            <div className="d-flex align-users-center">
                                                <FaAddressBook className="fs-5" />
                                                <h6 className="fs-6 ps-2 pt-2">Address</h6>
                                            </div>
                                            <p className="ms-4">{user.present_address}</p>
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
                    about && <ProfileAbout />
                }
                {
                    connection && <AllFriend setPost={setPost} paramsConnection={paramsConnection}/>
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