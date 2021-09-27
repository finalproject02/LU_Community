import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import LatestNews from "../LatestNews/LatestNews";
import Events from "../Events/Events";
import CampusFacilities from "../CampusFacilities/CampusFacilities";
import CampusLocation from "../CampusLocation/CampusLocation";
import Affiliations from "../Affiliations/Affiliations";
import MainSidebar from "../MainSidebar/MainSidebar";

const HomeBody = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md="8">
          <Row>
            <WelcomeMessage></WelcomeMessage>
          </Row>
          <LatestNews></LatestNews>
        </Col>
        <Col md="4" className="mt-0 mt-sm-5">
          <MainSidebar></MainSidebar>
        </Col>
      </Row>
      <Row>
        <Events></Events>
      </Row>
      <Row>
        <CampusFacilities></CampusFacilities>
      </Row>
      <Row>
        <CampusLocation></CampusLocation>
      </Row>
      <Row>
        <Affiliations></Affiliations>
      </Row>
    </Container>
  );
};

export default HomeBody;
