import React, { Component, useState, createRef, useEffect } from "react";
import { FaBan, FaBellSlash, FaFile, FaHistory, FaImage, FaLink, FaTrashAlt } from 'react-icons/fa';
import { Modal } from 'react-bootstrap';
import "./ChatContent.css";
import ChatItem from "./ChatItem";
import { FaPaperclip, FaPaperPlane } from "react-icons/fa";
const ChatContent = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // messagesEndRef = createRef(null);
    const chatItms = [
        {
            key: 1,
            image:
                "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
            type: "",
            msg: "Hi Tim, How are you?",
        },
        {
            key: 2,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "I am fine.",
        },
        {
            key: 3,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "What about you?",
        },
        {
            key: 4,
            image:
                "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
            type: "",
            msg: "Awesome these days.",
        },
        {
            key: 5,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "Finally. What's the plan?",
        },
        {
            key: 6,
            image:
                "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
            type: "",
            msg: "what plan mate?",
        },
        {
            key: 7,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "I'm taliking about the tutorial",
        },
    ];

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         chat: this.chatItms,
    //         msg: "",
    //     };
    // }

    // scrollToBottom = () => {
    //     this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    // };
    // componentDidMount()
    //  {
    //     window.addEventListener("keydown", (e) => {
    //         if (e.keyCode == 13) {
    //             if (this.state.msg != "") {
    //                 this.chatItms.push({
    //                     key: 1,
    //                     type: "",
    //                     msg: this.state.msg,
    //                     image:
    //                         "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
    //                 });
    //                 this.setState({ chat: [...this.chatItms] });
    //                 this.scrollToBottom();
    //                 this.setState({ msg: "" });
    //             }
    //         }
    //     });
    //     this.scrollToBottom();
    // }
    // onStateChange = (e) => {
    //     this.setState({ msg: e.target.value });
    // };

    return (
        <div className="main__chatcontent">
            <div className="content__header">
                <div className="blocks">
                    <div className="current-chatting-user">
                        <div className="avatar">
                            <div className="avatar-img cursor" onClick={handleShow}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU" alt="#" />
                            </div>
                            {/* <span className={`isOnline ${props.isOnline}`}></span> */}
                        </div>
                        <p>Tim Hover</p>
                    </div>
                </div>

                <div className="blocks">
                    <div className="settings">
                        <button className="btn-nobg">
                            <i className="fa fa-cog"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="content__body">
                <div className="chat__items">
                    {chatItms.map((itm, index) => {
                        return (
                            <ChatItem
                                animationDelay={index + 2}
                                key={itm.key}
                                user={itm.type ? itm.type : "me"}
                                msg={itm.msg}
                                image={itm.image}
                            />
                        );
                    })}
                    {/*<div ref={this.messagesEndRef} />*/}
                </div>
            </div>
            <div className="content__footer">
                <div className="sendNewMessage">
                    <button className="addFiles">
                        <FaPaperclip />
                    </button>
                    <input
                        type="text"
                        placeholder="Type a message here"
                    // onChange={this.onStateChange}
                    // value={this.state.msg}
                    />
                    <button className="btnSendMsg" id="sendMsgBtn">
                        <FaPaperPlane />
                    </button>
                </div>
            </div>
            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>User Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-start align-items-center mb-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU" alt="" width="52" height="52" className="rounded-circle me-2" />
                        <div className="d-flex align-items-center">
                            <div>
                                <h6 className="mb-0">Md Jahed Miah</h6>
                                <small>Last seen at 5:10 pm</small>
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="d-flex align-items-center cardHover px-2 py-2 rounded-3">
                            <FaImage className="me-2" />
                            Photo 38
                        </div>
                        <div className="d-flex align-items-center cardHover px-2 py-2 rounded-3">
                            <FaFile className="me-2" />
                            File 38
                        </div>
                        <div className="d-flex align-items-center cardHover px-2 py-2 rounded-3">
                            <FaLink className="me-2" />
                            Link 38
                        </div>
                    </div>
                    <div className="d-flex justify-content-between px-4 cardHover py-2 rounded-3">
                        Notification
                        <FaBellSlash className="fs-5" />
                    </div>
                    <div className="d-flex justify-content-between px-4 cardHover py-2 rounded-3">
                        Clear History
                        <FaHistory className="fs-5" />
                    </div>
                    <div className="d-flex justify-content-between px-4 cardHover py-2 rounded-3">
                        Delete Chat
                        <FaTrashAlt className="fs-5" />
                    </div>
                    <div className="mb-4 d-flex justify-content-between px-4 cardHover py-2 rounded-3">
                        Block User
                        <FaBan className="fs-5" />
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}
export default ChatContent;
