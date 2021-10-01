import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Notification from '../../Notification/Notification';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';

const AllNotification = () => {
    return (
        <div>
            <div>
                <SocialNavbar />
            </div>
            <div>
                <Container>
                    <Row>
                        <div className="d-flex justify-content-center">
                            <Col md="8">
                                <Notification />
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AllNotification;