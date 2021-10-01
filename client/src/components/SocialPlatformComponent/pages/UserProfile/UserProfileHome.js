import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FriendCard from '../../FriendCard/FriendCard';
import PhotoCard from '../../PhotoCard/PhotoCard';
import Post from '../../Post/Post';
import Suggestions from '../../Suggestions/Suggestions';
import UserProfileEducation from './UserProfileEducation';
import UserProfileIntro from './UserProfileIntro';

const UserProfileHome = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="8">
                        <Post />
                    </Col>
                    <Col md="4">
                        <UserProfileIntro />
                        <UserProfileEducation />
                        <PhotoCard />
                        <FriendCard />
                        <Suggestions />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserProfileHome;