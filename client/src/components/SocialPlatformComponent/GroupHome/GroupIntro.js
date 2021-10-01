import React from 'react';
import { Card } from 'react-bootstrap';
import { FaEye, FaGlobe, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GroupIntro = () => {
    return (
        <div className="mb-4">
            <Card className="w-100">
                <Card.Body>
                    <Card.Text as="div">
                        <h6 className="card-title pt-2">About</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quae laborum
                            quasi vero est nam officiis, eius deleniti quod voluptatem dolor eum eligendi.
                            Maxime ea nihil quisquam dolorum repellendus obcaecati?</p>
                    </Card.Text>
                    <Card.Text as="div">
                        <h6 className="card-title pt-2">
                            <FaGlobe className="me-2" />
                            Public
                        </h6>
                        <p>Anyone can see who's in the group and what they post.</p>
                    </Card.Text>
                    <Card.Text as="div">
                        <h6 className="card-title pt-2">
                            <FaEye className="me-2" />
                            Visible
                        </h6>
                        <p>Anyone can find this group.</p>
                    </Card.Text>
                    <Card.Text as="div">
                        <h6 className="card-title pt-2">
                            <FaUserCircle className="me-2" />
                            General
                        </h6>
                    </Card.Text>
                </Card.Body>
                <div className="bgPrimary text-center rounded-3">
                    <Link to="/socialProfile" className="btn w-100 text-white">View more</Link>
                </div>
            </Card>
        </div>
    );
};

export default GroupIntro;