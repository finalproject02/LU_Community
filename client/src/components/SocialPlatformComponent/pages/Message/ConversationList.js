import React from "react";
import { contactList } from "./mockData";
import jahed from "../../../../images/Jahed.jpg"
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const ConversationList = (props) => {
    return (
        <div className="shadow border-end overFlowY aside">
            <div className="d-flex align-items-center p-2 ms-2 shadow-sm pb-3">
                <Link to="/socialProfile">
                    <img width="45" className="rounded-circle me-2 cursor" src={jahed} alt=".." />
                </Link>
                <Form className="w-100">
                    <Form.Control type="search" placeholder="Search" />
                </Form>
            </div>
            {
                contactList.map((userData) => (
                    <ContactComponent userData={userData} setChat={props.setChat} />
                ))
            }
        </div>
    );
};
const ContactComponent = (props) => {
    const { userData, setChat } = props;
    return (
        <>
            <div className="d-flex justify-content-between align-items-center my-1 mb-1 cardHover" onClick={() => setChat(userData)}>
                <div className="d-flex ms-2 p-2">
                    <div>
                        <img width="45" className="rounded-circle me-2 cursor" src={jahed} alt="name" />
                    </div>
                    <div className="mt-0 d">
                        <strong className="mt-0">{userData?.name}</strong><br />
                        <small className="text-muted">{userData?.lastText}</small>
                    </div>
                </div>
                <small className="text-muted p-3">{userData?.lastTextTime}</small>
            </div>
            <hr className="m-0" />
        </>
    );
};

export default ConversationList;