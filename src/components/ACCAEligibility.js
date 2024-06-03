import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './ACCAEligibility.css';

const ACCAEligibility = () => {
  return (
  <div><h1  className='section-heading_ACC'>ACCA - Eligibility</h1>
    <div className="acca-eligibility-section">
      <Row className="justify-content-center">
        <Col lg={6} md={8}>
          <Card className="sub-card">
            <Card.Body>
              <Card.Title>To appear for the ACCA course examination a candidate should have:</Card.Title>
              <Card.Text>
                <ul>
                  <li>Qualified the 10+2 exams</li>
                  <li>An aggregate of 65% in Mathematics / Accounts and English and a minimum of 50% in other subjects</li>
                  <li>Others can still register for the ACCA course with Foundation in Accountancy (FIA).</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
  );
}

export default ACCAEligibility;
