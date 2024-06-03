import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import BecomeACCA from './components/BecomeACCA';
import ProgramDetails from './components/ProgramDetails';
import WhyChooseUs from './components/WhyChooseUs';
import ACCAEligibility from './components/ACCAEligibility';
import WhatWillYouLearn from './components/WhatWillYouLearn';
import PlacementAssistance from './components/PlacementAssistance';
import RequestCallBackModal from './components/RequestCallBackModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  return (
    <Container fluid>
  <Header />
  <section id="become-acca" className="my-4">
    <Container>
      <BecomeACCA />
    </Container>
  </section>
  <section id="program-details" className="my-4">
    <Container>
      <ProgramDetails />
    </Container>
  </section>
  <section id="why-choose-us" className="my-4">
    <Container>
      <WhyChooseUs />
    </Container>
  </section>
  <section id="acca-eligibility" className="my-4">
    <Container>
      <ACCAEligibility />
    </Container>
  </section>
  <section id="what-will-you-learn" className="my-4">
    <Container>
      <WhatWillYouLearn />
    </Container>
  </section>
  <section id="placement-assistance" className="my-4">
    <Container>
      <PlacementAssistance />
    </Container>
  </section>
  <RequestCallBackModal show={showModal} handleClose={handleCloseModal} />
</Container>

    
  );
}

export default App;
