import React, {useState} from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Requirement.css";
import admissionTypes from "./admissionTypes";
import AdmissionFirstStep from "../AdmissionFristStep/AdmissionFirstStep";

const Requirement = () => {
 const [step, setStep] = useState(false)
 
  return (
    <Container>
      <Row className="justify-content-center">
     {!step ? admissionTypes.map((item) => (
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
         <Card
         className="btn bg-primary text-white px-5"
         onClick={() => item.name === 'B.Sc' ? setStep(true) : alert('Coming soon..')}
         >
         Next
         </Card>
         </div>
         </Card.Body>
         </Card>
         </Col>
         )) : <AdmissionFirstStep/>
     }
      </Row>
    </Container>
  );
};

export default Requirement;
