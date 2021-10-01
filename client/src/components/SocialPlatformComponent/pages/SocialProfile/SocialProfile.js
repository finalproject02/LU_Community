import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';
import ProfileCard from '../../ProfileCard/ProfileCard';
import Post from '../../Post/Post';
import ProfileIntro from '../../ProfileIntro/ProfileIntro';
import ProfileEducation from '../../ProfileEducation/ProfileEducation';
import PhotoCard from '../../PhotoCard/PhotoCard';
import FriendCard from '../../FriendCard/FriendCard';
import Suggestions from '../../Suggestions/Suggestions';


const SocialProfile = () => {
    return (
        <div>
            <SocialNavbar />
            <ProfileCard />
        </div>
    );
};

export default SocialProfile;