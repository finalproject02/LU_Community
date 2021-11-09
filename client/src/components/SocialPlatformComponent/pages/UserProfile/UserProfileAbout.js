import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import {
    FaBirthdayCake,
    FaBriefcase,
    FaEnvelopeOpen,
    FaGlobe,
    FaGraduationCap,
    FaHome, FaLanguage,
    FaPencilAlt,
    FaPhone,
    FaTrash
} from 'react-icons/fa';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import AboutModal from "../../ProfileAbout/AboutModal";
import moment from "moment";
import {DeleteJob} from "../../../../actions/auth";

const UserProfileAbout = () => {
    const { people } = useSelector(state => state.people)
    const param = useParams();
    const { id } = param;
    const paramUser = people?.filter(person => person._id === id)

    return (
        <div>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="8">
                        <Card className="w-100">
                            <Card.Body>
                                <Card.Title>About</Card.Title>
                                <Card.Text as="div">
                                    {paramUser?.map(job => job.jobs.map(jo => (
                                        <div className="ms-4 mb-2">
                                            <div>
                                                <FaBriefcase className="me-2" />
                                                <span>{jo.job_title}</span>
                                                <br />
                                                <span className="ms-4">{jo.position}</span>
                                                <br/>
                                                <span className="ms-4">{jo.company_name}</span>
                                                <br />
                                                <span className="ms-4">{moment(jo.start_date).year()} - {moment(job.end_date).year()}</span>
                                            </div>

                                        </div>
                                    )))}
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>High School</h6>
                                        </div>
                                    </div>
                                    {paramUser?.map(edu => edu.education_background.filter(education => education.degree.toLowerCase() === 'ssc').map(school => (
                                        <div className="ms-4 mb-2">
                                            <FaGraduationCap className="me-2" />
                                            <span>{school.school}</span>
                                            <br />
                                            <span className="ms-4">{school.field_of_study}</span>
                                            <br />
                                            <span className="ms-4">{moment(school.start_date).year()} - {moment(school.end_date).year()}</span>
                                        </div>
                                    )))}
                                </Card.Text>

                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6> College</h6>
                                        </div>
                                    </div>

                                    {paramUser?.map(edu => edu.education_background.filter(eduction => eduction.degree.toLowerCase() === 'hsc').map(college => (
                                        <div className="ms-4 mb-2">
                                            <FaGraduationCap className="me-2" />
                                            <span>{college.school}</span>
                                            <br />
                                            <span className="ms-4">{college.degree}</span>
                                            <br />
                                            <span className="ms-4">{moment(college.start_date).year()} - {moment(college.end_date).year()}</span>
                                        </div>
                                    )))}

                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>University</h6>
                                        </div>
                                    </div>
                                    {paramUser?.map(edu => edu.education_background.filter(education => education.degree.toLowerCase() === 'b.sc').map(university => (
                                        <div className="ms-4 mb-2">
                                            <FaGraduationCap className="me-2" />
                                            <span>{university.school}</span>
                                            <br />
                                            <span className="ms-4">{university.degree}</span>
                                            <br />
                                            <span className="ms-4">{moment(university.start_date).year()} - {moment(university.end_date).year()}</span>
                                        </div>
                                    )))}
                                </Card.Text>

                                <Card.Text as="div">
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Home Town</h6>
                                        </div>
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaHome className="me-2" />
                                        <span>{paramUser?.map(usr => usr.permanent_address)}</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Mobile</h6>
                                        </div>
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaPhone className="me-2" />
                                        <span>{paramUser?.map(usr => usr.mobile)}</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Email</h6>
                                        </div>
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaEnvelopeOpen className="me-2" />
                                        <span>{paramUser?.map(usr => usr.email)}</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Website</h6>
                                        </div>
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaGlobe className="me-2" />
                                        <span>{paramUser?.map(usr => usr.website)}</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Birthday</h6>
                                        </div>
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaBirthdayCake className="me-2" />
                                        <span>{moment(paramUser?.map(usr => usr.date_of_birth)).format('MMMM:DD:YYYY')}</span>
                                    </div>
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Language</h6>
                                        </div>
                                    </div>
                                    <div className="ms-4 mb-2">
                                        <FaLanguage className="me-2" />
                                        <span>{paramUser?.map(usr => usr.language)}</span>
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

export default UserProfileAbout;