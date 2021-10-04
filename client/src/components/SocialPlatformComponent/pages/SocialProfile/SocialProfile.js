import React from 'react';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';
import ProfileCard from '../../ProfileCard/ProfileCard';
import { useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import Loading from "../../../../services/Loading";

const SocialProfile = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    return (
        isAuthenticated ?
            (
                <div>
                    <SocialNavbar />
                    <ProfileCard />
                </div>
            ) :
            (
                <>
                    <Loading color={'black'} type={'spin'} />
                    <h5>Please Login first</h5>
                </>
            )

    );
};

export default SocialProfile;