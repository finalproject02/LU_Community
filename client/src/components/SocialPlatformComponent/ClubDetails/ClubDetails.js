import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AboutClub from '../AboutClub/AboutClub';
import ClubProfile from '../ClubProfile/ClubProfile';
import ClubSuggestionsCard from '../ClubSuggestionsCard/ClubSuggestionsCard';
import HomeSmProfile from '../HomeSmProfile/HomeSmProfile';
import PhotoCard from '../PhotoCard/PhotoCard';
import Post from '../Post/Post';
import SocialNavbar from '../SocialNavbar/SocialNavbar';
import VideoCard from '../VideoCard/VideoCard';
import ClubEvents from '../ClubEvents/ClubEvents.js';
import Photos from '../pages/Photos/Photos';
import AllVideos from '../AllVideos/AllVideos';
import ClubHome from '../ClubHome/ClubHome';
import AllPhotos from '../AllPhotos/AllPhotos';

const ClubDetails = () => {
    return (
        <div>
            <SocialNavbar />
            <ClubProfile />
        </div>
    );
};

export default ClubDetails;