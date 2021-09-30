import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ClubCommittee from '../ClubInfo/ClubCommittee';
import ClubInfo from '../ClubInfo/ClubInfo';
import ClubSuggestionsCard from '../ClubSuggestionsCard/ClubSuggestionsCard';

const AboutClub = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="8">
                        <ClubInfo />
                    </Col>
                    <Col md="4">
                        <ClubCommittee />
                        <ClubSuggestionsCard />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutClub;