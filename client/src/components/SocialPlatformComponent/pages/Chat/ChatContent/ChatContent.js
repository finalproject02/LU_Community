import React, {useState, useEffect, useRef} from "react";
import "./ChatContent.css";
import Avatar from "../ChatList/Avatar";
import ChatItem from "./ChatItem";
import { FaPaperPlane } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {SendMessage, RealTimeMessage} from "../../../../../actions/messages";
import { io } from 'socket.io-client'

export default function ChatContent(){
    const dispatch = useDispatch();
    const [onlineConnection, setOnlineConnection] = useState([])
    const messagesEndRef = useRef(null);
    const { current_chat, messages } = useSelector(state => state.messages);
    const { people } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth)
    const currentChatUser = people?.filter(user => user._id === current_chat);
    const peerMessages = messages?.filter(conversation => (conversation.sender === current_chat && conversation.receiver === currentUser?._id) || (conversation.receiver === current_chat && conversation.sender === currentUser?._id));
    const [msg, setMsg] = useState("");
    const socket = useRef();

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const handleKeyDown = (e) => {
       if (e.keyCode === 13) {
           if (msg !== "") {
               dispatch(SendMessage({ message: msg, receiver: current_chat }));
               socket.current.emit('sendMessage', {
                   sender: currentUser?._id,
                   receiver: current_chat,
                   message: msg,
                   createdAt: Date.now()
               })
               setMsg("")
               scrollToBottom();
           }
           scrollToBottom();
       }
    }
    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on('getMessage', (data) => {
            dispatch(RealTimeMessage(data))

        })
    }, [])

    useEffect(() => {
        socket.current.emit('currentUser', currentUser?._id);
        socket.current.on('getUser', (users) => {
            setOnlineConnection(currentUser?.connection.filter(con => users.some((u) => u.userId === con)))
        });

    }, [])

    useEffect(() => {

        scrollToBottom();
    }, [])
    useEffect(() => {
        if (peerMessages) {
            scrollToBottom();
        }
        scrollToBottom();
    }, [peerMessages])
    const onStateChange = (e) => {
        setMsg(e.target.value);
    };


    return (
        current_chat !== "" ? (
                <div className="main__chatcontent">
                    <div className="content__header">
                        <div className="blocks">
                            {currentChatUser?.map(usr => (
                                <div className="current-chatting-user">
                                    <Avatar
                                        isOnline="active"
                                        image={usr?.profile_picture}
                                    />
                                    <p>{usr.name}</p>
                                </div>
                            ))}
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
                            {peerMessages.map((itm, index) => {
                                return (
                                    <ChatItem
                                        animationDelay={index + 2}
                                        key={itm.key}
                                        user={itm.sender === currentUser._id ? "" : "other"}
                                        message={itm.message}
                                        id={itm.sender === currentUser?._id ? currentUser._id : current_chat}
                                        createdAt={itm.createdAt}

                                    />
                                );
                            })}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>
                    <div className="content__footer">
                        <div className="sendNewMessage">
                            <input
                                type="text"
                                placeholder="Type a message here"
                                onChange={(e) => onStateChange(e)}
                                value={msg}
                                name={"message"}
                                onKeyDown={(e) =>handleKeyDown(e)}
                            />
                            <button className="btnSendMsg" id="sendMsgBtn">
                                <FaPaperPlane/>
                            </button>
                        </div>
                    </div>
                </div>
            ) : <h6>Please start conversations</h6>
    );

}