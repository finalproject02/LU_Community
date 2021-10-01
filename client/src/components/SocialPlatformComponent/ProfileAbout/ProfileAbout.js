import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FaGraduationCap, FaPencilAlt } from 'react-icons/fa';
import AboutModal from './AboutModal';

const ProfileAbout = () => {
    const [show, setShow] = useState(false);
    const [showJob, setShowJob] = useState(false);
    const [showCurrentTown, setShowCurrentTown] = useState(false);
    const [showHomeTown, setShowHomeTown] = useState(false);
    const [showMobile, setShowMobile] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [showWebsite, setShowWebsite] = useState(false);
    const [showBirthday, setShowBirthday] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleJobClose = () => setShowJob(false);
    const handleJobShow = () => setShowJob(true);

    const handleCurrentTownClose = () => setShowCurrentTown(false);
    const handleCurrentTownShow = () => setShowCurrentTown(true);

    const handleHomeTownClose = () => setShowHomeTown(false);
    const handleHomeTownShow = () => setShowHomeTown(true);

    const handleMobileClose = () => setShowMobile(false);
    const handleMobileShow = () => setShowMobile(true);

    const handleEmailClose = () => setShowEmail(false);
    const handleEmailShow = () => setShowEmail(true);

    const handleWebsiteClose = () => setShowWebsite(false);
    const handleWebsiteShow = () => setShowWebsite(true);

    const handleBirthdayClose = () => setShowBirthday(false);
    const handleBirthdayShow = () => setShowBirthday(true);

    const handleLanguageClose = () => setShowLanguage(false);
    const handleLanguageShow = () => setShowLanguage(true);
    return (
        <div>
            <AboutModal show={show} handleClose={handleClose} value={{ first: "School", second: "Department", third: "Field of study" }} />
            <AboutModal show={showJob} handleClose={handleJobClose} value={{ first: "Job", second: "Company", third: "Position" }} />
            <AboutModal showInput={showCurrentTown} handleInputClose={handleCurrentTownClose} value={{ title: "Current Town" }} valueType={"text"} />
            <AboutModal showInput={showHomeTown} handleInputClose={handleHomeTownClose} value={{ title: "Home Town" }} valueType={"text"} />
            <AboutModal showInput={showMobile} handleInputClose={handleMobileClose} value={{ title: "Mobile" }} valueType={"number"} />
            <AboutModal showInput={showEmail} handleInputClose={handleEmailClose} value={{ title: "Email" }} valueType={"text"} />
            <AboutModal showInput={showWebsite} handleInputClose={handleWebsiteClose} value={{ title: "Website" }} valueType={"text"} />
            <AboutModal showInput={showBirthday} handleInputClose={handleBirthdayClose} value={{ title: "Birthday" }} valueType={"text"} />
            <AboutModal showInput={showLanguage} handleInputClose={handleLanguageClose} value={{ title: "Language" }} valueType={"text"} />
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="8">
                        <Card className="w-100">
                            <Card.Body>
                                <Card.Title>About</Card.Title>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add High School</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>Safat Ullah High School</span>
                                        <br />
                                        <span className="ms-4">Science</span>
                                        <br />
                                        <span className="ms-4">2010-2015</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add College</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>Dakshin Surma College</span>
                                        <br />
                                        <span className="ms-4">Science</span>
                                        <br />
                                        <span className="ms-4">2015-2017</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add University</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>Leading University</span>
                                        <br />
                                        <span className="ms-4">Depertment of CSE</span>
                                        <br />
                                        <span className="ms-4">2017-2021</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add Job</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleJobShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>Facebook</span>
                                        <br />
                                        <span className="ms-4">Web developer</span>
                                        <br />
                                        <span className="ms-4">2010-2015</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add Current Town</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleCurrentTownShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>Lives in Sylhet</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add Home Town</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleHomeTownShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>From Sylhet</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add Mobile</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleMobileShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>01797213005</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add Email</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleEmailShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>mdjahed@gmail.com</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add Website</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleWebsiteShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>mdjahed.com</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Birthday</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleBirthdayShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>16-01-1990</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Language</h6>
                                        </div>
                                        <FaPencilAlt onClick={handleLanguageShow} />
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGraduationCap className="me-2" />
                                        <span>Bangla,Hindi,English</span>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProfileAbout;