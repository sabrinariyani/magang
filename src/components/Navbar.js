import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container';
import "../Global.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Ayo Magang!</Navbar.Brand>
          <Nav className="navtext">
            <Nav.Link href="Homepage">Beranda</Nav.Link>
            <Nav.Link href="alurmagang">Alur Magang</Nav.Link>
            <Nav.Link href="syaratdanketentuan">Syarat dan Ketentuan</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;