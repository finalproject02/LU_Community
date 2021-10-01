import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ClubSuggestionsCard from '../ClubSuggestionsCard/ClubSuggestionsCard';
import HomeSmProfile from '../HomeSmProfile/HomeSmProfile';
import PhotoCard from '../PhotoCard/PhotoCard';
import Post from '../Post/Post';
import VideoCard from '../VideoCard/VideoCard';

const ClubHome = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="8">
                        <Post />
                    </Col>
                    <Col md="4">
                        <HomeSmProfile />
                        <PhotoCard />
                        <VideoCard />
                        <ClubSuggestionsCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ClubHome;