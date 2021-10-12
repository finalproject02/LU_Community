import React, { useState } from 'react';
import { Col, NavDropdown, Row, Container, Collapse, Form } from "react-bootstrap";
import jahed from "../../../../images/Jahed.jpg";
import { FaEllipsisH, FaPhotoVideo, FaRegComment, FaRegHeart, FaRegSmile, FaShare } from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {Comment, LikeAndDislike} from "../../../../actions/posts";
import Avatar from "../../../../images/avatar.jpeg";

const NotificationPostPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.auth);
    const { people } = useSelector(state => state.people);
    const { clubs } = useSelector(state => state.clubs);
    const [comment, setComment] = useState('');
    const [showMore, setShowMore] = useState(false)
    const { id } = params;
    const { posts } = useSelector(state => state.posts)
    const [open, setOpen] = useState(false);
    const post = posts?.filter(post => post._id === id);
    const [counter, setCounter] = useState(3)

    const getUserName = (id, owner_position) => {
        if (owner_position === 'club_post') {
            const club = clubs.filter(cl => cl._id === id);
            return club.map(u => u.name)
        } else {
            const person = people.filter(usr => usr._id === id);
            return person.map(u => u.name)
        }

    }
    const getUserProfilePicture = (id, owner_position) => {
        if (owner_position === 'club_post') {
            const club = clubs.filter(cl => cl._id === id);
            const cb = club.map(u => u.profile_picture);
            const check = cb.map(i => i == null);
            if (check.includes(true)) {
                return null
            } else {
                return club.map(u => u.profile_picture)
            }
        } else {
            const person = people.filter(usr => usr._id === id);
            const pic = person.map(u => u.profile_picture);
            const check = pic.map(i => i == null);
            if (check.includes(true)) {
                return null
            } else {
                return person.map(u => u.profile_picture)
            }
        }
    }
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            dispatch(Comment(id, {comment}));
            console.log(comment)
            setComment('')
        }
    }
    return (
        <div className="bg-light pt-0 pt-sm-4">
            {post.slice(0, 1).map(item => (
                <Container>
                    <Row className="pt-0 pt-sm-5">
                        <Col md="7" className="p-1 bg-light">
                            <img src={`/api/files/storage/${item.filename}`} alt="name" className="img-fluid w-100" />
                        </Col>
                        <Col md="5">
                            <div className="d-flex justify-content-between align-items-center mt-2 mt-sm-0">
                                <div className="d-flex justify-content-start align-items-center">
                                    <img src={getUserProfilePicture(item.owner_position === 'club_post' ? item.post_to : item.owner_id, item.owner_position) !== null ? `/api/files/storage/${getUserProfilePicture(item.owner_id)}` : Avatar} alt="name" width="35" className="rounded-circle me-2" />
                                    <div>
                                        <h6 className="textHover text-dark">{getUserName(item.owner_position === 'club_post' ? item.post_to : item.owner_id, item.owner_position)}</h6>
                                    </div>
                                </div>
                                <NavDropdown
                                    title={<FaEllipsisH className="text-dark" />}>
                                    <NavDropdown.Item className="dropdownItem py-3">do some action
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <hr />
                            <div className="m-2">{item.description}</div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center py-2">
                                    <div className="d-flex ps-3">
                                        <FaRegHeart className="skyColor me-2" />
                                    </div>
                                    <small id="totalLike" className="text-dark textHover ">{item.likes.length} likes</small>
                                </div>
                                <div className="d-flex align-items-center py-2">
                                    <small className="anchor text-dark textHover pe-3"><span
                                        className="pe-2">{item.comments.length}</span>comment</small>
                                </div>
                            </div>
                            <hr className="hr" />
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center cursor ps-2" onClick={() => dispatch(LikeAndDislike(item._id))}>
                                    <FaRegHeart className="mb-1" />
                                    <p className="ps-1 pt-2">Like</p>
                                </div>
                                <div className="d-flex align-items-center cursor"
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
                                <div className="mt-2">
                                    <div className="d-flex justify-content-between position-relative pt-2">
                                        <img src={currentUser?.profile_picture ? `/api/files/storage/${currentUser?.profile_picture}` : Avatar} alt="" width="35" height="35" className="rounded-circle me-2" />
                                        <Form.Control type="text" className="ps-4 rounded-pill me-5 mb-3" value={comment} placeholder="Put your comment" onKeyDown={handleKeyDown} onChange={(e) => setComment(e.target.value)}/>
                                        <div className="commentBoxPostDetails">
                                            <FaRegSmile title="add emoji" className="me-2" />
                                            <FaPhotoVideo title="photo/video" />
                                        </div>
                                    </div>
                                    {counter > 2 && <span style={{ cursor: 'pointer' }} className="ps-3 textHover text-dark"  onClick={() => setCounter(pre => pre - 3)}>view previous comments</span>}
                                    {item.comments.sort((a, b) => { return new Date(b.time) - new Date(a.time) }).slice(counter, counter + 3).map(comment =>  (

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

                                        </div>
                                    ))}
                                    {item.comments.length > 3 && <span style={{ cursor: 'pointer' }} className="ps-3 textHover text-dark"  onClick={() => setCounter(pre => pre + 3)}>view more comments</span>}
                                </div>
                        </Col>
                    </Row>
                </Container>
            ))}
        </div>
    );
};

export default NotificationPostPage;