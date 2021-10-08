import React from 'react';
import { Row, Col } from "react-bootstrap";
import SocialNavbar from "../../SocialNavbar/SocialNavbar"
import ConversationList from './ConversationList';
import Conversation from './Conversation';

const Message = () => {
    return (
        <div className="overflow-hidden">
            <SocialNavbar />
            <div className="mt-2">
                <Row>
                    <Col md="4 pe-0">
                        <ConversationList />
                    </Col>
                    <Col md="8" className="ps-0 ms-0 d-none d-md-block">
                        <Conversation />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Message;