import React, { useState } from 'react';
import { Card, Col, Collapse, Dropdown, Form, Row } from 'react-bootstrap';
import { FaEllipsisH, FaPhotoVideo, FaRegComment, FaRegHeart, FaRegSmile, FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import jahed from "../../../../images/Jahed.jpg";

const SearchPost = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="mb-4">
            <Card className="w-100 rounded-3">
                <Card.Body>
                    <Card.Text as="div" className="d-flex justify-content-between align-items-center ps-3">
                        <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                            <img src={jahed} alt="jahed" className="img-fluid smallProfile me-3" />
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6>Md Jahed Miah</h6>
                                    <small>Web Deeloper</small>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center pe-3 skyColor">
                            <div className="d-none">
                                <i className="fa fa-plus pe-2" aria-hidden="true"></i>
                                <strong className="">Connect</strong>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant="light">
                                    <FaEllipsisH />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-2">Copy Post
                                        Link</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Report
                                        Post</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Text>
                    <Card.Text as="div" className="d-flex justify-content-between">
                        <Row>
                            <Col md="8" className="card-text p-2">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit.
                                Enim
                                eveniet odio minus ex culpa suscipit nostrum sit illo, pariatur tenetur
                                modi?
                                Molestias eius labore laudantium!
                            </Col>
                            <Col md="4">
                                <img className="d-block w-100" src={jahed} alt="First"
                                />
                            </Col>
                        </Row>
                    </Card.Text>
                    <Card.Text as="div">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center py-2">
                                <div className="d-flex ps-3">
                                    <FaRegHeart className="skyColor fs-5 me-2" />
                                    <FaRegHeart className="skyColor fs-5 me-2" />
                                </div>
                                <Link href="#" className="text-dark textHover">You,Md
                                    Rejaul
                                    and
                                    25 others</Link>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <Link href="#" className="anchor text-dark textHover pe-3"><span
                                    className="pe-2">25</span>comment</Link>
                            </div>
                        </div>
                    </Card.Text>
                    <hr className="hr" />
                    <Card.Text as="div">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center ps-4">
                                <FaRegHeart className="fs-5" />
                                <p className="ps-2 pt-3">Like</p>
                            </div>
                            <div className="d-flex align-items-center" onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}>
                                <FaRegComment className="fs-5" />
                                <p className="ps-2 pt-3">Comment</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <FaShare className="fs-5" />
                                <p className="ps-2 pt-3 pe-4">Share</p>
                            </div>
                        </div>
                    </Card.Text>
                    <hr className="hr" />
                    <Collapse in={open}>
                        <div className="mt-2">
                            <div className="d-flex justify-content-between position-relative pt-2">
                                <img src={jahed} alt="" className="img-fluid smProfile me-2" />
                                <Form.Control type="text" className="ps-4 rounded-pill me-5"
                                    placeholder="Put your comment" />
                                <div className="commentBoxPosition">
                                    <FaRegSmile title="add emoji" className="me-2" />
                                    <FaPhotoVideo title="photo/video" />
                                </div>
                            </div>

                            <div id="commentShow">
                                <div className="d-flex justify-content-start align-items-center pt-2 mb-2 ms-3">
                                    <img src={jahed} alt="" className="img-fluid smProfile me-2" />
                                    <div className="d-flex align-items-center">
                                        <div className="bgGray rounded p-2">
                                            <h6>Md Jahed Miah</h6>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Pers  jahediatis, fugiat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex ps-5">
                                    <p className="pe-2 ms-2">Like</p>
                                    <div>
                                        <FaRegHeart className="fs-5 skyColor me-1" />
                                        <span className="pe-2 border-end">5</span>
                                    </div>
                                    <p className="ps-2">Reply</p>
                                </div>
                                <div className="reply">
                                    <div className="d-flex justify-content-start align-items-center ms-5 mb-2">
                                        <img src={jahed} alt=""
                                            className="img-fluid smProfile me-2" />
                                        <div className="d-flex align-items-center">
                                            <div className="bgGray rounded p-2">
                                                <h6>Md Jahed Miah</h6>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing
                                                    elit.
                                                    Pers  jahediatis, fugiat.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex ps-5 ms-5">
                                        <p className="pe-2">Like</p>
                                        <div>
                                            <FaRegHeart className="fs-5 skyColor me-1" />
                                            <span className="pe-2 border-end">5</span>
                                        </div>
                                        <p className="ps-2">Reply</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="d-flex justify-content-start align-items-center pt-2 mb-2 ms-3">
                                    <img src={jahed} alt="" className="img-fluid smProfile me-2" />
                                    <div className="d-flex align-items-center">
                                        <div className="bgGray rounded p-2">
                                            <h6>Md Jahed Miah</h6>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Pers  jahediatis, fugiat.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex ps-5">
                                    <p className="pe-2 ms-2">Like</p>
                                    <div>
                                        <FaRegHeart className="fs-5 skyColor me-1" />
                                        <span className="pe-2 border-end">5</span>
                                    </div>
                                    <p className="ps-2">Reply</p>
                                </div>
                            </div>
                            <Link href="#" className="ps-3 textHover text-dark">load more
                                comment..</Link>
                        </div>
                    </Collapse>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SearchPost;