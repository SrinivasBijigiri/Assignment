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
    <Container>
      <Header />
      <section id="become-acca">
        <BecomeACCA />
      </section>
      <section id="program-details">
        <ProgramDetails />
      </section>
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
      <section id="acca-eligibility">
        <ACCAEligibility />
      </section>
      <section id="what-will-you-learn">
        <WhatWillYouLearn />
      </section>
      <section id="placement-assistance">
        <PlacementAssistance />
      </section>
      <RequestCallBackModal show={showModal} handleClose={handleCloseModal} />
    </Container>
  );
}

export default App;
