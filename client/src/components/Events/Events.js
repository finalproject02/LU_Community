import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function Events() {
  const eventsItems = [
    {
      url: "https://www.lus.ac.bd/wp-content/uploads/2018/12/6162897A-CAC5-41DC-8F3E-3C97619B9AFC-735x460.jpeg",
      date: "10th December 2018",
      linkText: "IDEA HACK-2018",
    },
    {
      url: "https://www.lus.ac.bd/wp-content/uploads/2018/09/42304096_1495631333901104_5288639586593931264_n-735x460.jpg",
      date: "14th October 2018",
      linkText: "Basic IoT workshop",
    },
    {
      url: "https://www.lus.ac.bd/wp-content/uploads/2018/09/LU-011-735x460.jpg",
      date: "29th September 2018",
      linkText: "Seminar on Networking Systems by IEEE",
    },
  ];
  return (
    <div className="mb-4">
      <h2 className="mb-3">Events</h2>
      <Row>
        {eventsItems.map((item) => (
          <Col md="4">
            <Card className="w-100 shadow-sm mb-4">
              <Card.Img className="w-100" variant="top" src={item.url} />
              <Card.Body className="text-center p-4">
                <Card.Title className="bgSecondary fs-4 text-white d-flex w-50 p-2 position-absolute top-50 start-0">
                  {item.date}
                </Card.Title>
                <a href="#" className="textHover textSecondary text-uppercase">
                  {item.linkText}
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Events;
