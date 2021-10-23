import React, { useState } from 'react';
import { Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearError} from "../../../actions/errors";
import {TeacherAdd} from "../../../actions/departments";
import { v4 as uuidv4 } from 'uuid';
import path from "path";
import {uploadFile} from "../../../actions/files";

const AddFacultyMembers = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const [file, setFile] = useState()
    const { id } = params;
    const { Types, message } = useSelector(state => state.errors);
    const { courses, departments, teachers } = useSelector(state => state.departments);
    const currentDepartment = departments?.filter(department => department._id === id);
    const currentDepartmentTeachers = teachers?.filter(teachers => teachers.department ===  currentDepartment?.map(department => department.department_name).toString());
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        dispatch(clearError())
    }

    const handleShow = () => setShow(true);
    const [data, setData] = useState({});
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        data.department = currentDepartment?.map(department => department.department_name).toString();
        if (file) {
            const fileData = new FormData();
            const filename = uuidv4() + path.extname(file);
            data.profile_picture = filename;
            fileData.append('name', filename);
            fileData.append('file', file);
            dispatch(uploadFile(fileData))
        }
        dispatch(TeacherAdd(data));
    }
    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="d-flex justify-content-center mt-5">
                    <Col md="10">
                        <Card>
                            <Card.Body>
                                <div className="bgPrimary text-center rounded-3">
                                    <span className="btn w-100 cursor text-white" onClick={handleShow}>Add Faculty Members</span>
                                </div>
                                <Card.Text as="div" className="mt-4">

                                                {currentDepartmentTeachers?.map(teacher => (
                                             <Card className="mb-2">
                                                 <Card.Body>
                                                    <Row>
                                                        <Col md="6">
                                                            <p><span className="fw-bold">ID:</span> {teacher.teacher_id}</p>
                                                            <p><span className="fw-bold">Name:</span> {teacher.name}</p>
                                                            <p><span className="fw-bold">Designation:</span> {teacher.designation}</p>
                                                            <p><span className="fw-bold">Department:</span> {teacher.department}</p>
                                                            <p><span className="fw-bold">Cell Phone:</span> {teacher.mobile}</p>
                                                            <p><span className="fw-bold">E-mail:</span> faruq_cse@lus.ac.bd</p>
                                                        </Col>
                                                        <Col md="4">
                                                            <img src={`/api/files/storage/${teacher.profile_picture}`} alt="" width="140" height="140" className="rounded-3 p-1" />
                                                        </Col>

                                                    </Row>
                                                 </Card.Body>
                                             </Card>
                                                ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Faculty Members</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        {Types === 'ADD_TEACHER_ERROR' && (
                            <h6 style={{color: 'red'}}>{message}</h6>
                        )}
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="teacher_id" placeholder="ID" />
                            <label for="floatingInput">ID</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="name" placeholder="Name" />
                            <label for="floatingInput">Name</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="designation" placeholder="Designation" />
                            <label for="floatingInput">Designation</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="number" onChange={handleChange} name="mobile" placeholder="Cell Phone" />
                            <label for="floatingInput">Cell Phone</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="email" placeholder="Email" />
                            <label for="floatingInput">Email</label>
                        </Form.Floating>
                        <Form.Group className="mb-3">
                            <label for="floatingInput">Choose Image</label>
                            <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])} name="image" />
                        </Form.Group>
                        <div className="bgSecondary text-center mt-4 rounded-3">
                            <input type="submit" value="Save Changes" className="btn w-100 text-white"/>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AddFacultyMembers;