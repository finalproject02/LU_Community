import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faFlask,
  faUserFriends,
  faBook,
  faBuilding,
  faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";

function CampusFacilities() {
  const campus = [
    {
      title: "Free Wi-Fi Access",
      description:
        "Students are given access to high speed internet all over the campus through wifi.",
      icon: faWifi,
    },
    {
      title: "Highly Equipped Labs",
      description:
        "There are labs equipped with modern instruments in every relevant department.",
      icon: faFlask,
    },
    {
      title: "Extra Curricular Activities",
      description:
        "Students can participate in various extra curricular activities through various clubs.",
      icon: faUserFriends,
    },
    {
      title: "Rich Library",
      description:
        "The university has a fully air-conditioned and computerized rich library.",
      icon: faBook,
    },
    {
      title: "AC Class Rooms",
      description:
        "Classrooms are air conditioned, so the students can study in comfort.",
      icon: faBuilding,
    },
    {
      title: "Up to 75% Waiver",
      description:
        "Meritorious students are rewarded with up to 75% waiver based on several criterias.",
      icon: faMoneyBillAlt,
    },
  ];

  return (
    <div className="mb-4">
      <h2 className="mb-3">Campus Facilities</h2>
      <Row>
        {campus.map((item) => (
          <Col md="4">
            <Card className="w-100 shadow-sm mb-4 p-4">
              <Card.Body className="text-center py-4">
                <FontAwesomeIcon
                  className="textSecondary fs-1 mb-3"
                  icon={item.icon}
                />
                <Card.Title className="fs-4">{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CampusFacilities;
