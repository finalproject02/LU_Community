import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';
import Post from '../../Post/Post';
import Suggestions from '../../Suggestions/Suggestions';
import Online from '../../Online/Online';
import HomeSmProfile from '../../HomeSmProfile/HomeSmProfile';
import { useSelector } from "react-redux";
import Loading from "../../../../services/Loading";

const SocialHome = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const { posts } = useSelector(state => state.posts);
    const { currentUser } = useSelector(state => state.auth);
    const currentUserPost = posts.filter(currentPost => currentUser?.connection.includes(currentPost.creator_id) || currentPost.creator_id === currentUser?._id)

    return (
        <>
            <div>
                <SocialNavbar />
                <Container>
                    <Row className="mt-4">
                        <Col md="8">
                            <Post posts={currentUserPost} />
                        </Col>
                        <Col md="4">
                            <HomeSmProfile />
                            <Online />
                            <Suggestions />
                        </Col>
                    </Row>
                </Container>
            </div>

            {!isAuthenticated && (
                <>
                    <Loading color={'black'} type={'spin'} />
                    <h5>Please Login first</h5>
                </>
            )}

        </>




    );
};

export default SocialHome;