import React, {useEffect, useState} from 'react';
import { Col, Form, Modal, Row } from 'react-bootstrap';
import { updateProfile } from "../../../actions/auth";
import {useDispatch, useSelector} from "react-redux";

const AboutModal = ({ show, handleClose, companyName, editShow, handleCloseEditShow }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({job_title: '', position: '', company_name: '', start_date: '', end_date: ''});
    const name = useSelector(state => companyName ? state.auth.currentUser.jobs.find(com => com.company_name === companyName) : null);

    const handleChange = (e) => setData({...data, [e.target.name] : e.target.value });
    const clear = () => {
        editShow ? handleCloseEditShow() : handleClose();
        setData({ job_title: '', position: '', company_name: '', start_date: '', end_date: '' });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProfile(data));
        clear();
    }
    useEffect(() => {
        if (name) setData(name);
    }, [name])
    return (
        <div>
                <Modal show={show ? show : editShow} onHide={show ? handleClose : clear}>
                    <Modal.Header closeButton>
                        <Modal.Title>{show ? 'Add Job' : 'Edit Job'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form className="pt-3 mb-1" onSubmit={handleSubmit}>
                            <Row className="mb-2">
                                <Col md="12">
                                    <h6 className="">Job title</h6>
                                    <Form.Control defaultValue={data.job_title} name={'job_title'} type="text" onChange={handleChange}/>
                                </Col>
                            </Row>
                            <Row className="mb-2">
                                <Col md="12">
                                    <h6 className="">Position</h6>
                                    <Form.Control defaultValue={data.position} name={'position'} type="text" onChange={handleChange}/>
                                </Col>
                            </Row>
                            {editShow ? (
                                <Row className="mb-2">
                                    <Col md="12">
                                        <h6 className="">Company Name</h6>
                                        <Form.Control value={data.company_name} name={'company_name'} type="text" onChange={handleChange} disabled/>
                                    </Col>
                                </Row>
                            ) : <Row className="mb-2">
                                <Col md="12">
                                    <h6 className="">Company Name</h6>
                                    <Form.Control  name={'company_name'} type="text" onChange={handleChange}/>
                                </Col>
                            </Row>}
                            <Row className="mb-4">
                                <Col md="6">
                                    <h6 className="">Start date</h6>
                                    <Form.Control defaultValue={data.start_date} name={'start_date'} type="date" onChange={handleChange}/>
                                </Col>
                                <Col md="6">
                                    <h6 className="">End date</h6>
                                    <Form.Control defaultValue={data.end_date} name={'end_date'} type="date" onChange={handleChange}/>
                                </Col>
                            </Row>
                            <Row className="bgSecondary text-center m-2 rounded-3">
                                <input type="submit" value="Save Changes" className="btn w-100 text-white" />
                            </Row>
                        </Form>
                    </Modal.Body>
                </Modal>

        </div>
    );
};

export default AboutModal;