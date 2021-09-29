import React, { useState } from 'react';
import { Card, Col, Container, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profileCardData from './ProfileCardData';
import "./ProfileCard.css";
import { FaAddressBook, FaBirthdayCake, FaConnectdevelop, FaEdit, FaEnvelopeOpen, FaJoint, FaPhone, FaUserCircle } from 'react-icons/fa';
import {useSelector} from "react-redux";
import moment from "moment";
import { useDispatch } from "react-redux";
import {updateProfile} from "../../../actions/auth";
import { v4 as uuidv4 } from 'uuid';
import path from "path";
import {uploadFile} from "../../../actions/files";
import Avatar from '../../../images/avatar.jpeg'

const ProfileCard = () => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector(state => state.auth);
    const [userData, setUserData] = useState({})
    const [show, setShow] = useState(false);
    const [coverPhoto, setCoverPhoto] = useState();
    const [profilePhoto, setProfilePhoto] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showSecond, setShowSecond] = useState(false);
    const handleCloseSecond = () => setShowSecond(false);
    const handleShowSecond = () => setShowSecond(true);


    const [save, setSave] = useState(false);
    const [data, setData] = useState();
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSave(true);
        dispatch(updateProfile(data));
        setShowSecond(false)
    }
    const uploadProfile =  () => {
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
            {
                profileCardData.map(item => (
                    <div key={item.id}>
                        <Row>
                            <Card className="w-100 shadow-sm mb-4 rounded-3">
                                <Container>
                                    <Card.Body className="pt-0">
                                        <label htmlFor="coverPhoto" className="w-100">
                                            {
                                                coverPhoto && coverPhoto.type.startsWith("image") ? (<><Card.Img className="w-100 img-fluid" src={URL.createObjectURL(coverPhoto)} alt="name" style={{ objectFit: "cover" }} /><button onClick={uploadCover}>Upload</button></>) : (<Card.Img className="w-100 img-fluid" src={currentUser?.profile_picture ? `/api/files/storage/${currentUser?.cover_picture}` : Avatar} alt={currentUser?.cover_picture} style={{ height: "20rem", objectFit:'cover' }} />)
                                            }
                                            <Form.Control onChange={(e) => setCoverPhoto(e.target.files[0])} accept="image/*" id="coverPhoto" type="file" className="d-none" >
                                            </Form.Control>
                                        </label>
                                        <Row className="mb-2 position-relative">
                                            <label htmlFor="profilePhoto" className="userPosition">
                                                {
                                                    profilePhoto && profilePhoto.type.startsWith("image") ? (<><Card.Img style={{ objectFit: 'cover' }} className="img-fluid w-25 rounded-pill p-2 bg-light" src={URL.createObjectURL(profilePhoto)} alt="name" /><button onClick={uploadProfile}>Upload</button></>) : (<img src={currentUser?.profile_picture ? `/api/files/storage/${currentUser?.profile_picture}` : Avatar} className="img-fluid userProfile p-2 bg-light" alt={item.name} style={{ height: '150px', objectFit: 'scalable' }} />)
                                                }
                                                <Form.Control onChange={(e) => setProfilePhoto(e.target.files[0])} accept="image/*" id="profilePhoto" type="file" className="d-none" >
                                                </Form.Control>
                                            </label>
                                            <Col className="mt-5 ms-sm-5 ms-3">
                                                <h5 className="ms-3 mt-5 fw-bold fs-3">{currentUser?.name}</h5>
                                                <p className="ms-3 mb-0 text-lead fs-5">{currentUser?.current_position}</p>
                                                <p className="text-muted ms-3 mb-0">{currentUser?.present_address  }
                                                    <span data-bs-toggle="modal"
                                                        data-bs-target="#contactModal">
                                                        <Link to="#" className="textHover textPrimary" onClick={handleShow}> Contact info</Link>
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
                                                    <Link to="/socialProfile" class="nav-link link-dark px-2 active"
                                                        aria-current="page">Posts</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to="aboutProfile" class="nav-link link-dark ps-4 px-2">About</Link>
                                                </li>
                                                <li class="nav-item">
                                                    <Link to="allFriend" class="nav-link link-dark ps-4 px-2">connections</Link>
                                                </li>
                                                <Dropdown as="li">
                                                    <Dropdown.Toggle variant="light">
                                                        More
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="/allPhotos">Photos</Dropdown.Item>
                                                        <Dropdown.Item href="/allVideos">Videos</Dropdown.Item>
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
                                        <h5 className="fs-5">{currentUser?.name}</h5>
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="d-flex justify-content-between align-items-center pt-3 mb-2">
                                        <p className="fs-5">Contact Info</p>
                                        <FaEdit className="fs-5" onClick={handleShowSecond} />
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
                                        <Link href="#" className="textHover textPrimary ms-4">{currentUser?.email}</Link>
                                    </div>
                                    <div className="mb-2">
                                        <div className="d-flex align-items-center">
                                            <FaPhone className="fs-5" />
                                            <h6 className="fs-6 ps-2 pt-2">Phone</h6>
                                        </div>
                                        <Link href="#" className="textHover textPrimary ms-4">{currentUser?.mobile}</Link>
                                    </div>
                                    <div className="mb-2">
                                        <div className="d-flex align-items-center">
                                            <FaBirthdayCake className="fs-5" />
                                            <h6 className="fs-6 ps-2 pt-2">Birthday</h6>
                                        </div>
                                        <p className="ms-4">{moment(currentUser?.date_of_birth).format('dddd, MMMM Do')}</p>
                                    </div>
                                    <div className="mb-2">
                                        <div className="d-flex align-items-center">
                                            <FaConnectdevelop className="fs-5" />
                                            <h6 className="fs-6 ps-2 pt-2">Connected</h6>
                                        </div>
                                        <p className="ms-4">{moment(currentUser?.createdAt).format('dddd, MMMM Do YYYY')}</p>
                                    </div>
                                    <div className="mb-4">
                                        <div className="d-flex align-items-center">
                                            <FaAddressBook className="fs-5" />
                                            <h6 className="fs-6 ps-2 pt-2">Address</h6>
                                        </div>
                                        <p className="ms-4">{currentUser?.present_address}</p>
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
                ))
            }
        </div >
    );

};

export default ProfileCard;