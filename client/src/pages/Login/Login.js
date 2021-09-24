import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm/LoginForm';
import MainSidebar from '../../components/MainSidebar/MainSidebar';

const Login = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md="8">
                        <LoginForm />
                    </Col>
                    <Col md="4">
                        <MainSidebar />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;