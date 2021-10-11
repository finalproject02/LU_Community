import React from 'react';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';
import ProfileCard from '../../ProfileCard/ProfileCard';
import 'react-toastify/dist/ReactToastify.css';

const SocialProfile = () => {
    return (
        <div>
           <SocialNavbar />
           <ProfileCard />
        </div>
    );
};

export default SocialProfile;