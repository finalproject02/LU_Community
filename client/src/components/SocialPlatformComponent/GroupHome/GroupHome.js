import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllGroup from '../AllGroup/AllGroup';
import PhotoCard from '../PhotoCard/PhotoCard';
import Post from '../Post/Post';
import VideoCard from '../VideoCard/VideoCard';
import GroupIntro from './GroupIntro';

const GroupHome = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="8">
                        <Post />
                    </Col>
                    <Col md="4">
                        <GroupIntro />
                        <PhotoCard />
                        <VideoCard />
                        <AllGroup />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GroupHome;