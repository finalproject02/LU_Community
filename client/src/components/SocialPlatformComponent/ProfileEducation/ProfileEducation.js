import React from 'react';
import { Card } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';

const ProfileEducation = () => {
    return (
        <div>
            <Card className="w-100">
                <Card.Body>
                    <Card.Text as="div" class="d-flex justify-content-between align-items-center">
                        <h5 class="card-title pt-2">Education</h5>
                        <i class="fa fa-edit" aria-hidden="true" data-bs-toggle="modal"
                            data-bs-target="#educationProModal"></i>
                    </Card.Text>
                    <hr />
                    <Card.Text as="div">
                        <div class="col-md-12">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex">
                                    <FaGraduationCap />
                                    <p class="ps-2">Leading University</p>
                                </div>
                                <i class="fa fa-pencil pb-2" aria-hidden="true" data-bs-toggle="modal"
                                    data-bs-target="#educationProModal"></i>
                            </div>
                            <div>
                                <p class="mb-0">Bachelor of Science (BSc),Computer Science and
                                    Engineering(CSE)</p>
                                <p class="mt-0 pt-0">2017 – 2021</p>
                            </div>
                        </div>
                    </Card.Text>
                    <hr />
                    <Card.Text as="div">
                        <div class="col-md-12">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex">
                                    <i class="fa fa-graduation-cap pt-1" aria-hidden="true"></i>
                                    <p class="ps-2">Dakshin Surma Govt.College, Sylhet</p>
                                </div>
                                <i class="fa fa-pencil pb-2" aria-hidden="true" data-bs-toggle="modal"
                                    data-bs-target="#educationProModal"></i>
                            </div>
                            <div>
                                <p class="mb-0">Degree Name HSC,Field Of Study Science</p>
                                <p class="mt-0 pt-0">2015 – 2017</p>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProfileEducation;