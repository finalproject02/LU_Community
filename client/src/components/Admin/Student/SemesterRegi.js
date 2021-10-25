import React, {useEffect, useState} from 'react';
import { Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { FaTimesCircle } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import { SemesterRegistration } from "../../../actions/departments";

const SemesterRegi = () => {
    const dispatch = useDispatch()
    const { courses, departments, semesters } = useSelector(state => state.departments);
    const { currentUser } = useSelector(state => state.auth);
    const currentUserDepartment = departments?.filter(department => department.department_name === currentUser?.department)
    const [section, setSection] = useState();
    const [selected, setSelected] = useState([]);
    const [add, setAdd] = useState();
    const [addCourses, setAddCourses] = useState([]);
    const changeItems = selected.map(({
        _id: course_id,
        ...other
    }) => ({
        course_id,
        ...other
    }))
    const RegisterDetails = changeItems.map((el) => {
        const allItem = Object.assign({}, el);
        allItem.studentDocId = currentUser?._id;
        allItem.student_id = currentUser?.student_id;
        allItem.student_name = currentUser?.name;
        allItem.semester = section;
        allItem.department_name = currentUser?.department;
        allItem.department_id = currentUserDepartment.map(de => de._id).toString();
        return allItem
    });
    const registeredSemester = semesters?.filter(semester => semester.studentDocId === currentUser?._id || currentUser?.student_id === semester.student_id ||  currentUser?.name === semester?.student_name || semester.status === 'submitted');
    const numberWithCommas = (x) => {
        x = x.toString();
        const pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }


    useEffect(() => {
        if (registeredSemester) {
            setSelected(registeredSemester)
        }
        if (section) {
            const selectedCourse = courses?.filter(course => course.semester === parseInt(section));
            const addCourse = courses?.filter(course => course.semester !== parseInt(section));
            setAddCourses(addCourse)
            setSelected(selectedCourse)
        }
        if (add && section) {
            const selectedAddCourse = courses?.filter(course =>  course.course_title === add || course.semester === parseInt(section));
            setSelected(selectedAddCourse)
        }

    }, [section, add])


    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="justify-content-center my-5">
                    <Col md="10">
                        <Card className="shadow-sm p-5">
                            <Card.Title className="text-center textPrimary mb-4 fs-4">Semester Registration</Card.Title>
                            <Card.Body className="overflow-scroll">
                                <div className="d-flex justify-content-between">
                                    <p className="card-text fs-5 fw-bolder">Regular Courses</p>
                                    <Form.Group className="w-25">
                                        <label htmlFor="inputSection" className="form-label fw-bold">Section</label>
                                        <select name id className="form-select px-2" onChange={(e) => setSection(e.target.value)}>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                            <option value={11}>11</option>
                                            <option value={12}>12</option>
                                        </select>
                                    </Form.Group>
                                </div>
                                <Table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Course Title</th>
                                            <th scope="col">Course Code</th>
                                            <th scope="col">Credit</th>
                                            <th scope="col">Section</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {selected?.map(course => (
                                        <tr>
                                            <td>{course.course_title}</td>
                                            <td>{course.course_code}</td>
                                            <td>{course.credit}</td>
                                            <td className="form-group">
                                                <select name id className="form-control">
                                                    <option value={1}>{course.semester}</option>
                                                </select>
                                            </td>
                                            <td className="text-center cursor" ><FaTimesCircle onClick={() => setSelected(selected.filter(se => se._id !== course._id))}/></td>
                                        </tr>
                                    ))}


                                        <tr>
                                            <td colSpan="3">
                                                <Form.Label>
                                                    Add Course
                                                </Form.Label>
                                            </td>
                                            <td colSpan="2" className="d-flex align-items-start text-center">
                                                <Form.Group className="mb-3 me-2" controlId="formBasicEmail">
                                                    <select
                                                        className="w-100"
                                                        name="program_name"
                                                        onChange={(e) => setAdd(e.target.value)}
                                                    >
                                                        <option value="cse">Select Course</option>
                                                        {addCourses?.map(add => (
                                                            <option value={add.course_title}>{add.course_title}</option>
                                                        ))}

                                                    </select>
                                                </Form.Group>
                                                <div className="bgSecondary rounded-3">
                                                    <button className="btn" onClick={() => {console.log(add)}}>Add</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                    {selected.length !== 0 && (
                                        <tr>
                                            <td colSpan={2}>Total Credit</td>
                                            <td>{selected?.map(cou => cou.credit).reduce((total, num) => {return total + num})}</td>
                                        </tr>
                                    )}
                                    </tfoot>
                                </Table>
                            </Card.Body>
                            {selected.length !== 0 && (
                                <>
                                    <Col md="12">
                                        <h3 className="text-center textSecondary mb-4">Registration Summary</h3>
                                        <Row>
                                            <Col md="4">
                                                <Card class="p-3">
                                                    <Card.Body>
                                                        <Card.Title className="text-center fs-5">Regular Credits</Card.Title>
                                                        <p className="text-center textSecondary fs-2">{selected?.map(cou => cou.credit).reduce((total, num) => {return total + num})}</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md="4">
                                                <Card class="p-3">
                                                    <Card.Body>
                                                        <Card.Title className="text-center fs-5">Regular Credits</Card.Title>
                                                        <p className="text-center textSecondary fs-2">{selected?.map(cou => cou.credit).reduce((total, num) => {return total + num})}</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md="4">
                                                <Card class="p-3">
                                                    <Card.Body>
                                                        <Card.Title className="text-center fs-5">Regular Credits</Card.Title>
                                                        <p className="text-center textSecondary fs-2">{selected?.map(cou => cou.credit).reduce((total, num) => {return total + num})}</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md="4">
                                                <Card class="p-3">
                                                    <Card.Body>
                                                        <Card.Title className="text-center fs-5">Tuition Fees</Card.Title>
                                                        <p className="text-center textSecondary fs-2">৳ {numberWithCommas(selected?.map(cou => cou.credit).reduce((total, num) => {return total + num}) * parseInt(currentUserDepartment.map(c => c.tuition_fee_per_credit)))}</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md="4">
                                                <Card class="p-3">
                                                    <Card.Body>
                                                        <Card.Title className="text-center fs-5">Other Fees</Card.Title>
                                                        <p className="text-center textSecondary fs-2">৳ 5,000.00</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md="4">
                                                <Card class="p-3">
                                                    <Card.Body>
                                                        <Card.Title className="text-center fs-5">Total Fees</Card.Title>
                                                        <p className="text-center textSecondary fs-2">৳ 9,275.00</p>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Card.Footer>
                                        <p className="text-muted mt-4">Waiver of 25% applied to the tution fees of regular courses.<br />
                                            Current registration status: <strong>Approved.</strong></p>
                                    </Card.Footer>
                                    <div className="my-2 text-center bgSecondary rounded-3">
                                        <span href="#" className="btn text-white" onClick={() => {dispatch(SemesterRegistration(RegisterDetails))}}>Submit</span>
                                    </div>
                                </>
                            )}

                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SemesterRegi;