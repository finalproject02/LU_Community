import React from 'react';
import { Card } from 'react-bootstrap';
import { FaDotCircle } from 'react-icons/fa';
import { useSelector } from "react-redux";
import Avatar from "../../../images/avatar.jpeg";

const Online = () => {
    const { currentUser } = useSelector(state => state.auth);
    const { people } = useSelector(state => state.people);
    const onlinePeople = people?.filter(person => currentUser.connection.includes(person._id))
    return (
        <div className="mb-4">
            {onlinePeople.length !== 0 && (
                <Card className="w-100">
                    <Card.Body>
                        <Card.Title>
                            <div class="d-flex justify-content-between align-items-center">
                                <h5 className="">Online</h5>
                                <h6 className="mb-2 textHover">See all</h6>
                            </div>
                        </Card.Title>
                        <Card.Text>
                            {
                                onlinePeople.map(item => (
                                    <div class="d-flex justify-content-between align-items-center pt-3 mb-2">
                                        <div class="d-flex justify-content-start align-items-center">
                                            <img src={item.profile_picture ? `/api/files/storage/${item.profile_picture}` : Avatar} width="45" height="45" className="rounded-circle me-2" alt="" />
                                            <h6>{item.name}</h6>
                                        </div>
                                        <div class="pb-2">
                                            <FaDotCircle className="textSecondary" />
                                        </div>
                                    </div>
                                ))
                            }
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
};

export default Online;