import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FaBlog, FaBook, FaCommentDots, FaGraduationCap, FaHome, FaPhone } from 'react-icons/fa';
import { useSelector } from "react-redux";
import moment from "moment";

const UserProfileIntro = () => {
    const { people } = useSelector(state => state.people);
    const params = useParams();
    const { id } = params;
    const paramUser = people?.filter(person => person._id === id);
    return (
        <div>
            <Card className="mb-4 rounded-3">
                <Card.Body>
                    <Card.Text as="div" className="d-flex align-items-center">
                        <h5 className="card-title pt-2">Intro</h5>
                    </Card.Text>
                    <hr />
                    {paramUser.map(user => (
                        <>
                            {user.isTeacher === true ? (
                                user.department !== '' && (
                                    <Card.Text as="div" className="d-flex align-items-center mb-2">
                                        <FaGraduationCap className="fs-3 me-2" />
                                        <p className="card-text fs-6">{`Working as Teacher at ${user.department} at Leading University, Sylhet`}</p>
                                    </Card.Text>
                                )
                            ) :
                                (
                                    user.department !== null && (
                                        <Card.Text as="div" className="d-flex align-items-center mb-2">
                                            <FaGraduationCap className="fs-3 me-2" />
                                            <p className="card-text fs-6">{`Studying at ${user.department} at Leading University, Sylhet`}</p>
                                        </Card.Text>
                                    )
                                )
                            }
                            {!user.isTeacher && user.batch && (
                                <Card.Text as="div" className="d-flex align-items-center mb-2">
                                    <FaBook className="fs-5" />
                                    <p className="card-text ps-2 fs-6">{user.batch}</p>
                                </Card.Text>
                            )}

                            {user.present_address && (
                                <Card.Text as="div" className="d-flex align-items-center mb-2">
                                    <FaHome className="fs-5" />
                                    <p className="card-text ps-2 fs-6">Lives in {user.present_address}</p>
                                </Card.Text>
                            )}

                            {user.permanent_address && (
                                <Card.Text as="div" className="d-flex align-items-center mb-2">
                                    <FaHome className="fs-5" />
                                    <p className="card-text ps-2 fs-6">From {user.permanent_address}</p>
                                </Card.Text>
                            )}

                            <Card.Text as="div" className="d-flex align-items-center mb-2">
                                <FaBlog className="fs-5" />
                                <p className="card-text ps-2 fs-6"><span>{user.connection.length}</span> connections</p>
                            </Card.Text>

                            <Card.Text as="div" className="d-flex align-items-center mb-2">
                                <FaBlog className="fs-5" />
                                <p className="card-text ps-2 fs-6">Joined <span>{moment(user.createdAt).format('dddd, MMMM Do YYYY')}</span></p>
                            </Card.Text>

                            <Card.Text as="div" className="d-flex align-items-center mb-2">
                                <FaCommentDots className="fs-5" />
                                <div className="textHover">
                                    <p className="card-text ps-2 fs-6 textPrimary">Send Message</p>
                                </div>
                            </Card.Text>

                            {user.mobile !== null && (
                                <Card.Text as="div" className="d-flex align-items-center mb-3">
                                    <FaPhone className="fs-5" />
                                    <Link to="#" className="textHover">
                                        <p className="card-text ps-2 fs-6 textPrimary">{user.mobile}</p>
                                    </Link>
                                </Card.Text>
                            )}
                            <div className="bgPrimary text-center rounded-3 mt-4">
                                <strong className="btn w-100 text-white">View More</strong>
                            </div>
                        </>
                    ))}
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserProfileIntro;