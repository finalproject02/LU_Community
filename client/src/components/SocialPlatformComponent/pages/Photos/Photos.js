import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Albums from "../../Albums/Albums";
import AllPhotos from '../../AllPhotos/AllPhotos';

const Photos = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Albums />
                </Row>
                <Row>
                    <AllPhotos />
                </Row>
            </Container>
        </div>
    );
};

export default Photos;