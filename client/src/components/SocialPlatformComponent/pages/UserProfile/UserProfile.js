import React from 'react';
import UserProfileCard from './UserProfileCard';
import SocialNavbar from "../../SocialNavbar/SocialNavbar.js"


const UserProfile = () => {
    return (
        <div>
            <SocialNavbar />
            <UserProfileCard />
        </div>
    );
};

export default UserProfile;