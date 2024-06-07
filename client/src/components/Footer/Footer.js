import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bgPrimary">
      <Container className="borderBottom ">
        <Row className="p-3">
          <Col md="6">
            <p className="text-white fs-5">Connect on social network</p>
          </Col>
          <Col md="6" className="text-end">
            <FontAwesomeIcon
              className="text-info fs-2 me-2 iconHover"
              icon={faFacebook}
            />
            <FontAwesomeIcon
              className="text-info fs-2 me-2 iconHover"
              icon={faTwitter}
            />
            <FontAwesomeIcon
              className="text-info fs-2 me-2 iconHover"
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className="text-info fs-2 me-2 iconHover"
              icon={faYoutube}
            />
            <FontAwesomeIcon
              className="text-info fs-2 me-2 iconHover"
              icon={faLinkedin}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="text-center">
          <Col md="6">
            <h2 className="textSecondary mb-3 mt-2">Contact</h2>
            <p className="text-white textHover">
              Phone: 01313084499. <br />
              info@lus.ac.bd
            </p>
          </Col>
        </Row>
      </Container>
      <Row style={{ backgroundColor: "#0e6e6b" }}>
        <p className="text-center text-white p-4">
          Copyright 2021 Leading University, all rights reserved. Developed by
          <Link to="#" className="textHover textSecondary">
            &nbsp;Dynamic Developers
          </Link>
          . <br /> This site is maintained by CSE & IT Department.
        </p>
      </Row>
    </div>
  );
};

export default Footer;
