import React, { useState } from 'react';
import { Card, Col, Container, Dropdown, Form, Modal, Nav, Row } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import "./ProfileCard.css";
import { FaAddressBook, FaBirthdayCake, FaConnectdevelop, FaEdit, FaEnvelopeOpen, FaJoint, FaPhone, FaUserCircle } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { updateProfile } from "../../../actions/auth";
import { v4 as uuidv4 } from 'uuid';
import path from "path";
import { uploadFile } from "../../../actions/files";
import Avatar from '../../../images/avatar.jpeg'
import { useParams } from "react-router-dom";
import { Accept_Connection_Request, Connect, Disconnect } from "../../../actions/users";
import ProfileAbout from '../ProfileAbout/ProfileAbout';
import AllFriend from "../AllFriend/AllFriend";
import AllPhotos from "../AllPhotos/AllPhotos";
import AllVideos from "../AllVideos/AllVideos";
import ProfileHome from "../pages/SocialProfile/ProfileHome";

const ProfileCard = () => {
    const { people } = useSelector(state => state.people)
    const dispatch = useDispatch();
    const params = useParams();
    const { id } = params;
    const { currentUser } = useSelector(state => state.auth);
    const [userData, setUserData] = useState({})
    const [show, setShow] = useState(false);
    const [coverPhoto, setCoverPhoto] = useState();
    const [profilePhoto, setProfilePhoto] = useState();
    const [connection, setConnection] = useState(false);
    const [photo, setPhoto] = useState(false);
    const [video, setVideo] = useState(false);
    const [post, setPost] = useState(true);
    const [about, setAbout] = useState(false);
    const paramUser = people?.filter(person => person._id === id);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showSecond, setShowSecond] = useState(false);
    const handleCloseSecond = () => setShowSecond(false);
    const handleShowSecond = () => setShowSecond(true);

    const isConnected = paramUser.filter(user => currentUser?.connection.includes(user._id));
    const isConnecting = paramUser.filter(user => currentUser?.connecting.includes(user._id));
    const isConnectionRequest = paramUser.filter(user => currentUser?.connection_requests.includes(user._id));
    const otherPosition = paramUser.filter(user => !currentUser?.connection.includes(user._id) && !currentUser?.connecting.includes(user._id) && !currentUser?.connection_requests.includes(user._id))
    const [save, setSave] = useState(false);
    const [data, setData] = useState();
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

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
    const handleSubmit = (e) => {
        e.preventDefault();
        setSave(true);
        dispatch(updateProfile(data));
        setShowSecond(false)
    }
    const uploadProfile = () => {
        if (profilePhoto) {
            const formData = new FormData();
            const profile_picture = uuidv4() + path.extname(profilePhoto.name);
            formData.append('name', profile_picture);
            formData.append('file', profilePhoto);
            dispatch(uploadFile(formData));
            userData.profile_picture = profile_picture;
            dispatch(updateProfile(userData))
        }
    }
    const uploadCover = () => {
        if (coverPhoto) {
            const formData = new FormData();
            const cover_picture = uuidv4() + path.extname(coverPhoto.name);
            formData.append('name', cover_picture);
            formData.append('file', coverPhoto);
            dispatch(uploadFile(formData));
            userData.cover_picture = cover_picture;
            dispatch(updateProfile(userData))
        }
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
                                        coverPhoto && coverPhoto.type.startsWith("image") ? (<><Card.Img style={{ width: "100%", height: "30vh" }} src={URL.createObjectURL(coverPhoto)} alt="name" />
                                            <button onClick={uploadCover} className="btn btn-warning">Confirm Upload</button>
                                        </>) : (<Card.Img style={{ width: "100%", height: "30vh" }} src={paramUser.length !== 0 ? paramUser.map(user => user.cover_picture ? `/api/files/storage/${user.cover_picture}` : Avatar) : currentUser?.cover_picture ? `/api/files/storage/${currentUser?.cover_picture}` : Avatar} alt={'Not found'} />)
                                    }
                                    {paramUser.length === 0 && (
                                        <Form.Control onChange={(e) => setCoverPhoto(e.target.files[0])} accept="image/*" id="coverPhoto" type="file" className="d-none" >
                                        </Form.Control>
                                    )}
                                </label>
                                <Row className="mb-2 position-relative">
                                    <label htmlFor="profilePhoto" className="userPosition">
                                        {
                                            profilePhoto && profilePhoto.type.startsWith("image") ? (<><Card.Img style={{ width: "200px", height: "200px", borderRadius: "50%" }} className="p-2 bg-light" src={URL.createObjectURL(profilePhoto)} alt="name" />
                                                <button onClick={uploadProfile} className="btn btn-warning">Confirm Upload</button></>) :
                                                (<img src={paramUser.length !== 0 ? paramUser.map(user => user.profile_picture ? `/api/files/storage/${user.profile_picture}` : Avatar) : currentUser?.profile_picture ? `/api/files/storage/${currentUser?.profile_picture}` : Avatar} width="200" style={{ width: "200px", height: "200px", borderRadius: "50%" }} className="p-2 bg-light" alt={'Not Found'} />)
                                        }
                                        {paramUser.length === 0 && (
                                            <Form.Control onChange={(e) => setProfilePhoto(e.target.files[0])} accept="image/*" id="profilePhoto" type="file" className="d-none" >
                                            </Form.Control>
                                        )}
                                    </label>
                                    <Col className="mt-5 ms-sm-5 ms-3">
                                        <h5 className="ms-3 mt-5 fw-bold fs-3">{paramUser.length !== 0 ? paramUser.map(user => user.name) : currentUser?.name}</h5>
                                        <p className="ms-3 mb-0 text-lead fs-5">{paramUser.length !== 0 ? paramUser.map(user => user.current_position) : currentUser?.current_position}</p>
                                        <p className="text-muted ms-3 mb-0">{currentUser?.present_address}
                                            <span data-bs-toggle="modal"
                                                data-bs-target="#contactModal">
                                                <Link to="#" className="textHover textPrimary" onClick={handleShow}> Contact info</Link>
                                            </span>
                                        </p>
                                        <p className="ms-3">
                                            <Link to="#" className="textHover textPrimary">{paramUser.length !== 0 ? paramUser.map(user => user.connection.length) : currentUser?.connection.length} Connections</Link>
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
                                        {otherPosition.length !== 0 && (
                                            <div className="mb-2">
                                                <Link to="#" className="btn btn-primary me-2" onClick={() => { dispatch(Connect(paramUser.map(user => user._id))); window.location.reload() }}>Connect</Link>
                                                <Link to="#" className="btn btn-primary me-2">Message</Link>
                                            </div>
                                        )}

                                    </Col>
                                </Row>
                            </Card.Body>
                        </Container>
                        <Row>
                            <nav class="py-2 bg-light border-bottom sticky-top">
                                <div class="container d-flex flex-wrap">
                                    <Nav class="nav me-auto">
                                        <Nav.Item>
                                            <Nav.Link className="nav-link link-dark px-2 active"
                                                aria-current="page" onClick={handleChangePost}>Posts</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="nav-link link-dark ps-4 px-2" onClick={handleChangeAbout}>About</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link className="nav-link link-dark ps-4 px-2" onClick={handleChangeConnection}>connections</Nav.Link>
                                        </Nav.Item>
                                        <Dropdown as="li">
                                            <Dropdown.Toggle variant="light">
                                                More
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={handleChangePhoto}>Photos</Dropdown.Item>
                                                <Dropdown.Item onClick={handleChangeVideo}>Videos</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Nav>
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
                                <h5 className="fs-5">{paramUser.length !== 0 ? paramUser.map(user => user.name) : currentUser?.name}</h5>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="d-flex justify-content-between align-items-center pt-3 mb-2">
                                <p className="fs-5">Contact Info</p>
                                {paramUser.length === 0 && (
                                    <FaEdit className="fs-5" onClick={handleShowSecond} />
                                )}
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
                                <Link href="#" className="textHover textPrimary ms-4">{paramUser.length !== 0 ? paramUser.map(user => user.email) : currentUser?.email}</Link>
                            </div>
                            <div className="mb-2">
                                <div className="d-flex align-items-center">
                                    <FaPhone className="fs-5" />
                                    <h6 className="fs-6 ps-2 pt-2">Phone</h6>
                                </div>
                                <Link href="#" className="textHover textPrimary ms-4">{paramUser.length !== 0 ? paramUser.map(user => user.mobile) : currentUser?.mobile}</Link>
                            </div>
                            <div className="mb-2">
                                <div className="d-flex align-items-center">
                                    <FaBirthdayCake className="fs-5" />
                                    <h6 className="fs-6 ps-2 pt-2">Birthday</h6>
                                </div>
                                <p className="ms-4">{paramUser.length !== 0 ? moment(paramUser.map(user => user.data_of_birth)).format('dddd, MMMM Do') : moment(currentUser?.date_of_birth).format('dddd, MMMM Do')}</p>
                            </div>
                            <div className="mb-2">
                                <div className="d-flex align-items-center">
                                    <FaConnectdevelop className="fs-5" />
                                    <h6 className="fs-6 ps-2 pt-2">Connected</h6>
                                </div>
                                <p className="ms-4">{paramUser.length !== 0 ? paramUser.map(user => moment(user.createdAt).format('dddd, MMMM Do YYYY')) : moment(currentUser?.createdAt).format('dddd, MMMM Do YYYY')}</p>
                            </div>
                            <div className="mb-4">
                                <div className="d-flex align-items-center">
                                    <FaAddressBook className="fs-5" />
                                    <h6 className="fs-6 ps-2 pt-2">Address</h6>
                                </div>
                                <p className="ms-4">{paramUser.length !== 0 ? paramUser.map(user => user.present_address) : currentUser?.present_address}</p>
                            </div>
                        </Modal.Body>
                    </Modal>

                    <Modal show={showSecond} onHide={handleCloseSecond}>
                        <Modal.Header closeButton>
                            <Modal.Title>
                                <h5 class="modal-title fs-5">
                                    Edit contact info</h5>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={handleSubmit}>
                                <div className="pt-3 mb-1">
                                    <h6 className="">Profile URL</h6>
                                    <Link to="#" clasNames="textHover">lucommunity.com/lusp/md-jahed-miah-1601b3211</Link>
                                </div>
                                <div className="pt-3 mb-1">
                                    <h6 className="">Name</h6>
                                    <Form.Control className="w-100" type="text" defaultValue={currentUser?.name} onChange={handleChange} name="name" />
                                </div>
                                <div className="pt-3 mb-1">
                                    <h6 className="">Email</h6>
                                    <Form.Control className="w-100" type="text" onChange={handleChange} defaultValue={currentUser?.email} name="email" />
                                </div>
                                <div className="pt-3 mb-1">
                                    <h6 className="">Phone</h6>
                                    <Form.Control className="w-100" type="text" defaultValue={currentUser?.mobile} onChange={handleChange} name="mobile" />
                                </div>
                                <div className="pt-3 mb-1">
                                    <h6 className="">Address</h6>
                                    <Form.Control className="w-100" type="text" defaultValue={currentUser?.present_address} onChange={handleChange} name="present_address" />
                                </div>
                                <div className="pt-3 mb-4">
                                    <h6 className="">Birthday</h6>
                                    <Form.Control defaultValue={currentUser?.date_of_birth} className="w-100" type="date" onChange={handleChange} name="date_of_birth" />
                                </div>
                                <div className="bgSecondary text-center m-2 rounded-3">
                                    <input type="submit" value="Save Changes" className="btn w-100 text-white" />
                                </div>
                            </Form>
                        </Modal.Body>
                    </Modal>
                </Row>
            </div>
            {post && <ProfileHome />}
            {about && <ProfileAbout />}
            {connection && <AllFriend />}
            {photo && <AllPhotos />}
            {video && <AllVideos />}
        </div>
    );

};

export default ProfileCard;