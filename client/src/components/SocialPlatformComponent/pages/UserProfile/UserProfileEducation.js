import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';

const UserProfileEducation = () => {
    return (
        <div className="mb-4">
            <Card className="w-100 rounded-3">
                <Card.Body>
                    <Card.Text as="div" className="align-items-center">
                        <h5 className="card-title pt-2">Education</h5>
                    </Card.Text>
                    <hr />
                    <Card.Text as="div">
                        <Col md="12">
                            <div className="d-flex">
                                <FaGraduationCap className="fs-4" />
                                <p className="ps-2">Leading University</p>
                            </div>
                        </Col>
                        <Col md="12">
                            <p className="mb-0">Bachelor of Science (BSc),Computer Science and
                                Engineering(CSE)</p>
                            <p className="mt-0 pt-0">2017 – 2021</p>
                        </Col>
                    </Card.Text>
                    <hr />
                    <Card.Text as="div">
                        <Col md="12">
                            <div className="align-items-center">
                                <div className="d-flex">
                                    <FaGraduationCap className="fs-4" />
                                    <p className="ps-2">Dakshin Surma Govt.College, Sylhet</p>
                                </div>
                            </div>
                            <div>
                                <p className="mb-0">Degree Name HSC,Field Of Study Science</p>
                                <p className="mt-0 pt-0">2015 – 2017</p>
                            </div>
                        </Col>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserProfileEducation;