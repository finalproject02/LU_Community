import React, { useState } from 'react';
import { Card, Form, Modal } from 'react-bootstrap';
import { FaCommentDots, FaEnvelopeOpen, FaGlobe, FaPhone, FaRegClock, FaRegEdit, FaTrashAlt, FaUsers } from 'react-icons/fa';
import Collapsible from "react-collapsible-paragraph";
import { Link, useParams } from 'react-router-dom';
import aboutClubData from './AboutClubData';
import { useDispatch, useSelector } from "react-redux";
import { ClubUpdate } from "../../../actions/clubs";

const ClubInfo = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const { id } = params;
    const { clubs } = useSelector(state => state.clubs);
    const { currentUser } = useSelector(state => state.auth);
    const paramsClub = clubs?.filter(club => club._id === id);
    const isCreator = clubs?.filter(club => club.creator_id === currentUser?._id && club._id === id)
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setData({});
    }
    const handleShow = () => setShow(true);

    const [data, setData] = useState();
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(ClubUpdate(data, id))
        handleClose();
    }
    return (
        <div>
            <Card className="w-100">
                {
                    paramsClub.slice(0, 1).map(club => (
                        <Card.Body>
                            <div className="d-flex justify-content-between p-2">
                                <h5 className="mb-2 mt-2">General Information</h5>
                                {isCreator.length !== 0 && (
                                    <FaRegEdit onClick={handleShow} className="fs-5" />
                                )}
                            </div>
                            <div className="p-3">
                                <div className="mb-2">
                                    <div className="d-flex">
                                        <FaUsers className="mt-1" />
                                        <h6 className="ps-2 textHover text-dark">Follower</h6>
                                    </div>
                                    <p className="ms-4"><span>{club.followers.length}</span> {club.followers.length > 1 ? 'people' : 'person'} following </p>
                                </div>
                                <div className="mb-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <FaGlobe className="mt-1" />
                                            <h6 className="ps-2 text-dark">Website</h6>
                                        </div>
                                        {isCreator.length !== 0 && (
                                            <FaTrashAlt style={{ cursor: 'pointer' }} onClick={() => dispatch(ClubUpdate({ website: '' }, club._id))} />
                                        )}
                                    </div>
                                    <p className="ms-4 textHover cursor" >{club.website}</p>
                                </div>
                                <div className="mb-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <FaPhone className="mt-1" />
                                            <h6 className="ps-2 text-dark">Phone</h6>
                                        </div>
                                        {isCreator.length !== 0 && (
                                            <FaTrashAlt style={{ cursor: 'pointer' }} onClick={() => dispatch(ClubUpdate({ mobile: '' }, club._id))} />
                                        )}
                                    </div>
                                    <p className="ms-4 textHover cursor">{club.mobile}</p>
                                </div>
                                <div className="mb-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <FaEnvelopeOpen className="mt-1" />
                                            <h6 className="ps-2 text-dark">Email</h6>
                                        </div>
                                        {isCreator.length !== 0 && (
                                            <FaTrashAlt style={{ cursor: 'pointer' }} onClick={() => dispatch(ClubUpdate({ email: '' }, club._id))} />
                                        )}
                                    </div>
                                    <p className="ms-4 textHover cursor">{club.email}</p>
                                </div>
                            </div>
                            <div className="mb-2 p-3">
                                <div className="d-flex justify-content-between">
                                    <h5 className="mb-2">Details info</h5>
                                    {isCreator.length !== 0 && (
                                        <FaTrashAlt style={{ cursor: 'pointer' }} onClick={() => dispatch(ClubUpdate({ description: '' }, club._id))} />
                                    )}
                                </div>
                                <Collapsible lines={5}>{club.description}
                                </Collapsible>

                            </div>
                            <div className="p-2">
                                <h5 className="mb-3">Our Campus Location</h5>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8322338660364!2d91.80291421498522!3d24.869578851016843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751015addbec3b7%3A0x9e87b7be58b5f67e!2sLeading%20University!5e0!3m2!1sen!2sbd!4v1626438111440!5m2!1sen!2sbd"
                                    width="100%" height="200" loading="lazy" title="campus location"></iframe>
                            </div>
                        </Card.Body>
                    ))
                }
            </Card>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Generel Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {paramsClub.slice(0, 1).map(club => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Floating className="mb-3">
                                <Form.Control type="text" placeholder="Website" defaultValue={club.website} onChange={handleChange} name="website" />
                                <label for="floatingInput">Website</label>
                            </Form.Floating>
                            <Form.Floating className="mb-3">
                                <Form.Control type="text" placeholder="Phone" defaultValue={club.mobile} onChange={handleChange} name="mobile" />
                                <label for="floatingInput">Phone</label>
                            </Form.Floating>
                            <Form.Floating className="mb-3">
                                <Form.Control type="text" placeholder="Email" defaultValue={club.email} onChange={handleChange} name="email" />
                                <label for="floatingInput">Email</label>
                            </Form.Floating>
                            <Form.Floating className="mb-3">
                                <Form.Control placeholder="Details Info" as="textarea" rows={10} defaultValue={club.description} onChange={handleChange} name="description" />
                                <Form.Label>Details Info</Form.Label>
                            </Form.Floating>
                            <div className="bgSecondary text-center mt-4 rounded-3">
                                <input type="submit" value="Save Changes" className="btn w-100 text-white" />
                            </div>
                        </Form>
                    ))}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ClubInfo;