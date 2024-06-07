import React from 'react';
import { Accordion, Card, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import AdminNavbar from '../AdminNavbar/AdminNavbar';

const ApproveResults = () => {
    const { courses } = useSelector(state => state.departments);
    const { currentUser } = useSelector(state => state.auth);
    const firstSemesterCourse = courses?.filter(course => course.department_name === currentUser?.department && course.semester === 1);
    const secondSemesterCourse = courses?.filter(course => course.department_name === currentUser?.department && course.semester === 2);
    const thirdSemesterCourse = courses?.filter(course => course.department_name === currentUser?.department && course.semester === 3);
    const fourthSemesterCourse = courses?.filter(course => course.department_name === currentUser?.department && course.semester === 4);
    const fifthSemesterCourse = courses?.filter(course => course.department_name === currentUser?.department && course.semester === 5);
    const sixthSemesterCourse = courses?.filter(course => course.department_name === currentUser?.department && course.semester === 6);
    const seventhSemesterCourse = courses?.filter(course => course.department_name === currentUser?.department && course.semester === 7);
    const eighthSemesterCourse = courses?.filter(course => course.department_name === currentUser?.department && course.semester === 8);
    const ninthSemesterCourse = courses?.filter(course => course.department_name === currentUser?.department && course.semester === 9);
    const tenthSemesterCourse = courses?.filter(course => course.department_name === currentUser?.department && course.semester === 10);
    const elevenSemesterCourse = courses?.filter(course => course.department_name === currentUser?.department && course.semester === 11);
    const twelveSemesterCourse = courses?.filter(course => course.department_name === currentUser?.department && course.semester === 12);

       return (
        <div>
            <>
                <AdminNavbar />
                <div>
                    <Container>
                        <Row className="d-flex justify-content-center">
                            <Col md="8">
                                <h2 className="text-center mb-2 mt-2 textPrimary">All Semesters</h2>
                                <Card className="mb-2 rounded-3">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header className="d-flex justify-content-center">1st Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    {firstSemesterCourse.map(first => (
                                                        <>
                                                            <div className="text-center">
                                                                <Link to={`/approveCourseResults/${first._id}`} className="textHover text-dark">Course Course Title: {first.course_title} <br /> Course Code: {first.course_code}</Link>
                                                            </div>
                                                            <hr />
                                                        </>
                                                    ))}

                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>2nd Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    {secondSemesterCourse.map(second => (
                                                        <>
                                                            <div className="text-center">
                                                                <Link to={`/approveCourseResults/${second._id}`} className="textHover text-dark">Course Course Title: {second.course_title} <br /> Course Code: {second.course_code}</Link>
                                                            </div>
                                                            <hr />
                                                        </>
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>3rd Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    {thirdSemesterCourse.map(third => (
                                                        <>
                                                            <div className="text-center">
                                                                <Link to={`/approveCourseResults/${third._id}`} className="textHover text-dark">Course Course Title: {third.course_title} <br /> Course Code: {third.course_code}</Link>
                                                            </div>
                                                            <hr />
                                                        </>
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>4th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    {fourthSemesterCourse.map(fourth => (
                                                        <>
                                                            <div className="text-center">
                                                                <Link to={`/approveCourseResults/${fourth._id}`} className="textHover text-dark">Course Course Title: {fourth.course_title} <br /> Course Code: {fourth.course_code}</Link>
                                                            </div>
                                                            <hr />
                                                        </>
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>5th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    {fifthSemesterCourse.map(fifth => (
                                                        <>
                                                            <div className="text-center">
                                                                <Link to={`/approveCourseResults/${fifth._id}`} className="textHover text-dark">Course Course Title: {fifth.course_title} <br /> Course Code: {fifth.course_code}</Link>
                                                            </div>
                                                            <hr />
                                                        </>
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>6th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    {sixthSemesterCourse.map(sixth => (
                                                        <>
                                                            <div className="text-center">
                                                                <Link to={`/approveCourseResults/${sixth._id}`} className="textHover text-dark">Course Course Title: {sixth.course_title} <br /> Course Code: {sixth.course_code}</Link>
                                                            </div>
                                                            <hr />
                                                        </>
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>7th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    {seventhSemesterCourse.map(seventh => (
                                                        <>
                                                            <div className="text-center">
                                                                <Link to={`/approveCourseResults/${seventh._id}`} className="textHover text-dark">Course Course Title: {seventh.course_title} <br /> Course Code: {seventh.course_code}</Link>
                                                            </div>
                                                            <hr />
                                                        </>
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>8th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    {eighthSemesterCourse.map(eighth => (
                                                        <>
                                                            <div className="text-center">
                                                                <Link to={`/approveCourseResults/${eighth._id}`} className="textHover text-dark">Course Course Title: {eighth.course_title} <br /> Course Code: {eighth.course_code}</Link>
                                                            </div>
                                                            <hr />
                                                        </>
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>9th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    {ninthSemesterCourse.map(ninth => (
                                                        <>
                                                            <div className="text-center">
                                                                <Link to={`/approveCourseResults/${ninth._id}`} className="textHover text-dark">Course Course Title: {ninth.course_title} <br /> Course Code: {ninth.course_code}</Link>
                                                            </div>
                                                            <hr />
                                                        </>
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>10th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    {tenthSemesterCourse.map(tenth => (
                                                        <>
                                                            <div className="text-center">
                                                                <Link to={`/approveCourseResults/${tenth._id}`} className="textHover text-dark">Course Course Title: {tenth.course_title} <br /> Course Code: {tenth.course_code}</Link>
                                                            </div>
                                                            <hr />
                                                        </>
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>11th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    {elevenSemesterCourse.map(eleven => (
                                                        <>
                                                            <div className="text-center">
                                                                <Link to={`/approveCourseResults/${eleven._id}`} className="textHover text-dark">Course Course Title: {eleven.course_title} <br /> Course Code: {eleven.course_code}</Link>
                                                            </div>
                                                            <hr />
                                                        </>
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                                <Card className="mb-2">
                                    <Card.Body>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>12th Semester</Accordion.Header>
                                                <Accordion.Body>
                                                    {twelveSemesterCourse.map(twelve => (
                                                        <>
                                                            <div className="text-center">
                                                                <Link to={`/approveCourseResults/${twelve._id}`} className="textHover text-dark">Course Course Title: {twelve.course_title} <br /> Course Code: {twelve.course_code}</Link>
                                                            </div>
                                                            <hr />
                                                        </>
                                                    ))}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        </div>
    );
};

export default ApproveResults;