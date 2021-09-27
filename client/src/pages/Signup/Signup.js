import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MainSidebar from '../../components/MainSidebar/MainSidebar';
import SignupForm from '../../components/SignupForm/SignupForm';

const Signup = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="8">
                        <SignupForm />
                    </Col>
                    <Col md="4">
                        <MainSidebar />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Signup;