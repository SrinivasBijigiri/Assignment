import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="header-navbar">
      <Navbar.Brand href="#home" className="logo-container">
        <img
          src="https://il-app.s3.ap-south-1.amazonaws.com/images/CFA_1FIN_LOGO.png"
          alt="Indigo Learn Logo"
          className="logo-img"
        />
        <span className="logo-text">Indigo Learn</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#why-choose-us">Why Choose Us</Nav.Link>
          <Nav.Link href="#what-will-you-learn">What Will You Learn</Nav.Link>
          <Nav.Link href="#program-details">Program Details</Nav.Link>
          <Nav.Link href="#acca-eligibility">ACCA Eligibility</Nav.Link>
          <Nav.Link href="#placement-assistance">Placement Assistance</Nav.Link>
          <Nav.Link href="#kick-off-journey">Kick Off Journey</Nav.Link>
        </Nav>
        <Button variant="outline-primary" className="ml-2">Login/Sign In</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
