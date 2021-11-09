import React from 'react';
import { Card } from 'react-bootstrap';
import { FaEye, FaGlobe, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GroupIntro = ({setPost, setPhoto, setAbout}) => {
    return (
        <div className="mb-4">
            <Card className="w-100">
                <Card.Body>
                    <Card.Text as="div">
                        <h6 className="card-title pt-2">About</h6>
                        <p>This is group for the 46th batch of CSE Department</p>
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
                </Card.Body>
                <div className="bgPrimary text-center rounded-3">
                    <strong className="btn w-100 cursor text-white" onClick={() => {
                        setPhoto(false);
                        setPost(false);
                        setAbout(true);
                    }}>View more</strong>
                </div>
            </Card>
        </div>
    );
};

export default GroupIntro;