import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import Avatar from "../../../images/avatar.jpeg";
import {useDispatch, useSelector} from "react-redux";
import {CreateNewGroup} from "../../../actions/groups";
import {clearError} from "../../../actions/errors";

const CreateGroup = ({ show, handleClose }) => {
    const dispatch = useDispatch();
    const { message,Types } = useSelector(state => state.errors);
    const { currentUser } = useSelector(state => state.auth);
    const [data, setData] = useState({ name: '', privacy: '', visibility: '' });
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const finalClose = () => {
        handleClose(false);
        dispatch(clearError())
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(CreateNewGroup(data, finalClose));
    }

    return (
        <div>
            {show &&
                <Modal show={show} onHide={finalClose} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Create a Group</Modal.Title>
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
                            {Types === 'GROUP_ERROR' && (
                                <h6 style={{color:'red'}}>{message}</h6>
                            )}
                            <Form onSubmit={handleSubmit}>
                                <Form.Floating className="mb-3">
                                    <Form.Control type="text" placeholder="Group Name" onChange={handleChange} name="name" />
                                    <label for="floatingInput">Group Name</label>
                                </Form.Floating>
                                <Form.Select className="mb-3 py-2" onChange={handleChange} name="privacy">
                                    <option>Choose Privacy</option>
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                </Form.Select>
                                <Form.Select className="mb-3 py-2" onChange={handleChange} name="visibility">
                                    <option>Choose Visibility</option>
                                    <option value="visible">Visible</option>
                                    <option value="hidden">Hidden</option>
                                </Form.Select>
                                <div className="bgSecondary text-center mt-4 rounded-3">
                                    <input type="submit" value="Create Group" className="btn w-100 text-white"  />
                                </div>
                            </Form>
                        </div>
                    </Modal.Body>
                </Modal>
            }
        </div>
    );
};

export default CreateGroup;