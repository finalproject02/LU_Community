import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ClubSuggestionsCard from '../ClubSuggestionsCard/ClubSuggestionsCard';
import PhotoCard from '../PhotoCard/PhotoCard';
import PostBox from "../PostBox/PostBox";
import VideoCard from '../VideoCard/VideoCard';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import PostCard from "../PostCard/PostCard";

const ClubHome = () => {
    const { clubs } = useSelector(state => state.clubs);
    const { currentUser } = useSelector(state => state.auth);
    const params = useParams();
    const { id } = params;
    const {posts} = useSelector(state => state.posts);
    const clubPost = posts?.filter(post => post.post_to === id)
    const paramClub = clubs?.filter(club => club._id === id)
    return (
        <div>
            <Container>
                <Row>
                    <Col md="8">
                        {paramClub.map(club => (
                            club.creator_id === currentUser?._id && (
                                <PostBox details={club} />
                            )

                        ))}

                        <PostCard posts={clubPost}/>
                    </Col>
                    <Col md="4">
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