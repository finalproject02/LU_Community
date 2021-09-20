import React from "react";
import { Card } from "react-bootstrap";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.jpg";
import youtube from "../../images/youtube.jpg";

function SocialMediaCard() {
  const socialMedia = [
    {
      title: "Facebook",
      logo: "https://icon-library.com/images/facebook-icon-download-vector/facebook-icon-download-vector-29.jpg",
      url: "https://www.facebook.com/leadinguniversity2001/",
    },
    {
      title: "Instagram",
      logo: "https://www.lus.ac.bd/wp-content/uploads/2020/06/instagram.jpg",
      url: "https://www.instagram.com/leadinguniversity/?hl=en",
    },
    {
      title: "YouTube",
      logo: "https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872__340.png",
      url: "https://www.youtube.com/channel/UC3UkVH9fhmQQCKSzQAMRwWA",
    },
  ];
  const title = socialMedia.map((title) => title.title);
  const logo = socialMedia.map((logo) => logo.logo);
  return (
    <>
      {socialMedia.map((media) => (
        <Card className="w-100 shadow-sm mb-4">
          <Card.Body className="text-center p-4">
            <Card.Title className="textSecondary fs-4">
              {media.title}
            </Card.Title>
            <Card.Text>
              <a class="text-dark textHover h-50" href={media.url}>
                <img className="w-50" src={media.logo} alt={media.title} />
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default SocialMediaCard;
