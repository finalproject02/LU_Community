import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';
import Post from '../../Post/Post';
import Suggestions from '../../Suggestions/Suggestions';
import Online from '../../Online/Online';
import HomeSmProfile from '../../HomeSmProfile/HomeSmProfile';
import { useSelector } from "react-redux";

const SocialHome = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const { posts } = useSelector(state => state.posts);
    const { groups } = useSelector(state => state.groups)

    const { currentUser } = useSelector(state => state.auth);
    const groupInfo = groups?.filter(group => group.creator_id === currentUser?._id );
    const groupOwner = groupInfo.map(gr => gr._id).toString();
    const currentUserPost = posts.filter(currentPost => (currentUser?.connection.includes(currentPost.owner_id) && currentPost.owner_position === 'own_post') || currentPost.owner_id === currentUser?._id || currentUser?.followings.includes(currentPost.post_to) || currentUser?.memberships.includes(currentPost.post_to) || currentPost.post_to === groupOwner)

    return (
        <>
            <div>
                <SocialNavbar />
                <Container>
                    <Row className="mt-4">
                        <Col md="8">
                            <Post details={currentUser} posts={currentUserPost} />
                        </Col>
                        <Col md="4">
                            <HomeSmProfile />
                            <Online />
                            <Suggestions />
                        </Col>
                    </Row>
                </Container>
            </div>


        </>




    );
};

export default SocialHome;