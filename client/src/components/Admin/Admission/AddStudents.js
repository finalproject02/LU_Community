import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const AddStudents = () => {
    const [Data, setData] = useState({ program_name: 'css', applicant_email: '', applicant_name: '', applicant_birth_or_nid_number: '', applicant_fatherName: '', applicant_date_of_birth: '', applicant_father_occupation: '', applicant_gender: 'male', applicant_motherName: '', applicant_religion: 'islam', applicant_mother_occupation: '', applicant_nationality: '', father_or_mother_nid: '', applicant_marital_status: '', applicant_mobile: '', applicant_blood_group: '', guardian_name: '', guardian_contact: '', present_address: '', permanent_address: '', ssc_regis_no: '', ssc_institution_name: '', ssc_roll_no: '', ssc_group: '', ssc_year: '', ssc_board: '', ssc_gpa: '', hsc_regis_no: '', hsc_institution_name: '', hsc_roll_no: '', hsc_group: '', hsc_year: '', hsc_board: '', hsc_gpa: '' });
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => setData({ ...Data, [e.target.name]: e.target.value });

    const [applicantPhoto, setApplicantPhoto] = useState('');
    const [guardianPhoto, setGuardianPhoto] = useState('');
    const [sscTranscript, setSscTranscript] = useState('');
    const [hscTranscript, setHscTranscript] = useState('');
    return (
        <div>
            <AdminNavbar/>
            <Container>
                <Row className="justify-content-center">
                    <Col md="10">
                        <Card className="bg-light w-100 shadow rounded my-5">
                            <Card.Body className="card-body">
                                <Form onSubmit={handleSubmit}>
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
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>
                                                            Select the Program
                                                            <span className="text-danger fw-bolder">*</span>
                                                        </Form.Label>
                                                        <Form.Select
                                                            className="w-100"
                                                            name="program_name"
                                                            onChange={handleChange}
                                                        >
                                                            <option value="cse">--select program--</option>
                                                            <option value="cse">BBA</option>
                                                            <option value="cse">CSE</option>
                                                            <option value="english">English</option>
                                                            <option value="eee">EEE</option>
                                                            <option value="civil">Civil</option>
                                                            <option value="civil">Architecture</option>
                                                            <option value="civil">Law</option>
                                                            <option value="civil">Islamic Studies</option>
                                                            <option value="civil">Public health</option>
                                                            <option value="civil">Tourism and Hospitality Management</option>
                                                            <option value="bangla">Bangla</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Full Name of the Applicant</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            onChange={handleChange}
                                                            required
                                                            name="applicant_name"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Father Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            onChange={handleChange}
                                                            required
                                                            name="applicant_fatherName"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Father's Occupation</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            onChange={handleChange}
                                                            required
                                                            name="applicant_father_occupation"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Mother Name</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            onChange={handleChange}
                                                            required
                                                            name="applicant_motherName"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Mother Occupation</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            onChange={handleChange}
                                                            required
                                                            name="applicant_mother_occupation"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Father's/Mother's NID No.</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            onChange={handleChange}
                                                            required
                                                            name="father_or_mother_nid"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Mobile</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            onChange={handleChange}
                                                            required
                                                            name="applicant_mobile"
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Email</Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            className="w-100"
                                                            onChange={handleChange}
                                                            required
                                                            name="applicant_email"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's National ID / Birth Certificate No.
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            onChange={handleChange}
                                                            required
                                                            name="applicant_birth_or_nid_number"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Date of Birth
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            onChange={handleChange}
                                                            required
                                                            name="applicant_date_of_birth"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>
                                                            Applicant's Gender
                                                        </Form.Label>
                                                        <Form.Select
                                                            className="w-100 "
                                                            name="applicant_gender"
                                                            onChange={handleChange}
                                                            required
                                                        >
                                                            <option value="male">Male</option>
                                                            <option value="female">Female</option>
                                                            <option value="other">Other</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>
                                                            Applicant's Religion
                                                        </Form.Label>
                                                        <Form.Select
                                                            className="w-100 "
                                                            name="applicant_religion"
                                                            onChange={handleChange}
                                                        >
                                                            <option value="islam">--Add Religion--</option>
                                                            <option value="islam">Islam</option>
                                                            <option value="chirstian">Chirstian</option>
                                                            <option value="hindu">Hindu</option>
                                                            <option value="buddist">Buddist</option>
                                                            <option value="other">Other</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Nationality</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            onChange={handleChange}
                                                            required
                                                            name="applicant_nationality"
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                                        <Form.Label>
                                                            Applicant's Marital Status
                                                            <span className="text-danger fw-bolder">*</span>
                                                        </Form.Label>
                                                        <Form.Select
                                                            className="w-100"
                                                            name="applicant_marital_status"
                                                            onChange={handleChange}
                                                        >
                                                            <option>--select status--</option>
                                                            <option value="Married">Married</option>
                                                            <option value="Unmarried">Unmarried</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Applicant's Blood Group</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            onChange={handleChange}
                                                            required
                                                            name="applicant_blood_group"
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
                                                        <Form.Label>
                                                            Guardian's Name
                                                            <span className="text-danger fw-bolder">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            placeholder="guardian's name"
                                                            name={'guardian_name'}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <hr />
                                                <Col md="6">
                                                    <Form.Group
                                                        className="mb-3">
                                                        <Form.Label>
                                                            Guardian's Contact No
                                                            <span className="text-danger fw-bolder">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            className="w-100"
                                                            id="g_contact"
                                                            placeholder="guardian's contact no"
                                                            name={'guardian_contact'}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </fieldset>
                                        <fieldset>
                                            <Row>
                                                <legend>Address</legend>
                                                <Col md="6">
                                                    <Form.Group
                                                        className="mb-3">
                                                        <Form.Label>
                                                            Permanent Address
                                                            <span className="text-danger fw-bolder">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            className="w-100"
                                                            as="textarea"
                                                            rows={5}
                                                            onChange={handleChange}
                                                            name={'permanent_address'}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                                <Col md="6">
                                                    <Form.Group className="mb-3">
                                                        <Form.Label> Present Address
                                                            <span className="text-danger fw-bolder">*</span>
                                                        </Form.Label>
                                                        <Form.Control
                                                            className="w-100"
                                                            as="textarea"
                                                            rows={5}
                                                            onChange={handleChange}
                                                            name={'present_address'}
                                                            required
                                                        />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </fieldset>
                                        <hr />
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
                                                            <Form.Label>
                                                                Group
                                                                <span className="text-danger fw-bolder">*</span>
                                                            </Form.Label>
                                                            <Form.Select
                                                                type="text"
                                                                className="w-100"
                                                                placeholder="ssc group"
                                                                onChange={handleChange}
                                                                name={'ssc_group'}
                                                                required
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
                                                                type="number"
                                                                className="w-100"
                                                                placeholder="ssc year"
                                                                name={'ssc_year'}
                                                                onChange={handleChange}
                                                                required>
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
                                                                type="text"
                                                                className="w-100"
                                                                id="ssc_board"
                                                                placeholder="ssc board"
                                                                onChange={handleChange}
                                                                name={'ssc_board'}
                                                                required
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
                                                                step={'any'}
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
                                                            <Form.Label>
                                                                Group
                                                                <span className="text-danger fw-bolder">*</span>
                                                            </Form.Label>
                                                            <Form.Select
                                                                type="text"
                                                                className="w-100"
                                                                placeholder="hsc group"
                                                                onChange={handleChange}
                                                                name={'hsc_group'}
                                                                required
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
                                                                type="number"
                                                                className="w-100"
                                                                name="hsc_year"
                                                                placeholder="hsc year"
                                                                onChange={handleChange}
                                                                required>
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
                                                                type="text"
                                                                className="w-100"
                                                                name="hsc_board"
                                                                placeholder="hsc board"
                                                                onChange={handleChange}
                                                                required
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
                                                                step={'any'}
                                                                required
                                                            />
                                                        </Form.Group>
                                                    </fieldset>
                                                </Col>
                                            </Row>
                                        </fieldset>
                                        <hr />
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
                                        <br />
                                        <div className="px-3 text-end">
                                            <div>
                                                <input type="submit" value="Add Student" className="btn btn-success" />
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

export default AddStudents;