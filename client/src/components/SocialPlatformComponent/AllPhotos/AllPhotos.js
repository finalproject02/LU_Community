import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllPhotos = ({photos}) => {
    return (
        <div className="mb-4">
            <Container>
                <Card className="w-100 mb-4">
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                            <Card.Title className="mb-2 fs-4">All Photos</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted mb-2 textHover">See All</Card.Subtitle>
                        </div>
                        <Row>
                            {
                                photos?.map(photo => (
                                    <Col md="3" className="mb-2">
                                        <Link to="#" className="textHover text-dark">
                                            <img src={`/api/files/storage/${photo.filename}`} className="img-fluid rounded-3 mb-2" alt=""/>
                                        </Link>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default AllPhotos;