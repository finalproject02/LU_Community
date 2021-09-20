import React from "react";
import { Card } from "react-bootstrap";
import "./HomeSideCard.css";

const HomeSideCard = (props) => {
  return (
    <Card className="w-100 shadow-sm mb-4">
      <Card.Body className="text-center p-4">
        <Card.Title className="textSecondary fs-4">{props.title}</Card.Title>
        <Card.Link className="textSecondary textHover text-black" href="#">
          Click Here
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default HomeSideCard;
