import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PostBox from '../PostBox/PostBox';
import PostCard from '../PostCard/PostCard';

const SocialHome = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="8">
                        <PostBox />
                        <PostCard />
                    </Col>
                    <Col md="4">

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SocialHome;