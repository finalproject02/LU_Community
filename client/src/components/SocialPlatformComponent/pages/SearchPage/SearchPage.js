import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';
import SearchClub from './SearchClub';
import SearchGroup from './SearchGroup';
import SearchPeople from './SearchPeople';
import SearchPost from './SearchPost';

const SearchPage = () => {
    return (
        <div>
            <SocialNavbar />
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="8">
                        <h3 className="mt-4">Search Results</h3>
                        <hr />
                        <SearchPeople />
                        <SearchPost />
                        <SearchClub />
                        <SearchGroup />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SearchPage;