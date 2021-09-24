import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import affiliationsData from "./AffiliationsData.js";

const Affiliations = () => {

  return (
    <div className="mb-4">
      <h2 className="mb-3">Affiliations</h2>
      <Card class className="p-5 mb-4 shadow-sm">
        <Row >
          {
            affiliationsData.map(item => (
              <Col key={item.id} md="2">
                <Card.Body className="p-4">
                  <a href={item.link}>
                    <Card.Img
                      className="img-fluid img-thumbnail"
                      variant="top"
                      src={item.imgSrc}
                    />
                  </a>
                </Card.Body>
              </Col>
            ))
          }
        </Row>
      </Card>
    </div>
  );
};

export default Affiliations;
