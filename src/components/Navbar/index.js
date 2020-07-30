import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function PortNav() {
  return (
<Navbar expand="lg">
        <Navbar.Brand href="#home">Julia Hopkins</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="https://github.com/FenixTrax18" target="_blank">GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/juliahopkinsms/" target="_blank">LinkedIn</Nav.Link>
            <Nav.Link href="./assets/Julia Hopkins Resume.pdf" target="_blank">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

  export default PortNav;