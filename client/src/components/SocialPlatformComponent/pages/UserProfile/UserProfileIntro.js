import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBlog, FaBook, FaGraduationCap, FaHome, FaPhone, FaRegComment, FaRegEdit } from 'react-icons/fa';

const UserProfileIntro = () => {
    return (
        <div>
            <Card className="mb-4 rounded-3">
                <Card.Body>
                    <Card.Text as="div" className="d-flex align-items-center">
                        <h5 className="card-title pt-2">Intro</h5>
                    </Card.Text>
                    <hr />
                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaBook className="fs-5" />
                        <p className="card-text ps-2 fs-6">Full stack web developer
                        </p>
                    </Card.Text>
                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaGraduationCap className="fs-1 me-2" />
                        <p className="card-text fs-6">Studying at Computer Science & Engineering at Leading
                            University, Sylhet</p>
                    </Card.Text>
                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaBook className="fs-5" />
                        <p className="card-text ps-2 fs-6"><span>46</span>th batch</p>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaHome className="fs-5" />
                        <p className="card-text ps-2 fs-6">Lives in Sylhet</p>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaHome className="fs-5" />
                        <p className="card-text ps-2 fs-6">From Sylhet</p>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaBlog className="fs-5" />
                        <p className="card-text ps-2 fs-6"><span>25</span> followers</p>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaBlog className="fs-5" />
                        <p className="card-text ps-2 fs-6">Joined<span>September 2021</span></p>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                        <FaRegComment className="fs-5" />
                        <Link to="#" className="textHover">
                            <p className="card-text ps-2 fs-6 textPrimary">Send Message</p>
                        </Link>
                    </Card.Text>

                    <Card.Text as="div" className="d-flex align-items-center mb-3">
                        <FaPhone className="fs-5" />
                        <Link to="#" className="textHover">
                            <p className="card-text ps-2 fs-6 textPrimary"> 01719-373476</p>
                        </Link>
                    </Card.Text>
                    <div className="bgPrimary text-center rounded-3">
                        <Link to="#" className="btn w-100 text-white">View More</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserProfileIntro;