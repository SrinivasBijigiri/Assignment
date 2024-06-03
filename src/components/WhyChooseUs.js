// src/components/WhyChooseUs.js
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-section">
      <h2 className="section-heading">Why Choose Us</h2>
      <Row className="justify-content-center">
        <Col lg={4} md={6} sm={12}>
          <Card className="sub-card">
            <Card.Body>
              <div className="icon">
                <img src="https://www.indigolearn.com/media/images/ca_concept.png" alt="Expert Faculty" />
              </div>
              <div className="card-content">
                <Card.Title>Expert Faculty</Card.Title>
                <Card.Text>
                  Our qualified Faculty with significant practical experience guide students every step of the way.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Card className="sub-card">
            <Card.Body>
              <div className="icon">
                <img src="https://www.indigolearn.com/media/images/ca_top_faculties.png" alt="Complete Success Package" />
              </div>
              <div className="card-content">
                <Card.Title>Complete Success Package</Card.Title>
                <Card.Text>
                  Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums, MCQs, Practice tests, Webinars.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Card className="sub-card">
            <Card.Body>
              <div className="icon">
                <img src="https://www.indigolearn.com/media/images/placement.png" alt="Placements" />
              </div>
              <div className="card-content">
                <Card.Title>Placements</Card.Title>
                <Card.Text>
                  Resume building workshops, mock interviews and placement drives will help you impress the top employers and get your Dream Job.
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default WhyChooseUs;
