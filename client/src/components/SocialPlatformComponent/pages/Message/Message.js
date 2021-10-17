import React, {useEffect, useRef, useState} from 'react';
import {Row, Col, Form} from "react-bootstrap";
import SocialNavbar from "../../SocialNavbar/SocialNavbar"
import ConversationList from './ConversationList';
import Conversation from './Conversation';
import {useDispatch, useSelector} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import Avatar from "../../../../images/avatar.jpeg";
import {FaPaperclip} from "react-icons/fa";
import {RealTimeMessage, SendMessage} from "../../../../actions/messages";
import { io } from 'socket.io-client'


const Message = () => {
    const dispatch = useDispatch();
    const [onlineConnection, setOnlineConnection] = useState([])
    const { people } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth);
    const peerConnect = people?.filter(person => currentUser?.peers.includes(person._id));
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [chat, setChat] = useState(false);
    const [otherFile, setOtherFile] = useState();
    const socket = useRef();

    const [text, setText] = useState("");
    const onEnterPress = (event) => {
        if (event.keyCode === 13) {
            dispatch(SendMessage({ message: text, receiver: chat }));
            socket.current.emit('sendMessage' , {
                sender: currentUser?._id,
                receiver: chat,
                message: text,
                createdAt: Date.now()
            })
            setText('')
        }
    };

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on('getMessage', (data) => {
              dispatch(RealTimeMessage(data))

        })
    }, [])

    useEffect(() => {
        socket.current.emit('currentUser', currentUser?._id);
        socket.current.on('getUser', (users) => {
            setOnlineConnection(currentUser?.connection.filter(con => users.some((u) => u.userId === con) ))
        });

    }, [])
    return (
        <div className="overflow-hidden">
            <SocialNavbar />
            <div className="mt-2">
                <Row>
                    <Col md="4 pe-0">
                        <div className="d-flex align-items-center p-2 ms-2 shadow-sm pb-3">
                            <img width="45" className="rounded-circle me-2 cursor" src={currentUser?.profile_picture ? `/api/files/storage/${currentUser?.profile_picture}` : Avatar} alt=".." onClick={handleShow} />

                            <Form className="w-100">
                                <Form.Control type="search" placeholder="Search" />
                            </Form>
                        </div>
                        <ProfileInfo show={show} handleClose={handleClose} />
                        {peerConnect.map(connect => (
                            <div onClick={() => setChat(connect._id)}>
                                <ConversationList peerConnect={connect}/>
                            </div>
                        ))}
                    </Col>
                    <Col md="8" className="shadow border-end overFlowY aside ps-0 ms-0 d-none d-md-block">
                        {chat ? (
                            <>
                            <div>
                                <Conversation  currentPeer={chat}/>
                                <div className="position-relative">
                                    <div className="chatBox">
                                        <div className="searchContainer d-flex align-items-center w-100">
                                            <label htmlFor="otherFile">
                                                <FaPaperclip className="me-2 ms-2 fs-5" />
                                                <Form.Control onChange={(e) => setOtherFile(e.target.files[0])} accept="file/*" id="otherFile" type="file" className="d-none" ></Form.Control>
                                            </label>
                                            <Form.Control type="text" className="w-100"
                                                          placeholder="Type a message"
                                                          value={text}
                                                          onKeyDown={onEnterPress}
                                                          onChange={(e) => setText(e.target.value)}
                                            />

                                        </div>
                                    </div>
                                </div>
                            </div>

                            </>

                        ): (
                            <></>
                        )}
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Message;