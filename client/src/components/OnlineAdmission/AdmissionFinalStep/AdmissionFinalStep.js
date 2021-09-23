import React, {useState} from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import path from "path";
import { createApplication } from "../../../actions/applications";
import { uploadFile } from "../../../actions/files";
import { useDispatch } from "react-redux";

const AdmissionFinalStep = ({secondFormData}) => {
    const [finalFormData, setFinalFormData] = useState({ ssc_regis_no: '', ssc_institution_name: '', ssc_roll_no: '', ssc_group: '', ssc_year: '', ssc_board: '', ssc_gpa: '', hsc_regis_no: '', hsc_institution_name: '', hsc_roll_no: '', hsc_group: '', hsc_year: '', hsc_board: '', hsc_gpa: ''});
    const [applicantPhoto, setApplicantPhoto] = useState('');
    const [guardianPhoto, setGuardianPhoto] = useState('');
    const [sscTranscript, setSscTranscript] = useState('');
    const [hscTranscript, setHscTranscript] = useState('');
    const dispatch = useDispatch();
    const handleChange = (e) => setFinalFormData({...secondFormData, ...finalFormData, [e.target.name] : e.target.value});
    const handleSubmit =  async (e) => {
        e.preventDefault();
        if (!applicantPhoto) {
            alert('Please provide your Photo')
        } else {
            if (applicantPhoto.size > 1000000) {
                alert('You should provide image blow of 1MB')
            }
            const applicantPhotoName = uuidv4() + path.extname(applicantPhoto.name);
            finalFormData.applicant_photo = applicantPhotoName
            const fileDate = new FormData();
            fileDate.append('name', applicantPhotoName);
            fileDate.append('file', applicantPhoto)
            await dispatch(uploadFile(fileDate))

        }
        if (guardianPhoto || sscTranscript || hscTranscript) {
            const guardianPhotoName = uuidv4() + path.extname(guardianPhoto.name)
            const sscTranscriptName = uuidv4() + path.extname(sscTranscript.name)
            const hscTranscriptName = uuidv4() + path.extname(hscTranscript.name)

            finalFormData.guardian_photo = guardianPhotoName;
            finalFormData.ssc_transcript = sscTranscriptName;
            finalFormData.hsc_transcript = hscTranscriptName;

            const guardianPhotoData = new FormData();
            const sscTranscriptData = new FormData();
            const hscTranscriptData = new FormData();

            guardianPhotoData.append('name', guardianPhotoName);
            guardianPhotoData.append('file', guardianPhoto);

            sscTranscriptData.append('name', sscTranscriptName);
            sscTranscriptData.append('file', sscTranscript);

            hscTranscriptData.append('name', hscTranscriptName);
            hscTranscriptData.append('file', hscTranscript);

            dispatch(uploadFile(guardianPhotoData));
            dispatch(uploadFile(sscTranscriptData));
            dispatch(uploadFile(hscTranscriptData));
        }
        await dispatch(createApplication(finalFormData))

    }
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md="8">
                        <Card className="bg-light w-100 shadow rounded my-5">
                            <Card.Body className="p-4">
                                <Form onSubmit={handleSubmit}>
                                    <fieldset>
                                        <Row>
                                            <legend>
                                                <h2 className="textPrimary">Academic Info.</h2>
                                            </legend>
                                            <h6 className="card-title textSecondary">Admission for Graduate Programs</h6>
                                            <div className="col-md-6">
                                                <fieldset>
                                                    <legend>SSC Info.</legend>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Registration no.of SSC
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            className="w-100"
                                                            placeholder="ssc registration number"
                                                            name={'ssc_regis_no'}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Name of the
                                                            Institution (SSC)
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            placeholder="ssc institution name"
                                                            name={"ssc_institution_name"}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Roll
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            className="w-100"
                                                            placeholder="ssc roll"
                                                            name={'ssc_roll_no'}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Group
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            placeholder="ssc group"
                                                            onChange={handleChange}
                                                            name={'ssc_group'}
                                                            required
                                                        />
               <div className="text-end">
                          <button className="btn bg-primary text-white px-5" type={'submit'}>
                            Next
                          </button>
                        </div>                                      </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Year
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            className="w-100"
                                                            placeholder="ssc year"
                                                            name={'ssc_year'}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Board
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            id="ssc_board"
                                                            placeholder="ssc board"
                                                            onChange={handleChange}
                                                            name={'ssc_board'}
                                                            required
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>GPA
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            className="w-100"
                                                            name="ssc_gpa"
                                                            placeholder="ssc gpa"
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </fieldset>
                                            </div>
                                            <Col md="6">
                                                <fieldset>
                                                    <legend>HSC Info.</legend>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Registration no.of HSC
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            className="w-100"
                                                            placeholder="hsc registration number"
                                                            onChange={handleChange}
                                                            name={'hsc_regis_no'}
                                                            required
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Name of the
                                                            Institution (HSC)
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            name="hsc_institution_name"
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Roll
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            className="w-100"
                                                            name="hsc_roll_no"
                                                            onChange={handleChange}
                                                            placeholder="hsc roll"
                                                            required
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Group
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            placeholder="hsc group"
                                                            onChange={handleChange}
                                                            name={'hsc_group'}
                                                            required
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Year
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            className="w-100"
                                                            name="hsc_year"
                                                            placeholder="hsc year"
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>Board
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            name="hsc_board"
                                                            placeholder="hsc board"
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>GPA
                                                            <span className="text-danger fw-bolder">*</span></Form.Label>
                                                        <Form.Control
                                                            type="number"
                                                            className="w-100"
                                                            name="hsc_gpa"
                                                            placeholder="hsc gpa"
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </fieldset>
                                            </Col>
                                        </Row>
                                    </fieldset>
                                    <fieldset>
                                        <Row>
                                            <legend>Upload Documents</legend>
                                            <Col md="6">
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Upload Applicant's Photo
                                                        (Max 1 MB)
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control
                                                        type="file"
                                                        className="w-100"
                                                        name="applicant_photo"
                                                        onChange={(e) => setApplicantPhoto(e.target.files[0])}
                                                        accept={'image/*'}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Upload Guardian's Photo
                                                        (Max 1 MB)
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control
                                                        type="file"
                                                        className="w-100"
                                                        name="guardian_photo"
                                                        accept={'image/*'}
                                                        onChange={(e) => setGuardianPhoto(e.target.files[0])}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md="6">
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Upload SSC Transcript
                                                        (Max 1 MB)
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control
                                                        type="file"
                                                        className="w-100"
                                                        name="ssc_transcript"
                                                        accept={'application/pdf'}
                                                        onChange={(e) => setSscTranscript(e.target.files[0])}
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Upload HSC Transcript
                                                        (Max 1 MB)
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Control
                                                        type="file"
                                                        className="w-100"
                                                        name="hsc_transcript"
                                                        accept={'application/pdf'}
                                                        onChange={(e) => setHscTranscript(e.target.files[0])}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                    </fieldset>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <button className="btn bg-primary text-white px-5" type={'button'}>
                                            Previous
                                        </button>
                                        <button className="btn bg-primary text-white px-5" type={'submit'}>
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    };
    export default AdmissionFinalStep