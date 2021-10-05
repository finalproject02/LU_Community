import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { FaCommentDots, FaEnvelope, FaGlobe, FaLocationArrow, FaPhone, FaRegClock, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import aboutClubData from './AboutClubData';

const ClubInfo = () => {
    return (
        <div>
            <Card className="bg-light w-100">
                {
                    aboutClubData.map(item => (
                        <Card.Body>
                            <Card.Title className="text-center mb-2 fs-4">{item.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted text-center mb-2">{item.Subtitle}</Card.Subtitle>
                            <Row className="justify-content-center mt-5">
                                <h5 className="mb-2">Our Campus Location</h5>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8322338660364!2d91.80291421498522!3d24.869578851016843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751015addbec3b7%3A0x9e87b7be58b5f67e!2sLeading%20University!5e0!3m2!1sen!2sbd!4v1626438111440!5m2!1sen!2sbd"
                                            width="100%" height="200" loading="lazy" title="campus location"></iframe>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row className="justify-content-center">
                                <h5 className="mb-2">General Information</h5>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <div className="d-flex align-items-center mb-2">
                                            <FaRegHeart />
                                            <Link to="#" className="ps-2 textHover text-dark"><span>{item.following}</span> people following this
                                                including <span>{item.friend}</span> of your friends</Link>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <FaLocationArrow />
                                            <Link to="#" className="ps-2 textHover text-dark"><span>{item.check}</span>people checked in
                                                here</Link>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <FaRegClock />
                                            <Link to="#" className="ps-2 textHover text-dark">Open 9:00 AM - 5:00 PM</Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row className="justify-content-center">
                                <h5 className="mb-2">Additional Contact Info</h5>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <div className="d-flex align-items-center mb-2">
                                            <FaGlobe />
                                            <Link to="#" className="ps-2 textHover text-dark">{item.website}</Link>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <FaPhone />
                                            <Link to="#" className="ps-2 textHover text-dark">{item.phone}</Link>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <FaEnvelope />
                                            <Link to="#" className="ps-2 textHover text-dark">{item.email}</Link>
                                        </div>
                                        <div className="d-flex align-items-center mb-2">
                                            <FaCommentDots />
                                            <Link to="#" className="ps-2 textHover text-dark">Send Message</Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row className="justify-content-center">
                                <h5 className="mb-2">More Info</h5>
                                <Card className="mb-3">
                                    <Card.Body>
                                        <p>{item.about}</p>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Card.Body>
                    ))
                }
            </Card>
        </div>
    );
};

export default ClubInfo;