import React, {useEffect, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';
import ProfileCard from '../../ProfileCard/ProfileCard';
import Post from '../../Post/Post';
import ProfileIntro from '../../ProfileIntro/ProfileIntro';
import ProfileEducation from '../../ProfileEducation/ProfileEducation';
import PhotoCard from '../../PhotoCard/PhotoCard';
import FriendCard from '../../FriendCard/FriendCard';
import Suggestions from '../../Suggestions/Suggestions';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import decode from 'jwt-decode';
import 'react-toastify/dist/ReactToastify.css'

const SocialProfile = () => {
    const history = useHistory();
    const {token} = useSelector(state => state.auth);
    const {posts} = useSelector(state => state.posts);
    console.log(posts)

    useEffect(() => {
        if (token) {
            const tokenDecoded = decode(token);
            if (tokenDecoded.exp * 1000 < new Date().getTime()) return  history.push('/')
        }
    }, [token]);


    return (
        <div>
            {token ? (
                <>
                    <SocialNavbar />
                    <ProfileCard />
                    <Container>
                        <Row>
                            <Col md="8">
                                <Post posts={posts}/>
                            </Col>
                            <Col md="4">
                                <ProfileIntro />
                                <ProfileEducation />
                                <PhotoCard />
                                <FriendCard />
                                <Suggestions />
                            </Col>
                        </Row>
                    </Container>
                </>
            ) :  history.push('/')
            }
        </div>
    );
};

export default SocialProfile;