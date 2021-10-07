import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ClubSuggestionsCard from '../ClubSuggestionsCard/ClubSuggestionsCard';
import HomeSmProfile from '../HomeSmProfile/HomeSmProfile';
import PhotoCard from '../PhotoCard/PhotoCard';
import Post from '../Post/Post';
import VideoCard from '../VideoCard/VideoCard';
import {useSelector} from "react-redux";

const ClubHome = () => {
    const {posts} = useSelector(state => state.posts)
    return (
        <div>
            <Container>
                <Row>
                    <Col md="8">
                        <Post />
                    </Col>
                    <Col md="4">
                        <HomeSmProfile />
                        <PhotoCard  photos={posts}/>
                        <VideoCard />
                        <ClubSuggestionsCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ClubHome;