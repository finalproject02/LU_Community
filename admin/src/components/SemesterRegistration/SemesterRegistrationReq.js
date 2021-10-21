import React from 'react';
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const SemesterRegistrationReq = () => {
    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="d-flex justify-content-center mt-5">
                    <Col md="8">
                        <h2 className="text-center mb-2">Semester Registration Request</h2>
                        <Card className="mb-2 rounded-3">
                            <Card.Body>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="d-flex justify-content-center">1st Semester</Accordion.Header>
                                        <Accordion.Body>
                                            <Col md="12">
                                                <Row>
                                                    <Col md="4">
                                                        <Link to="/semesterRegiDetails" className="textHover text-dark">
                                                            <Card class="p-3">
                                                                <Card.Body>
                                                                    <h6>Name : Md Jahed Miah</h6>
                                                                    <p>ID: 173200009</p>
                                                                    <p>Batch: 46th</p>
                                                                </Card.Body>
                                                            </Card>
                                                        </Link>
                                                    </Col>
                                                    <Col md="4">
                                                        <Link to="/semesterRegiDetails" className="textHover text-dark">
                                                            <Card class="p-3">
                                                                <Card.Body>
                                                                    <h6>Name : Md Jahed Miah</h6>
                                                                    <p>ID: 173200009</p>
                                                                    <p>Batch: 46th</p>
                                                                </Card.Body>
                                                            </Card>
                                                        </Link>
                                                    </Col>
                                                    <Col md="4">
                                                        <Link to="/semesterRegiDetails" className="textHover text-dark">
                                                            <Card class="p-3">
                                                                <Card.Body>
                                                                    <h6>Name : Md Jahed Miah</h6>
                                                                    <p>ID: 173200009</p>
                                                                    <p>Batch: 46th</p>
                                                                </Card.Body>
                                                            </Card>
                                                        </Link>
                                                    </Col>
                                                    <Col md="4">
                                                        <Link to="/semesterRegiDetails" className="textHover text-dark">
                                                            <Card class="p-3">
                                                                <Card.Body>
                                                                    <h6>Name : Md Jahed Miah</h6>
                                                                    <p>ID: 173200009</p>
                                                                    <p>Batch: 46th</p>
                                                                </Card.Body>
                                                            </Card>
                                                        </Link>
                                                    </Col>
                                                    <Col md="4">
                                                        <Link to="/semesterRegiDetails" className="textHover text-dark">
                                                            <Card class="p-3">
                                                                <Card.Body>
                                                                    <h6>Name : Md Jahed Miah</h6>
                                                                    <p>ID: 173200009</p>
                                                                    <p>Batch: 46th</p>
                                                                </Card.Body>
                                                            </Card>
                                                        </Link>
                                                    </Col>
                                                    <Col md="4">
                                                        <Link to="/semesterRegiDetails" className="textHover text-dark">
                                                            <Card class="p-3">
                                                                <Card.Body>
                                                                    <h6>Name : Md Jahed Miah</h6>
                                                                    <p>ID: 173200009</p>
                                                                    <p>Batch: 46th</p>
                                                                </Card.Body>
                                                            </Card>
                                                        </Link>
                                                    </Col>
                                                </Row>
                                            </Col>
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
                                        <Accordion.Header>3rd Semester</Accordion.Header>
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
                                        <Accordion.Header>4th Semester</Accordion.Header>
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
                                        <Accordion.Header>5th Semester</Accordion.Header>
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
                                        <Accordion.Header>6th Semester</Accordion.Header>
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
                                        <Accordion.Header>7th Semester</Accordion.Header>
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
                                        <Accordion.Header>8th Semester</Accordion.Header>
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
                                        <Accordion.Header>9th Semester</Accordion.Header>
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
                                        <Accordion.Header>10th Semester</Accordion.Header>
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
                                        <Accordion.Header>11th Semester</Accordion.Header>
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
                                        <Accordion.Header>12th Semester</Accordion.Header>
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
    );
};

export default SemesterRegistrationReq;