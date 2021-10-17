import React, { useState } from 'react';
import { Col, Row, Container, Form } from "react-bootstrap";
import { FaPhotoVideo, FaRegComment, FaRegHeart, FaRegSmile, FaShare } from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {Comment, LikeAndDislike} from "../../../../actions/posts";
import Avatar from "../../../../images/avatar.jpeg";
import SocialNavbar from "../../SocialNavbar/SocialNavbar";
import moment from "moment";

const NotificationPostPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser } = useSelector(state => state.auth);
    const { people } = useSelector(state => state.people);
    const { clubs } = useSelector(state => state.clubs);
    const [comment, setComment] = useState('');
    const [showMore, setShowMore] = useState(false)
    const { id } = params;
    const { posts } = useSelector(state => state.posts);
    const { groups } = useSelector(state => state.groups);
    const post = posts?.filter(post => post._id === id);

    const getUserName = (id, owner_position, post_to) => {
        if (owner_position === 'club_post') {
            const club = clubs?.filter(cl => cl._id === post_to);
            return club.map(u => u.name)
        } else if (owner_position === 'own_post') {
            const group = people?.filter(usr => usr._id === id);
            return group.map(u => u.name)
        } else {
            const person = groups?.filter(usr => usr._id === post_to);
            return person.map(u => u.name)
        }

    }

    const action = (owner_id , owner_position, post_to) => {
        if (owner_position === 'club_post') {
            return history.push(`/clubDetails/${post_to}`)
        } else if (owner_position === 'own_post') {
            return history.push(`/profile/${owner_id}`)
        } else  {
            return history.push(`/group/${post_to}`)
        }

    }
    const getUserProfilePicture = (id, owner_position, post_to) => {
        if (owner_position === 'club_post') {
            const club = clubs.filter(cl => cl._id === post_to);
            const cb = club.map(u => u.profile_picture);
            const check = cb.map(i => i == null);
            if (check.includes(true)) {
                return null
            } else {
                return club.map(u => u.profile_picture)
            }
        } else if (owner_position === 'own_post') {
            const person = people.filter(usr => usr._id === id);
            const pic = person.map(u => u.profile_picture);
            const check = pic.map(i => i == null);
            if (check.includes(true)) {
                return null
            } else {
                return person.map(u => u.profile_picture)
            }
        } else {
            const group = groups.filter(usr => usr._id === post_to);
            const pic = group.map(u => u.cover_picture);
            const check = pic.map(i => i == null);
            if (check.includes(true)) {
                return null
            } else {
                return group.map(u => u.cover_picture)
            }
        }
    }
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            dispatch(Comment(id, {comment}));
            setComment('')
        }
    }
    return (
        <>
            <SocialNavbar/>
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
                                        <img style={{cursor: 'pointer'}}  onClick={() => action(item.owner_id, item.owner_position, item.post_to)}  src={getUserProfilePicture(item.owner_id, item.owner_position, item.post_to) !== null ? `/api/files/storage/${getUserProfilePicture(item.owner_id, item.owner_position, item.post_to)}` : Avatar} alt="name" width="65" className="rounded-circle me-2" />
                                        <div style={{marginTop: '1px'}}>
                                            {item.owner_position.startsWith('Group') && (
                                                item.owner_position === 'Group_admin'? (
                                                    <>
                                                        <h6 style={{cursor:'pointer', marginTop: '12px', marginBottom: '-1px'}}   onClick={() => action(item.owner_id, item.owner_position, item.post_to)}>{getUserName(item.owner_id, item.owner_position, item.post_to)}</h6>
                                                        <small style={{marginTop: '-1px'}}>{moment(item.createdAt).fromNow()}</small>
                                                        <p style={{cursor: 'pointer', marginTop: '-1px'}} onClick={() => action(item.owner_id, 'own_post')}>Admin post</p>
                                                    </>
                                                ) : <>
                                                    <h6 style={{cursor:'pointer', marginTop: '12px', marginBottom: '-1px'}}   onClick={() => action(item.owner_id, item.owner_position, item.post_to)}>{getUserName(item.owner_id, item.owner_position, item.post_to)}</h6>
                                                    <small style={{marginTop: '-1px'}}>{moment(item.createdAt).fromNow()}</small>
                                                    <p style={{cursor: 'pointer', marginTop: '-1px'}} onClick={() => action(item.owner_id, 'own_post')}>{getUserName(item.owner_id, 'own_post', '')}</p>
                                                </>
                                            )}

                                            {item.owner_position === 'own_post' ? (
                                                <>
                                                    <h6 style={{cursor:'pointer'}}   onClick={() => action(item.owner_id, item.owner_position, item.post_to)}>{getUserName(item.owner_id, item.owner_position, item.post_to)}</h6>
                                                    <small>{moment(item.createdAt).fromNow()}</small>
                                                </>
                                                ) : (
                                                <>
                                                    <h6 style={{cursor:'pointer'}}   onClick={() => action(item.owner_id, item.owner_position, item.post_to)}>{getUserName(item.owner_id, item.owner_position, item.post_to)}</h6>
                                                    <small>{moment(item.createdAt).fromNow()}</small>
                                                </>
                                            )
                                            }

                                        </div>
                                    </div>
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
                                         aria-controls="example-collapse-text">
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
                                    {!showMore && item.comments.sort((a, b) => { return new Date(b.time) - new Date(a.time) }).slice(0, 3).map(comment =>  (

                                        <div className="reply">
                                            <div className="d-flex justify-content-start align-items-center ms-5 mb-2">
                                                <img style={{cursor: 'pointer'}} onClick={() => action(comment.id, 'own_post', '')} width="35" height="35" className="rounded-circle me-2" src={getUserProfilePicture(comment.id, 'own_post', '') ? `/api/files/storage/${getUserProfilePicture(comment.id, 'own_post', '')}` : Avatar} alt="" />
                                                <div className="d-flex align-items-center">
                                                    <div className="bgGray rounded p-2">
                                                        <h6 style={{cursor: 'pointer'}} onClick={() => action(comment.id, 'own_post', '')}>{getUserName(comment.id, 'own_post','')}</h6>
                                                        <p>{comment.comment}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                    {!showMore && item.comments.length > 3 && <span style={{ cursor: 'pointer' }} className="ps-3 textHover text-dark"  onClick={() => setShowMore(true)}>view more comments</span>}
                                    {showMore && item.comments.sort((a, b) => { return new Date(b.time) - new Date(a.time) }).map(comment =>  (

                                        <div className="reply">
                                            <div className="d-flex justify-content-start align-items-center ms-5 mb-2">
                                                <img width="35" height="35" className="rounded-circle me-2" src={getUserProfilePicture(comment.id, 'own_post', '') ? `/api/files/storage/${getUserProfilePicture(comment.id, 'own_post', '')}` : Avatar} alt="" />
                                                <div className="d-flex align-items-center">
                                                    <div className="bgGray rounded p-2">
                                                        <h6>{getUserName(comment.id, 'own_post','')}</h6>
                                                        <p>{comment.comment}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                ))}
            </div>
        </>

    );
};

export default NotificationPostPage;