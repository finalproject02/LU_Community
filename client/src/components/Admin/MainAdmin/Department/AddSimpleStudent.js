import React, { useState } from 'react';
import AdminNavbar from "../../AdminNavbar/AdminNavbar";
import { Card, Col, Container, Form, Row, Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';

const AddSimpleStudent = () => {
    const [Data, setData] = useState({ name: '', id: '', semester: '', blood_group: '', section: '', dob: '', religion: '', present_address: '', email: '', phone: '', permanent_address: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => setData({ ...Data, [e.target.name]: e.target.value });

    const [DataSecond, setDataSecond] = useState({ search_id: '', search_name: '', search_semester: '' });
    const handleSubmitSecond = (e) => {
        e.preventDefault();
    }
    const handleChangeSecond = (e) => setDataSecond({ ...DataSecond, [e.target.name]: e.target.value });
    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="justify-content-center">
                    <Col md="10">
                        <Card className="bg-light w-100 shadow rounded my-5">
                            <Card.Title className="p-4 textPrimary">Add New Student</Card.Title>
                            <Card.Body className="card-body">
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md="3">
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="name" placeholder="Name" />
                                                <label>Name</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="number" onChange={handleChange} name="id" placeholder="ID" />
                                                <label>ID</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="semester" placeholder="Semester" />
                                                <label>Semester</label>
                                            </Form.Floating>
                                        </Col>
                                        <Col md="3">
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="Gender" placeholder="Gender" />
                                                <label>Gender</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="blood_group" placeholder="Blood Group" />
                                                <label>Blood Group</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="section" placeholder="Section" />
                                                <label>Section</label>
                                            </Form.Floating>
                                        </Col>
                                        <Col md="3">
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="email" placeholder="Email" />
                                                <label>Email</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="phone" placeholder="Phone" />
                                                <label>Phone</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="permanent_address" placeholder="Permanent Address" />
                                                <label>Permanent Address</label>
                                            </Form.Floating>
                                        </Col>
                                        <Col md="3">
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="dob" placeholder="Date Of Birth" />
                                                <label>Date Of Birth</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="religion" placeholder="Religion" />
                                                <label>Religion</label>
                                            </Form.Floating>
                                            <Form.Floating className="mb-3">
                                                <Form.Control type="text" onChange={handleChange} name="present_address" placeholder="Present Address" />
                                                <label>Present Address</label>
                                            </Form.Floating>
                                        </Col>
                                    </Row>
                                    <div className="px-3 text-end">
                                        <div>
                                            <input type="submit" value="Add Student" className="btn btn-success" />
                                        </div>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                        <Card className="bg-light w-100 shadow rounded my-5 overflow-scroll">
                            <Card.Title className="p-4 textPrimary">All Students Data</Card.Title>
                            <Form onSubmit={handleSubmitSecond}>
                                <Row className="ps-4">
                                    <Col md="3">
                                        <Form.Floating className="mb-3">
                                            <Form.Control type="text" onChange={handleChangeSecond} name="search_id" placeholder="Search By ID" />
                                            <label>Search By ID</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md="3">
                                        <Form.Floating className="mb-3">
                                            <Form.Control type="text" onChange={handleChangeSecond} name="search_name" placeholder="Search By Name" />
                                            <label>Search By Name</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md="3">
                                        <Form.Floating className="mb-3">
                                            <Form.Control type="text" onChange={handleChangeSecond} name="search_semester" placeholder="Search By Semester" />
                                            <label>Search By Semester</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md="3">
                                        <div>
                                            <input type="submit" value="Search" className="btn btn-success btn-lg" />
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                            <Card.Body className="card-body">
                                <Form onSubmit={handleSubmit}>
                                    <Row className="d-flex justify-content-center">
                                        <Col md="12">
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Department</th>
                                                        <th scope="col">Semester</th>
                                                        <th scope="col">Section</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Phone</th>
                                                        <th scope="col">DOB</th>
                                                        <th scope="col">Address</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1732020009</td>
                                                        <td>Md Jahed Miah</td>
                                                        <td>CSE</td>
                                                        <td>1</td>
                                                        <td>B</td>
                                                        <td>mdjahedahmed12@gmail.com</td>
                                                        <td>0179713005</td>
                                                        <td>14-02-1998</td>
                                                        <td>Lalabazar, Bishwanath, Sylhet</td>
                                                        <td><FaRegEdit className="fs-5 text-success me-2 cursor" /><FaTrashAlt className="fs-5 text-danger cursor" /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>1732020009</td>
                                                        <td>Md Jahed Miah</td>
                                                        <td>CSE</td>
                                                        <td>1</td>
                                                        <td>B</td>
                                                        <td>mdjahedahmed12@gmail.com</td>
                                                        <td>0179713005</td>
                                                        <td>14-02-1998</td>
                                                        <td>Lalabazar, Bishwanath, Sylhet</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1732020009</td>
                                                        <td>Md Jahed Miah</td>
                                                        <td>CSE</td>
                                                        <td>1</td>
                                                        <td>B</td>
                                                        <td>mdjahedahmed12@gmail.com</td>
                                                        <td>0179713005</td>
                                                        <td>14-02-1998</td>
                                                        <td>Lalabazar, Bishwanath, Sylhet</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1732020009</td>
                                                        <td>Md Jahed Miah</td>
                                                        <td>CSE</td>
                                                        <td>1</td>
                                                        <td>B</td>
                                                        <td>mdjahedahmed12@gmail.com</td>
                                                        <td>0179713005</td>
                                                        <td>14-02-1998</td>
                                                        <td>Lalabazar, Bishwanath, Sylhet</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1732020009</td>
                                                        <td>Md Jahed Miah</td>
                                                        <td>CSE</td>
                                                        <td>1</td>
                                                        <td>B</td>
                                                        <td>mdjahedahmed12@gmail.com</td>
                                                        <td>0179713005</td>
                                                        <td>14-02-1998</td>
                                                        <td>Lalabazar, Bishwanath, Sylhet</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1732020009</td>
                                                        <td>Md Jahed Miah</td>
                                                        <td>CSE</td>
                                                        <td>1</td>
                                                        <td>B</td>
                                                        <td>mdjahedahmed12@gmail.com</td>
                                                        <td>0179713005</td>
                                                        <td>14-02-1998</td>
                                                        <td>Lalabazar, Bishwanath, Sylhet</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1732020009</td>
                                                        <td>Md Jahed Miah</td>
                                                        <td>CSE</td>
                                                        <td>1</td>
                                                        <td>B</td>
                                                        <td>mdjahedahmed12@gmail.com</td>
                                                        <td>0179713005</td>
                                                        <td>14-02-1998</td>
                                                        <td>Lalabazar, Bishwanath, Sylhet</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1732020009</td>
                                                        <td>Md Jahed Miah</td>
                                                        <td>CSE</td>
                                                        <td>1</td>
                                                        <td>B</td>
                                                        <td>mdjahedahmed12@gmail.com</td>
                                                        <td>0179713005</td>
                                                        <td>14-02-1998</td>
                                                        <td>Lalabazar, Bishwanath, Sylhet</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <div className="row">
                                                <div className="col-md-12 text-end">
                                                    <button className="btn btn-success mr-5 rounded-3" href="#">Approve all</button>
                                                </div>
                                            </div>

                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddSimpleStudent;
