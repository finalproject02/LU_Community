import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ClubCommittee from '../ClubInfo/ClubCommittee';
import ClubInfo from '../ClubInfo/ClubInfo';
import ClubSuggestionsCard from '../ClubSuggestionsCard/ClubSuggestionsCard';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const AboutClub = () => {
    const params = useParams();
    const { id } = params;
    const { currentUser } = useSelector(state => state.auth);
    const { clubs } = useSelector(state => state.clubs)
    const suggestionClub = clubs?.filter(club => (club.creator_id !== currentUser?._id) && (!currentUser?.followings.includes(club._id)) && club._id !== id);
    return (
        <div>
            <Container>
                <Row>
                    <Col md="8">
                        <ClubInfo />
                    </Col>
                    <Col md="4">
                        <ClubSuggestionsCard suggestions={suggestionClub}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutClub;