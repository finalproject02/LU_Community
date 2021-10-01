import React from "react";
import { Card } from "react-bootstrap";
import sideCard from "./HomeSideCardData.js";

const HomeSideCard = (props) => {
  return (
    <>
      {
        sideCard.map(item => (
          <Card key={item.id} className="w-100 shadow-sm mb-4">
            <Card.Body className="text-center p-4">
              <Card.Title className="textSecondary fs-4">{item.title}</Card.Title>
              <Card.Link className="textSecondary textHover text-black" href={item.path}>
                Click Here
              </Card.Link>
            </Card.Body>
          </Card>
        ))
      }
    </>

  );
};

export default HomeSideCard;
