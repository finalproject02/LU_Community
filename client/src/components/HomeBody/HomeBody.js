import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdmissionGoingOn from "../AdmissionGoingOn/AdmissionGoingOn";
import HomeSideCard from "../HomeSideCard/HomeSideCard";
import HomeSideMenu from "../HomeSideMenu/HomeSideMenu";
import NoticeBoard from "../NoticeBoard/NoticeBoard";
import OfficeOrder from "../OfficeOrder/OfficeOrder";
import SocialMediaCard from "../SocialMediaCard/SocialMediaCard";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import LatestNews from "../LatestNews/LatestNews";
import Events from "../Events/Events";
import CampusFacilities from "../CampusFacilities/CampusFacilities";
import CampusLocation from "../CampusLocation/CampusLocation";
import Affiliations from "../Affiliations/Affiliations";
import Footer from "../Footer/Footer";

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
          <AdmissionGoingOn></AdmissionGoingOn>
          <HomeSideCard title={"Forms & Downloads"}></HomeSideCard>
          <HomeSideCard title={"Contact"}></HomeSideCard>
          <HomeSideCard title={"Academic Calendar"}></HomeSideCard>
          <NoticeBoard></NoticeBoard>
          <OfficeOrder></OfficeOrder>
          <SocialMediaCard></SocialMediaCard>
          <HomeSideMenu></HomeSideMenu>
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
