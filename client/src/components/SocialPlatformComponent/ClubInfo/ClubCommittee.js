import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import clubCommitteeData from './ClubCommitteeData';

const ClubCommittee = () => {
    return (
        <div>
            <Card className="w-100 mb-4">
                <Card.Body>
                    <Card.Title>Current Committee:</Card.Title>
                    {
                        clubCommitteeData.map(item => (
                            <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                <img src={item.photo} alt={item.name} className="img-fluid sideProfile me-3" />
                                <div className="d-flex align-items-center">
                                    <div>
                                        <h6><Link to="#" className="textHover text-dark">{item.name}</Link>
                                        </h6>
                                        <span className="text-muted">{item.title}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Card.Body>
            </Card>
        </div>
    );
};

export default ClubCommittee;