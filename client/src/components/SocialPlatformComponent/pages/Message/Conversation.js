import React, { useState } from "react";
import { messagesList } from "./mockData";
import jahed from "../../../../images/Jahed.jpg"
import { Form } from "react-bootstrap";
import { FaVideo, FaEllipsisV, FaPaperclip, FaPhone } from "react-icons/fa";
import "./Message.css";
import FriendModal from "./FriendModal";

const Conversation = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [otherFile, setOtherFile] = useState();


    const [text, setText] = useState("");
    const [messageList, setMessageList] = useState(messagesList);
    const onEnterPress = (event) => {
        if (event.key === "Enter") {
            const messages = [...messageList];
            messages.push({
                id: 0,
                messageType: "TEXT",
                text,
                senderID: 0,
                addedOn: "12:02 PM",
            });
            setMessageList(messages);
            setText("");
        }
    };
    return (
        <div className="chat">
            <div className="d-flex justify-content-between align-items-center profileHeader shadow ">
                <div className="d-flex profileInfo">
                    <div>
                        <img width="45" className="rounded-circle cursor" src={jahed} alt=".." onClick={handleShow} />
                        <FriendModal show={show} handleClose={handleClose} />
                    </div>
                    <div>
                        <strong>Md Jahed Miah </strong><br />
                        <small>Last seen at 5:10 pm</small>
                    </div>
                </div>
                <div>
                    <FaPhone className="me-3" />
                    <FaVideo className="me-3" />
                    <FaEllipsisV className="me-3" />
                </div>
            </div>
            <div className="messageContainer p-4">
                <div className="text-start mb-1 d-flex justify-content-end">
                    <div className="bg-info p-2 rounded-3">Hey man!</div>
                </div>
                <div className="text-start mb-1 d-flex justify-content-start">
                    <div className="bg-warning p-2 rounded-3">Hey, whats up?</div>
                </div>
                <div className="text-start mb-1 d-flex justify-content-end">
                    <div className="bg-info p-2 rounded-3">I am good.What about you?</div>
                </div>
                <div className="text-start mb-1 d-flex justify-content-start">
                    <div className="bg-warning p-2 rounded-3">I am also good.</div>
                </div>
                {
                    otherFile && otherFile.type.startsWith("image") && (<img width="50%" className="w-100 img-fluid img-thumbnail mt-1" src={URL.createObjectURL(otherFile)} alt="name" />)
                }
                {
                    otherFile && otherFile.type.startsWith("video") && (<video width="150" height="100" className="p-1 shadow-sm" src={URL.createObjectURL(otherFile)} width="320" height="240" autoPlay />)
                }
            </div>
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
    );
};

export default Conversation;