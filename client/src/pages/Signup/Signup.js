import { Col, Container, Row } from 'react-bootstrap';
import MainSidebar from '../../components/MainSidebar/MainSidebar';
import SignupForm from '../../components/SignupForm/SignupForm';
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Signup = () => {
    return (
        <div>
            <Header />
            <MainNavbar />
            <Container>
                <Row>
                    <Col md="8">
                        <SignupForm />
                    </Col>
                    <Col md="4" className="mt-5">
                        <MainSidebar />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Signup;