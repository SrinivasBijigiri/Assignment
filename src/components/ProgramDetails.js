// src/components/ProgramDetails.js
import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import './ProgramDetails.css';

const ProgramDetails = () => {
  const details = [
    {
      title: 'Levels',
      description: 'Three (13 papers)',
      logo: 'https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_book_icon.png',
    },
    {
      title: 'Duration',
      description: '6-30 months',
      logo: 'https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_calendar_icon.png',
    },
    {
      title: 'Exams',
      description: 'Quarterly (Online)',
      logo: 'https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_exam_icon.png',
    },
    {
      title: 'Exemptions',
      description: 'Upto 9 papers',
      logo: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ38BJ70PMZixbKFQhzNjIsJoq-bUC5lPo0LcvmyDh1qG-hUwPJ',
    },
  ];

  return (
    <div className="program-details-section">
      <Container>
        <Row className="justify-content-center">
          {details.map((detail, index) => (
            <Col xs={12} md={6} lg={3} className="text-center mb-4" key={index}>
              <Card className="detail-card">
                <Card.Body>
                  <img src={detail.logo} alt={`${detail.title} logo`} />
                  <div>
                    <h5>{detail.title}</h5>
                    <p>{detail.description}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProgramDetails;
