import React from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import Header from '../../Header/Header';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import "./Dashboard.css";
import topics from "./DashboardData";


function Dashboard() {
    return (
        <>
            <AdminNavbar />
            {/* <div className='home mt-5'>
                <Container>
                    <Row className="index">
                        {
                            topics.map(activity => (
                                <Col md="4">
                                    <Card.Link href={activity.path} className="textHover">
                                        <Card className="w-100 mb-4 p-1">
                                            <Card.Body className="bg-light p-4 text-center">
                                                <Card.Title className="text-dark fw-bold fs-2">{activity.item}</Card.Title>
                                                <Card.Text className="text-dark fs-4">
                                                    {activity.subject}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Card.Link>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div> */}
        </>
    )
}

export default Dashboard
