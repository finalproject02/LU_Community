import React, { useState } from 'react';
import { Accordion, Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const Department = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState();
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose()
    }
    return (
        <div>
            <AdminNavbar />
            <Row className="d-flex justify-content-center">
                <Col md="8">
                    <Card className="mt-4 mb-2">
                        <Card.Body>
                            <div className="bgPrimary text-center rounded-3">
                                <span className="btn w-100 cursor text-white" onClick={handleShow}>Add Department</span>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="mb-2 rounded-3">
                        <Card.Body>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className="d-flex justify-content-center">Department of CSE</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="text-center">
                                            <Link to="/addCourses" className="textHover text-dark d-flex justify-content-start align-items-center">
                                                Course
                                            </Link>
                                        </div>
                                        <hr />
                                        <div className="text-center">
                                            <Link to="/addFacultyMembers" className="textHover text-dark d-flex justify-content-start align-items-center">
                                                Faculty Member
                                            </Link>
                                        </div>
                                        <hr />
                                        <div className="text-center">
                                            <Link to="/addStudents" className="textHover text-dark d-flex justify-content-start align-items-center">
                                                Student
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
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Department</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="department_name" placeholder="Department Name" />
                            <label for="floatingInput">Department Name</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="faculty" placeholder="Faculty" />
                            <label for="floatingInput">Faculty</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="number" onChange={handleChange} name="Tutuion_fee" placeholder="Tutuion Fee Per Credit" />
                            <label for="floatingInput">Tutuion fee per Credit</label>
                        </Form.Floating>
                        <div className="bgSecondary text-center mt-4 rounded-3">
                            <input type="submit" value="Save Changes" className="btn w-100 text-white" onClick={handleClose} />
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Department;