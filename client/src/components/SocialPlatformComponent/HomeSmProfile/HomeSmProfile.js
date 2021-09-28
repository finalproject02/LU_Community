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
                        <img src={jahed} class="simpleProfileImg w-25 img-fluid rounded-pill"
                            alt="" />
                        <div class="mt-5 text-center">
                            <h5 class="card-title pt-2">Md Jahed Miah</h5>
                            <h6 class="card-subtitle mb-2 text-muted ">Full stack web developer</h6>
                        </div>
                        <hr />
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="card-text">Total Following</p>
                            <span class="pb-3">25</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="card-text">Total Followers</p>
                            <span class="pb-3">40</span>
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