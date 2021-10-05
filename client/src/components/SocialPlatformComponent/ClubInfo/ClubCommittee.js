import React, { useState } from 'react';
import { Card, Form, Modal } from 'react-bootstrap';
import { FaRegEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import clubCommitteeData from './ClubCommitteeData';

const ClubCommittee = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState({ advisor: '', coAdvisor: '', president: '', gSecretary: '', treasurer: '' });
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setData(true);
    }
    return (
        <div>
            <Card className="w-100 mb-4">
                <Card.Body>
                    <Card.Title className="d-flex justify-content-between p-2">
                        <h5 className="mb-2 mt-2">Current Committee</h5>
                        <FaRegEdit onClick={handleShow} className="fs-5 mt-2" />
                    </Card.Title>
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

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Committee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" placeholder="Advisor" onChange={handleChange} name="advisor" />
                            <label for="floatingInput">Advisor</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" placeholder="Co-Advisor" onChange={handleChange} name="coAdvisor" />
                            <label for="floatingInput">Co-Advisor</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" placeholder="President" onChange={handleChange} name="president" />
                            <label for="floatingInput">President</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" placeholder="General Secretary" onChange={handleChange} name="gSecretary" />
                            <label for="floatingInput">General Secretary</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" placeholder="Treasurer" onChange={handleChange} name="treasurer" />
                            <label for="floatingInput">Treasurer</label>
                        </Form.Floating>
                        <div className="bgSecondary text-center mt-4 rounded-3">
                            <input type="submit" value="Save Changes" className="btn w-100 text-white" onClick={handleClose} />
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ClubCommittee;