import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import jahed from "../../../images/Jahed.jpg";

const CreateClub = ({ show, handleClose }) => {
    const [data, setData] = useState({ club_Name: '', category: '', description: '' });
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setData(true);
    }
    return (
        <div>
            {show &&
                <Modal show={show} onHide={handleClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Create a Club</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                            <img src={jahed} alt="" width="52" height="52" className="rounded-circle me-2" />
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6 className="mb-0">Md Jahed Miah</h6>
                                    <small>Admin</small>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 mt-4">
                            <Form onSubmit={handleSubmit}>
                                <Form.Floating className="mb-3">
                                    <Form.Control type="text" placeholder="Club Name" onChange={handleChange} name="club_Name" />
                                    <label for="floatingInput">Club</label>
                                </Form.Floating>
                                <Form.Floating className="mb-3">
                                    <Form.Control type="text" placeholder="Category" onChange={handleChange} name="category" />
                                    <label for="floatingInput">Category</label>
                                </Form.Floating>
                                <Form.Floating className="mb-3">
                                    <Form.Control type="text" placeholder="Description" onChange={handleChange} name="description" />
                                    <label for="floatingInput">Description</label>
                                </Form.Floating>
                                <div className="bgSecondary text-center mt-4 rounded-3">
                                    <input type="submit" value="Create Club" className="btn w-100 text-white" onClick={handleClose} />
                                </div>
                            </Form>
                        </div>
                    </Modal.Body>
                </Modal>
            }
        </div>
    );
};

export default CreateClub;