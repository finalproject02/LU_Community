import React, { useState } from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import { FaEllipsisV, FaRegComment, FaRegHeart,  FaShare } from 'react-icons/fa';
import Avatar from "../../../images/avatar.jpeg";
import "./PostCard.css";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { DeletePosts, LikeAndDislike } from "../../../actions/posts";
import {useHistory} from "react-router-dom";

const PostCard = ({ posts }) => {
    const history = useHistory()
    const dispatch = useDispatch();
    const { currentUser } = useSelector(state => state.auth);
    const { people } = useSelector(state => state.people);
    const { clubs } = useSelector(state => state.clubs);
    const { groups } = useSelector(state => state.groups);


    const [open, setOpen] = useState(false);

    const getUserName = (id, owner_position, post_to) => {
        if (owner_position === 'club_post') {
            const club = clubs?.filter(cl => cl._id === post_to);
            return club.map(u => u.name)
        } else if (owner_position.startsWith('Group')) {
            const group = groups?.filter(usr => usr._id === post_to);
            return group.map(u => u.name)
        } else {
            const person = people?.filter(usr => usr._id === id);
            return person.map(u => u.name)
        }

    }

    const action = (owner_id , owner_position, post_to) => {
        if (owner_position === 'club_post') {
            return history.push(`/clubDetails/${post_to}`)
        } else if (owner_position.startsWith('Group')) {
            return history.push(`/group/${post_to}`)
        } else  {
            return history.push(`/profile/${owner_id}`)
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
    return (
        <div className="mb-4">
            {posts?.map(post => (
                <Card className="w-100 rounded-3 mb-4">
                    <Card.Body>
                        <Card.Text as="div" className="d-flex justify-content-between align-items-center ps-3">
                            <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                <img src={getUserProfilePicture(post.owner_id, post.owner_position, post.post_to) !== null ? `/api/files/storage/${getUserProfilePicture(post.owner_id, post.owner_position, post.post_to)}` : Avatar} alt="" width="52" height="52" className="rounded-circle me-2" />
                                <div className="d-flex align-items-center">

                                    <div>

                                        {post.owner_position.startsWith('Group') ? (
                                            post.owner_position === 'Group_admin'? (
                                                <>
                                                    <h6 style={{cursor:'pointer', marginTop: '12px', marginBottom: '-1px'}}   onClick={() => action(post.owner_id, post.owner_position, post.post_to)}>{getUserName(post.owner_id, post.owner_position, post.post_to)}</h6>
                                                    <small style={{marginTop: '-1px'}}>{moment(post.createdAt).fromNow()}</small>
                                                    <p style={{cursor: 'pointer', marginTop: '-1px'}} onClick={() => action(post.owner_id, 'user_post')}>Admin post</p>
                                                </>
                                            ) : <>
                                                <h6 style={{cursor:'pointer', marginTop: '12px', marginBottom: '-1px'}}   onClick={() => action(post.owner_id, post.owner_position, post.post_to)}>{getUserName(post.owner_id, post.owner_position, post.post_to)}</h6>
                                                <small style={{marginTop: '-1px'}}>{moment(post.createdAt).fromNow()}</small>
                                                <p style={{cursor: 'pointer', marginTop: '-1px'}} onClick={() => action(post.owner_id, 'user_post')}>{getUserName(post.owner_id, 'user_post')}</p>
                                            </>
                                        ) : (
                                            <>
                                                <h6 style={{cursor:'pointer'}}   onClick={() => action(post.owner_id, post.owner_position, post.post_to)}>{getUserName(post.owner_id, post.owner_position, post.post_to)}</h6>
                                                <small>{moment(post.createdAt).fromNow()}</small>
                                            </>
                                        )}
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
                            <img className="w-100 "
                                src={`/api/files/storage/${post.filename}`} alt=".." onClick={() => history.push(`/post/${post._id}`)} style={{cursor: 'pointer'}}/>
                            <video className="w-100 d-none" controls src={`/api/files/storage/${post.filename}`}></video>
                            <iframe className="w-100 d-none" src={`/api/files/storage/${post.filename}`} frameborder="0" title=".." ></iframe>
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
                                    <small className="anchor text-dark textHover pe-3" style={{cursor: 'pointer'}} onClick={() => history.push(`/post/${post._id}`)}><span
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
                                    <p className="ps-2 pt-2 fs-5" onClick={() => history.push(`/post/${post._id}`)}>Comment</p>
                                </div>
                                <div className="d-flex align-items-center cursor">
                                    <FaShare className="fs-5 mb-1" />
                                    <p className="ps-2 pt-2 pe-4 fs-5">Share</p>
                                </div>
                            </div>
                        </Card.Text>
                        <hr className="hr" />
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};
export default PostCard;