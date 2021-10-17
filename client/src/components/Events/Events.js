import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import eventsData from "./EventsData";

function Events() {

  return (
    <div className="mb-4">
      <h2 className="mb-3">Events</h2>
      <Row>
        {eventsData.map((item) => (
          <Col key={item.id} md="4">
            <Card className="w-100 shadow-sm mb-4">
              <Card.Img className="w-100" variant="top" src={item.url} />
              <Card.Body className="text-center p-4">
                <Card.Title className="bgSecondary fs-4 text-white d-flex w-75 p-2 position-absolute top-50 start-0">
                  {item.date}
                </Card.Title>
                <Link to="#" className="textHover textSecondary text-uppercase">
                  {item.linkText}
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Events;
