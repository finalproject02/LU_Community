import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Post from '../Post/Post';
import PostBox from '../PostBox/PostBox';
import PostCard from '../PostCard/PostCard';
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SocialHome;