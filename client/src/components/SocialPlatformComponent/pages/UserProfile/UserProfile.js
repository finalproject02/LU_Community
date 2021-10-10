import React from 'react';
import UserProfileCard from './UserProfileCard';
import SocialNavbar from "../../SocialNavbar/SocialNavbar.js"
import {useSelector} from "react-redux";
import Loading from "../../../../services/Loading";


const UserProfile = () => {
    return (
          <div>
               <SocialNavbar />
               <UserProfileCard />
          </div>

    );
};

export default UserProfile;