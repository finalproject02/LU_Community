import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LoginForm from '../../components/LoginForm/LoginForm';
import MainSidebar from '../../components/MainSidebar/MainSidebar';
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Login = () => {
    return (
        <div>
            <Header />
            <MainNavbar />
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
            <Footer />
        </div>
    );
};

export default Login;