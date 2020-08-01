import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function PortNav() {
  return (
<Navbar expand="lg">
        <Navbar.Brand href="#home">Julia Hopkins</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/React-Portfolio/">About</Nav.Link>
            <Nav.Link href="/React-Portfolio/Portfolio/">Portfolio</Nav.Link>
            <Nav.Link href="https://github.com/FenixTrax18" target="_blank">GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/juliahopkinsms/" target="_blank">LinkedIn</Nav.Link>
            <Nav.Link href="https://fenixtrax18.github.io/React-Portfolio/assets/Julia_Hopkins_Resume.pdf" target="_blank">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

  export default PortNav;
