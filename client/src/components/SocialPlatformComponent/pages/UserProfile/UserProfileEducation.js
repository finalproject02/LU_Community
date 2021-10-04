import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import moment from "moment";

const UserProfileEducation = () => {
    const { people } = useSelector(state => state.people);
    const { currentUser } = useSelector(state => state.auth);
    const params = useParams();
    const { id } = params;
    const paramUser = people?.filter(person => person._id === id);
    return (
        <div className="mb-4">
            {paramUser.length !== (
                <Card className="w-100 rounded-3">
                    <Card.Text as="div" className="align-items-center">
                        <h5 className="card-title pt-2">Education</h5>
                    </Card.Text>
                    <hr />
                    <Card.Body>
                        {paramUser.map(user => (
                            user.education_background.map(education => (
                                <>

                                    <Card.Text as="div">
                                        <Col md="12">
                                            <div className="d-flex">
                                                <FaGraduationCap className="fs-4" />
                                                <p className="ps-2">{education.school}</p>
                                            </div>
                                        </Col>
                                        <Col md="12">
                                            <p className="mb-0">{education.degree} of  {education.field_of_study}</p>
                                            <p className="mt-0 pt-0">{moment(education.start_date).year()} - {moment(education.end_date).year()}</p>
                                        </Col>
                                    </Card.Text>
                                    <hr />
                                </>
                            ))
                        ))}
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default UserProfileEducation;