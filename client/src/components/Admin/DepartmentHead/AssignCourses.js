import React from 'react';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const AssignCourses = () => {
    return (
        <div>
            <>
                <AdminNavbar />
                <div>
                    <Container>
                        <Row className="d-flex justify-content-center">
                            <Col md="8">
                                <h2 className="text-center mb-2 mt-2 textPrimary">All Semesters</h2>
                                <Card className="mb-2 rounded-3">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header className="d-flex justify-content-center">1st Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="text-center">
                                                        <Link to="/assignCourseList" className="textHover text-dark">Course Course Titel: Introduction To Computer <br /> Course Code: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
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
                                                <Accordion.Header>2nd Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="text-center">
                                                        <Link to="/courseStudents" className="textHover text-dark">Course Course Titel: Introduction To Computer <br /> Course Code: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
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
                                                <Accordion.Header>3rd Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="text-center">
                                                        <Link to="/courseStudents" className="textHover text-dark">Course Course Titel: Introduction To Computer <br /> Course Code: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
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
                                                <Accordion.Header>4th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="text-center">
                                                        <Link to="/courseStudents" className="textHover text-dark">Course Course Titel: Introduction To Computer <br /> Course Code: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
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
                                                <Accordion.Header>5th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="text-center">
                                                        <Link to="/courseStudents" className="textHover text-dark">Course Course Titel: Introduction To Computer <br /> Course Code: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
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
                                                <Accordion.Header>6th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="text-center">
                                                        <Link to="/courseStudents" className="textHover text-dark">Course Course Titel: Introduction To Computer <br /> Course Code: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
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
                                                <Accordion.Header>7th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="text-center">
                                                        <Link to="/courseStudents" className="textHover text-dark">Course Course Titel: Introduction To Computer <br /> Course Code: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
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
                                                <Accordion.Header>8th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="text-center">
                                                        <Link to="/courseStudents" className="textHover text-dark">Course Course Titel: Introduction To Computer <br /> Course Code: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
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
                                                <Accordion.Header>9th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="text-center">
                                                        <Link to="/courseStudents" className="textHover text-dark">Course Course Titel: Introduction To Computer <br /> Course Code: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
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
                                                <Accordion.Header>10th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="text-center">
                                                        <Link to="/courseStudents" className="textHover text-dark">Course Course Titel: Introduction To Computer <br /> Course Code: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
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
                                                <Accordion.Header>11th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="text-center">
                                                        <Link to="/courseStudents" className="textHover text-dark">Course Course Titel: Introduction To Computer <br /> Course Code: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
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
                                                <Accordion.Header>12th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="text-center">
                                                        <Link to="/courseStudents" className="textHover text-dark">Course Course Titel: Introduction To Computer <br /> Course Code: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
                                                    </div>
                                                    <hr />
                                                    <div className="text-center">
                                                        <Link href="introtocomputer.html" className="textHover text-dark">Course Code: Introduction To Computer <br /> Course Titel: CSE-1111</Link>
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

export default AssignCourses;