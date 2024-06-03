import React from 'react';
import { Card, Button } from 'react-bootstrap';

const KickOffJourney = ({ onRequestCallBack }) => {
  return (
    <Card className="my-4">
      <Card.Body>
        <Card.Title>Kick off your ACCA Prep journey with IndigoLearn</Card.Title>
        <Card.Text>
          Start your journey to becoming ACCA certified with IndigoLearn. Click the button below to request a call back.
        </Card.Text>
        <Button variant="primary" onClick={onRequestCallBack}>Request Call Back</Button>
      </Card.Body>
    </Card>
  );
}

export default KickOffJourney;
