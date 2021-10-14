import React, { useState } from 'react';
import { Card, Form, Modal } from 'react-bootstrap';
import "./PostBox.css";
import { FaCertificate, FaFile, FaImage, FaMapMarkedAlt, FaPhotoVideo, FaUserCircle, FaVideo } from 'react-icons/fa';
import { useSelector, useDispatch } from "react-redux";
import Avatar from "../../../images/avatar.jpeg";
import { v4 as uuidv4 } from 'uuid';
import { ClubPost } from "../../../actions/clubs";
import path from "path";
import { CreatePost } from "../../../actions/posts";
import { uploadFile } from "../../../actions/files";
import {GroupPost} from "../../../actions/groups";
import {useParams} from "react-router-dom";

const PostBox = ({details}) => {
    const params = useParams();
    const { id } = params
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.auth);
    const { groups } = useSelector(state => state.groups);
    const [show, setShow] = useState(false);
    const [data, setData] = useState({ post_status: 'Friends', description: '' })
    const handleClose = () => {
        setShow(false);
        setFile('')
    };
    const handleShow = () => setShow(true);
    const [file, setFile] = useState();
    const [otherFile, setOtherFile] = useState();
    const paramsGroup = groups?.filter(group => group._id === id);

    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (details.type === 'club') {
            if (file) {
                const fileData = new FormData();
                const filename = uuidv4() + path.extname(file.name);
                data.filename = filename;
                data.owner_position = 'club_post'
                fileData.append('name', filename);
                fileData.append('file', file);
                dispatch(uploadFile(fileData))
                dispatch(ClubPost(details._id, data))
            } else {
                dispatch(ClubPost(details._id, data));
            }
        } else if (details.type === 'user') {
            if (file) {
                const fileData = new FormData();
                const filename = uuidv4() + path.extname(file.name);
                data.filename = filename;
                fileData.append('name', filename);
                fileData.append('file', file);
                dispatch(uploadFile(fileData))
                dispatch(CreatePost(data));
            } else {
                dispatch(CreatePost(data));
            }
        } else if (details.type === 'group') {
            if (paramsGroup.map(group => group.creator_id).toString() === currentUser?._id) {
                if (file) {
                    const fileData = new FormData();
                    const filename = uuidv4() + path.extname(file.name);
                    data.filename = filename;
                    data.owner_position = 'Group_admin'
                    fileData.append('name', filename);
                    fileData.append('file', file);
                    dispatch(uploadFile(fileData))
                    dispatch(GroupPost(id, data));
                } else {
                    data.owner_position = 'Group_admin'
                    dispatch(GroupPost(id,data));
                }

            } else if (currentUser?.memberships.includes(id)) {
                if (file) {
                    const fileData = new FormData();
                    const filename = uuidv4() + path.extname(file.name);
                    data.filename = filename;
                    data.owner_position = 'Group_member';
                    data.admin_to = paramsGroup?.map(group => group.creator_id).toString()
                    fileData.append('name', filename);
                    fileData.append('file', file);
                    dispatch(uploadFile(fileData))
                    dispatch(GroupPost(id, data));
                } else {
                    data.owner_position = 'Group_member';
                    data.admin_to = paramsGroup?.map(group => group.creator_id).toString()
                    dispatch(GroupPost(id,data));
                }
            } else {
                if (file) {
                    const fileData = new FormData();
                    const filename = uuidv4() + path.extname(file.name);
                    data.filename = filename;
                    data.owner_position = 'Group_public'
                    data.admin_to = paramsGroup?.map(group => group.creator_id).toString()
                    fileData.append('name', filename);
                    fileData.append('file', file);
                    dispatch(uploadFile(fileData))
                    dispatch(GroupPost(id, data));
                } else {
                    data.owner_position = 'Group_public';
                    data.admin_to = paramsGroup?.map(group => group.creator_id).toString()
                    dispatch(GroupPost(id,data));
                }
            }
        }



        handleClose();

    }
    return (
        <div>
            <Card className="w-100 shadow-sm mb-4 w-100 rounded-3">
                <div className="d-flex justify-content-center pt-4">
                    <img src={details?.profile_picture ? `/api/files/storage/${details?.profile_picture}` : Avatar} alt="name" width="45" height="45" className="rounded-circle me-3" />
                    <input type="text" className="form-control ps-4 rounded-pill w-75"
                        placeholder="What's going on your mind?" onClick={handleShow} />
                </div>
                <Card.Body>
                    <Card.Text as="div" className="d-flex justify-content-center">
                        <hr className="hrWidth" />
                    </Card.Text>
                    <Card.Text as="div" className="d-flex align-items-center ps-5">
                        <Card.Text as="div" className="ps-4 text-center" onClick={handleShow}>
                            <FaImage title="photo" className="fs-4" />
                            <p>Photo</p>
                        </Card.Text>
                        <Card.Text as="div" className="ps-4 text-center" onClick={handleShow}>
                            <FaVideo title="video" className="fs-4" />
                            <p>Video</p>
                        </Card.Text>
                        <Card.Text as="div" className="ps-4 text-center" onClick={handleShow}>
                            <FaFile title="file" className="fs-4" />
                            <p>File</p>
                        </Card.Text>
                        <Card.Text as="div" className="ps-4 text-center" onClick={handleShow}>
                            <FaCertificate className="fs-4" />
                            <p>Celebration</p>
                        </Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create a post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                            <img src={details?.profile_picture ? `/api/files/storage/${details?.profile_picture}` : Avatar} alt="" width="50" height="50" className="rounded-circle me-2" />
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6>{details?.name}</h6>
                                    <Form.Select className="form-select rounded-pill" onChange={handleChange} name="post_status">
                                        <option value="">Friends</option>
                                        <option value="">Public</option>
                                        <option value="">Only me</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Form.Control as="textarea" onChange={handleChange} name="description" rows={8} placeholder="what you would like to write?" />
                        </div>
                        {
                            file && file.type.startsWith("image") && (<img className="w-100 img-fluid img-thumbnail mt-1" src={URL.createObjectURL(file)} alt="name" />)
                        }
                        {
                            file && file.type.startsWith("video") && (<video className="p-1 shadow-sm" src={URL.createObjectURL(file)} width="320" height="240" autoPlay />)
                        }
                        {
                            otherFile && (<p className="fw-bold fs-5 p-2">{otherFile.name}</p>)
                        }

                        <Card>
                            <div className="d-flex justify-content-between p-3">
                                <span>Add to your post</span>
                                <div>
                                    <label htmlFor="file">
                                        <FaPhotoVideo className="me-3 fs-3" title="photo/video" />
                                        <Form.Control onChange={(e) => setFile(e.target.files[0])} accept="image/*,video/*" id="file" type="file" className="d-none" ></Form.Control>
                                    </label>

                                    <label htmlFor="otherFile">
                                        <FaFile className="me-3 fs-3" title="file" />
                                        <Form.Control onChange={(e) => setOtherFile(e.target.files[0])} accept="file/*" id="otherFile" type="file" className="d-none" ></Form.Control>
                                    </label>

                                    <FaUserCircle className="me-3 fs-3" title="tag friends" />
                                    <FaMapMarkedAlt className="me-3 fs-3" title="check in" />
                                </div>
                            </div>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit" className="btn btn-primary px-5 py-2 fs-5 rounded-3">Post</button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
};

export default PostBox;