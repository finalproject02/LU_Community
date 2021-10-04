import React from 'react';
import { Card } from 'react-bootstrap';
import computer from "../../../../images/computerclub.jpg";
import cultural from "../../../../images/culturalclub.png";

function SearchGroup() {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between">
                        <h5>Group</h5>
                    </Card.Title>
                    <Card.Text as="div" className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                            <img src={computer} alt="jahed" width="55" height="55" className="rounded-circle me-3" />
                            <div className="d-flex align-items-center">
                                <h6 className="textHover text-dark">Leading University CSE Group</h6>
                            </div>
                        </div>
                        <strong className="textSecondary cursor">Join</strong>
                    </Card.Text>
                    <Card.Text as="div" className="d-flex justify-content-between align-items-center">
                        <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                            <img src={cultural} alt="jahed" width="55" height="55" className="rounded-circle me-3" />
                            <div className="d-flex align-items-center">
                                <h6 className="textHover text-dark">Leading University EEE Group</h6>
                            </div>
                        </div>
                        <strong className="textSecondary cursor">Join</strong>
                    </Card.Text>
                    <div className="bgPrimary text-center rounded-3 mt-4">
                        <strong className="btn w-100 text-white">View More</strong>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SearchGroup;
