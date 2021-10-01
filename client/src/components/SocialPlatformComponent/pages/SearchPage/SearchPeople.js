import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jahed from "../../../../images/Jahed.jpg";

const SearchPeople = () => {
    return (
        <div className="mb-4 mt-4">
            <Card>
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                        <h5 className="card-title">People</h5>
                    </Card.Title>
                    <Card.Text as="div" className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                            <img src={jahed} alt="jahed" className="img-fluid sideProfile me-3" />
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6>
                                        <Link to="#" class="textHover text-dark">Md Jahed Miah</Link>
                                    </h6>
                                    <span className="text-muted">Web developer</span>
                                </div>
                            </div>
                        </div>
                        <Link class="textSecondary text-decoration-none fw-bold">Connect</Link>
                    </Card.Text>
                    <Card.Text as="div" className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                            <img src={jahed} alt="jahed" className="img-fluid sideProfile me-3" />
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6>
                                        <Link to="#" class="textHover text-dark">Md Jahed Miah</Link>
                                    </h6>
                                    <span className="text-muted">Web developer</span>
                                </div>
                            </div>
                        </div>
                        <Link class="textSecondary text-decoration-none fw-bold">Connect</Link>
                    </Card.Text>
                    <div className="bgPrimary text-center rounded-3 mt-4">
                        <Link to="#" className="btn w-100 text-white">View More</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SearchPeople;