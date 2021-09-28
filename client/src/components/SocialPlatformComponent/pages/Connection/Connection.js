import React from 'react';
import { Container } from 'react-bootstrap';
import ClubSuggestions from '../../ClubSuggestions/ClubSuggestions';
import NewConnection from '../../NewConnection/NewConnection';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';
import PepoleYouKnow from '../../Suggestions/PepoleYouKnow';

const Connections = () => {
    return (
        <div className="bg-light">
            <SocialNavbar />
            <Container>
                <NewConnection />
                <PepoleYouKnow />
                <ClubSuggestions />
            </Container>
        </div>
    );
};

export default Connections;