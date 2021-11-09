import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Form, NavDropdown, Row } from 'react-bootstrap';
import { FaUserMinus, FaUserPlus, FaLock, FaGlobe } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import AllPhotos from '../AllPhotos/AllPhotos';
import AllVideos from '../AllVideos/AllVideos';
import GroupHome from '../GroupHome/GroupHome';
import AboutGroup from '../AboutGroup/AboutGroup';
import GroupMember from '../GroupMember/GroupMember';
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { uploadFile } from "../../../actions/files";
import { CancelRequest, GroupUpdate, MemberRequest } from "../../../actions/groups";
import Avatar from "../../../images/avatar.jpeg";

const GroupProfile = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const [groupData, setGroupData] = useState({})
    const { id } = params;
    const { groups } = useSelector(state => state.groups);
    const { currentUser } = useSelector(state => state.auth);
    const [about, setAbout] = useState(false);
    const [post, setPost] = useState(true);
    const [groupMember, setGroupMember] = useState(false);
    const [photo, setPhoto] = useState(false);
    const [video, setVideo] = useState(false);
    const [coverPhoto, setCoverPhoto] = useState();

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
    const uploadCover = () => {
        if (coverPhoto) {
            const formData = new FormData();
            const cover_picture = uuidv4() + path.extname(coverPhoto.name);
            formData.append('name', cover_picture);
            formData.append('file', coverPhoto);
            dispatch(uploadFile(formData));
            groupData.cover_picture = cover_picture;
            dispatch(GroupUpdate(groupData, id));
            window.location.reload();
        }
    }

    const paramsGroup = groups?.filter(group => group._id === id);
    const isCreator = groups?.filter(group => group.creator_id === currentUser._id && group._id === id);
    useEffect(() => {
        paramsGroup.map(group => {
            if (group.privacy === 'private') {
                if ((group.creator_id !== currentUser?._id) && (!currentUser?.memberships.includes(id))) {
                    setAbout(true);
                    setPost(false)
                }
            }
        })
    }, [])
    return (
        <div className="overflow-hidden">
            <div>
                <Row>
                    <Card className="w-100 shadow-sm mb-4 rounded-3">
                        {paramsGroup.slice(0, 1).map(group => (
                            <Container>
                                <Card.Body className="pt-0">
                                    <label htmlFor="coverPhoto" className="w-100">
                                        {
                                            coverPhoto && coverPhoto.type.startsWith("image") ? (<div className={'picture-container'}><Card.Img style={{ width: "100%", height: "30vh" }} src={URL.createObjectURL(coverPhoto)} alt="name" /><button className="btn btn-warning confirmBtnPosition" onClick={uploadCover}>Confirm</button></div>) : (<Card.Img className="w-100 img-fluid" src={group.cover_picture ? `/api/files/storage/${group.cover_picture}` : Avatar} alt={group.name} style={{ width: "100%", height: "30vh" }} />)
                                        }
                                        {isCreator.length !== 0 && (
                                            <Form.Control onChange={(e) => setCoverPhoto(e.target.files[0])} accept="image/*" id="coverPhoto" type="file" className="d-none" >
                                            </Form.Control>
                                        )}
                                    </label>
                                    <Row>
                                        <div className="d-flex align-items-center mb-4">
                                            <Col md="8">
                                                <h5 className="ms-3 mt-5 fw-bold fs-3">{group.name}</h5>
                                                <p className="ms-3 mb-0 text-lead fs-5"><small>{group.privacy === 'private' ? <FaLock /> : <FaGlobe />} {group.privacy} group. <span>{group.members.length} {group.members.length > 1 ? 'members' : 'member'} </span></small></p>
                                            </Col>
                                            {isCreator.length === 0 && (
                                                <Col md="4">
                                                    <div className="bgPrimary rounded-3 w-75 ms-2 text-center">
                                                        {!currentUser?.connecting.includes(group._id) && !currentUser?.memberships.includes(group._id) && (
                                                            <div className="btn text-white" onClick={() => dispatch(MemberRequest(group._id))}>
                                                                <FaUserPlus className="me-1 mb-1" />
                                                                Join Group
                                                            </div>
                                                        )}
                                                        {currentUser?.connecting.includes(group._id) && (
                                                            <div className="btn text-white" onClick={() => dispatch(CancelRequest(group._id))}>
                                                                <FaUserMinus className="me-1 mb-1" />
                                                                Cancel Request
                                                            </div>
                                                        )}

                                                        {currentUser?.memberships.includes(group._id) && (
                                                            <div className="btn text-white">
                                                                <FaUserPlus className="me-1 mb-1" />
                                                                Joined
                                                            </div>
                                                        )}
                                                    </div>
                                                </Col>
                                            )}
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Container>
                        ))}
                        <Row>
                            <div className="py-2 bg-light border-bottom">
                                <div className="container d-flex flex-wrap">
                                    <ul className="nav me-auto">
                                        {paramsGroup.map(group => group.privacy === 'public' && (
                                            <li className="nav-item cardHover rounded-3">
                                                <p className="nav-link link-dark px-2 active"
                                                    aria-current="page" onClick={handleChangeHome}>Home</p>
                                            </li>
                                        ))}
                                        {paramsGroup.map(group => group.privacy).toString() === 'private' && isCreator.length !== 0 && (
                                            <li className="nav-item cardHover rounded-3">
                                                <p className="nav-link link-dark px-2 active"
                                                    aria-current="page" onClick={handleChangeHome}>Home</p>
                                            </li>
                                        )}

                                        {paramsGroup.map(group => group.privacy).toString() === 'private' && currentUser?.memberships.includes(id) && (
                                            <li className="nav-item cardHover rounded-3">
                                                <p className="nav-link link-dark px-2 active"
                                                    aria-current="page" onClick={handleChangeHome}>Home</p>
                                            </li>
                                        )}
                                        <li className="nav-item cardHover rounded-3">
                                            <p className="nav-link link-dark px-2" onClick={handleChangeAbout}>About</p>
                                        </li>
                                        <li className="nav-item cardHover rounded-3">
                                            <p className="nav-link link-dark px-2" onClick={handleChangeGroupMember}>Members</p>
                                        </li>

                                        {paramsGroup.map(group => group.privacy === 'public' && (
                                            <NavDropdown className="navFontSize text-dark cardHover rounded-3"
                                                title={<span className="text-dark">More</span>}>
                                                <NavDropdown.Item className="py-2 cardHover rounded-3" onClick={handleChangePhoto}>
                                                    Photos
                                                </NavDropdown.Item>
                                                <NavDropdown.Item className="py-2 cardHover rounded-3" onClick={handleChangeVideo}>
                                                    Videos
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        ))}
                                        {paramsGroup.map(group => group.privacy).toString() === 'private' && isCreator.length !== 0 && (
                                            <NavDropdown className="navFontSize text-dark cardHover rounded-3"
                                                title={<span className="text-dark">More</span>}>
                                                <NavDropdown.Item className="py-2 cardHover rounded-3" onClick={handleChangePhoto}>
                                                    Photos
                                                </NavDropdown.Item>
                                                <NavDropdown.Item className="py-2 cardHover rounded-3" onClick={handleChangeVideo}>
                                                    Videos
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        )}

                                        {paramsGroup.map(group => group.privacy).toString() === 'private' && currentUser?.memberships.includes(id) && (
                                            <NavDropdown className="navFontSize text-dark cardHover rounded-3"
                                                title={<span className="text-dark">More</span>}>
                                                <NavDropdown.Item className="py-2 cardHover rounded-3" onClick={handleChangePhoto}>
                                                    Photos
                                                </NavDropdown.Item>
                                                <NavDropdown.Item className="py-2 cardHover rounded-3" onClick={handleChangeVideo}>
                                                    Videos
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </Row>
                    </Card>
                </Row>
            </div>

            {
                post && <GroupHome setPost={setPost} setPhoto={setPhoto} />
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