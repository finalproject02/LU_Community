import React, { useState } from 'react';
import { Card, Col, Form, Modal, Row } from 'react-bootstrap';
import { FaCalendar, FaEye, FaGlobe, FaRegEdit, FaTrashAlt, FaUsers, FaLock, FaEyeSlash } from 'react-icons/fa';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { GroupUpdate } from "../../../actions/groups";


const AboutGroup = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const { id } = params;
    const { groups } = useSelector(state => state.groups);
    const { currentUser } = useSelector(state => state.auth);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showSecond, setShowSecond] = useState(false);
    const handleCloseSecond = () => setShowSecond(false);
    const handleShowSecond = () => setShowSecond(true);

    const [data, setData] = useState();
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(GroupUpdate(data, id))
        handleClose()
    }

    const [dataSecond, setDataSecond] = useState();
    const handleChangeSecond = (e) => setDataSecond({ ...dataSecond, [e.target.name]: e.target.value });
    const handleSubmitSecond = (e) => {
        e.preventDefault();
        dispatch(GroupUpdate(dataSecond, id))
        handleCloseSecond()
    }

    const paramsGroup = groups?.filter(group => group._id === id);
    const isCreator = groups?.filter(group => group.creator_id === currentUser._id && group._id === id)
    return (
        <div>
            <Row className="d-flex justify-content-center">
                {paramsGroup.slice(0, 1).map(group =>
                    <Col md="8">
                        <Card className="w-100 mb-4">
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                    <Card.Title className="m-3">About Group</Card.Title>
                                    {isCreator.length !== 0 && <FaRegEdit className="m-3" onClick={handleShow} />}
                                </div>
                                <hr />
                                <Card.Text className="p-3">
                                    {group.privacy === 'public' ?
                                        <Card.Text as="div">
                                            <h6 className="pt-2">
                                                <FaGlobe className="me-2" />
                                                Public
                                            </h6>
                                            <p className="ms-4">Anyone can see who's in the group and what they post.</p>
                                        </Card.Text> :

                                        <Card.Text as="div">
                                            <h6 className="pt-2">
                                                <FaLock className="me-2" />
                                                Private
                                            </h6>
                                            <p className="ms-4">Only members can see who's in the group and what they post.</p>
                                        </Card.Text>

                                    }
                                    {group.visibility === 'visible' ?
                                        <Card.Text as="div">
                                            <h6 className="pt-2">
                                                <FaEye className="me-2" />
                                                Visible
                                            </h6>
                                            <p className="ms-4">Anyone can find this group</p>
                                        </Card.Text> :

                                        <Card.Text as="div">
                                            <h6 className="pt-2">
                                                <FaEyeSlash className="me-2" />
                                                Invisible
                                            </h6>
                                            <p className="ms-4">Anyone can't find this group</p>
                                        </Card.Text>
                                    }
                                    <Card.Text as="div">
                                        <h6 className="pt-2">
                                            <FaCalendar className="me-2" />
                                            Created
                                        </h6>
                                        <p className="ms-4">{moment(group.createdAt).format('MM-DD-YYYY')}</p>
                                    </Card.Text>
                                    <Card.Text as="div">
                                        <h6 className="pt-2">
                                            <FaUsers className="me-2" />
                                            Total Members
                                        </h6>
                                        <p className="ms-4">{group.members.length} {group.members.length > 1 ? 'members' : 'member'}</p>
                                    </Card.Text>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="w-100">
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                    <Card.Title className="m-3">Group rules from the admins</Card.Title>
                                    {isCreator.length !== 0 && <FaRegEdit className="m-3" onClick={handleShowSecond} />}
                                </div>
                                <hr />
                                <Card.Text className="p-3">
                                    {group.rules.map(rule => (
                                        <Card.Text as="div">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="pt-2">{rule.title}</h6>
                                                {isCreator.length !== 0 && <FaTrashAlt style={{ cursor: 'pointer' }} onClick={() => dispatch(GroupUpdate({ title: rule.title, description: rule.description }, id))} />}
                                            </div>
                                            <p>{rule.description}</p>
                                        </Card.Text>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                )}
            </Row>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit About</Modal.Title>
                </Modal.Header>
                {paramsGroup.slice(0, 1).map(group => (
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Floating className="mb-3">
                                <Form.Control type="text" placeholder="Group Name" defaultValue={group.name} onChange={handleChange} name="name" />
                                <label for="floatingInput">Group Name</label>
                            </Form.Floating>
                            <Form.Select className="mb-3 py-2" onChange={handleChange} name="privacy" defaultValue={group.privacy}>
                                <option>Choose Privacy</option>
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                            </Form.Select>
                            <Form.Select className="mb-3 py-2" onChange={handleChange} name="visibility" defaultValue={group.visibility}>
                                <option>Choose Visibility</option>
                                <option value="visible">Visible</option>
                                <option value="hidden">Hidden</option>
                            </Form.Select>
                            <div className="bgSecondary text-center mt-4 rounded-3">
                                <input type="submit" value="Save Changes" className="btn w-100 text-white" />
                            </div>
                        </Form>
                    </Modal.Body>
                ))}
                <Modal.Footer>

                </Modal.Footer>
            </Modal>

            <Modal
                show={showSecond}
                onHide={handleCloseSecond}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Group Rules</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmitSecond}>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" onChange={handleChangeSecond} name="title" />
                            <label for="floatingInput">Title</label>
                        </Form.Floating>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={handleChangeSecond} name="description" />
                        </Form.Group>
                        <div className="bgSecondary text-center mt-4 rounded-3">
                            <input type="submit" value="Save Changes" className="btn w-100 text-white" onClick={handleClose} />
                        </div>
                    </Form>
                </Modal.Body>

            </Modal>
        </div>
    );
};

export default AboutGroup;