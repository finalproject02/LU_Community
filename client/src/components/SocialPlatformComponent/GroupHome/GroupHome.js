import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllGroup from '../AllGroup/AllGroup';
import PhotoCard from '../PhotoCard/PhotoCard';
import Post from '../Post/Post';
import VideoCard from '../VideoCard/VideoCard';
import GroupIntro from './GroupIntro';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const GroupHome = ({setPhoto, setPost}) => {
    const params = useParams()
    const { id } = params
    const {posts} = useSelector(state => state.posts);
    const { groups } = useSelector(state => state.groups);
    const { currentUser } = useSelector(state => state.auth);
    const groupPost = posts?.filter(post => post.post_to === id)
    currentUser.type = 'group';



    const suggestionGroup = groups?.filter(group => (group.creator_id !== currentUser?._id) && (!currentUser?.memberships.includes(group._id) && (!currentUser?.connecting.includes(group._id)) && group.privacy === 'public'));
    return (
        <div>
            <Container>
                <Row>
                    <Col md="8">
                        <Post details={currentUser} posts={groupPost}/>
                    </Col>
                    <Col md="4">
                        <GroupIntro />
                        <PhotoCard photos={posts} setPost={setPost} setPhoto={setPhoto}/>
                        <VideoCard />
                        <AllGroup suggestionGroup={suggestionGroup}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GroupHome;