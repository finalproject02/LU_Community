import { Card, Col, Row } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import Avatar from '../../../images/avatar.jpeg'
import {ClubFollow} from "../../../actions/clubs";
import {useDispatch} from "react-redux";
const ClubSuggestions = ({clubSuggestions}) => {
    const dispatch = useDispatch()
    const history = useHistory();
    return (
        <div className="mb-4">
            {clubSuggestions.length !== 0 && (
                <Card className="w-100">
                    <Card.Body>
                        <Card.Title>
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="card-title">You May Follow</h5>
                            </div>
                        </Card.Title>
                        <Card.Text as="div">
                            <Row>
                                {
                                    clubSuggestions.map(item => (
                                        <Col key={item.id} md="3" className="mb-2">
                                            <Card className="w-100">
                                                <Card.Img src={item.profile_picture ? `/api/files/storage/${item.profile_picture}` : Avatar} style={{ cursor: 'pointer', height: "20vh" }} className="card-img-top rounded-3 w-100" alt="name" onClick={() => history.push(`/clubDetails/${item._id}`)}/>
                                                <Card.Body>
                                                    <Card.Title style={{cursor: 'pointer'}} onClick={() => history.push(`/clubDetails/${item._id}`)}>{item.name}</Card.Title>
                                                    <Card.Text as="div" className="mt-2">
                                                        <div className="bgPrimary text-center rounded-3 mb-2">
                                                            <Link to="#" className="btn w-100 text-white" onClick={() => dispatch(ClubFollow(item._id))}> Follow</Link>
                                                        </div>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default ClubSuggestions;