import React, { useState } from 'react';
import { Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainNavbar from '../MainNavbar/MainNavbar';
import MainSidebar from '../MainSidebar/MainSidebar';
import prof from "../../images/Prof.jpg";
import { FaTools } from "react-icons/fa";

const TeacherDetails = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState();
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose()
    }

    return (
        <div>
            <div>
                <Header />
                <MainNavbar />
                <Container>
                    <Row>
                        <Col md="8" className="mt-5 mb-4">
                            <Card className="shadow-sm rounded mb-3">
                                <Card.Body>
                                    <Row>
                                        <Col md="3" className="mb-2">
                                            <img className="img-fluid" style={{ width: 120 }} src={prof} alt=".." />
                                        </Col>
                                        <Col md="9">
                                            <Row>
                                                <Col md="7">
                                                    <h2>Prof. Dr. AS. Sikder</h2>
                                                    <p>Professor
                                                        <br />
                                                        Computer Science &amp; Engineering
                                                    </p>
                                                </Col>
                                                <Col md="5">
                                                    <div className="d-flex">
                                                        <h4>Contact Information</h4>
                                                        <FaTools className="cursor CardHover" onClick={handleShow} />
                                                    </div>
                                                    <p> <span className="text-lead">Cell Phone: </span>01757584584<br />
                                                        <span className="text-lead">Email: </span>faruq_cse @lus.ac.bd
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <div className="my-3">
                                        <h3>Area of Study</h3>
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
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="4" className="mt-5">
                            <MainSidebar />
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </div>


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
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" placeholder="Name" onChange={handleChange} name="name" />
                            <label for="floatingInput">Name</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" placeholder="Cell Phone" onChange={handleChange} name="info" />
                            <label for="floatingInput">Cell Phone</label>
                        </Form.Floating>
                        <div className="bgSecondary text-center mt-4 rounded-3">
                            <input type="submit" value="Save Changes" className="btn w-100 text-white" />
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default TeacherDetails;