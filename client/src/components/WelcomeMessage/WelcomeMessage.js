import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Collapsible from "react-collapsible-paragraph";
import "./WelcomeMessage.css";
import wcmsgData from "./WelcomeMessageData";

const WelcomeMessage = () => {

  return (
    <div>
      <Row className="mt-5">
        {wcmsgData.map((msg) => (
          <Col key={msg.id} md="6">
            <Card className="w-100 mt-5 mb-5 shadow">
              <img
                src={msg.url}
                className="mt-5 img-fluid img-thumbnail imgSize rounded-pill wcmPosition"
                alt={msg.name}
              />
              <Card.Body className="pt-5 mt-5">
                <Card.Title className="text-center mb-2 textSecondary text-uppercase fs-4">
                  {msg.name}
                </Card.Title>
                <Card.Text as='div' className="text-center mb-2 textSecondary fs-5">
                  {msg.title}
                </Card.Text>
                <Card.Text as='div' className="text-center mb-2 textSecondary fs-6">
                  Welcome Message
                </Card.Text>
                <Card.Text as='div' className="text-center">
                  <Collapsible lines={23}>{msg.message}</Collapsible>
                </Card.Text>
                <Card.Text as='div' className="text-center">{msg.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WelcomeMessage;
