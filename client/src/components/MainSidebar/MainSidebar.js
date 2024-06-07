import React from 'react';
import AdmissionGoingOn from '../AdmissionGoingOn/AdmissionGoingOn';
import HomeSideCard from '../HomeSideCard/HomeSideCard';
import HomeSideMenu from '../HomeSideMenu/HomeSideMenu';
import NoticeBoard from '../NoticeBoard/NoticeBoard';
import OfficeOrder from '../OfficeOrder/OfficeOrder';
import SocialMediaCard from '../SocialMediaCard/SocialMediaCard';

const MainSidebar = () => {
    return (
        <div>
            <AdmissionGoingOn />
            <HomeSideCard />
            <NoticeBoard />
            <OfficeOrder />
            <SocialMediaCard />
            <HomeSideMenu />
        </div>
    );
};

export default MainSidebar;