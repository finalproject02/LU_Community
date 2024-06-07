import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Form, Modal } from 'react-bootstrap';
import Avatar from "../../../images/avatar.jpeg";
import { CreateNewClub } from "../../../actions/clubs";
import { clearError } from "../../../actions/errors";

const CreateClub = ({ show, handleClose }) => {
    const dispatch = useDispatch();
    const { message, Types } = useSelector(state => state.errors);

    const { currentUser } = useSelector(state => state.auth)
    const [data, setData] = useState({ name: '', category: '', description: '' });
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

    const finalClose = () => {
        handleClose(false);
        dispatch(clearError());
        setData({})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(CreateNewClub(data, finalClose));
    }
    return (
        <div>
            {show &&
                <Modal show={show} onHide={finalClose} size="lg" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Create a Club</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                            <img src={currentUser?.profile_picture ? `/api/files/storage/${currentUser?.profile_picture}` : Avatar} alt="" width="52" height="52" className="rounded-circle me-2" />
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6 className="mb-0">{currentUser?.name}</h6>
                                    <small>Admin</small>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4 mt-4">
                            <Form onSubmit={handleSubmit}>
                                {Types === 'CLUB_ERROR' && (
                                    <h6 style={{ color: 'red' }}>{message}</h6>
                                )}
                                <Form.Floating className="mb-3">
                                    <Form.Control type="text" placeholder="Club Name" onChange={handleChange} name="name" />
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
                                    <input type="submit" value="Create Club" className="btn w-100 text-white" />
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