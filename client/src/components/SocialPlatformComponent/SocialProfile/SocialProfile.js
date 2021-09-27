import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FriendCard from '../FriendCard/FriendCard.js';
import PhotoCard from '../PhotoCard/PhotoCard.js';
import Post from '../Post/Post.js';
import ProfileCard from "../ProfileCard/ProfileCard.js";
import ProfileEducation from '../ProfileEducation/ProfileEducation.js';
import ProfileIntro from '../ProfileIntro/ProfileIntro.js';
import Suggestions from '../Suggestions/Suggestions.js';
import SocialNavbar from '../../../components/SocialPlatformComponent/SocialNavbar/SocialNavbar';

const SocialProfile = () => {
    return (
        <div>
            <SocialNavbar />
            <ProfileCard />
            <Container>
                <Row>
                    <Col md="8">
                        <Post />
                    </Col>
                    <Col md="4">
                        <ProfileIntro />
                        <ProfileEducation />
                        <PhotoCard />
                        <FriendCard />
                        <Suggestions />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SocialProfile;