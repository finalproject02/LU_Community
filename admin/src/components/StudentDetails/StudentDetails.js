import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Button from '@restart/ui/esm/Button';
import {useHistory, useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {checkSSCResult, checkHSCResult, getApplication, DeleteApplication} from "../../actions/applications";
import fileDownload from "js-file-download";
import axios from "axios";
import avatar_pic from '../../images/avatar.jpeg'

const StudentDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const { id } = params;
    const { application } = useSelector(state => state.applications);


    useEffect(() => {
        dispatch(getApplication(id));
        if (application?.ssc_credential_authenticate === 'authenticated credential' && application?.hsc_credential_authenticate === 'authenticated credential' && application?.status === 'application pending') {
           setTimeout(() => {
               window.location.reload()
           }, 1000)
        }else if (application?.ssc_credential_authenticate === 'not authenticated' && application?.hsc_credential_authenticate === 'not authenticated' && application?.status === 'application pending') {
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        }

    }, [id])

    const handleDownload = (filename) => {
        axios.get(`/api/files/storage/${filename}`, {
            responseType: 'blob'
        }).then(res => {
            fileDownload(res.data, filename)
        })
    }

    return (
        <div>
            <Container>
                    <Row className="justify-content-center">
                        <Col md="10">
                            <Card className="bg-light w-100 shadow rounded my-5">
                                <Card.Body className="card-body">
                                    <Form>
                                        <fieldset>
                                            <legend>
                                                <h2 className="textPrimary">
                                                    Leading University Admission Form
                                                </h2>
                                            </legend>
                                            <h6 className="card-title textSecondary">
                                                Admission for Undergraduate Programs
                                            </h6>
                                            <hr className="mt-5" />
                                            <fieldset>
                                                <Row>
                                                    <legend>Basic Info.</legend>
                                                    <Col md="6">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Selected Program</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={application?.program_name}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Full Name of the Applicant</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={application?.applicant_name}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Applicant's Father Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={application?.applicant_fatherName}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Applicant's Father's Occupation</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={application?.applicant_father_occupation}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Applicant's Mother Name</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={application?.applicant_motherName}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Applicant's Mother Occupation</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={application?.applicant_mother_occupation}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Father's/Mother's NID No.</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={application?.father_or_mother_nid}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Applicant's Mobile</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={application?.applicant_mobile}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md="6">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Applicant's Email</Form.Label>
                                                            <Form.Control
                                                                type="email"
                                                                className="w-100"
                                                                value={application?.applicant_email}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Applicant's National ID / Birth Certificate No.
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={application?.applicant_birth_or_nid_number}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Applicant's Date of Birth
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={application?.applicant_date_of_birth}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Applicant's Gender </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={application?.applicant_gender}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Applicant's Religion</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={application?.applicant_religion}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Applicant's Nationality</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={application?.applicant_nationality}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Applicant's Marital Status</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={application?.applicant_marital_status}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Applicant's Blood Group</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={application?.applicant_blood_group}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </fieldset>
                                            <hr />
                                            <fieldset>
                                                <Row>
                                                    <legend>Guardian's Info.</legend>
                                                    <Col md="6">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Guardian's Name and Address
                                                            </Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={application?.guardian_name}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md="6">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Guardian's Contact No</Form.Label>
                                                            <Form.Control
                                                                type="text"
                                                                className="w-100"
                                                                value={application?.guardian_contact}
                                                            />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </fieldset>
                                            <hr />
                                            <fieldset>
                                                <Row>
                                                    <legend>Address</legend>
                                                    <Col md="6">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Permanent Address</Form.Label>
                                                            <Form.Control as="textarea" className="w-100" name="Permanent_Address" rows={4} value={application?.permanent_address} />
                                                        </Form.Group>
                                                    </Col>
                                                    <div className="col-md-6">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Present Address
                                                            </Form.Label>
                                                            <Form.Control as="textarea" className="w-100" name="Present_Address" rows={4} value={application?.present_address} />
                                                        </Form.Group>
                                                    </div>
                                                </Row>
                                            </fieldset>
                                            <hr />
                                            <fieldset>
                                                <Row>
                                                    <legend>Academic Info.</legend>
                                                    <Col md="6">
                                                        <fieldset>
                                                            <legend>SSC Info.</legend>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Registration no. of SSC</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    className="w-100"
                                                                    value={application?.ssc_regis_no}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Name of the Institution (SSC)</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    className="w-100"
                                                                    value={application?.ssc_institution_name}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Roll</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    className="w-100"
                                                                    value={application?.ssc_roll_no}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Group</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    className="w-100"
                                                                    value={application?.ssc_group}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label >Year</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    className="w-100"
                                                                    value={application?.ssc_year}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Board</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    className="w-100"
                                                                    value={application?.ssc_board}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>GPA</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    className="w-100"
                                                                    value={application?.ssc_gpa}
                                                                />
                                                            </Form.Group>
                                                            {application?.status === 'application pending' && (
                                                                <div className="mt-3 mb-1">
                                                                    <Button className="btn bg-success"
                                                                            onClick={() => dispatch(checkSSCResult(application?._id))}
                                                                    >Check SSC Result</Button>
                                                                </div>
                                                            )
                                                            }
                                                            { application?.ssc_credential_authenticate === 'authenticated credential' && (
                                                                  <small className="text-success">
                                                                      <FaCheckCircle/>
                                                                         The credential is valid
                                                                      </small>
                                                            )}

                                                            { application?.ssc_credential_authenticate === 'not authenticated' && (
                                                                  <small className="text-danger">
                                                                       <FaTimesCircle/>
                                                                         The credential is not valid
                                                                </small>
                                                              )}




                                                        </fieldset>
                                                    </Col>
                                                    <div className="col-md-6">
                                                        <fieldset>
                                                            <legend>HSC Info.</legend>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Registration no. of HSC</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    className="w-100"
                                                                    value={application?.hsc_regis_no}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Name of the Institution (HSC)
                                                                </Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    className="w-100"
                                                                    value={application?.hsc_institution_name}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Roll</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    className="w-100"
                                                                    value={application?.hsc_roll_no}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Group</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    className="w-100"
                                                                    value={application?.hsc_group}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Year</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    className="w-100"
                                                                    value={application?.hsc_year}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Board</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    className="w-100"
                                                                    value={application?.hsc_board}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>GPA</Form.Label>
                                                                <Form.Control
                                                                    type="text"
                                                                    className="w-100"
                                                                    value={application?.hsc_gpa}
                                                                />
                                                            </Form.Group>
                                                            {application?.status === 'application pending' &&
                                                                <div className="mt-3 mb-1">
                                                                    <Button className="btn bg-success"
                                                                            onClick={() => dispatch(checkHSCResult(application?._id))}
                                                                    >Check HSC Result</Button>
                                                                </div>
                                                            }
                                                             { application?.hsc_credential_authenticate === 'authenticated credential' && (
                                                                        <small className="text-success">
                                                                            <FaCheckCircle/>
                                                                            The credential is valid
                                                                        </small>
                                                               )}

                                                                { application?.hsc_credential_authenticate === 'not authenticated' && (
                                                                        <small className="text-danger">
                                                                            <FaTimesCircle/>
                                                                            The credential is not valid
                                                                        </small>
                                                                  )}


                                                        </fieldset>
                                                    </div>
                                                </Row>
                                            </fieldset>
                                            <hr />
                                            <fieldset>
                                                <Row>
                                                    <legend>Documents</legend>
                                                    <Col md="6" className="d-flex justify-content-center document">
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Applicant's Photo</Form.Label>
                                                            <Card.Img
                                                                src={!application?.applicant_photo ? avatar_pic : `/api/files/storage/${application?.applicant_photo}`}
                                                                className="img-fluid w-75 p-2 img-thumbnail"
                                                                alt="image_name"
                                                                onClick={() => handleDownload(application?.applicant_photo)}
                                                            />
                                                        </Form.Group>
                                                        {application?.guardian_photo && (
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>Guardian's Photo</Form.Label>
                                                                <Card.Img
                                                                    src={`/api/files/storage/${application?.guardian_photo}`}
                                                                    className="img-fluid w-75 p-2 img-thumbnail"
                                                                    alt="image_name"
                                                                />
                                                            </Form.Group>
                                                        )}
                                                    </Col>
                                                    <Col md="6" className="d-flex justify-content-center">
                                                        { application?.ssc_transcript && application?.hsc_transcript ? (
                                                            <>
                                                                <Form.Group className="mb-3">
                                                                    <Form.Label>SSC Transcript</Form.Label>
                                                                    <Card.Img
                                                                        src={`/api/file/storage/${application?.ssc_transcript}`}
                                                                        className="img-fluid w-75 p-2 img-thumbnail"
                                                                        alt="image_name"
                                                                    />
                                                                </Form.Group>
                                                            <Form.Group className="mb-3">
                                                                <Form.Label>HSC Transcript</Form.Label>
                                                                <Card.Img
                                                                    src={`/api/file/storage/${application?.hsc_transcript}`}
                                                                    className="img-fluid w-75 p-2 img-thumbnail"
                                                                    alt="image_name"
                                                                />
                                                            </Form.Group>
                                                           </>
                                                        ) : null}
                                                    </Col>
                                                </Row>
                                            </fieldset>
                                            <br />
                                            <div className="d-flex justify-content-between px-3">
                                                <div>
                                                    <input type="button" value="Reject Request" className="btn btn-danger" onClick={() => dispatch(DeleteApplication(application._id, history))}/>
                                                </div>
                                                <div>
                                                    <input type="submit" value="Accept Request" className="btn btn-success" />
                                                </div>
                                            </div>
                                        </fieldset>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

            </Container>
        </div>
    );
};

export default StudentDetails;