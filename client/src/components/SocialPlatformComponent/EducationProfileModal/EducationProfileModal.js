import {Col, Form, Modal, Row} from "react-bootstrap";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {updateProfile} from "../../../actions/auth";

const EducationProfileModal =  ({show, handleClose, education, newShow, closeNewShow}) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({school: '', degree: '', field_of_study: '', start_date: '', end_date: ''});

    const handleChange = (e) => setFormData({ ...formData, [e.target.name] : e.target.value});
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProfile(formData))
    }
    return(
        <Modal show={show ? show: newShow} onHide={show ? handleClose : closeNewShow}>
            <Modal.Header closeButton>
                <Modal.Title>{education ? 'Edit Education' : 'Add Education'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form class="pt-3 mb-1" onSubmit={handleSubmit}>
                    <Row className="mb-2">
                        <Col md="12">
                            <h6 class="">School</h6>
                            <Form.Control onChange={handleChange} defaultValue={education ? education.school : ''} name={'school'} type="text" />
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col md="12">
                            <h6 class="">Degree</h6>
                            <Form.Control name={'degree'} defaultValue={education ? education.degree : ''} onChange={handleChange} type="text" />
                        </Col>
                    </Row>
                    <Row className="mb-2">
                        <Col md="12">
                            <h6 class="">Field of Study</h6>
                            <Form.Control onChange={handleChange} defaultValue={education ? education.field_of_study : ''} name={'field_of_study'} type="text" />
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col md="6">
                            <h6 class="">Start date</h6>
                            <Form.Control name={'start_date'} defaultValue={education ? education.start_date : ''} onChange={handleChange} type="date" />
                        </Col>
                        <Col md="6">
                            <h6 class="">End date</h6>
                            <Form.Control name={'end_date'} defaultValue={education ? education.end_date : ''} onChange={handleChange} type="date" />
                        </Col>
                    </Row>
                    <Row className="bgSecondary text-center m-2 rounded-3">
                        <input type="submit" value="Save Changes" className="btn w-100 text-white" onClick={show ? handleClose : closeNewShow} />
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default EducationProfileModal