import React, { useState } from 'react'
import { Card, Col, Container, Row, Modal, Form } from 'react-bootstrap';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import { FaRegEdit } from "react-icons/fa";
import Avatar from "../../../images/avatar.jpeg";
import { useSelector } from "react-redux";
import moment from "moment";

function TeacherProfile() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { currentUser } = useSelector(state => state.auth)
    const [data, setData] = useState();
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose()
    }

    const [showSecond, setShowSecond] = useState(false);
    const handleCloseSecond = () => setShowSecond(false);
    const handleShowSecond = () => setShowSecond(true);
    const [dataSecond, setDataSecond] = useState();
    const handleChangeSecond = (e) => setDataSecond({ ...dataSecond, [e.target.name]: e.target.value });
    const handleSubmitSecond = (e) => {
        e.preventDefault();
        handleCloseSecond()
    }
    return (
        <div>
            <AdminNavbar />
            <Container>
                <Row className="justify-content-center my-5">
                    <Col md="10">
                        <Card className="shadow-sm p-5 mb-4">
                            <Card.Title className="textPrimary mb-4 fs-4">About Me</Card.Title>
                            <Card.Body>
                                <div className="d-flex align-items-center mb-4">
                                    <img src={currentUser?.profile_picture ? `/api/files/storage/${currentUser?.profile_picture}` : Avatar} alt="" width="100" height="100" className="rounded-3 me-3" />
                                    <div>
                                        <div className="d-flex justify-content-between align-items-start">
                                            <h5 className="fw-bold">{currentUser?.name}</h5>
                                            <FaRegEdit className="fs-5 text-end text-success" onClick={handleShow} />
                                        </div>
                                        <small>{currentUser?.designation} | Department of {currentUser?.department}</small>
                                    </div>
                                </div>
                                <Row>
                                    <Col md="12">
                                        <Row>
                                            <Col md="4">
                                                <p className="text-lead">Name:</p>
                                                <p className="text-lead">Gender:</p>
                                                <p className="text-lead">ID:</p>
                                                <p className="text-lead">E-Mail:</p>
                                                <p className="text-lead">Phone:</p>
                                                <p className="text-lead">Address:</p>
                                                <p className="text-lead">Joining Date:</p>
                                            </Col>
                                            <Col md="8">
                                                <p className="fw-bold">{currentUser?.name}</p>
                                                <p className="fw-bold">Male</p>
                                                <p className="fw-bold">{currentUser?.teacher_id}</p>
                                                <p className="fw-bold">{currentUser?.email}</p>
                                                <p className="fw-bold">{currentUser?.mobile}</p>
                                                <p className="fw-bold">Tengra, Lalabazar, Bishwanath, Sylhet</p>
                                                <p className="fw-bold">{moment(currentUser?.createdAt).format('DD-MM-YYYY')}</p>
                                            </Col>
                                            <Modal show={show} onHide={handleClose} centered>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Edit</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form onSubmit={handleSubmit}>
                                                        <Form.Floating className="mb-3">
                                                            <Form.Control type="text" onChange={handleChange} name="gender" placeholder="Gender" />
                                                            <label for="floatingInput">Gender</label>
                                                        </Form.Floating>
                                                        <Form.Floating className="mb-3">
                                                            <Form.Control type="text" onChange={handleChange} name="phone" placeholder="Phone" />
                                                            <label for="floatingInput">Phone</label>
                                                        </Form.Floating>
                                                        <Form.Floating className="mb-3">
                                                            <Form.Control type="text" onChange={handleChange} name="designation" placeholder="Designation" />
                                                            <label for="floatingInput">Designation</label>
                                                        </Form.Floating>
                                                        <Form.Floating className="mb-3">
                                                            <Form.Control type="text" onChange={handleChange} name="address" placeholder="Address" />
                                                            <label for="floatingInput">Address</label>
                                                        </Form.Floating>
                                                        <div className="bgSecondary text-center mt-4 rounded-3">
                                                            <input type="submit" value="Save Changes" className="btn w-100 text-white" onClick={handleClose} />
                                                        </div>
                                                    </Form>
                                                </Modal.Body>
                                            </Modal>
                                        </Row>
                                        <hr />
                                        <div className="my-3">
                                            <div className="d-flex justify-content-between align-items-start">
                                                <h3>Area of Study</h3>
                                                <FaRegEdit className="fs-5 text-success" onClick={handleShowSecond} />
                                            </div>
                                            <div>
                                                <p className="fw-bold">Educations: </p>
                                                <p> 1. DCA, Intec College, Singapore.<br />
                                                    2. DIT, Alpha Beta College, Sydney, Australia.<br />
                                                    3. BIT, Central Queensland University, Queensland, Australia.<br />
                                                    4. MIT, University of Ballarat, Melbourne, Australia.<br />
                                                    5. MBA, University of Ballarat, Melbourne, Australia.<br />
                                                    6. Ph.D., University of Ballarat, Melbourne, Australia.<br />
                                                </p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <p className="fw-bold">Professional Trainings &amp; Certifications:
                                            </p>
                                            <p>1. MCSA-Microsoft Certificate Solutions Associate. <br />
                                                2. MCSE-Microsoft Certificate Solutions Expert. <br />
                                                3. OCA-Oracle Certified Associate. <br />
                                                4. OCP-Oracle Certified Professional. <br />
                                                5. CCNA-Cisco Certified Network Associate. <br />
                                                6. CCNP-Cisco Certified Network Professional. <br />
                                                7. CCNPS-Cisco Certified Network Professional-Security. <br />
                                                8. CCCA-Cisco Certified CyberOps Associate. <br />
                                                9. CCE-Cisco Cyber Security Essentials. <br />
                                                10. RHCSA-Red Hat Certified System Associate <br />
                                                11. RHCE-Red Hat Certified Engineer. <br />
                                                12. RHCA-Red Hat Certified Architect. <br />
                                                13. MTCNA–MikroTik Certified Network Associate. <br />
                                                14. MTCRE–MikroTik Certified Router Engineer. <br />
                                                15. MTCSE-MikroTik Certified Security Engineer. <br />
                                                16. ACSAA-AWS Certified Solutions Architect-Associate. <br />
                                                17. ACSAP-AWS Certified Solutions Architect-Professional <br />
                                                18. CEH–Certified Ethical Hacker. <br />
                                                19. CISA-Certified Information Systems Auditor. <br />
                                                20. CISSP-Certified Information Systems Security Professional <br />
                                                21. DMP-Digital Marketing Professional <br />
                                            </p>
                                        </div>
                                        <hr />
                                        <div>
                                            <p className="fw-bold">Conducted Courses:</p>
                                            <p>
                                                1. C Programming. <br />
                                                2. Object Oriented Programming. <br />
                                                3 Advanced Java. <br />
                                                4. Web Programming. <br />
                                                5. Web Technologies. <br />
                                                6. Mobile Applications Development. <br />
                                                7. Python Programming. <br />
                                                8. Software Engineering. <br />
                                                9. System Analysis &amp; Design. <br />
                                                10. Database Management System. <br />
                                                11. Data Communication. <br />
                                                12. Advanced Computer Networks. <br />
                                                13. Advanced Operating System. <br />
                                                14. Cryptography &amp; Network Security. <br />
                                                15. Cyber Security &amp; Ethical Hacking. <br />
                                                16. Information Systems Security. <br />
                                                17. Cloud Computing. <br />
                                                18. Advanced Algorithms. <br />
                                                19. Neural Network &amp; Fuzzy Logic. <br />
                                                20. Machine Learning. <br />
                                                21. Big Data &amp; Data Mining. <br />
                                                22. Data Analytics. <br />
                                                23. Business Analytics. <br />
                                                24. Management Information System. <br />
                                                25. E-Commerce Design &amp; Development. <br />
                                                26. Advanced Digital Marketing. <br />
                                                27. Graphic Design &amp; Multimedia <br />
                                            </p>
                                        </div>
                                        <hr />
                                        <div>
                                            <div>
                                                <p className="fw-bold">Published Books:</p>
                                                <p>
                                                    1. Core Python Programming, For the Beginners, BDT Publisher-2nd Edition.
                                                    <br />
                                                    2. Advanced Java Programming, Building Java Application, BDT Publisher-2nd
                                                    Edition. <br />
                                                    3. Semantic Web Programming, Building IA &amp; E-Commerce, BDT Publisher-2nd
                                                    Edition. <br />
                                                    4. Advanced Computer Networks, CCNA Labs, BDT Publisher-3rd Edition. <br />
                                                    5. Production Operating System, Hands-on Exam Preparation, BDT Publisher-2nd
                                                    Edition. <br />
                                                    6. Applied Cloud Computing, Methodology &amp; Application, BDT Publisher-2nd
                                                    Edition. <br />
                                                    7. The Complete E-Commerce, Technologies &amp; Applications, BDT Publisher-2nd
                                                    Edition. <br />
                                                    8. Cyber Security &amp; Ethical Hacking, Practical Labs, BDT Publisher-1st
                                                    Edition. <br />
                                                    9. C Easy Programming, BDT Publisher-5th Edition. <br />
                                                    10. Object Oriented Programming C++, Beginner to Advanced, BDT Publisher-4th
                                                    Edition. <br />
                                                    11. The Complete Computer Fundamentals, BDT Publisher-5th Edition. <br />
                                                </p>
                                            </div>
                                            <hr />
                                            <div>
                                                <p className="fw-bold">News Paper Articles:</p>
                                                <p>
                                                    1. “Necessity of Technology in Today’s Educations”, DainikIttefaq on
                                                    27/04/2015. <br />
                                                    2. “Computer Diploma Courses of TokyoHitech”, ProthomAlo on 09/09/2011. <br />
                                                    3. “ICT Revelation is to Change our Economy”, DainikPurbokon on 07/10/2010.
                                                    <br />
                                                    4. “Enthusiastic IT Trainees and Capitalization”, DainikMoktBagla on
                                                    08/03/2014. <br />
                                                    5. “Digital Fair and Internet Week in Jessore”, Daily Gramerkagoj on
                                                    10/07/2015. <br />
                                                    6. “IT alignment to deal with evolving business challenges”, Daily Star on
                                                    27/11/2009. <br />
                                                    7. “Web Technologies for Sustainable Supply-Chain Management, Daily Observer
                                                    on 05/03/2008. <br />
                                                </p>
                                            </div>
                                            <hr />
                                            <div>
                                                <p className="fw-bold">Research Interests</p>
                                                <p>
                                                    1. Bio-Sensing. <br />
                                                    2. Computational Electronics. <br />
                                                    2. Web Engineering. <br />
                                                    3. Web Technologies. <br />
                                                    4. Sensor Networking. <br />
                                                    5. Network Security. <br />
                                                    6. Cyber Security. <br />
                                                    7. Blockchain Technology. <br />
                                                </p>
                                            </div>
                                            <hr />
                                            <div>
                                                <p className="fw-bold">Research Papers</p>
                                                <p>
                                                    Design and Numerical Analysis of Zeonex Based Photonic Crystal Fiber for the
                                                    Applications in Different Types of Communication Networks, Springer,
                                                    December 2020, Multiple Authors. <br />
                                                    “Zeonex based decagonal photonic crystal fiber (D-PCF) in the terahertz
                                                    (THz) band for chemical sensing applications”, Elsevier, Volume 31, December
                                                    2019, 100393, Multiple Authors. <br />
                                                    “Impact of Social Media in Social Life in China”, IJNTR, Volume-6, Issue-1,
                                                    January 2018 Pages 61-66, Multiple Authors. <br />
                                                    “Indigenous Australian Access to Information &amp; Communication Technology to
                                                    trounce Isolated Lifestyle over Cross Culture and Anti Colonization
                                                    Sentiment”, JIT, University of Ballarat, Vol. 29, No. 13, PP 1-6,
                                                    December-2001, Double Authors. <br />
                                                    “Strategic Implementation of Information Technology to regulate and ensure
                                                    fundamental human right of refugees and asylum seekers in Australia.”, JIT,
                                                    University of Ballarat, Vol. 35, No. 7, PP 1-7, November-2002, Single
                                                    Author. <br />
                                                    “Contemporaneous Role of Information and Communication Technology in the
                                                    Australian Banking Sector in Adopting Online Transaction and Mobile
                                                    Banking.”, JIT, University of Ballarat, Vol. 41, No. 19, PP 1-8,
                                                    December-2003, Single Author. <br />
                                                    “The Power of E-Commerce in the Global Trade Industry: A Realistic Approach
                                                    to Expedite Virtual Market Place and Online Shopping from anywhere in the
                                                    World.”, JIT, University of Ballarat, Vol. 48, No. 15, PP 1-9,
                                                    December-2004, Single Author. <br />
                                                    “The Relevance of Enterprise Resource Planning (ERP) Software Systems in
                                                    Providing Help in Management of Enterprises., JIT, University of Ballarat,
                                                    Vol. 57, No. 10, PP 1-10, July-2005, Single Author. <br />
                                                    “An Analysis of Exploring E-Learning Which Offers the Alternative Method for
                                                    Deprived and Inaccessible People to Study Tertiary Education Through the
                                                    Internet.”, JGP-IWT, Vol. 21, PP 1-5, October-2006, Single Author. <br />
                                                    “Strategic Impact of Web Technologies for Sustainable Supply-Chain
                                                    Integration and Agility.” JGP-IWT, Vol. 29, PP 1-6, December-2007, Single
                                                    Author. <br />
                                                    “Web Engineering: New Epoch of Systematic, Disciplined and Legitimate Web
                                                    Application Approach” JGP-IWT, Vol. 35, PP 1-7, November-2008, Single
                                                    Author. <br />
                                                    “UML-based Web Engineering: A Realistic Approach to prevail Interoperability
                                                    Categorization of Model Conversion Techniques” JGP-IWT, Vol. 43, PP 1-8,
                                                    June-2009, Single Author. <br />
                                                    “Web Engineering: A Strategic Approach for Blind and Visually Challenged
                                                    People to Access on the World Wide Web” JGP-IWT, Vol. 50, No. 19, PP 1-5,
                                                    January-2010, Single Author. <br />
                                                    “Web-Based Information Technology for Transparent &amp; Accountable Grassroots
                                                    Student Politics in Bangladesh: A Case Study of Indecent &amp; Corrupted
                                                    Grassroot Student Politics without any Principle or Patriotism”. JGP-IWT,
                                                    Vol. 54, No. 15, PP 1-5, December-2010, Single Author <br />.
                                                    “Designing and Implementing Outcome-Based Curriculum in Bangladesh Technical
                                                    Education Board (BTEB) to Prepare the students to cope with evolving IT
                                                    Industry”. JGP-IWT, Vol. 73, No. 9, PP 1-6, June-2011, Single Author. <br />
                                                    “Cryptocurrency under the Blockchain Technology: Challenges &amp; Opportunities
                                                    to Implement a Cashless Society in Bangladesh to Minimize Corruption and
                                                    Irregularities”. JGP-IWT, Vol. 102, No. 25, PP 1-5, June-2012, Single
                                                    Author. <br />
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Modal show={showSecond} onHide={handleCloseSecond} centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Area of Studies</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form onSubmit={handleSubmitSecond}>
                                                <Form.Floating className="mb-3">
                                                    <Form.Control type="text" onChange={handleChangeSecond} name="title" placeholder="Title" />
                                                    <label for="floatingInput">Title</label>
                                                </Form.Floating>
                                                <Form.Floating className="mb-3">
                                                    <Form.Control as="textarea" rows={3} onChange={handleChangeSecond} name="description" placeholder="Description" />
                                                    <label for="floatingInput">Description</label>
                                                </Form.Floating>
                                                <div className="bgSecondary text-center mt-4 rounded-3">
                                                    <input type="submit" value="Save Changes" className="btn w-100 text-white" onClick={handleClose} />
                                                </div>
                                            </Form>
                                        </Modal.Body>
                                    </Modal>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TeacherProfile;
