import React from 'react';
import { Accordion, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jahed from "../../images/jahed.jpg";
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const AddDepartmentWise = () => {
    return (
        <div>
            <AdminNavbar />
            <Row className="d-flex justify-content-center">
                <Col md="8">
                    <h2 className="text-center mb-2 mt-2">Add DepartmentWise</h2>
                    <Card className="mb-2 rounded-3">
                        <Card.Body>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="d-flex justify-content-center">Department of CSE</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="text-center">
                                            <Link to="/addCourse" className="textHover text-dark d-flex justify-content-start align-items-center">
                                                Add Course
                                            </Link>
                                        </div>
                                        <hr />
                                        <div className="text-center">
                                            <Link to="/addFacultyMember" className="textHover text-dark d-flex justify-content-start align-items-center">
                                                Add Faculty Member
                                            </Link>
                                        </div>
                                        <hr />
                                        <div className="text-center">
                                            <Link to="/addStudent" className="textHover text-dark d-flex justify-content-start align-items-center">
                                                Add Student
                                            </Link>
                                        </div>
                                        <hr />
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
        </div>
    );
};

export default AddDepartmentWise;