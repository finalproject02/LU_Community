import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Requirement.css";
import { useHistory } from "react-router-dom";
import "./AdmissionRequirementData.js";

const Requirement = () => {
  let history = useHistory();
  function handleClick() {
    history.push("/admissionfirststep");
  }

  return (
    <Container>
      <Row className="justify-content-center">
        {admissionTypes.map((item) => (
          <Col md="8">
            <Card className="w-100 my-5">
              <Card.Body className="shadow-sm p-4">
                <Card.Title className="textPrimary mb-3">
                  <h2>{item.title}</h2>
                </Card.Title>
                <Card.Subtitle className="mb-2 textSecondary mb-3">
                  <h6>{item.subtitle}</h6>
                </Card.Subtitle>
                <Card.Text>
                  <h5>{item.heading}</h5>
                </Card.Text>
                <Card.Text>{item.requirement1}</Card.Text>
                <Card.Text>{item.requirement2}</Card.Text>
                <Card.Text>{item.requirement3}</Card.Text>
                <Card.Text>{item.requirement4}</Card.Text>
                <Card.Text>{item.requirement5}</Card.Text>
                <Card.Text>{item.requirement6}</Card.Text>
                <Card.Text>{item.requirement7}</Card.Text>
                <hr />
                <div className="text-end">
                  <Card.Link
                    className="btn bg-primary text-white px-5"
                    onClick={handleClick}
                  >
                    Next
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Requirement;
