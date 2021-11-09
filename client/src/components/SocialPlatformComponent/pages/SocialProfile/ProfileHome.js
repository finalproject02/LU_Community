import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FriendCard from '../../FriendCard/FriendCard';
import PhotoCard from '../../PhotoCard/PhotoCard';
import Post from '../../Post/Post';
import ProfileEducation from '../../ProfileEducation/ProfileEducation';
import ProfileIntro from '../../ProfileIntro/ProfileIntro';
import Suggestions from '../../Suggestions/Suggestions';
import {useSelector} from "react-redux";
import path from "path";

const ProfileHome = ({ setPhoto, setAbout, setConnection, setPost}) => {
    const {posts} = useSelector(state => state.posts);
    const {currentUser} = useSelector(state => state.auth);
    const currentUserPost = posts.filter(currentUserPost => currentUserPost.owner_id === currentUser?._id && currentUserPost.owner_position === 'own_post');
    const currentUserPhotos = currentUserPost.filter(file => path.extname(file.filename).toLowerCase() === '.png' || path.extname(file.filename).toLowerCase() === '.jpeg' || path.extname(file.filename).toLowerCase() === '.jpg')
    return (
        <div>
            <Container>
                <Row>
                    <Col md="8">
                        <Post details={currentUser} posts={currentUserPost}/>
                    </Col>
                    <Col md="4">
                        <ProfileIntro setPost={setPost} setAbout={setAbout} setPhoto={setPhoto} setConnection={setConnection}/>
                        <ProfileEducation/>
                        <PhotoCard setPost={setPost} setAbout={setAbout} setPhoto={setPhoto} setConnection={setConnection} photos={currentUserPhotos}/>
                        <FriendCard setPost={setPost} setAbout={setAbout} setPhoto={setPhoto} setConnection={setConnection}/>
                        <Suggestions />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProfileHome;