import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./HomeSmProfile.css";
import { useSelector } from "react-redux";
import Avatar from '../../../images/avatar.jpeg'

const HomeSmProfile = () => {
    const { currentUser } = useSelector(state => state.auth)
    return (
        <div className="mb-4">
            <Card className="w-100 shadow-sm">
                <Card.Img className="simpleProfileBg" src={currentUser?.cover_picture ? `/api/files/storage/${currentUser?.cover_picture}` : Avatar} />
                <Card.Body>
                    <Card.Text>
                        <img src={currentUser?.profile_picture ? `/api/files/storage/${currentUser?.profile_picture}` : Avatar} width="90" height="90" className="simpleProfileImg rounded-circle p-1 bg-light"
                            alt="" />
                        <div className="mt-5 text-center">
                            <h5 className="card-title">{currentUser?.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted ">{currentUser?.current_position}</h6>
                        </div>
                        <hr />
                        <div className="text-center mb-4">
                            {currentUser?.isTeacher === true ? (
                                <strong className="">working as a Teacher at Leading University Department of {currentUser?.department}</strong>
                            ) : <strong className="">Studying at Leading University Department of {currentUser?.department} in BSc ({currentUser?.batch})</strong>}

                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="card-text">Total Connection</p>
                            <span className="pb-3">{currentUser?.connection.length}</span>
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