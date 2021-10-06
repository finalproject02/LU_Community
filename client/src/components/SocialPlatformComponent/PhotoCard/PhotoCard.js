import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const PhotoCard = ({ photos, setPhoto, setPost, setAbout, setConnection }) => {
    return (
        <div className="mb-4">
            {photos.length !== 0 && (
                <Card className="w-100">
                    <Card.Body>
                        <Card.Title>
                            <div className="d-flex justify-content-between align-items-center">
                                <h4>Photos</h4>
                                {photos.length > 6 && (
                                    <h6 className="mb-2 textHover" style={{cursor: 'pointer'}} onClick={() => {
                                        setPost(false);
                                        setConnection(false);
                                        setAbout(false);
                                        setPhoto(true);
                                    }
                                    }
                                    >See all</h6>
                                )}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <Row>
                                {photos?.slice(0, 6).map(photo => (
                                    <Col md="4" className="mb-2">
                                        <img src={`/api/files/storage/${photo.filename}`}
                                             style={{ cursor: 'pointer', height: "12vh" }} className="card-img-top rounded-3" alt="" />
                                    </Col>
                                ))}
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default PhotoCard;