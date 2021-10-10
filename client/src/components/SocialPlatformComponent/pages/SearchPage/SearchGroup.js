import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import computer from "../../../../images/computerclub.jpg";
import cultural from "../../../../images/culturalclub.png";
import Avatar from "../../../../images/avatar.jpeg";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {CancelRequest, MemberRequest} from "../../../../actions/groups";

function SearchGroup({groups}) {
    const dispatch = useDispatch()
    const history = useHistory();
    const [moreShow, setMoreShow] = useState(false);
    const { currentUser } = useSelector(state => state.auth)
    return (
        <div>
            {groups.length !== 0 && (
                <Card>
                    <Card.Body>
                        <Card.Title className="d-flex justify-content-between">
                            <h5>Group</h5>
                        </Card.Title>

                        {!moreShow && groups.slice(0, 5).map(group =>  (
                            <Card.Text as="div" className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                    <img src={group.cover_picture ? `/api/files/storage/${group.cover_picture}`: Avatar} alt="jahed" width="55" height="55" className="rounded-circle me-3" />
                                    <div className="d-flex align-items-center">
                                        <h6 className="textHover text-dark" style={{cursor: 'pointer'}} onClick={() => history.push(`/group/${group._id}`)}>{group.name}</h6>
                                    </div>
                                </div>
                                {currentUser?._id === group.creator_id && <></>}
                                {currentUser?.connecting.includes(group._id) && <strong className="textSecondary cursor" style={{cursor: 'pointer'}} onClick={() => dispatch(CancelRequest(group._id))}>Cancel Request</strong>}
                                {currentUser?.memberships.includes(group._id) && <strong className="textSecondary cursor" style={{cursor: 'pointer'}}>Joined</strong>}
                                {(!currentUser?.connecting.includes(group._id)) && (!currentUser?.memberships.includes(group._id)) && (currentUser?._id !== group.creator_id) && <strong className="textSecondary cursor" style={{cursor: 'pointer'}} onClick={() => dispatch(MemberRequest(group._id))}>Join</strong>}
                            </Card.Text>
                        ))}
                        {!moreShow && groups.length > 5 && (
                            <div className="bgPrimary text-center rounded-3 mt-4">
                                <strong className="btn w-100 text-white" onClick={() => setMoreShow(true)}>View More</strong>
                            </div>
                        )}

                        {moreShow && groups.map(group =>  (
                            <Card.Text as="div" className="d-flex justify-content-between align-items-center">
                                <div className="d-flex justify-content-start align-items-center pt-3 mb-2">
                                    <img src={group.cover_picture ? `/api/files/storage/${group.cover_picture}`: Avatar} alt="jahed" width="55" height="55" className="rounded-circle me-3" />
                                    <div className="d-flex align-items-center">
                                        <h6 className="textHover text-dark" style={{cursor: 'pointer'}} onClick={() => history.push(`/group/${group._id}`)}>{group.name}</h6>
                                    </div>
                                </div>
                                {currentUser?._id === group.creator_id && <></>}
                                {currentUser?.connecting.includes(group._id) && <strong className="textSecondary cursor" style={{cursor: 'pointer'}} onClick={() => dispatch(CancelRequest(group._id))}>Cancel Request</strong>}
                                {currentUser?.memberships.includes(group._id) && <strong className="textSecondary cursor" style={{cursor: 'pointer'}}>Joined</strong>}
                                {(!currentUser?.connecting.includes(group._id)) && (!currentUser?.memberships.includes(group._id)) && (currentUser?._id !== group.creator_id) && <strong className="textSecondary cursor" style={{cursor: 'pointer'}} onClick={() => dispatch(MemberRequest(group._id))}>Join</strong>}
                            </Card.Text>
                        ))}
                    </Card.Body>
                </Card>
            )}
        </div>
    )
}

export default SearchGroup;
