import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import computer from "../../../../images/computerclub.jpg";
import cultural from "../../../../images/culturalclub.png";

const SearchClub = () => {
    return (
        <div className="mb-4">
            <Card>
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                        <h5 className="card-title">Club</h5>
                    </Card.Title>
                    <Card.Text as="div" className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                            <img src={computer} alt="jahed" className="img-fluid sideProfile me-3" />
                            <div className="d-flex align-items-center">
                                <h6>
                                    <Link to="#" class="textHover text-dark">Leading University Computer Club</Link>
                                </h6>
                            </div>
                        </div>
                        <Link class="textSecondary text-decoration-none fw-bold">Follow</Link>
                    </Card.Text>
                    <Card.Text as="div" className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                            <img src={cultural} alt="jahed" className="img-fluid sideProfile me-3" />
                            <div className="d-flex align-items-center">
                                <h6>
                                    <Link to="#" class="textHover text-dark">Leading University Cultural Club</Link>
                                </h6>
                            </div>
                        </div>
                        <Link class="textSecondary text-decoration-none fw-bold">Follow</Link>
                    </Card.Text>

                    <div className="bgPrimary text-center rounded-3 mt-4">
                        <Link to="#" className="btn w-100 text-white">View More</Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SearchClub;