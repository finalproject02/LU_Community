import React, {useEffect, useRef, useState} from "react";
import { messagesList } from "./mockData";
import jahed from "../../../../images/Jahed.jpg"
import { Form } from "react-bootstrap";
import { FaVideo, FaEllipsisV, FaPaperclip, FaPhone } from "react-icons/fa";
import "./Message.css";
import FriendModal from "./FriendModal";
import {useSelector} from "react-redux";
import Avatar from "../../../../images/avatar.jpeg";
import moment from "moment";

const Conversation = ({ currentPeer }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { people } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth);
    const { messages } = useSelector(state => state.messages);
    const peerProfile = people?.filter(person => person._id === currentPeer);

    const peerMessages = messages?.filter(conversation => (conversation.sender === currentPeer && conversation.receiver === currentUser?._id) || (conversation.receiver === currentPeer && conversation.sender === currentUser?._id));

    return (
        <div className="chat">
            <div className="d-flex justify-content-between align-items-center profileHeader shadow ">
                {peerProfile.map(profile => (
                    <div className="d-flex profileInfo">
                        <div>
                            <img width="45" className="rounded-circle cursor" src={profile?.profile_picture ? `/api/files/storage/${profile?.profile_picture}` : Avatar} alt=".." onClick={handleShow} />
                            <FriendModal show={show} handleClose={handleClose} />
                        </div>
                        <div>
                            <strong>{profile.name}</strong><br />
                            <small>Last Seen {moment(profile.lastLogin).calendar()}</small>
                        </div>
                    </div>
                ))}
                <div>
                    <FaPhone className="me-3" />
                    <FaVideo className="me-3" />
                    <FaEllipsisV className="me-3" />
                </div>
            </div>
            <div className="messageContainer p-4">
                {peerMessages.sort((a, b) => { return new Date(a.createdAt) - new Date(b.createdAt) }).map(msg => (
                    <>
                        {msg.sender === currentUser?._id ? (
                            <div className="text-start mb-1 d-flex justify-content-end">
                                <div className="bg-info p-2 rounded-3">{msg.message}</div>
                            </div>
                        ) : (
                            <div  className="text-start mb-1 d-flex justify-content-start">
                                <div className="bg-warning p-2 rounded-3">{msg.message}</div>
                            </div>
                        )}



                    </>
                ))}

            </div>
        </div>
    );
};

export default Conversation;