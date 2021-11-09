import React from 'react';
import { Accordion, Card, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import AdminNavbar from '../../AdminNavbar/AdminNavbar';

const SemesterRegiReq = () => {
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
                                            <Row className="d-flex justify-content-center">
                                                <Col md="12">
                                                    <Table striped bordered hover>
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Section</th>
                                                                <th scope="col">Email</th>
                                                                <th scope="col">Phone</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1732020009</td>
                                                                <td>Md Jahed Miah</td>
                                                                <td>B</td>
                                                                <td>mdjahedahmed12@gmail.com</td>
                                                                <td>0179713005</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1732020009</td>
                                                                <td>Md Jahed Miah</td>
                                                                <td>B</td>
                                                                <td>mdjahedahmed12@gmail.com</td>
                                                                <td>0179713005</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1732020009</td>
                                                                <td>Md Jahed Miah</td>
                                                                <td>B</td>
                                                                <td>mdjahedahmed12@gmail.com</td>
                                                                <td>0179713005</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1732020009</td>
                                                                <td>Md Jahed Miah</td>
                                                                <td>B</td>
                                                                <td>mdjahedahmed12@gmail.com</td>
                                                                <td>0179713005</td>
                                                            </tr>
                                                            <tr>
                                                                <td>1732020009</td>
                                                                <td>Md Jahed Miah</td>
                                                                <td>B</td>
                                                                <td>mdjahedahmed12@gmail.com</td>
                                                                <td>0179713005</td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </Col>
                                            </Row>
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

export default SemesterRegiReq;