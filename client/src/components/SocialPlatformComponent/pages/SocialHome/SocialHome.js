import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';
import Post from '../../Post/Post';
import Suggestions from '../../Suggestions/Suggestions';
import Online from '../../Online/Online';
import HomeSmProfile from '../../HomeSmProfile/HomeSmProfile';

const SocialHome = () => {
    return (
        <div>
            <SocialNavbar />
            <Container className="mt-4">
                <Row>
                    <Col md="8">
                        <Post />
                    </Col>
                    <Col md="4">
                        <HomeSmProfile />
                        <Online />
                        <Suggestions />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SocialHome;