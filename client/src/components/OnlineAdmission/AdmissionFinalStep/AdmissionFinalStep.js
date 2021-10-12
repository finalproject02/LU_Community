import React, { useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import path from "path";
import { createApplication } from "../../../actions/applications";
import { uploadFile } from "../../../actions/files";
import { useDispatch } from "react-redux";

const AdmissionFinalStep = ({ secondFormData }) => {
    const [finalFormData, setFinalFormData] = useState({ ssc_regis_no: '', ssc_institution_name: '', ssc_roll_no: '', ssc_group: '', ssc_year: '', ssc_board: '', ssc_gpa: '', hsc_regis_no: '', hsc_institution_name: '', hsc_roll_no: '', hsc_group: '', hsc_year: '', hsc_board: '', hsc_gpa: '' });
    const [applicantPhoto, setApplicantPhoto] = useState('');
    const [guardianPhoto, setGuardianPhoto] = useState('');
    const [sscTranscript, setSscTranscript] = useState('');
    const [hscTranscript, setHscTranscript] = useState('');
    const dispatch = useDispatch();
    const handleChange = (e) => setFinalFormData({ ...secondFormData, ...finalFormData, [e.target.name]: e.target.value });
    const handleSubmit = async (e) => {
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
                                        <h6 className="card-title textSecondary">Admission for Undergraduate Programs</h6>
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

                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>
                                                        Group
                                                        <span className="text-danger fw-bolder">*</span>
                                                    </Form.Label>
                                                    <Form.Select
                                                        className="w-100"
                                                        name={'ssc_group'}
                                                        onChange={handleChange}
                                                    >
                                                        <option>--select group--</option>
                                                        <option value="science">Science</option>
                                                        <option value="arts">Arts</option>
                                                        <option value="commerce">Commerce</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Year
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Select
                                                        className="w-100"
                                                        name={'ssc_year'}
                                                        onChange={handleChange}>
                                                        <option >--select year--</option>
                                                        <option value="2030">2030</option>
                                                        <option value="2029">2029</option>
                                                        <option value="2028">2028</option>
                                                        <option value="2027">2027</option>
                                                        <option value="2026">2026</option>
                                                        <option value="2025">2025</option>
                                                        <option value="2024">2024</option>
                                                        <option value="2023">2023</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2021">2021</option>
                                                        <option value="2020">2020</option>
                                                        <option value="2019">2019</option>
                                                        <option value="2018">2018</option>
                                                        <option value="2017">2017</option>
                                                        <option value="2016">2016</option>
                                                        <option value="2015">2015</option>
                                                        <option value="2014">2014</option>
                                                        <option value="2013">2013</option>
                                                        <option value="2012">2012</option>
                                                        <option value="2011">2011</option>
                                                        <option value="2010">2010</option>
                                                        <option value="2009">2009</option>
                                                        <option value="2008">2008</option>
                                                        <option value="2007">2007</option>
                                                        <option value="2006">2006</option>
                                                        <option value="2005">2005</option>
                                                        <option value="2004">2004</option>
                                                        <option value="2003">2003</option>
                                                        <option value="2002">2002</option>
                                                        <option value="2001">2001</option>
                                                        <option value="2000">2000</option>
                                                        <option value="1999">1999</option>
                                                        <option value="1998">1998</option>
                                                        <option value="1997">1997</option>
                                                        <option value="1996">1996</option>
                                                        <option value="1995">1995</option>
                                                        <option value="1994">1994</option>
                                                        <option value="1993">1993</option>
                                                        <option value="1992">1992</option>
                                                        <option value="1991">1991</option>
                                                        <option value="1990">1990</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>
                                                        Board
                                                        <span className="text-danger fw-bolder">*</span>
                                                    </Form.Label>
                                                    <Form.Select
                                                        className="w-100"
                                                        name={'ssc_board'}
                                                        onChange={handleChange}
                                                    >
                                                        <option >--select board--</option>
                                                        <option value="barisal">Barisal</option>
                                                        <option value="chittagong">Chittagong</option>
                                                        <option value="comilla">Comilla</option>
                                                        <option value="dhaka">Dhaka</option>
                                                        <option value="dinajpur">Dinajpur</option>
                                                        <option value="jessore">Jessore</option>
                                                        <option value="mymenshing">Mymenshing</option>
                                                        <option value="rajshahi">Rajshahi</option>
                                                        <option value="sylhet">Sylhet</option>
                                                        <option value="madrasha">Madrasha</option>
                                                        <option value="sylhet">Sylhet</option>
                                                        <option value="technica">Technica</option>
                                                    </Form.Select>
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

                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>
                                                        Group
                                                        <span className="text-danger fw-bolder">*</span>
                                                    </Form.Label>
                                                    <Form.Select
                                                        className="w-100"
                                                        name={'hsc_group'}
                                                        onChange={handleChange}
                                                    >
                                                        <option>--select group--</option>
                                                        <option value="science">Science</option>
                                                        <option value="arts">Arts</option>
                                                        <option value="commerce">Commerce</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Year
                                                        <span className="text-danger fw-bolder">*</span></Form.Label>
                                                    <Form.Select
                                                        className="w-100"
                                                        name={'hsc_year'}
                                                        onChange={handleChange}>
                                                        <option >--select year--</option>
                                                        <option value="2030">2030</option>
                                                        <option value="2029">2029</option>
                                                        <option value="2028">2028</option>
                                                        <option value="2027">2027</option>
                                                        <option value="2026">2026</option>
                                                        <option value="2025">2025</option>
                                                        <option value="2024">2024</option>
                                                        <option value="2023">2023</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2021">2021</option>
                                                        <option value="2020">2020</option>
                                                        <option value="2019">2019</option>
                                                        <option value="2018">2018</option>
                                                        <option value="2017">2017</option>
                                                        <option value="2016">2016</option>
                                                        <option value="2015">2015</option>
                                                        <option value="2014">2014</option>
                                                        <option value="2013">2013</option>
                                                        <option value="2012">2012</option>
                                                        <option value="2011">2011</option>
                                                        <option value="2010">2010</option>
                                                        <option value="2009">2009</option>
                                                        <option value="2008">2008</option>
                                                        <option value="2007">2007</option>
                                                        <option value="2006">2006</option>
                                                        <option value="2005">2005</option>
                                                        <option value="2004">2004</option>
                                                        <option value="2003">2003</option>
                                                        <option value="2002">2002</option>
                                                        <option value="2001">2001</option>
                                                        <option value="2000">2000</option>
                                                        <option value="1999">1999</option>
                                                        <option value="1998">1998</option>
                                                        <option value="1997">1997</option>
                                                        <option value="1996">1996</option>
                                                        <option value="1995">1995</option>
                                                        <option value="1994">1994</option>
                                                        <option value="1993">1993</option>
                                                        <option value="1992">1992</option>
                                                        <option value="1991">1991</option>
                                                        <option value="1990">1990</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>
                                                        Board
                                                        <span className="text-danger fw-bolder">*</span>
                                                    </Form.Label>
                                                    <Form.Select
                                                        className="w-100"
                                                        name={'hsc_board'}
                                                        onChange={handleChange}
                                                    >
                                                        <option >--select board--</option>
                                                        <option value="barisal">Barisal</option>
                                                        <option value="chittagong">Chittagong</option>
                                                        <option value="comilla">Comilla</option>
                                                        <option value="dhaka">Dhaka</option>
                                                        <option value="dinajpur">Dinajpur</option>
                                                        <option value="jessore">Jessore</option>
                                                        <option value="mymenshing">Mymenshing</option>
                                                        <option value="rajshahi">Rajshahi</option>
                                                        <option value="sylhet">Sylhet</option>
                                                        <option value="madrasha">Madrasha</option>
                                                        <option value="sylhet">Sylhet</option>
                                                        <option value="technica">Technica</option>
                                                    </Form.Select>
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