import React, { useState } from 'react';
import { Card, Col, Container, Form, NavDropdown, Row } from 'react-bootstrap';
import { FaCommentDots, FaPlus, FaMinus } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Avatar from "../../../images/avatar.jpeg";
import AboutClub from '../AboutClub/AboutClub';
import AllPhotos from '../AllPhotos/AllPhotos';
import AllVideos from '../AllVideos/AllVideos';
import ClubEvents from '../ClubEvents/ClubEvents';
import ClubFollower from '../ClubFollower/ClubFollower';
import ClubHome from '../ClubHome/ClubHome';
import { useSelector, useDispatch } from "react-redux";
import { ClubFollow, ClubUnfollow } from "../../../actions/clubs";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { uploadFile } from "../../../actions/files";
import { ClubUpdate } from "../../../actions/clubs";

const ClubProfile = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { id } = params;
    const [clubData, setClubData] = useState({})
    const { clubs } = useSelector(state => state.clubs);
    const { currentUser } = useSelector(state => state.auth);
    const [about, setAbout] = useState(false);
    const [post, setPost] = useState(true);
    const [follower, setFollower] = useState(false);
    const [photo, setPhoto] = useState(false);
    const [video, setVideo] = useState(false);
    const [event, setEvent] = useState(false);

    const [coverPhoto, setCoverPhoto] = useState();
    const [profilePhoto, setProfilePhoto] = useState();

    const paramsClub = clubs?.filter(club => club._id === id);
    const isCreator = clubs?.filter(club => club.creator_id === currentUser._id && club._id === id)

    const handleChangeHome = () => {
        setPost(true);
        setPhoto(false);
        setVideo(false);
        setEvent(false);
        setAbout(false);
        setFollower(false);
    }

    const handleChangeAbout = () => {
        setPost(false);
        setPhoto(false);
        setVideo(false);
        setEvent(false);
        setFollower(false);
        setAbout(true);
    }
    const handleChangeFollower = () => {
        setPost(false);
        setAbout(false);
        setPhoto(false);
        setVideo(false);
        setEvent(false);
        setFollower(true);
    }
    const handleChangePhoto = () => {
        setPost(false);
        setAbout(false);
        setEvent(false);
        setVideo(false);
        setFollower(false);
        setPhoto(true);
    }
    const handleChangeEvent = () => {
        setPost(false);
        setAbout(false);
        setPhoto(false);
        setVideo(false);
        setFollower(false);
        setEvent(true);
    }

    const uploadProfile = () => {
        if (profilePhoto) {
            const formData = new FormData();
            const profile_picture = uuidv4() + path.extname(profilePhoto.name);
            formData.append('name', profile_picture);
            formData.append('file', profilePhoto);
            dispatch(uploadFile(formData));
            clubData.profile_picture = profile_picture
            console.log(clubData)
            dispatch(ClubUpdate(clubData, id))
            window.location.reload();
        }

    }
    const uploadCover = () => {
        if (coverPhoto) {
            const formData = new FormData();
            const cover_picture = uuidv4() + path.extname(coverPhoto.name);
            formData.append('name', cover_picture);
            formData.append('file', coverPhoto);
            dispatch(uploadFile(formData));
            clubData.cover_picture = cover_picture;
            dispatch(ClubUpdate(clubData, id));
            window.location.reload();
        }
    }

    return (
        <div className="overflow-hidden">
            <div>
                <Row>
                    <Card className="w-100 shadow-sm mb-4 rounded-3">
                        <Container>
                            {paramsClub.slice(0, 1).map(club => (
                                <Card.Body className="pt-0">
                                    <label htmlFor="coverPhoto" className="w-100">
                                        {
                                            coverPhoto && coverPhoto.type.startsWith("image") ? (<div className={'picture-container'}><Card.Img style={{ width: "100%", height: "30vh" }} src={URL.createObjectURL(coverPhoto)} alt="name" /><button className="btn btn-warning confirmBtnPosition" onClick={uploadCover}>Confirm</button></div>) : (<Card.Img className="w-100 img-fluid" src={club.cover_picture ? `/api/files/storage/${club.cover_picture}` : Avatar} alt={club.name} style={{ width: "100%", height: "30vh" }} />)
                                        }
                                        {isCreator?.length !== 0 && (
                                            <Form.Control onChange={(e) => setCoverPhoto(e.target.files[0])} accept="image/*" id="coverPhoto" type="file" className="d-none" >
                                            </Form.Control>
                                        )}
                                    </label>
                                    <Row className="mb-2 position-relative">
                                        <label htmlFor="profilePhoto" className="userPosition">
                                            {
                                                profilePhoto && profilePhoto.type.startsWith("image") ? (<><Card.Img style={{ width: "200px", height: "200px", borderRadius: "50%" }} className="p-2 bg-light" src={URL.createObjectURL(profilePhoto)} alt="name" /><button className="btn btn-warning confirmProfileBtn" onClick={uploadProfile}>Confirm</button></>) : (<img src={club.profile_picture ? `/api/files/storage/${club.profile_picture}` : Avatar} alt={club.name} style={{ width: "200px", height: "200px", borderRadius: "50%" }} className="p-2 bg-light" />)
                                            }
                                            {isCreator.length !== 0 && (
                                                <Form.Control onChange={(e) => setProfilePhoto(e.target.files[0])} accept="image/*" id="profilePhoto" type="file" className="d-none">
                                                </Form.Control>
                                            )}
                                        </label>
                                        <Col md="12" className="mt-5 ms-sm-5 ms-3">
                                            <h5 className="ms-3 mt-5 fw-bold fs-3 pt-2">{club.name}</h5>
                                            <p className="ms-3 mb-0 text-lead fs-5">@Leading.University.Computer.Club</p>
                                            <div className="mb-2 mt-4 d-flex">

                                            </div>
                                            {isCreator.length === 0 && (
                                                <div className="mb-2 mt-4 d-flex">
                                                    {currentUser?.followings.includes(id) ? (
                                                        <div style={{ cursor: 'pointer' }} className="bgPrimary text-center rounded-3 w-25 me-2 mb-2" onClick={() => dispatch(ClubUnfollow(id))}>
                                                            <div className="btn text-white">
                                                                <FaMinus className="me-2 mb-1" />
                                                                Unfollow

                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div style={{ cursor: 'pointer' }} className="bgPrimary text-center rounded-3 w-25 me-2 mb-2" onClick={() => dispatch(ClubFollow(id))}>
                                                            <div className="btn text-white">
                                                                <FaPlus className="me-2 mb-1" />
                                                                Follow

                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            ))}
                        </Container>
                        <Row>
                            <div className="py-2 bg-light border-bottom">
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
                                            <p className="nav-link link-dark px-2" onClick={handleChangeFollower}>Follower</p>
                                        </li>

                                        <NavDropdown className="navFontSize text-dark cardHover rounded-3"
                                            title={<span className="text-dark">More</span>}>
                                            <NavDropdown.Item className="py-2" onClick={handleChangePhoto}>
                                                Photos
                                            </NavDropdown.Item>
                                            <NavDropdown.Item className="py-2" onClick={handleChangeEvent}>
                                                Events
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </ul>
                                </div>
                            </div>
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
                follower && <ClubFollower paramsClub={paramsClub} />
            }
            {
                photo && <AllPhotos />
            }
            {
                event && <ClubEvents />
            }

        </div>
    );
};

export default ClubProfile;