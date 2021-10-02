import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FriendCard from '../../FriendCard/FriendCard';
import PhotoCard from '../../PhotoCard/PhotoCard';
import Post from '../../Post/Post';
import ProfileEducation from '../../ProfileEducation/ProfileEducation';
import ProfileIntro from '../../ProfileIntro/ProfileIntro';
import Suggestions from '../../Suggestions/Suggestions';
import {useSelector} from "react-redux";

const ProfileHome = () => {
    const {posts} = useSelector(state => state.posts);
    return (
        <div>
            <Container>
                <Row>
                    <Col md="8">
                        <Post posts={posts}/>
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

export default ProfileHome;