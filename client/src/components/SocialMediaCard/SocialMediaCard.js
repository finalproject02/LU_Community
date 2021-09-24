import React from "react";
import { Card } from "react-bootstrap";
import socialMedia from "./SocialMediaCardData";

function SocialMediaCard() {

  return (
    <>
      {socialMedia.map((media) => (
        <Card key={media.id} className="w-100 shadow-sm mb-4">
          <Card.Body className="text-center p-4">
            <Card.Title className="textSecondary fs-4">
              {media.title}
            </Card.Title>
            <Card.Text>
              <a class="text-dark textHover h-50" href={media.url}>
                <img className="w-25" src={media.logo} alt={media.title} />
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default SocialMediaCard;
