import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function OfficeOrder() {
  const officeOrder = {
    date: "11 july",
    title: "Regarding In-course Evaluation of Summer-2021",
  };
  return (
    <Card className="w-100 shadow-sm mb-4">
      <Card.Body className="text-center p-4">
        <Card.Title className="textSecondary fs-4">Office Order</Card.Title>
        <Card.Text as='div'>
          <Row className="mb-2 mt-2">
            <Col md="2" className="mt-1">
              <h6> {officeOrder.date}</h6>
            </Col>
            <Col className="notice-a">
              <Link to="#" className="text-dark textHover" >
                {officeOrder.title}
              </Link>
            </Col>
          </Row>
        </Card.Text>
        <Link to="#" className="textHover">
          <p className="text-end text-black">Archive</p>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default OfficeOrder;
