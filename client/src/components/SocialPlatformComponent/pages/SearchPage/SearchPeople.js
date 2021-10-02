import React, {useEffect} from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Avatar from "../../../../images/avatar.jpeg";
import Loading from "../../../../services/Loading";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
const SearchPeople = ({users}) => {
    const { currentUser } = useSelector(state => state.auth)
    const history = useHistory();
    const profileDetails = (id) => {
        history.push(`/profile/${id}`);
    }
    const isConnected = users.filter(user => currentUser?.connection.includes(user._id));
    return (
        <div className="mb-4 mt-4">
            {users.length !== 0 ? (
                <Card>
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between">
                            <h5 className="card-title">People</h5>
                        </Card.Title>
                        {users?.map(user =>
                            <Card.Text as="div" className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                    <img src={user.profile_picture ? `/api/files/storage/${user.profile_picture}` : Avatar} alt="jahed" className="img-fluid sideProfile me-3" onClick={() => profileDetails(user._id)} />
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <h6>
                                                <Link to="#" class="textHover text-dark" onClick={() => profileDetails(user._id)}>{user.name}</Link>
                                            </h6>
                                            <span className="text-muted">{user.current_position}</span>
                                        </div>
                                    </div>
                                </div>
                                {currentUser?._id === user._id && (
                                   <></>
                                )}
                                {currentUser?.connection.includes(user._id) && (
                                    <Link class="textSecondary text-decoration-none fw-bold">Connected</Link>
                                )}
                                {(!currentUser?.connection.includes(user._id) &&
                                !currentUser?.connecting.includes(user._id) &&
                                !currentUser?.connection_requests.includes(user._id) && currentUser?._id !== user._id) && (
                                    <Link class="textSecondary text-decoration-none fw-bold">Connect</Link>
                                )}


                            </Card.Text>

                        )}
                        <div className="bgPrimary text-center rounded-3 mt-4">
                            <Link to="#" className="btn w-100 text-white">View More</Link>
                        </div>
                    </Card.Body>
                </Card>
            ): <>
                <p>No Result</p>
                <Loading type={'spin'} color={'black'}/>
            </>}
        </div>

    );
};

export default SearchPeople;