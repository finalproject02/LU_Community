import React, { useEffect } from 'react';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';
import ProfileCard from '../../ProfileCard/ProfileCard';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import decode from 'jwt-decode';
import 'react-toastify/dist/ReactToastify.css'

const SocialProfile = () => {
    const history = useHistory();
    const { token } = useSelector(state => state.auth);

    useEffect(() => {
        if (token) {
            const tokenDecoded = decode(token);
            if (tokenDecoded.exp * 1000 < new Date().getTime()) return history.push('/')
        }
    }, [token]);


    return (
        <div>
            {token ? (
                <>
                    <SocialNavbar />
                    <ProfileCard />
                </>
            ) : history.push('/')
            }
        </div>
    );
};

export default SocialProfile;