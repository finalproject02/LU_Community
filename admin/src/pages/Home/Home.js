import React from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Home.css";

const Home = () => {
    const topics = [
        {
            item: "44",
            path: "/admissionRequest",
            subject: "Admission Request",
        },
        {
            item: "44",
            path: "/semesterRegistration",
            subject: "Semester Registration",
        },
        {
            item: "44",
            path: "/results",
            subject: "Results",
        },
        {
            item: "44",
            path: "/latestNews",
            subject: "Latest News",
        },
        {
            item: "44",
            path: "/Events",
            subject: "Events",
        },
        {
            item: "44",
            path: "/notice",
            subject: "Notice",
        },
        {
            item: "44",
            subject: "Admission Request",
        },
        {
            item: "44",
            subject: "Admission Request",
        },
        {
            item: "44",
            subject: "Admission Request",
        },
    ]
    return (
        <div className='home mt-5'>
            <Container>
                <Row className="index">
                    {
                        topics.map(topic => (
                            <Col md="4">
                                <Card.Link href={topic.path}>
                                    <Card className="w-100 mb-4 p-1">
                                        <Card.Body className="bg-light p-4">
                                            <Card.Title className="text-dark fw-bold fs-2">{topic.item}</Card.Title>
                                            <Card.Text className="text-dark fs-4">
                                                {topic.subject}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Card.Link>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;