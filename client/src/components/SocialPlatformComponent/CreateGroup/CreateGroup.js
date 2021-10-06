import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import jahed from "../../../images/Jahed.jpg";

const CreateGroup = ({ show, handleClose }) => {
    const [data, setData] = useState({ group_Name: '', group_Privacy: '', group_Visibility: '' });
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
                        <Modal.Title>Create a Group</Modal.Title>
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
                                    <Form.Control type="text" placeholder="Group Name" onChange={handleChange} name="group_Name" />
                                    <label for="floatingInput">Group Name</label>
                                </Form.Floating>
                                <Form.Select className="mb-3 py-2" onChange={handleChange} name="group_Privacy">
                                    <option>Choose Privacy</option>
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                </Form.Select>
                                <Form.Select className="mb-3 py-2" onChange={handleChange} name="group_Visibility">
                                    <option>Choose Visibility</option>
                                    <option value="visible">Visible</option>
                                    <option value="hidden">Hidden</option>
                                </Form.Select>
                                <div className="bgSecondary text-center mt-4 rounded-3">
                                    <input type="submit" value="Create Group" className="btn w-100 text-white" onClick={handleClose} />
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