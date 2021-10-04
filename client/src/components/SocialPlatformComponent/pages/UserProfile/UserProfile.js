import React from 'react';
import UserProfileCard from './UserProfileCard';
import SocialNavbar from "../../SocialNavbar/SocialNavbar.js"
import {useSelector} from "react-redux";
import Loading from "../../../../services/Loading";


const UserProfile = () => {
    const { isAuthenticated } = useSelector(state => state.auth)
    return (
        isAuthenticated ?
            (
                <div>
                    <SocialNavbar />
                    <UserProfileCard />
                </div>
            ) :
            (
                <>
                    <Loading color={'black'} type={'spin'}/>
                    <h5>Please Login first</h5>
                </>
            )
    );
};

export default UserProfile;