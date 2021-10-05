import React, {useEffect, useState} from 'react';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';
import ProfileCard from '../../ProfileCard/ProfileCard';
import {useSelector} from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../../../services/Loading";

const SocialProfile = () => {
    const {isAuthenticated} = useSelector(state => state.auth);
    return (
          <>
              <div>
                  <SocialNavbar />
                  <ProfileCard />
              </div>

          </>


    );
};

export default SocialProfile;