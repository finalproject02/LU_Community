import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import jahed from "../../images/jahed.jpg";
function componentName() {
    return (
        <div>
            <AdminNavbar />
            <div className="mt-5 bg-light">
                <Container>
                    <Row>
                        <Col md="3">
                            <Card className="w-100 mb-4">
                                <Card.Img className="img-fluid w-100 img-thumbnail" variant="top" src={jahed} />
                                <Card.Body>
                                    <Card.Title>Name: <b>Md Jahed miah</b></Card.Title>
                                    <Card.Text as="div">
                                        Program: <b>CSE</b>
                                    </Card.Text>
                                    <Card.Text as="div">
                                        Email: <b>mdjahedahmed666@gmail.com</b>
                                    </Card.Text>
                                    <Card.Text as="div">
                                        Phone: <b>01797213005</b>
                                    </Card.Text>
                                    <Card.Text as="div">
                                        Request: <b>Approved</b>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small class="text-muted">2 days ago</small>
                                </Card.Footer>
                                <button className="btn btn-primary w-100">Show details</button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default componentName
