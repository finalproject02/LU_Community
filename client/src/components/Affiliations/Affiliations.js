import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Affiliations = () => {
  const affiliations = [
    {
      link: "https://bangladesh.gov.bd/index.php",
      imgSrc: "https://www.lus.ac.bd/wp-content/uploads/2015/06/1-90x90.png",
    },
    {
      link: "http://www.ugc.gov.bd/en",
      imgSrc:
        "https://www.lus.ac.bd/wp-content/uploads/2015/06/ugc_logo-90x90.png",
    },
    {
      link: "https://aibs.net/",
      imgSrc:
        "https://www.lus.ac.bd/wp-content/uploads/2015/06/logo-1-copy.jpg",
    },
    {
      link: "https://global.kduniv.ac.kr/",
      imgSrc:
        "https://www.lus.ac.bd/wp-content/uploads/2015/06/Kyungdom-University-80x100.gif",
    },
    {
      link: "http://www.heqep-ugc.gov.bd/",
      imgSrc:
        "https://www.lus.ac.bd/wp-content/uploads/2015/06/HEQEPLogo-90x90.png",
    },
    {
      link: "http://www.ism.edu.my/",
      imgSrc:
        "https://www.lus.ac.bd/wp-content/uploads/2015/06/logo_102x130-80x100.png",
    },
    {
      link: "https://campus.mozilla.community/",
      imgSrc:
        "https://www.lus.ac.bd/wp-content/uploads/2015/06/mozilla-wordmark.png",
    },
    {
      link: "https://www.ieee.org/",
      imgSrc:
        "https://www.lus.ac.bd/wp-content/uploads/2015/06/20042368-90x90.jpg",
    },
    {
      link: "https://imagine.microsoft.com/en-us",
      imgSrc:
        "https://www.lus.ac.bd/wp-content/uploads/2015/06/MicrosoftImagine.png",
    },
    {
      link: "https://www.murdoch.edu.au/",
      imgSrc:
        "https://www.lus.ac.bd/wp-content/uploads/2018/11/111B90F0-E940-4BFC-A9C8-2177A71E4957-80x100.jpeg",
    },
    {
      link: "https://binary.edu.my/",
      imgSrc: "https://www.lus.ac.bd/wp-content/uploads/2018/05/download.jpg",
    },
    {
      link: "https://www.netacad.com/",
      imgSrc:
        "https://www.lus.ac.bd/wp-content/uploads/2015/06/brand-80x100.gif",
    },
  ];

  return (
    <div className="mb-4">
      <h2 className="mb-3">Affiliations</h2>
      <Card class className="p-5 mb-4 shadow-sm">
        <Row>
          {affiliations.map((item) => (
            <Col md="2">
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
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default Affiliations;
