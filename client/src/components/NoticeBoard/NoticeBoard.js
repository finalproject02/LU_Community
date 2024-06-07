import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NoticeBoard.css";
import noticeBoardData from "./NoticeBoardData";

const NoticeBoard = () => {

  return (
    <Card className="w-100 shadow-sm mb-4">
      <Card.Body className="text-center p-4">
        <Card.Title className="textSecondary fs-4">Notice Board</Card.Title>
        {noticeBoardData.map((item) => (
          <Card.Text as='div' key={item.id}>
            <Row className="mb-2">
              <Col md="2" className="mt-1">
                <h6> {item.date}</h6>
              </Col>
              <Col className="notice-a">
                <Link className="text-dark textHover" to="#">
                  {item.title}
                </Link>
              </Col>
            </Row>
          </Card.Text>
        ))}
        <Link to="#" className="textHover">
          <p className="text-end text-black">Archive</p>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default NoticeBoard;
