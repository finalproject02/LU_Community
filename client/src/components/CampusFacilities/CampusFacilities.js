import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CampusFacilitiesData from "./CampusFacilitiesData";

function CampusFacilities() {

  return (
    <div className="mb-4">
      <h2 className="mb-3">Campus Facilities</h2>
      <Row>
        {CampusFacilitiesData.map((item) => (
          <Col key={item.id} md="4">
            <Card className="w-100 shadow-sm mb-4 p-4">
              <Card.Body className="text-center py-4">
                <FontAwesomeIcon
                  className="textSecondary fs-1 mb-3"
                  icon={item.icon}
                />
                <Card.Title className="fs-4">{item.title}</Card.Title>
                <Card.Text as='div'>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CampusFacilities;
