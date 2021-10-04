import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PhotoCard from '../../PhotoCard/PhotoCard';
import Post from '../../Post/Post';
import Suggestions from '../../Suggestions/Suggestions';
import UserProfileEducation from './UserProfileEducation';
import UserProfileIntro from './UserProfileIntro';
import UserFriendCard from "./UserFrientCard";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const UserProfileHome = () => {
    const { posts } = useSelector(state => state.posts)
    const params = useParams();
    const { id } = params;
    const paramsUserPosts = posts.filter(post => post.creator_id === id)
    return (
        <div>
            <Container>
                <Row>
                    <Col md="8">
                        <Post posts={paramsUserPosts}/>
                    </Col>
                    <Col md="4">
                        <UserProfileIntro />
                        <UserProfileEducation />
                        <PhotoCard photos={paramsUserPosts}/>
                        <UserFriendCard />
                        <Suggestions />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserProfileHome;