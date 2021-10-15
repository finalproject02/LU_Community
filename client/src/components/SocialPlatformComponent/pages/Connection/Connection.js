import React from 'react';
import { Container } from 'react-bootstrap';
import ClubSuggestions from '../../ClubSuggestions/ClubSuggestions';
import NewConnection from '../../NewConnection/NewConnection';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';
import PepoleYouKnow from '../../Suggestions/PepoleYouKnow';
import {useSelector} from "react-redux";

const Connections = () => {
    const { clubs } = useSelector(state => state.clubs);
    const { currentUser } = useSelector(state => state.auth);

    const clubSuggestion = clubs?.filter(club => (club.creator_id !== currentUser?._id) && (!currentUser?.followings.includes(club._id)));
    return (
        <div className="bg-light">
            <SocialNavbar />
            <Container>
                <NewConnection />
                <PepoleYouKnow />
                <ClubSuggestions clubSuggestions={clubSuggestion}/>
            </Container>
        </div>
    );
};

export default Connections;