import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import allPhotosData from "./AllPhotosData";

const AllPhotos = () => {
    return (
        <div className="mb-4">
            <Card className="w-100 mb-4">
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Title className="mb-2 fs-4">All Photos</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted mb-2 textHover">See All</Card.Subtitle>
                    </div>
                    <Row>
                        {
                            allPhotosData.map(item => (
                                <Col md="3" className="mb-2">
                                    <Link to="#" className="textHover text-dark">
                                        <img src={item.photo} className="w-100 img-fluid rounded-3 mb-2" alt="nameJ" />
                                    </Link>
                                </Col>
                            ))
                        }
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllPhotos;