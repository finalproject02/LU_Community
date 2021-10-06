import React from 'react';
import { Col, Modal, NavDropdown, Row } from "react-bootstrap";
import jahed from "../../../../images/Jahed.jpg";
import { FaEllipsisH, FaRegComment, FaRegHeart, FaShare } from 'react-icons/fa';

const NotificationPostPage = ({ show, handleClose }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Body closeButton>
                    <Row >
                        <Col md="8">
                            <img src={jahed} alt="name" className="img-fluid w-100" />
                        </Col>
                        <Col md="4">
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
                                <div className="d-flex align-items-center cursor ps-1">
                                    <FaRegHeart className="mb-1" />
                                    <p className="ps-1 pt-2">Like</p>
                                </div>
                                <div className="d-flex align-items-center cursor"
                                    aria-controls="example-collapse-text">
                                    <FaRegComment className="mb-1" />
                                    <p className="ps-1 pt-2">Comment</p>
                                </div>
                                <div className="d-flex align-items-center cursor">
                                    <FaShare className="mb-1" />
                                    <p className="ps-1 pt-2 pe-1">Share</p>
                                </div>
                            </div>
                            <hr className="hr" />
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default NotificationPostPage;