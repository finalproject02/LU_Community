import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import {
    FaGraduationCap,
    FaPencilAlt, FaTrash,
    FaBirthdayCake,
    FaHome, FaEnvelopeOpen,
    FaPhone, FaLanguage,
    FaGlobe, FaBriefcase,

} from 'react-icons/fa';
import AboutModal from './AboutModal';
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import {DeleteJob} from "../../../actions/auth";

const ProfileAbout = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    const [companyName, setCompanyName] = useState([])
    const { currentUser } = useSelector(state => state.auth)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloseEditShow = () => setEditShow(false);
    const handleShowEditShow = () => setEditShow(true);

    return (
        <div>

            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="8">
                        <Card className="w-100">
                            <Card.Body>
                                <Card.Title>About</Card.Title>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>Add Job</h6>
                                        </div>
                                        <FaPencilAlt style={{cursor:'pointer'}} onClick={handleShow} />
                                        <AboutModal show={show} handleClose={handleClose} />
                                    </div>
                                    {currentUser?.jobs.map(job => (
                                        <div className="ms-4 mb-2">
                                            <div>
                                                <FaBriefcase className="me-2" />
                                                <span>{job.job_title}</span>
                                                <br />
                                                <span className="ms-4">{job.position}</span>
                                                <br/>
                                                <span className="ms-4">{job.company_name}</span>
                                                <br />
                                                <span className="ms-4">{moment(job.start_date).year()} - {moment(job.end_date).year()}</span>
                                            </div>
                                            <div className="d-flex">
                                                <FaPencilAlt style={{cursor: 'pointer'}} title="edit" className="fs-5" onClick={(e) => {
                                                    e.stopPropagation();
                                                    setCompanyName(job.company_name);
                                                    handleShowEditShow();
                                                }} />
                                                <FaTrash style={{cursor: 'pointer'}} title="delete" className="fs-5 ms-2" onClick={() => {
                                                    dispatch(DeleteJob(job.company_name))
                                                }}/>
                                                <AboutModal editShow={editShow} handleCloseEditShow={handleCloseEditShow} companyName={companyName}/>
                                            </div>
                                        </div>
                                    ))}
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>High School</h6>
                                        </div>
                                    </div>
                                    {currentUser?.education_background.filter(education => education.degree.toLowerCase() === 'ssc').map(school => (
                                        <div className="ms-4 mb-2">
                                            <FaGraduationCap className="me-2" />
                                            <span>{school.school}</span>
                                            <br />
                                            <span className="ms-4">{school.field_of_study}</span>
                                            <br />
                                            <span className="ms-4">{moment(school.start_date).year()} - {moment(school.end_date).year()}</span>
                                        </div>
                                    ))}
                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6> College</h6>
                                        </div>
                                    </div>

                                    {currentUser?.education_background.filter(eduction => eduction.degree.toLowerCase() === 'hsc').map(college => (
                                        <div className="ms-4 mb-2">
                                            <FaGraduationCap className="me-2" />
                                            <span>{college.school}</span>
                                            <br />
                                            <span className="ms-4">{college.degree}</span>
                                            <br />
                                            <span className="ms-4">{moment(college.start_date).year()} - {moment(college.end_date).year()}</span>
                                        </div>
                                    ))}

                                </Card.Text>
                                <Card.Text as="div">
                                    <div className="d-flex justify-content-between align-items-center ps-2">
                                        <div className="d-flex align-items-center">
                                            <h6>University</h6>
                                        </div>
                                    </div>
                                    {currentUser?.education_background.filter(education => education.degree.toLowerCase() === 'b.sc').map(university => (
                                        <div className="ms-4 mb-2">
                                            <FaGraduationCap className="me-2" />
                                            <span>{university.school}</span>
                                            <br />
                                            <span className="ms-4">{university.degree}</span>
                                            <br />
                                            <span className="ms-4">{moment(university.start_date).year()} - {moment(university.end_date).year()}</span>
                                        </div>
                                    ))}
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
                                        <span>{currentUser?.permanent_address}</span>
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
                                        <span>{currentUser?.mobile}</span>
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
                                        <span>{currentUser?.email}</span>
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
                                        <span>{currentUser?.website}</span>
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
                                        <span>{moment(currentUser?.date_of_birth).format('MMMM:DD:YYYY')}</span>
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
                                        <span>{currentUser?.language}</span>
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