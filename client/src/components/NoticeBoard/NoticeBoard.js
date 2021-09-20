import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./NoticeBoard.css";

const NoticeBoard = (props) => {
  const notice = [
    {
      date: "11 July",
      title:
        "Regarding Course Registration for the Summer-2021 (Dept. of Arch, Civil, THM)",
    },
    {
      date: "11 Sep",
      title:
        "মুজিব শতবর্ষ আইডিয়া প্রতিযোগিতা ২০২১’ এ বিশ্ববিদ্যালয়ের শিক্ষক-শিক্ষার্থীদের অংশগ্রহণ প্রসঙ্গে।",
    },
    {
      date: "2 Sep",
      title: "Notice for makeup Incourse Evaluation of Summer-2021",
    },
    {
      date: "29 Sep",
      title: "LU will remain closed on 30 August 2021",
    },
  ];

  return (
    <Card className="w-100 shadow-sm mb-4">
      <Card.Body className="text-center p-4">
        <Card.Title className="textSecondary fs-4">Notice Board</Card.Title>
        {notice.map((val) => (
          <Card.Text>
            <Row className="mb-2">
              <Col md="2" className="mt-1">
                <h6> {val.date}</h6>
              </Col>
              <Col className="notice-a">
                <a class="text-dark textHover" href="#">
                  {val.title}
                </a>
              </Col>
            </Row>
          </Card.Text>
        ))}
        <a href="#" className="textHover">
          <p className="text-end text-black">Archive</p>
        </a>
      </Card.Body>
    </Card>
  );
};

export default NoticeBoard;
