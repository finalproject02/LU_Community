import {useState} from 'react';
import { Card } from 'react-bootstrap';
import Avatar from "../../../../images/avatar.jpeg";
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Connect, Disconnect} from "../../../../actions/auth";

const SearchPeople = ({ users }) => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector(state => state.auth)
    const [moreShow, setMoreShow] = useState(false)
    const history = useHistory();
    const profileDetails = (id) => {
        history.push(`/profile/${id}`);
    }
    return (
        <div className="mb-4 mt-4">
            {users.length !== 0 && (
                <Card>
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between">
                            <h5 className="card-title">People</h5>
                        </Card.Title>
                        {!moreShow && users?.slice(0, 5).map(user =>
                            <Card.Text as="div" className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                    <img src={user.profile_picture ? `/api/files/storage/${user.profile_picture}` : Avatar} alt={user.name} width="55" height="55" className="rounded-circle me-2" onClick={() => profileDetails(user._id)} />
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <h6 className="textHover text-dark" style={{cursor: 'pointer'}} onClick={() => profileDetails(user._id)}>{user.name}</h6>
                                            <span className="text-muted">{user.current_position}</span>
                                        </div>
                                    </div>
                                </div>
                                {currentUser?._id === user._id && (
                                    <></>
                                )}
                                {currentUser?.connection.includes(user._id) && (
                                    <strong className="textSecondary cursor">Connected</strong>
                                )}
                                {(!currentUser?.connection.includes(user._id) &&
                                    !currentUser?.connecting.includes(user._id) &&
                                    !currentUser?.connection_requests.includes(user._id) && currentUser?._id !== user._id) && (
                                    <strong onClick={() => dispatch(Connect(user._id))} className="textSecondary cursor">Connect</strong>
                                )}
                                {currentUser?.connecting.includes(user._id) && <strong className="textSecondary cursor" onClick={() => dispatch(Disconnect(user._id))}>Remove connection</strong>}

                            </Card.Text>

                        )}
                        {!moreShow && users.length > 5 && <div className="bgPrimary text-center rounded-3 mt-4">
                            <strong className="btn w-100 text-white" onClick={() => setMoreShow(true)}>View More</strong>
                        </div>}

                        {moreShow && users?.map(user =>
                            <Card.Text as="div" className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                    <img src={user.profile_picture ? `/api/files/storage/${user.profile_picture}` : Avatar} alt={user.name} width="55" height="55" className="rounded-circle me-2" onClick={() => profileDetails(user._id)} />
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <h6 className="textHover text-dark" style={{cursor: 'pointer'}} onClick={() => profileDetails(user._id)}>{user.name}</h6>
                                            <span className="text-muted">{user.current_position}</span>
                                        </div>
                                    </div>
                                </div>
                                {currentUser?._id === user._id && (
                                    <></>
                                )}
                                {currentUser?.connection.includes(user._id) && (
                                    <strong className="textSecondary cursor">Connected</strong>
                                )}
                                {(!currentUser?.connection.includes(user._id) &&
                                    !currentUser?.connecting.includes(user._id) &&
                                    !currentUser?.connection_requests.includes(user._id) && currentUser?._id !== user._id) && (
                                    <span onClick={() => alert('hi')} className="textSecondary cursor" >Connect</span>
                                )}

                                {currentUser?.connecting.includes(user._id) && <strong className="textSecondary cursor" onClick={() => dispatch(Disconnect(user._id))}>Remove connection</strong>}


                            </Card.Text>

                        )}

                    </Card.Body>
                </Card>
            )}

        </div>

    );
};

export default SearchPeople;