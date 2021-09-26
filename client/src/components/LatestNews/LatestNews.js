import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import newsData from "./NewsData.js";

const LatestNews = () => {
  return (
    <div>
      <h2>Latest News</h2>
      <Card className="w-100 shadow p-5 mb-4">
        {newsData.map((newsItem) => (
          <Row key={newsItem.id}>
            <Col md="4">
              <Card.Img
                className="w-100 mt-4"
                variant="top"
                src={newsItem.url}
              />
            </Col>
            <Col md="8">
              <Card.Body>
                <Card.Title className="textSecondary fs-3">
                  {newsItem.title}
                </Card.Title>
                <Card.Text as='div'>{newsItem.description}</Card.Text>
                <Card.Text as='div'>
                  <a href="/" className="textHover textSecondary">
                    Read More...
                  </a>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        ))}
        <Button style={{ backgroundColor: "#6daf2c" }}>News Archive</Button>
      </Card>
    </div>
  );
};

export default LatestNews;
