import React, { useState } from 'react';
import { Card, Form, Modal } from 'react-bootstrap';
import { FaCommentDots, FaEnvelopeOpen, FaGlobe, FaPhone, FaRegClock, FaRegEdit, FaTrashAlt, FaUsers } from 'react-icons/fa';
import Collapsible from "react-collapsible-paragraph";
import { Link } from 'react-router-dom';
import aboutClubData from './AboutClubData';

const ClubInfo = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data, setData] = useState({ openTime: '', website: '', email: '', phone: '', details: '' });
    const handleChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setData(true);
    }
    return (
        <div>
            <Card className="w-100">
                {
                    aboutClubData.map(item => (
                        <Card.Body>
                            <div className="d-flex justify-content-between p-2">
                                <h5 className="mb-2 mt-2">General Information</h5>
                                <FaRegEdit onClick={handleShow} className="fs-5" />
                            </div>
                            <div className="p-3">
                                <div className="mb-2">
                                    <div className="d-flex">
                                        <FaUsers className="mt-1" />
                                        <h6 className="ps-2 textHover text-dark">Follower</h6>
                                    </div>
                                    <p className="ms-4"><span>{item.following}</span> people following this
                                        including <span>{item.friend}</span> of your friends</p>
                                </div>
                                <div className="mb-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <FaRegClock className="mt-1" />
                                            <h6 className="ps-2  text-dark">Open</h6>
                                        </div>
                                        <FaTrashAlt />
                                    </div>
                                    <p className="ms-4">9:00 AM - 5:00 PM</p>
                                </div>
                                <div className="mb-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <FaGlobe className="mt-1" />
                                            <h6 className="ps-2 text-dark">Website</h6>
                                        </div>
                                        <FaTrashAlt />
                                    </div>
                                    <p className="ms-4 textHover cursor">{item.website}</p>
                                </div>
                                <div className="mb-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <FaPhone className="mt-1" />
                                            <h6 className="ps-2 text-dark">Phone</h6>
                                        </div>
                                        <FaTrashAlt />
                                    </div>
                                    <p className="ms-4 textHover cursor">{item.phone}</p>
                                </div>
                                <div className="mb-2">
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex">
                                            <FaEnvelopeOpen className="mt-1" />
                                            <h6 className="ps-2 text-dark">Email</h6>
                                        </div>
                                        <FaTrashAlt />
                                    </div>
                                    <p className="ms-4 textHover cursor">{item.email}</p>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <FaCommentDots />
                                    <Link className="ps-2 textHover cursor text-dark">Send Message</Link>
                                </div>
                            </div>
                            <div className="mb-2 p-3">
                                <div className="d-flex justify-content-between">
                                    <h5 className="mb-2">Details info</h5>
                                    <FaTrashAlt />
                                </div>
                                <Collapsible lines={5}>About
                                    Hello, Welcome to Leading University Computer Club's official fan page. Please enjoy your stay with us & get updated. Feel free to ask any question.
                                    Selected Committee(Current):
                                    -----------------------------------
                                    Advisor: Mr. Minhazul Haque Bhuiyan
                                    Co-Advisor: Md. Saidur Rahman .. See More
                                    Honorary Members: Arafat Mamun, Saidul Islam Shakil, Shuvasish Paul Shuvo, Keshob Chakrabortty, Sahmsia Sharmin Smriti, Fatema Tuz Zohra, Kanthi Lal Baidya, Gautam Chakraborty Tusher, Akhyar Ahmed, Keya Chakrabartty, Sadul Hasan Tarek, Golam Ambia Chowdhury Arman, Mohaiminul Haque Adnan, Sudipto Chowdhury Dip, Mashrur-Bin-Ahad Fahim, Md Ashiqur Rahman Aashik, Enam Khan,Abdul Ahad, Ahnaf Rafi, Md.Abdul Halim Munna, Jamil Ahmed, Nairita Paul, Adil Chowdhury, Mohammed Raihan Hussain, Rasel Ahmed, Abdur Rahman Alom, Ahsanul Haque Farhan, Sourov Roy Avijeet, Habibur Rahman, Kollol Chakraborty, Raju
                                    -----------------------------------
                                    President: Mustafizur Rahman Choudhury.
                                    Vice President:
                                    Ruhul Amin, Swarup Banik, M.H Murad, Rahat Monir, Suhas Chowdhury, Abdus Samad Nadim, Susmita Paul Mouly.
                                    General Secretary: Khairul Islam Siam.
                                    Joint secretary:
                                    Shoppy Chowdhury, Md. Shawon, Minhazul Islam Shagor, Mahfuz Imran, Ashiqur Rahman, Sadiatul Ferdous Mahi, Zawad Tahmid Anik.
                                    Organizing Secretary: Mahbub Sani.
                                    Treasurer: Abu Jafar Al Mahfuz.
                                    Multimedia and Gaming Coordinator lead: Ashiqur Rahman.
                                    Acm programming and Workshop Co-ordinator lead: Zawad Tahmeed Anik.
                                    Senior Executive: Aadeez Farhan, Yahya Sayem, Raisa Rahman, Sumaya Jannat Chowdhury, S.M. Shahi, Debasish Dash, Pushpitama Gowshammi, Avinanda Mukti.
                                    Official photographer:
                                    Saddam, Tuhin, Shopnil. Co-organizer:
                                    Tahmid, Joy, Sadi, Ishmam Saied, Argoraj Niloy, Rashel, Md Sakib,Indrojit Niloy. Female Co-organizer:
                                    Bushra, Shorna, Jannat. Co-Treasurer:
                                    Ragib, Shiba, Ahbab, Tahjiba, Itu, Ramisha, Tuhin. IT Specialist:
                                    Tanzim, Konik. Publicity Secretary:
                                    Saddam, MH Tuhin, Sourab Paul, Tanzim, Soumitro, Amani, Tahmina, Megh, Anika, Samira, Sanjana. Co-publicity Secretary:
                                    Ahsan Habib Hridoy, Shimul, Imran, Basit, Sanjay, Emu, Meem, Mumu, Sabila.
                                    Acm Programming and Workshop Coordinator: Sadi, Saima, Sabbir, Arif, Chima
                                    Multimedia and Gaming Co-ordinator: Basit, Ahsan Habib. Administrative:
                                    Dipu, Arup, Sukran, Daniel, Mustafiz, Tisha, Mouri. Executive:
                                    Mujammel, Abir Suleman, Abir Chowdhury, Tanvir, Fatin, Efty, Zamil, Akbor, Babor, Nafiul, Piash, Adil, Tanim, Md. Sarkar, Ubayed, Ezaz, Munna, Minhaz, Rumel, Akash, Farhan, Abu Sufian, Fuad, Umayer, Mahmud, Rifat, Salman Bin Monir, Tonmoy, Shihab, Al-Eharam, Jamitul, Mahir Daiyan, Abdur Rahman, Tarbiz Pritom, Foysal, Sagor, Khosru, Md Rashedul, Ahsan, Maryful Haque, Foyez, Safwan, Enamul, Rumel, Nilashish, Sonjit, Humayun Shakib, Fuad Ahmed, Mahi, Saif, Anik, Araf, Muhit, Pintu, Parvej, Sabbir, Fahim Mahdi, Bandhan, Anik Saha. Nusrat, Rupa, Tahbiba, Anjum Lubaba, Ayshe S Dey, Fahmida Tasmia, Tahmina Sunni, Labonno, Sumona, Nabiha, Humayra Ayshee, Meena, Rinky, Chandrima, Satabdi
                                </Collapsible>
                            </div>
                            <div className="p-2">
                                <h5 className="mb-3">Our Campus Location</h5>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8322338660364!2d91.80291421498522!3d24.869578851016843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751015addbec3b7%3A0x9e87b7be58b5f67e!2sLeading%20University!5e0!3m2!1sen!2sbd!4v1626438111440!5m2!1sen!2sbd"
                                    width="100%" height="200" loading="lazy" title="campus location"></iframe>
                            </div>
                        </Card.Body>
                    ))
                }
            </Card>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Generel Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" placeholder="Open Time" onChange={handleChange} name="openTime" />
                            <label for="floatingInput">Open</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" placeholder="Website" onChange={handleChange} name="website" />
                            <label for="floatingInput">Website</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" placeholder="Phone" onChange={handleChange} name="phone" />
                            <label for="floatingInput">Phone</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control type="text" placeholder="Email" onChange={handleChange} name="email" />
                            <label for="floatingInput">Email</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3">
                            <Form.Control placeholder="Details Info" as="textarea" rows={10} onChange={handleChange} name="details" />
                            <Form.Label>Details Info</Form.Label>
                        </Form.Floating>
                        <div className="bgSecondary text-center mt-4 rounded-3">
                            <input type="submit" value="Save Changes" className="btn w-100 text-white" onClick={handleClose} />
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ClubInfo;