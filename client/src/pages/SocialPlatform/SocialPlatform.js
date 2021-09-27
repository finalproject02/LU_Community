import React, {useEffect} from 'react';
import SocialNavbar from '../../components/SocialPlatformComponent/SocialNavbar/SocialNavbar';
import SocialProfile from '../../components/SocialPlatformComponent/SocialProfile/SocialProfile';
import { useDispatch, useSelector } from "react-redux";
import {LoadingCurrentUser} from "../../actions/auth";

const SocialPlatform = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(LoadingCurrentUser())
    })
    return (
        <div>
            <SocialNavbar />
            <SocialProfile />
        </div>
    );
};

export default SocialPlatform;