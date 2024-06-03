import React, { useState } from 'react';
import { Card, Form, Button, Alert, Row, Col, Container } from 'react-bootstrap';
import './BecomeACCA.css';

const BecomeACCA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <div className="become-acca-section">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col lg={12} className="text-center">
            <h4 className='heading'>Become ACCA In 18 months</h4>
            <p className='paragraph'>Acquire globally recognized accountancy qualification, ACCA (also called as Global CA), and get placed in top MNCs & Big4s.</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={6} className="stats-section">
            <Row>
              <Col xs={12} md={6} className="text-center mb-4">
                <Card className="stats-card">
                  <Card.Body>
                    <h5 className='card-text-color'>3,20,422</h5>
                    <p className='card-text-color'>Registered Users</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} className="text-center mb-4">
                <Card className="stats-card">
                  <Card.Body>
                    <h5 className='card-text-color'>99,237</h5>
                    <p className='card-text-color'>Courses Enrolled</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} className="text-center mb-4">
                <Card className="stats-card">
                  <Card.Body>
                    <h5 className='card-text-color'>4,69,07,911</h5>
                    <p className='card-text-color'>Minutes Watched</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={6} className="text-center mb-4">
                <Card className="stats-card">
                  <Card.Body>
                    <h5 className='card-text-color'>8 Experts</h5>
                    <p className='card-text-color'>Faculty</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="form-section">
            <Card className="form-card">
              <Card.Body>
                <h4>Aspiring to be ACCA</h4>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Label></Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label></Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="Email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </Form.Group>
                  <Form.Group controlId="formMobile">
                    <Form.Label></Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Mobile Number" 
                      name="mobile" 
                      value={formData.mobile} 
                      onChange={handleChange} 
                      required 
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="submit-button">Submit</Button>
                </Form>
                {showAlert && (
                  <Alert variant="success" className="mt-3">
                    We will call back soon.
                  </Alert>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BecomeACCA;
