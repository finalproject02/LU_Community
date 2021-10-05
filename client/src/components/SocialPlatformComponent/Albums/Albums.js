import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import albumsData from "./AlbumsData";

const Albums = () => {
    return (
        <div className="mb-4">
            <Card className="w-100">
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Title className="mb-2 fs-4">Albums</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted mb-2 textHover">See All</Card.Subtitle>
                    </div>
                    <Row>
                        {
                            albumsData.map(item => (
                                <Col md="3" className="mb-2">
                                    <Link href="#" className="textHover text-dark">
                                    </Link>
                                    <Card className="w-100">
                                        <Link to="#" className="textHover text-dark">
                                            <img src={item.photo} className="card-img-top" alt="..." />
                                        </Link>
                                        <div className="card-body">
                                            <Link to="#" className="textHover text-dark">
                                            </Link>
                                            <Link to="#" className="textHover text-dark">
                                                <h5 className="card-title text-dark">{item.name}
                                                </h5>
                                            </Link>
                                            <Link to="#" className="textHover text-dark">
                                                <p className="text-muted"><span>{item.items}</span> items</p>
                                            </Link>
                                        </div>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Albums;