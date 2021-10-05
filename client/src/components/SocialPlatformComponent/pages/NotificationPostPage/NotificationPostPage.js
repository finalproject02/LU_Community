import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SocialNavbar from "../../SocialNavbar/SocialNavbar";
import PostCard from "../../PostCard/PostCard";

const NotificationPostPage = () => {
    return (
        <div>
            <div>
                <SocialNavbar />
            </div>
            <div className="mt-4">
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col md="8">
                            <PostCard />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default NotificationPostPage;