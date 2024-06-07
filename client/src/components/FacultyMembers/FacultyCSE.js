import React from 'react';
import MainNavbar from '../MainNavbar/MainNavbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainSidebar from "../MainSidebar/MainSidebar";
import { Card, Col, Container, Row } from 'react-bootstrap';
import prof from "../../images/Prof.jpg";
import { Link } from 'react-router-dom';
import { FaEnvelopeOpen, FaPhone, FaUser } from "react-icons/fa";

const FacultyCSE = () => {
    return (
        <div>
            <Header />
            <MainNavbar />
            <Container>
                <Row>
                    <Col md="8" className="mt-5">
                        <Row>
                            <Col md="6" className="d-flex align-items-stretch flex-column my-2">
                                <Card className="d-flex flex-fill">
                                    <Card.Body className="pt-0">
                                        <Row className="pt-3 ps-3">
                                            <div className="d-flex align-items-center justify-content-between mb-0" >
                                                <div className="mb-0">
                                                    <h2 className="lead"><b>Dr.AS.Sikder</b></h2>
                                                    <h6 className="textPrimary">Professor
                                                    </h6>
                                                </div>
                                                <div className="text-center mt-2">
                                                    <img src={prof} alt="user-avatar" className="rounded-circle img-fluid" width="100" height="100" />
                                                </div>
                                            </div>
                                            <div className="mb-2 mt-0">
                                                <div className="mb-2 mt-0">
                                                    <FaEnvelopeOpen className="mb-1" /> <span className="text-lead">Email: <br /></span>faruq_cse @lus.ac.bd
                                                </div>
                                                <div>
                                                    <FaPhone className="mb-1" />
                                                    <span className="text-lead"> Cell-Phone: <br /> </span>01757584584</div>
                                            </div>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="text-center bgSecondary rounded-3">
                                            <Link to="/teacherDetails" className="btn btn-sm w-100 text-white">
                                                <FaUser className="mb-1" /> View Profile
                                            </Link>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col md="6" className="d-flex align-items-stretch flex-column my-2">
                                <Card className="d-flex flex-fill">
                                    <Card.Body className="pt-0">
                                        <Row className="pt-3 ps-3">
                                            <div className="d-flex align-items-center justify-content-between" >
                                                <div>
                                                    <h2 className="lead"><b>Dr.AS.Sikder</b></h2>
                                                    <h6 className="textPrimary">Professor
                                                    </h6>
                                                </div>
                                                <div className="text-center mt-2">
                                                    <img src={prof} alt="user-avatar" className="rounded-circle img-fluid" width="100" height="100" />
                                                </div>
                                            </div>
                                            <div className="mb-2">
                                                <div className="mb-2">
                                                    <FaEnvelopeOpen className="mb-1" /> <span className="text-lead">Email: <br /></span>faruq_cse @lus.ac.bd
                                                </div>
                                                <div>
                                                    <FaPhone className="mb-1" />
                                                    <span className="text-lead"> Cell-Phone: <br /> </span>01757584584</div>
                                            </div>
                                        </Row>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="text-center bgSecondary rounded-3">
                                            <Link to="/teacherDetails" className="btn btn-sm w-100 text-white">
                                                <FaUser className="mb-1" /> View Profile
                                            </Link>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
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

export default FacultyCSE;