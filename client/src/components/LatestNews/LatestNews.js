import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

const LatestNews = () => {
  const news = [
    {
      url: "https://www.lus.ac.bd/wp-content/uploads/2021/09/LU-News-Civil-Seminar-copy-250x250.jpg",
      title:
        "লিডিং ইউনিভার্সিটিতে জলবায়ু, পানি, জ্বালানি এবং ধান উৎপাদন বিষয়ক সেমিনার অনুষ্ঠিত",
      description:
        "সিলেটের প্রথম বেসরকারি বিশ্ববিদ্যালয় লিডিং ইউনিভার্সিটিতে স্থিতিস্থাপক জলবায়ু, পানি, জ্বালানি এবং ধান উৎপাদন ব‍্যবস্থা বিষয়ক সেমিনার অনুষ্ঠিত হয়েছে। রোববার  (০৫ সেপ্টেম্বর ২০২১) সকাল ১০টায় অনলাইনে লিডিং ইউনিভার্সিটির সিভিল ইঞ্জিনিয়ারিং বিভাগের উদ‍্যোগে “Towards a Climate-Resilient, Water-efficient, Fuel-efficient and Decarbonized Rice Production System for Bangladesh”” শীর্ষক সেমিনার  অনুষ্ঠিত হয়। সেমিনারে প্রধান অতিথি হিসেবে লিডিং ইউনিভার্সিটির প্রতিষ্ঠাতা ও […]",
    },
    {
      url: "https://www.lus.ac.bd/wp-content/uploads/2021/08/LU-News-Smart-City-250x250.jpg",
      title:
        "লিডিং ইউনিভার্সিটিতে স্মার্ট ভিলেজ এন্ড স্মার্ট সিটি বিষয়ক কর্মশালা অনুষ্ঠিত",
      description:
        "ডিজিটাল বাংলাদেশের প্রত‍্যয়ে সিলেটের প্রথম বেসরকারি বিশ্ববিদ্যালয় লিডি ইউনিভার্সিটিতে স্মার্ট ভিলেজ এন্ড স্মার্ট সিটি বিষয়ক কর্মশালা অনুষ্ঠিত হয়েছে। শনিবার (২৮ আগস্ট ২০২১) সকাল ৯টা থেকে বিকাল ১টা পর্যন্ত অনলাইনে লিডিং ইউনিভার্সিটির আমন্ত্রণে সেন্টার ফর স্মার্ট ভিলেজ এন্ড স্মার্ট সিটি স্টাডিজের উদ‍্যোগে “Smart Village and Smart City : Perspective of Digital Bangladesh” এ কর্মশালা অনুষ্ঠিত হয়। […]",
    },
    {
      url: "https://www.lus.ac.bd/wp-content/uploads/2021/08/LU-News-15-August-2021-250x250.jpg",
      title: "জাতীয় শোক দিবসে লিডিং ইউনিভার্সিটির বিভিন্ন কর্মসূচি পালন",
      description:
        "স্বাধীনতার মহান স্থপতি জাতির পিতা বঙ্গবন্ধু শেখ মুজিবুর রহমানের ৪৬তম শাহাদাত বার্ষিকী ও জাতীয় শোক দিবসে লিডিং ইউনিভার্সিটি বিভিন্ন কর্মসূচি পালন করেছে। রোববার (১৫ আগস্ট ২০২১) সকাল ১১:০০টায় বিশ্ববিদ্যালয়ের ক‍্যাম্পাস প্রাঙ্গণে অবস্থিত বঙ্গবন্ধুর ম‍্যুরালে শ্রদ্ধার্ঘ‍্য নিবেদন করেন লিডিং ইউনিভার্সিটির প্রতিষ্ঠাতা ও বোর্ড অব ট্রাস্টিজের চেয়ারম্যান দানবীর ড.  সৈয়দ রাগীব আলী, উপাচার্য  অধ্যাপক ড. কাজী আজিজুল […]",
    },
    {
      title:
        "লিডিং ইউনিভার্সিটির নবীন শিক্ষকদের জন‍্য প্রশিক্ষণ কর্মশালা উদ্বোধন",
      description:
        "সিলেটের প্রথম বেসরকারি বিশ্ববিদ্যালয় লিডিং ইউনিভার্সিটির নবীন শিক্ষকদের জন‍্য প্রশিক্ষণ কর্মশালা অনুষ্ঠিত হয়েছে। সোমবার (১২ জুলাই ২১২১) সন্ধ্যায় লিডিং ইউনিভার্সিটির ইনস্টিটিউশনাল কোয়ালিটি এ্যাসিউরেন্স সেল (আই কিউ এ সি) এর উদ্যোগে চার দিনব‍্যাপী অনলাইন প্রশিক্ষণের ” Inaugural Session and Technical Sesson (Module-1) of IQAC Foundation Training” অনুষ্ঠিত হয়। এতে প্রধান অতিথি হিসেবে লিডিং ইউনিভার্সিটির প্রতিষ্ঠাতা ও […]",
    },
    {
      url: "https://www.lus.ac.bd/wp-content/uploads/2021/07/SDG-02-250x250.png",
      title:
        "লিডিং ইউনিভার্সিটিতে বাংলাদেশে টেকসই উন্নয়ন বিষয়ক সেমিনার অনুষ্ঠিত",
      description:
        "লিডিং ইউনিভার্সিটিতে বাংলাদেশে টেকসই উন্নয়ন বিষয়ক অনলাইন সেমিনার অনুষ্ঠিত হয়েছে। রোববার (১১ জুলাই ২০২১) সন্ধ্যা সাড়ে সাতটায় বিশ্ববিদ্যালয়ের ব‍্যবসায় প্রশাসন এবং আধুনিক বিজ্ঞান অনুষদের উদ‍্যোগে ‘Sustainable Development in Bangladesh’  শীর্ষক সেমিনার অনুষ্ঠিত হয়। অনুষ্ঠানে প্রধান অতিথি হিসেবে উপস্থিত ছিলেন পল্লী কর্ম-সহায়ক ফাউন্ডেশনের চেয়ারম্যান ড. কাজী খলীকুজ্জামান আহমদ। লিডিং ইউনিভার্সিটির  প্রতিষ্ঠাতা ও বোর্ড অব ট্রাস্টিজের চেয়ারম্যান দানবীর […]",
    },
  ];
  return (
    <div>
      <h2>Latest News</h2>
      <Card className="w-100 shadow p-5 mb-4">
        {news.map((newsItem) => (
          <Row>
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
                <Card.Text>{newsItem.description}</Card.Text>
                <Card.Text>
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
