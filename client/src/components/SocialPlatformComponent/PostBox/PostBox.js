import React, { useState } from 'react';
import { Card, Form, Modal } from 'react-bootstrap';
import pic from "../../../images/facebook.png";
import "./PostBox.css";
import { FaCertificate, FaFile, FaImage, FaMapMarkedAlt, FaPhotoVideo, FaUserCircle, FaVideo } from 'react-icons/fa';

const PostBox = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [file, setFile] = useState();
    const [otherFile, setOtherFile] = useState();
    return (
        <div>
            <Card className="w-100 shadow-sm mb-4 w-100 rounded-3">
                <div class="d-flex justify-content-center pt-4">
                    <img src={pic} alt="" class="img-fluid smallProfile me-3" />
                    <input type="text" class="form-control ps-4 rounded-pill w-75"
                        placeholder="What's going on your mind?" onClick={handleShow} />
                </div>
                <Card.Body>
                    <Card.Text as="div" class="d-flex justify-content-center">
                        <hr class="hrWidth" />
                    </Card.Text>
                    <Card.Text as="div" class="d-flex align-items-center ps-5">
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
                <Modal.Header closeButton>
                    <Modal.Title>Create a post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="d-flex justify-content-start align-items-center pt-3 mb-2">
                        <img src={pic} alt="" class="img-fluid smallProfile me-3" />
                        <div class="d-flex align-items-center">
                            <div>
                                <h6>Md Jahed Miah</h6>
                                <Form.Select class="form-select rounded-pill" name="shareWith">
                                    <option value="">Friends</option>
                                    <option value="">Public</option>
                                    <option value="">Only me</option>
                                </Form.Select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Form.Control as="textarea" name="writtenPost" rows={8} placeholder="what you would like to write?" />
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
                        <div class="d-flex justify-content-between p-3">
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
                    <button type="button" class="btn btn-primary px-5 py-2 fs-5 rounded-3" onClick={handleClose}>Post</button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default PostBox;