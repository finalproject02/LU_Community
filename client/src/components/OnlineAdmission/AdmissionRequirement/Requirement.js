import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Requirement.css";
import { useHistory } from "react-router-dom";

const Requirement = () => {
  let history = useHistory();
  function handleClick() {
    history.push("/admissionfirststep");
  }
  const admissionTypes = [
    {
      title: "Leading University Admission Form",
      subtitle: "Admission for Undergraduate Programs",
      heading: "Admission Requirements:",
      requirement1:
        "1. Minimum score of CGPA 2.50 both in SSC and HSC or CGPA 6.00 for both examinations in aggregate but not less than 2.00 in any of S.S.C & H.S.C.",
      requirement2:
        "2. For the Children of freedom fighters aggregated CGPA of S.S.C & H.S.C or equivalent examinations is 5.00.",
      requirement3:
        "3. For ‘O’ and ‘A’ level students: 5 subjects in ‘O’ level and 2 subjects in ’A’ level where grade B in at least 4 subjects and grade C in the remaining subjects.",
    },
    {
      title: "Leading University Admission Form",
      subtitle: "Admission for Undergraduate Programs",
      heading: "Admission Requirements:",
      requirement1:
        "Must have minimum score of CGPA 2.50 both in SSC and HSC or CGPA 6.00 for both examinations in aggregate but not less than 2.00 in any of S.S.C & H.S.C. with following result into the graduation level:",
      requirement2: "LL.M: LL.B (Hons) graduate with at least CGPA 2.00",
      requirement3:
        "M.A. in Islamic Studies: Graduate in any discipline with at least CGPA 2.00 or equivalent result.",
      requirement4:
        "MPH: MBBS/B.Sc. Nursing or equivalent degree or Masters in any discipline of pure science, applied science or social science having considerable experience in biological/ health science.",
      requirement5:
        "MBA: Minimum bachelor degree with at least CGPA 2.00 or equivalent result.",
      requirement6:
        "EMBA: Minimum bachelor degree with at least CGPA 2.00 or equivalent result. Minimum 2 years of experience in executive position.",
      requirement7:
        "M.Sc. in CSE: Graduate in 4years B.Sc. (Hons/Engg) in Computer Science, CSE & Computer Science & IT/ICT with at least CGPA 2.00 or equivalent result. (Duration 18 month). Graduate in any other 4 years B.Sc. Program with at least CGPA 2.00 or equivalent result. (Duration 24 Months)",
    },
  ];
  return (
    <Container>
      <Row className="justify-content-center">
        {admissionTypes.map((item) => (
          <Col md="8">
            <Card className="w-100 my-5">
              <Card.Body className="shadow-sm p-4">
                <Card.Title className="textPrimary mb-3">
                  <h2>{item.title}</h2>
                </Card.Title>
                <Card.Subtitle className="mb-2 textSecondary mb-3">
                  <h6>{item.subtitle}</h6>
                </Card.Subtitle>
                <Card.Text>
                  <h5>{item.heading}</h5>
                </Card.Text>
                <Card.Text>{item.requirement1}</Card.Text>
                <Card.Text>{item.requirement2}</Card.Text>
                <Card.Text>{item.requirement3}</Card.Text>
                <Card.Text>{item.requirement4}</Card.Text>
                <Card.Text>{item.requirement5}</Card.Text>
                <Card.Text>{item.requirement6}</Card.Text>
                <Card.Text>{item.requirement7}</Card.Text>
                <hr />
                <div className="text-end">
                  <Card.Link
                    className="btn bg-primary text-white px-5"
                    onClick={handleClick}
                  >
                    Next
                  </Card.Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Requirement;
