import { FAQ_PAGE, HEALTH_ARTICLES, HOME, LOGIN, ABOUT_US, SERVICES } from 'config/urlPaths';
import React from 'react';
import { Li } from './Li';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


export function Navigation() {
  return (<Navbar bg="info" data-bs-theme="light" className='justif'>
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="ms-auto text-black fw-semibold">

        <Nav.Link to={HOME} as={Link}>Home</Nav.Link>
        <Nav.Link to={SERVICES} as={Link}>Services</Nav.Link>
        <Nav.Link to={LOGIN} as={Link}>Login Portal</Nav.Link>
        <Nav.Link to={ABOUT_US} as={Link}>About Us</Nav.Link>
        <Nav.Link to={FAQ_PAGE} as={Link}>FAQ</Nav.Link>
        <Nav.Link to={HEALTH_ARTICLES} as={Link}>Health Articles</Nav.Link>
      </Nav>
    </Container>
  </Navbar>)
}