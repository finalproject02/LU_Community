import React from "react";
import { Carousel } from "react-bootstrap";

const MainCarousel = () => {
  const url = {
    url1: "https://www.lus.ac.bd/wp-content/uploads/2020/03/1111111-745x385.jpg",
    url2: "https://www.lus.ac.bd/wp-content/uploads/2021/03/26-March-2021-745x385.jpg",
    url3: "https://www.lus.ac.bd/wp-content/uploads/2019/07/3-745x385.jpg",
  };
  return (
    <Carousel className="mb-5 borderBottom">
      <Carousel.Item>
        <img className="d-block w-100" src={url.url1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={url.url2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={url.url3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainCarousel;
