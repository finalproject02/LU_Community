import React from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import jahed from "../../images/jahed.jpg";

const AssignCourse = () => {
    return (
        <div>
            <>
                <AdminNavbar />
                <div>
                    <Container>
                        <Row className="d-flex justify-content-center">
                            <Col md="8">
                                <h2 className="text-center mb-2 mt-2">Faculty Members</h2>
                                <Card className="mb-2 rounded-3">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header className="d-flex justify-content-center">Department of CSE</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="text-center">
                                                        <Link to="/assignCourseList" className="textHover text-dark d-flex justify-content-start align-items-center">
                                                            <img src={jahed} alt=".." width="40" height="40" className="rounded-circle" />
                                                            <div>
                                                                <strong className="ms-2 mt-0">Md Jahed Miah</strong><br />
                                                                <span className="mt-0">Lecturer</span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link to="/publishStudentResults" className="textHover text-dark d-flex justify-content-start align-items-center">
                                                            <img src={jahed} alt=".." width="40" height="40" className="rounded-circle" />
                                                            <div>
                                                                <strong className="ms-2 mt-0">Md Jahed Miah</strong><br />
                                                                <span className="mt-0">Lecturer</span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link to="/publishStudentResults" className="textHover text-dark d-flex justify-content-start align-items-center">
                                                            <img src={jahed} alt=".." width="40" height="40" className="rounded-circle" />
                                                            <div>
                                                                <strong className="ms-2 mt-0">Md Jahed Miah</strong><br />
                                                                <span className="mt-0">Lecturer</span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link to="/publishStudentResults" className="textHover text-dark d-flex justify-content-start align-items-center">
                                                            <img src={jahed} alt=".." width="40" height="40" className="rounded-circle" />
                                                            <div>
                                                                <strong className="ms-2 mt-0">Md Jahed Miah</strong><br />
                                                                <span className="mt-0">Lecturer</span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link to="/publishStudentResults" className="textHover text-dark d-flex justify-content-start align-items-center">
                                                            <img src={jahed} alt=".." width="40" height="40" className="rounded-circle" />
                                                            <div>
                                                                <strong className="ms-2 mt-0">Md Jahed Miah</strong><br />
                                                                <span className="mt-0">Lecturer</span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link to="/publishStudentResults" className="textHover text-dark d-flex justify-content-start align-items-center">
                                                            <img src={jahed} alt=".." width="40" height="40" className="rounded-circle" />
                                                            <div>
                                                                <strong className="ms-2 mt-0">Md Jahed Miah</strong><br />
                                                                <span className="mt-0">Lecturer</span>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Department of BBA</Accordion.Header>
                                                <Accordion.Body>
                                                    <div >
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Department of EEE</Accordion.Header>
                                                <Accordion.Body>
                                                    <div >
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Department of Civil</Accordion.Header>
                                                <Accordion.Body>
                                                    <div >
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Department of English</Accordion.Header>
                                                <Accordion.Body>
                                                    <div >
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Department of Bangla</Accordion.Header>
                                                <Accordion.Body>
                                                    <div >
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Department of Law</Accordion.Header>
                                                <Accordion.Body>
                                                    <div >
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Department of Islamic Studies</Accordion.Header>
                                                <Accordion.Body>
                                                    <div >
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Department of Publuich Health</Accordion.Header>
                                                <Accordion.Body>
                                                    <div >
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Department of Hotel Management</Accordion.Header>
                                                <Accordion.Body>
                                                    <div >
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                        <hr />
                                                        <a href="introtocomputer.html">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</a>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        </div>
    );
};

export default AssignCourse;