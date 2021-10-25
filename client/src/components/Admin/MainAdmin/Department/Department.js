import React, { useState } from 'react';
import { Accordion, Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminNavbar from '../../AdminNavbar/AdminNavbar';
import { useDispatch, useSelector } from "react-redux";
import { departmentAdd } from "../../../../actions/departments";
import { clearError } from "../../../../actions/errors";
import { FaRegEdit } from "react-icons/fa";
const Department = () => {
    const dispatch = useDispatch();
    const { departments } = useSelector(state => state.departments)
    const { message, Types } = useSelector(state => state.errors)
    const [show, setShow] = useState(false);
    const handleClose = () => {
        dispatch(clearError())
        setShow(false);
        setData({ department_name: '', faculty: '' })
    };
    const handleShow = () => setShow(true);

    const [data, setData] = useState({ department_name: '', faculty: '', tuition_fee_per_credit: '' });
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        dispatch(departmentAdd(data, handleClose));
        dispatch(clearError())

    }
    return (
        <div>
            <AdminNavbar />
            <Row className="d-flex justify-content-center">
                <Col md="8">
                    <Card className="mt-4 mb-2">
                        <Card.Body>
                            <div className="bgPrimary text-center rounded-3">
                                <span className="btn w-100 cursor text-white" onClick={handleShow}>Add Department</span>
                            </div>
                        </Card.Body>
                    </Card>
                    {departments?.map(department => (

                        <Card className="mb-2 rounded-3">
                            <Card.Body>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="d-flex">
                                            <div>
                                                {department.department_name}
                                            </div>
                                            <div className="text-end text-success ms-2 fs-5" onClick={handleShow}><FaRegEdit /> </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="text-center">
                                                <Link to={`/addCourses/${department._id}`} className="textHover text-dark d-flex justify-content-start align-items-center">
                                                    Course
                                                </Link>
                                            </div>
                                            <hr />
                                            <div className="text-center">
                                                <Link to={`/addFacultyMembers/${department._id}`} className="textHover text-dark d-flex justify-content-start align-items-center">
                                                    Faculty Member
                                                </Link>
                                            </div>
                                            <hr />
                                            {/* <div className="text-center">
                                                <Link to={`/addSimpleStudent/${department._id}`} className="textHover text-dark d-flex justify-content-start align-items-center">
                                                    Student
                                                </Link>
                                            </div> */}
                                            <hr />
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Card.Body>
                        </Card>

                    ))}
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Department</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        {Types === 'ADD_DEPARTMENT_ERROR' && (
                            <h6 style={{ color: 'red' }}>{message}</h6>
                        )}

                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="department_name" placeholder="Department Name" />
                            <label for="floatingInput">Department Name</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChange} name="faculty" placeholder="Faculty" />
                            <label for="floatingInput">Faculty</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="number" onChange={handleChange} name="tuition_fee_per_credit" placeholder="Tuition Fee Per Credit" />
                            <label for="floatingInput">Tuition Fee Per Credit</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="number" onChange={handleChange} name="other_fee" placeholder="Other Fee" />
                            <label for="floatingInput">Other Fee</label>
                        </Form.Floating>
                        <div className="bgSecondary text-center mt-4 rounded-3">
                            <input type="submit" value="Save Changes" className="btn w-100 text-white" />
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Department;