import { Col, Form, Modal, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../actions/auth";

const EducationProfileModal = ({ show, handleClose, DegreeName, newShow, closeNewShow }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ degree: '', school: '', field_of_study: '', start_date: '', end_date: '' });
    const name = useSelector(state => DegreeName ? state.auth.currentUser.education_background.find(eud => eud.degree === DegreeName) : null);

    const clear = () => {
        newShow ? closeNewShow() : handleClose();
        setFormData({ degree: '', school: '', field_of_study: '', start_date: '', end_date: '' });
    }
    useEffect(() => {
        if (name) setFormData(name);
    }, [name])

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProfile(formData));
        clear()
    }
    return (
        <Modal show={show ? show : newShow} onHide={show ? clear : closeNewShow}>
            <Modal.Header closeButton>
                <Modal.Title>{show ? 'Edit Education' : 'Add Education'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form class="pt-3 mb-1" onSubmit={handleSubmit}>
                    <Row className="mb-2">
                        <Col md="12">
                            <h6 class="">School</h6>
                            <Form.Control onChange={handleChange} defaultValue={formData.school} name={'school'} type="text" />
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col md="12">
                            <h6 class="">Degree</h6>
                            <Form.Control name={'degree'} value={formData.degree} onChange={handleChange} type="text" />
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col md="12">
                            <h6 class="">Field of Study</h6>
                            <Form.Control onChange={handleChange} defaultValue={formData.field_of_study} name={'field_of_study'} type="text" />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md="6">
                            <h6 class="">Start date</h6>
                            <Form.Control name={'start_date'} defaultValue={formData.start_date} onChange={handleChange} type="date" />
                        </Col>
                        <Col md="6">
                            <h6 class="">End date</h6>
                            <Form.Control name={'end_date'} defaultValue={formData.end_date} onChange={handleChange} type="date" />
                        </Col>
                    </Row>
                    <Row className="bgSecondary text-center m-2 rounded-3">
                        <input type="submit" value="Save Changes" className="btn w-100 text-white" />
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default EducationProfileModal