import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import video from "../../../videos/Leading University Computer Club.mp4";

const VideoCard = () => {
    return (
        <div className="mb-4">
            <Card className="w-100">
                <Card.Body>
                    <Card.Title>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>Videos</h4>
                            <h6 className="mb-2 textHover">See all</h6>
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <Row>
                            <Col md="6" className="mb-2">
                                <video controls src={video} className="rounded-3 mb-2 w-100" alt="" />
                            </Col>
                            <Col md="6" className="mb-2">
                                <video controls src={video} className="rounded-3 mb-2 w-100" alt="" />
                            </Col>
                            <Col md="6" className="mb-2">
                                <video controls src={video} className="rounded-3 mb-2 w-100" alt="" />
                            </Col>
                            <Col md="6" className="mb-2">
                                <video controls src={video} className="rounded-3 mb-2 w-100" alt="" />
                            </Col>
                            <Col md="6" className="mb-2">
                                <video controls src={video} className="rounded-3 mb-2 w-100" alt="" />
                            </Col>
                            <Col md="6" className="mb-2">
                                <video controls src={video} className="rounded-3 mb-2 w-100" alt="" />
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default VideoCard;