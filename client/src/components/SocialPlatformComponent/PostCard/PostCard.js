import React, { useState } from 'react';
import { Card, Carousel, Collapse, Dropdown, Form } from 'react-bootstrap';
import { FaEllipsisV, FaFrownOpen, FaPhotoVideo, FaRegComment, FaRegHeart, FaRegSmile, FaShare, FaSmile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import jahed from "../../../images/Jahed.jpg";
import "./PostCard.css";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { DeletePosts } from "../../../actions/posts";

const PostCard = ({ posts }) => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.auth)

    const [open, setOpen] = useState(false);

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="mb-4">
            {posts?.map(post => (
                <Card className="w-100 rounded-3">
                    <Card.Body>
                        <Card.Text as="div" className="d-flex justify-content-between align-items-center ps-3">
                            <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                <img src={`/api/files/storage/${currentUser?.profile_picture}`} alt="" width="52" height="52" className="rounded-circle me-2" />
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>{currentUser?.name}</h6>
                                        <small>{moment(post.createdAt).fromNow()}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pe-3 skyColor">
                                <div className="d-none">
                                    <i className="fa fa-plus pe-2" aria-hidden="true"></i>
                                    <strong className="">Follow</strong>
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                                        <FaEllipsisV />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1" onClick={() => dispatch(DeletePosts(post._id))}>Delete
                                            Post</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Copy Post
                                            Link</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Report
                                            Post</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Text>
                        <Card.Text as="div">
                            <div className="mb-3">
                                <p className="card-text p-2">{post.description}</p>
                            </div>
                        </Card.Text>
                        <Card.Text as="div" className="d-flex justify-content-center">
                            <Carousel activeIndex={index} onSelect={handleSelect} className="mb-2 w-75">
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={`/api/files/storage/${post.filename}`}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Card.Text>
                        <Card.Text as="div">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center py-2">
                                    <div className="d-flex ps-3">
                                        <FaRegHeart className="skyColor fs-5 me-2" />
                                    </div>
                                    <Link id="totalLike" href="#" className="text-dark textHover fs-5">{post.likes.length}</Link>
                                </div>
                                <div className="d-flex align-items-center py-2 fs-5">
                                    <Link href="#" className="anchor text-dark textHover pe-3"><span
                                        className="pe-2">{post.comments.length}</span>comment</Link>
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
                                <div className="d-flex align-items-center coursor" onClick={() => setOpen(!open)}
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
                                    <img src={jahed} alt="name" width="35" height="35" className="rounded-circle me-2" />
                                    <Form.Control type="text" className="ps-4 rounded-pill me-5"
                                        placeholder="Put your comment" />
                                    <div className="commentBoxPosition">
                                        <FaRegSmile title="add emoji" className="me-2" />
                                        <FaPhotoVideo title="photo/video" />
                                    </div>
                                </div>

                                <div id="commentShow">
                                    <div className="d-flex justify-content-start align-items-center pt-2 mb-2 ms-3">
                                        <img src={jahed} alt="name" width="35" height="35" className="rounded-circle me-2" />
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
                                            <img src={jahed} alt="name"
                                                width="35" height="35" className="rounded-circle me-2" />
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
                                <Link href="#" className="ps-3 textHover text-dark">load more
                                    comment..</Link>
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};
export default PostCard;