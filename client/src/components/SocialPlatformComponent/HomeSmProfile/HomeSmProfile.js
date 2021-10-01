import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import jahed from "../../../images/Jahed.jpg";
import "./HomeSmProfile.css";

const HomeSmProfile = () => {
    return (
        <div className="mb-4">
            <Card className="w-100 shadow-sm">
                <Card.Img className="simpleProfileBg" src={jahed} />
                <Card.Body>
                    <Card.Text>
                        <img src={jahed} className="simpleProfileImg w-25 img-fluid rounded-pill"
                            alt="" />
                        <div className="mt-5 text-center">
                            <h5 className="card-title pt-2">Md Jahed Miah</h5>
                            <h6 className="card-subtitle mb-2 text-muted ">Full stack web developer</h6>
                        </div>
                        <hr />
                        <div className="text-center">
                            <span>Studying at Leading University</span>
                            <br />
                            <span>Department of CSE in Bsc</span>
                            <br />
                            <span>46th batch</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-2">
                            <p className="card-text">Total Connections</p>
                            <span className="pb-3">40</span>
                        </div>
                        <div className="bgPrimary text-center rounded-3">
                            <Link to="/socialProfile" className="btn w-100 text-white">View profile</Link>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeSmProfile;