import React, { useState } from 'react';
import { Card, Carousel, Col, Collapse, Container, Dropdown, Form, Row } from 'react-bootstrap';
import { FaEllipsisV, FaFrownOpen, FaPhotoVideo, FaRegComment, FaRegHeart, FaRegSmile, FaShare, FaSmile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import jahed from "../../../images/Jahed.jpg";
import video from "../../../videos/Leading University Computer Club.mp4";
import allVideosData from "./AllVideosData";

const AllVideos = () => {
    const [open, setOpen] = useState(false);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="mb-4">
            <Container>
                <Card className="w-100 rounded-3 mb-4">
                    <Card.Body>
                        <Card.Title>Most Popular</Card.Title>
                        <Card.Text as="div" className="d-flex justify-content-between align-items-center ps-3">
                            <div className="w-100 pt-3 mb-2">
                                <video controls src={video} alt="" className="w-100 img-thumbnail" />
                            </div>
                        </Card.Text>
                        <Card.Text as="div">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center py-2">
                                    <div className="d-flex ps-3">
                                        <FaRegHeart className="skyColor fs-5 me-2" />
                                        <FaRegHeart className="skyColor fs-5 me-2" />
                                    </div>
                                    <Link id="totalLike" href="#" className="text-dark textHover fs-5">You,Md
                                        Rejaul
                                        and
                                        25 others</Link>
                                </div>
                                <div className="d-flex align-items-center py-2 fs-5">
                                    <Link href="#" className="textHover text-dark text-dark textHover pe-3"><span
                                        className="pe-2">25</span>comment</Link>
                                </div>
                            </div>
                        </Card.Text>
                        <hr className="hr" />
                        <Card.Text as="div">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center ps-4">
                                    <FaRegHeart className="fs-5" />
                                    <p className="ps-2 pt-3 fs-5">Like</p>
                                </div>
                                <div className="d-flex align-items-center" onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}>
                                    <FaRegComment className="fs-5" />
                                    <p className="ps-2 pt-3 fs-5">Comment</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FaShare className="fs-5" />
                                    <p className="ps-2 pt-3 pe-4 fs-5">Share</p>
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

                <Card className="w-100 mb-4">
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                            <Card.Title className="mb-2 fs-4">All Videos</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted mb-2 textHover">See All</Card.Subtitle>
                        </div>
                        <Row>
                            {
                                allVideosData.map(item => (
                                    <Col md="4" className="mb-2">
                                        <Card>
                                            <video controls width="100%" src="{video}">
                                            </video>
                                            <Card.Body>
                                                <link href="#" className="textHover text-dark" />
                                                <p className="text-dark">Message from our keynote speaker</p>
                                                <small className="fs-6"><span>5</span> months ago.
                                                    <span>560</span> views
                                                </small>
                                                <div className="d-flex align-items-center">
                                                    <FaRegHeart className="skyColor" />
                                                    <p className="pt-2 ps-2">you,Tanbir and 98 others</p>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default AllVideos;