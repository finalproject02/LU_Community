import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Post from '../Post/Post';
import ProfileEducation from '../ProfileEducation/ProfileEducation';
import ProfileIntro from '../ProfileIntro/ProfileIntro';

const SocialHome = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="8">
                        <Post />
                    </Col>
                    <Col md="4">
                        <ProfileIntro />
                        <ProfileEducation />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SocialHome;