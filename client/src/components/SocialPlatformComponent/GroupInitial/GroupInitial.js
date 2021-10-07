import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jahed from "../../../images/Jahed.jpg";
import AllGroup from '../AllGroup/AllGroup';
import CreateGroup from '../CreateGroup/CreateGroup';
import PostCard from '../PostCard/PostCard';
import SocialNavbar from '../SocialNavbar/SocialNavbar';

const GroupInitial = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div>
                <SocialNavbar />
            </div>
            <div>
                <Container>
                    <Row className="mt-4 mb-4">
                        <Col md="8">
                            <div className="bgPrimary text-center rounded-3 mb-4">
                                <button className="btn w-100 text-white" onClick={handleShow}>Create New Group</button>
                                <CreateGroup show={show} handleClose={handleClose} />
                            </div>
                            <Card className="w-100 mb-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h6>Your Group</h6>
                                        <h6 className="textHover">See all</h6>
                                    </div>
                                    <Link to="/group" className="d-flex justify-content-start align-items-center mb-2 cardHover p-3 rounded-3 text-decoration-none text-dark">
                                        <img src={jahed} alt="" width="45" height="45" className="rounded-circle me-2" />
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h6 className="mb-0">CSE 46th Batch</h6>
                                                <small>DBMS</small>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Body>
                            </Card>
                            <Card className="w-100 mb-4">
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h6>Joined Group</h6>
                                        <h6 className="textHover">See all</h6>
                                    </div>
                                    <Link to="/group" className="d-flex justify-content-start align-items-center mb-2 cardHover p-3 rounded-3 text-decoration-none text-dark">
                                        <img src={jahed} alt="" width="45" height="45" className="rounded-circle me-2" />
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h6 className="mb-0">CSE 46th Batch</h6>
                                                <small>DBMS</small>
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/group" className="d-flex justify-content-start align-items-center mb-2 cardHover p-3 rounded-3 text-decoration-none text-dark">
                                        <img src={jahed} alt="" width="45" height="45" className="rounded-circle me-2" />
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <h6 className="mb-0">CSE 46th Batch</h6>
                                                <small>DBMS</small>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Body>
                            </Card>
                            <h4 className="mb-2">Recent activity</h4>
                            <PostCard />
                        </Col>
                        <Col md="4">
                            <AllGroup />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default GroupInitial;