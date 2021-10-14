import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Requirement.css";
import admissionTypes from "./AdmissionRequirementData.js";
import AdmissionFirstStep from "../AdmissionFristStep/AdmissionFirstStep";
import {useHistory} from "react-router-dom";

const Requirement = () => {
    const history = useHistory();

  return (
    <Container>
      <Row className="justify-content-center">
          {admissionTypes.map(item => (
          <Col key={item.id} md="8">
            <Card className="w-100 my-5">
              <Card.Body className="shadow-sm p-4">
                <Card.Title className="textPrimary mb-3">
                  <h2>{item.title}</h2>
                </Card.Title>
                <Card.Subtitle className="mb-2 textSecondary mb-3">
                  {item.subtitle}
                </Card.Subtitle>
                <Card.Text className="fw-bold">
                  {item.heading}
                </Card.Text>
                <Card.Text>{item.requirement1}</Card.Text>
                <Card.Text>{item.requirement2}</Card.Text>
                <Card.Text>{item.requirement3}</Card.Text>
                <Card.Text>{item.requirement4}</Card.Text>
                <Card.Text>{item.requirement5}</Card.Text>
                <Card.Text>{item.requirement6}</Card.Text>
                <Card.Text>{item.requirement7}</Card.Text>
                <hr />
                <div className="w-100 btn bg-primary text-white px-5"
                  onClick={() => item.name === 'BSc' ? history.push(`/firstStep`) : alert('Coming soon..')}>
                  Next
                </div>
              </Card.Body>
            </Card>
          </Col>
          ))
        }
      </Row>
    </Container>
  );
};

export default Requirement;
