import React, {Component, useState, createRef, useEffect, useRef} from "react";

import "./ChatContent.css";
import Avatar from "../ChatList/Avatar";
import ChatItem from "./ChatItem";
import { FaPaperclip, FaPaperPlane, FaRegPaperPlane } from "react-icons/fa";

export default function ChatContent(){
    const messagesEndRef = useRef(null);
    const chatItems = [
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
            msg: "I'm talking about the tutorial",
        },
    ];

    const [chat, setChat] = useState(chatItems);
    const [msg, setMsg] = useState("")

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const handleKeyDown = (e) => {
       if (e.keyCode === 13) {
           if (msg !== "") {
               chatItems.push({
                   key: 1,
                   type: "",
                   msg: msg,
                   image:
                       "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
               });

               setMsg("")
               setChat(chatItems)
           }
           scrollToBottom();
       }
    }

    useEffect(() => {

        scrollToBottom();
    }, [])
    const onStateChange = (e) => {
        setMsg(e.target.value);
    };


    return (
        <div className="main__chatcontent">
            <div className="content__header">
                <div className="blocks">
                    <div className="current-chatting-user">
                        <Avatar
                            isOnline="active"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
                        />
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
                    {chat.map((itm, index) => {
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
                    <div ref={messagesEndRef} />
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
                        onChange={onStateChange}
                        value={msg}
                        onKeyDown={(e) =>handleKeyDown(e)}
                    />
                    <button className="btnSendMsg" id="sendMsgBtn">
                        <FaPaperPlane />
                    </button>
                </div>
            </div>
        </div>
    );

}