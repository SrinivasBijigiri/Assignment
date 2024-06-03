// src/components/WhatWillYouLearn.js
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './WhatWillYouLearn.css';

const WhatWillYouLearn = () => {
  return (
    <div className="what-will-you-learn-section">
      <h2 className="section-heading">What Will You Learn in ACCA?</h2>
      <Row className="justify-content-center">
        <Col lg={4} md={6} sm={12}>
          <Card className="sub-card">
            <Card.Title className="card-title">3 Papers</Card.Title>
            <Card.Body>
              <Card.Text>
                <strong>Knowledge Level:</strong>
                <ul>
                  <li>Business and Technology (BT)</li>
                  <li>Management Accounting (MA)</li>
                  <li>Financial Accounting (FA)</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Card className="sub-card">
            <Card.Title className="card-title">6 Papers</Card.Title>
            <Card.Body>
              <Card.Text>
                <strong>Skill Level:</strong>
                <ul>
                  <li>Corporate and Business Law (LW)</li>
                  <li>Performance Management (PM)</li>
                  <li>Taxation (TX)</li>
                  <li>Financial Reporting (FR)</li>
                  <li>Audit and Assurance (AA)</li>
                  <li>Financial Management (FM)</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <Card className="sub-card">
            <Card.Title className="card-title">4 Papers</Card.Title>
            <Card.Body>
              <Card.Text>
                <strong>Professional Level:</strong>
                <ul>
                  <li>Compulsory:
                    <ul>
                      <li>SBL - Strategic Business Leader</li>
                      <li>SBR - Strategic Business Reporting</li>
                    </ul>
                  </li>
                  <li>Optional (Choose Two):
                    <ul>
                      <li>Advanced Financial Management (AFM)</li>
                      <li>Advanced Performance Management (APM)</li>
                    </ul>
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default WhatWillYouLearn;
