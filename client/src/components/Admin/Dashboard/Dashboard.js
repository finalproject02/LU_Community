import React from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import StudentHome from '../Student/StudentHome';
import TeacherHome from '../Teacher/TeacherHome';
import "./Dashboard.css";
import {useSelector} from "react-redux";

function Dashboard() {
    const { currentUser } = useSelector(state =>  state.auth)
    return (
        <>
            <AdminNavbar />
            {/* <div className='home mt-5'>
                <Container>
                    <Row className="index">
                        {
                            topics.map(activity => (
                                <Col md="4">
                                    <Card.Link href={activity.path} className="textHover">
                                        <Card className="w-100 mb-4 p-1">
                                            <Card.Body className="bg-light p-4 text-center">
                                                <Card.Title className="text-dark fw-bold fs-2">{activity.item}</Card.Title>
                                                <Card.Text className="text-dark fs-4">
                                                    {activity.subject}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Card.Link>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div> */}
            {currentUser?.position === 'Teacher' && (
                <TeacherHome />
            )}
            {currentUser?.position === 'Student' && (
                <StudentHome />
            )}


        </>
    )
}

export default Dashboard
