import React from "react";
import { Card } from "react-bootstrap";
import "./AdmissionGoingOn.css";

const AdmissionGoingOn = () => {
  return (
    <Card className="w-100 mb-4 shadow text-white">
      <Card.Body className="bgSecondary">
        <Card.Title className="fs-2 text-center p-2 text-uppercase">
          Admission Going On Summer-2021
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default AdmissionGoingOn;
