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
import path from "path";

const UserProfileHome = ({ setPhoto, setAbout, setConnection, setPost }) => {
    const { posts } = useSelector(state => state.posts)
    const params = useParams();
    const { id } = params;
    const paramsUserPosts = posts?.filter(post => post.owner_id === id);
    const paramsUserPhoto = paramsUserPosts.filter(file => path.extname(file.filename).toLowerCase() === '.jpg' || path.extname(file.filename).toLowerCase() === '.png' || path.extname(file.filename).toLowerCase() === '.jpeg')
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
                        <PhotoCard setPhoto={setPhoto} setAbout={setAbout} setConnection={setConnection} setPost={setPost} photos={paramsUserPhoto}/>
                        <UserFriendCard setPhoto={setPhoto} setAbout={setAbout} setConnection={setConnection} setPost={setPost}/>
                        <Suggestions />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserProfileHome;