import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import './RequestCallBackModal.css'; // Import custom CSS file

const RequestCallBackModal = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [currentQualifications, setCurrentQualifications] = useState('');
  const [interestedIn, setInterestedIn] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log("Form submitted with data:", phoneNumber, email, currentQualifications, interestedIn);
    setSubmitted(true);
  }

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col lg={6}>
            <Card.Title>Aspiring to the ACCA? Get in touch with us</Card.Title>
            <p>Sign in and get instant access to our FREE courses</p>
            <Button variant="danger">Download Brochure</Button>
          </Col>
          <Col lg={6}>
            {submitted ? (
              <div className="success-message">
                <p>Your request has been submitted successfully!</p>
              </div>
            ) : (
              <div className="form-with-border">
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formPhoneNumber" className="form-group-spacing">
                    <Form.Control type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="form-group-spacing">
                    <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </Form.Group>

                  <Form.Group controlId="formCurrentQualifications" className="form-group-spacing">
                    <Form.Control as="select" value={currentQualifications} onChange={(e) => setCurrentQualifications(e.target.value)}>
                      <option value="">Current Qualifications</option>
                      <option value="High School">High School</option>
                      <option value="Bachelor's Degree">Bachelor's Degree</option>
                      <option value="Master's Degree">Master's Degree</option>
                      {/* Add more options as needed */}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formInterestedIn" className="form-group-spacing">
                    <Form.Control as="select" value={interestedIn} onChange={(e) => setInterestedIn(e.target.value)}>
                      <option value="">Interested In</option>
                      <option value="Accounting">Accounting</option>
                      <option value="Finance">Finance</option>
                      <option value="Business Administration">Business Administration</option>
                      {/* Add more options as needed */}
                    </Form.Control>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="request-call-button">
                    Request Call
                  </Button>
                </Form>
              </div>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default RequestCallBackModal;
