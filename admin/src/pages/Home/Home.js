import { useEffect } from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "./Home.css";
import topics from "./HomeData.js";
import {getAllApplication} from "../../actions/applications";

const Home = () => {

    const activities = topics();

    return (
        <div className='home mt-5'>
            <Container>
                <Row className="index">
                    {
                        activities.map(activity => (
                             <Col md="4">
                               <Card.Link href={activity.path}>
                                     <Card className="w-100 mb-4 p-1">
                                         <Card.Body className="bg-light p-4">
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
        </div>
    );
};

export default Home;