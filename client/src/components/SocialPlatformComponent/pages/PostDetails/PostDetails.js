import React, { useState } from 'react';
import { Col, NavDropdown, Row, Container, Collapse, Form } from "react-bootstrap";
import jahed from "../../../../images/Jahed.jpg";
import { FaEllipsisH, FaPhotoVideo, FaRegComment, FaRegHeart, FaRegSmile, FaShare } from 'react-icons/fa';

const PostDetails = ({ show, handleClose }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Container className="bg-light pt-0 pt-sm-4">
                <Row className="pt-0 pt-sm-5">
                    <Col md="7" className="p-1 bg-dark">
                        <img src={jahed} alt="name" className="img-fluid w-100" />
                    </Col>
                    <Col md="5">
                        <div className="d-flex justify-content-between align-items-center mt-2 mt-sm-0">
                            <div className="d-flex justify-content-start align-items-center">
                                <img src={jahed} alt="name" width="35" className="rounded-circle me-2" />
                                <div>
                                    <h6 className="textHover text-dark">Md Jahed Miah</h6>
                                </div>
                            </div>
                            <NavDropdown
                                title={<FaEllipsisH className="text-dark" />}>
                                <NavDropdown.Item className="dropdownItem py-3">do some action
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <hr />
                        <div className="m-2">
                            “In the midst of which there is boundless enthusiasm, intellect and
                            Has the quality of continuous work, however
                            He is most likely to succeed. "

                            “যার মাঝে সীমাহীন উ‌ৎসাহ, বুদ্ধি ও
                            একটানা কাজ করার গুণ থাকে, তবে
                            তার সফল হওয়ার সম্ভাবনা সবচেয়ে বেশি”
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center py-2">
                                <div className="d-flex ps-3">
                                    <FaRegHeart className="skyColor me-2" />
                                </div>
                                <small id="totalLike" className="text-dark textHover ">20 likes</small>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <small className="anchor text-dark textHover pe-3"><span
                                    className="pe-2">2</span>comment</small>
                            </div>
                        </div>
                        <hr className="hr" />
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center cursor ps-2">
                                <FaRegHeart className="mb-1" />
                                <p className="ps-1 pt-2">Like</p>
                            </div>
                            <div className="d-flex align-items-center cursor" onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}>
                                <FaRegComment className="mb-1" />
                                <p className="ps-1 pt-2">Comment</p>
                            </div>
                            <div className="d-flex align-items-center cursor pe-2">
                                <FaShare className="mb-1" />
                                <p className="ps-1 pt-2 pe-2">Share</p>
                            </div>
                        </div>
                        <hr className="hr" />
                        <Collapse in={open}>
                            <div className="mt-2">
                                <div className="d-flex justify-content-between position-relative pt-2">
                                    <img src={jahed} alt="" width="35" height="35" className="rounded-circle me-2" />
                                    <Form.Control type="text" className="ps-4 rounded-pill me-5 mb-3" placeholder="Put your comment" />
                                    <div className="commentBoxPostDetails">
                                        <FaRegSmile title="add emoji" className="me-2" />
                                        <FaPhotoVideo title="photo/video" />
                                    </div>
                                </div>
                                <div className="reply">
                                    <div className="d-flex justify-content-start align-items-center ms-5 mb-2">
                                        <img width="35" height="35" className="rounded-circle me-2" src={jahed} alt="" />
                                        <div className="d-flex align-items-center">
                                            <div className="bgGray rounded p-2">
                                                <h6>Md Jahed Miah</h6>
                                                <p>Thanks you</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="reply">
                                    <div className="d-flex justify-content-start align-items-center ms-5 mb-2">
                                        <img width="35" height="35" className="rounded-circle me-2" src={jahed} alt=".." />
                                        <div className="d-flex align-items-center">
                                            <div className="bgGray rounded p-2">
                                                <h6>Md Jahed Miah</h6>
                                                <p>Thanks for comment</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span style={{ cursor: 'pointer' }} className="ps-3 textHover text-dark" > view more comment</span>
                            </div>
                        </Collapse>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PostDetails;