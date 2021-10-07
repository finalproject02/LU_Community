import React, { useState } from 'react';
import { Card, Carousel, Collapse, Dropdown, Form } from 'react-bootstrap';
import { FaEllipsisV, FaPhotoVideo, FaRegComment, FaRegHeart, FaRegSmile, FaShare } from 'react-icons/fa';
import Avatar from "../../../images/avatar.jpeg";
import "./PostCard.css";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Comment, DeletePosts, LikeAndDislike } from "../../../actions/posts";

const PostCard = ({ posts }) => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.auth);
    const { people } = useSelector(state => state.people);
    const [comment, setComment] = useState();
    const [showMore, setShowMore] = useState(false)


    const [open, setOpen] = useState(false);

    const [index, setIndex] = useState(0);

    const getUserName = (id) => {
        const person = people.filter(usr => usr._id === id);
        return person.map(u => u.name)
    }
    const getUserProfilePicture = (id) => {
        const person = people.filter(usr => usr._id === id);
        const pic = person.map(u => u.profile_picture);
        const check = pic.map(i => i == null);
        if (check.includes(true)) {
            return null
        } else {
            return person.map(u => u.profile_picture)
        }


    }
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            dispatch(Comment(comment.id, { comment: comment.comment }));
            setComment('')
        }
    }
    return (
        <div className="mb-4">
            {posts?.map(post => (
                <Card className="w-100 rounded-3 mb-4">
                    <Card.Body>
                        <Card.Text as="div" className="d-flex justify-content-between align-items-center ps-3">
                            <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                <img src={getUserProfilePicture(post.owner_id) !== null ? `/api/files/storage/${getUserProfilePicture(post.owner_id)}` : Avatar} alt="" width="52" height="52" className="rounded-circle me-2" />
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6>{getUserName(post.owner_id)}</h6>
                                        <small>{moment(post.createdAt).fromNow()}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pe-3 skyColor">
                                {post.owner_id === currentUser?._id && (
                                    <Dropdown>
                                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                                            <FaEllipsisV />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1" onClick={() => dispatch(DeletePosts(post._id))}>Delete
                                                Post</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                )}

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
                                    <small id="totalLike" className="text-dark textHover fs-5">{post.likes?.length}</small>
                                </div>
                                <div className="d-flex align-items-center py-2 fs-5">
                                    <small className="anchor text-dark textHover pe-3"><span
                                        className="pe-2">{post.comments?.length}</span>comment</small>
                                </div>
                            </div>
                        </Card.Text>
                        <hr className="hr" />
                        <Card.Text as="div">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center ps-4 cursor" onClick={() => dispatch(LikeAndDislike(post._id))}>
                                    <FaRegHeart className="fs-5 mb-1" />
                                    <p className="ps-2 pt-2 fs-5">Like</p>
                                </div>
                                <div className="d-flex align-items-center cursor" onClick={() => setOpen(!open)}
                                    aria-controls="example-collapse-text"
                                    aria-expanded={open}>
                                    <FaRegComment className="fs-5 mb-1" />
                                    <p className="ps-2 pt-2 fs-5">Comment</p>
                                </div>
                                <div className="d-flex align-items-center cursor">
                                    <FaShare className="fs-5 mb-1" />
                                    <p className="ps-2 pt-2 pe-4 fs-5">Share</p>
                                </div>
                            </div>
                        </Card.Text>
                        <hr className="hr" />
                        <Collapse in={open}>
                            <div className="mt-2">
                                <div className="d-flex justify-content-between position-relative pt-2">
                                    <img src={currentUser?.profile_picture ? `/api/files/storage/${currentUser?.profile_picture}` : Avatar} alt="" width="35" height="35" className="rounded-circle me-2" />
                                    <Form.Control type="text" className="ps-4 rounded-pill me-5 mb-3" placeholder="Put your comment" onKeyDown={handleKeyDown} onChange={(e) => setComment({ comment: e.target.value, id: post._id })} />
                                    <div className="commentBoxPosition">
                                        <FaRegSmile title="add emoji" className="me-2" />
                                        <FaPhotoVideo title="photo/video" />
                                    </div>
                                </div>

                                <div id="commentShow">
                                    {showMore ?
                                        post.comments.sort((a, b) => { return new Date(b.time) - new Date(a.time) }).slice(3, post.comments.length).map(comment => (
                                            <>
                                                <div className="reply">
                                                    <div className="d-flex justify-content-start align-items-center ms-5 mb-2">
                                                        <img width="35" height="35" className="rounded-circle me-2" src={getUserProfilePicture(comment.id) ? `/api/files/storage/${getUserProfilePicture(comment.id)}` : Avatar} alt="" />
                                                        <div className="d-flex align-items-center">
                                                            <div className="bgGray rounded p-2">
                                                                <h6>{getUserName(comment.id)}</h6>
                                                                <p>{comment.comment}</p>
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
                                            </>
                                        )) : post.comments.sort((a, b) => { return new Date(b.time) - new Date(a.time) }).slice(0, 3).map(comment => (
                                            <>
                                                <div className="reply">
                                                    <div className="d-flex justify-content-start align-items-center ms-5 mb-2">
                                                        <img width="35" height="35" className="rounded-circle me-2" src={getUserProfilePicture(comment.id) ? `/api/files/storage/${getUserProfilePicture(comment.id)}` : Avatar} alt=".." />
                                                        <div className="d-flex align-items-center">
                                                            <div className="bgGray rounded p-2">
                                                                <h6>{getUserName(comment.id)}</h6>
                                                                <p>{comment.comment}</p>
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
                                            </>
                                        ))}

                                </div>
                                <span style={{ cursor: 'pointer' }} className="ps-3 textHover text-dark" onClick={() => setShowMore((prevalue => !prevalue))}> {showMore ? 'View Previous Comments' : 'View more comments'}</span>
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};
export default PostCard;