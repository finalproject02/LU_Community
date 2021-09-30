import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutClub from '../AboutClub/AboutClub';
import ClubProfile from '../ClubProfile/ClubProfile';
import clubSuggestions from '../ClubSuggestions/ClubSuggestionsData';
import ClubSuggestionsCard from '../ClubSuggestionsCard/ClubSuggestionsCard';
import HomeSmProfile from '../HomeSmProfile/HomeSmProfile';
import PhotoCard from '../PhotoCard/PhotoCard';
import Post from '../Post/Post';
import SocialNavbar from '../SocialNavbar/SocialNavbar';
import VideoCard from '../VideoCard/VideoCard';
import ClubEvents from '../ClubEvents/ClubEvents.js';
import Photos from '../pages/Photos/Photos';

const ClubDetails = () => {

    return (
        <div>
            <SocialNavbar />
            <ClubProfile />
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
                    <AboutClub />
                    <ClubEvents />
                    <Photos />
                </Container>
            </div>
        </div>
    );
};

export default ClubDetails;