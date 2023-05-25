import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BucketColorPicker from '../BucketColorPicker/BucketColorPicker';
import Aboutus from '../aboutus/Aboutus';
import Welcome from '../OpeningWebsite/WelcomeTo';
import Home from '../pages/Home';

function Navbar1() {
  return (
    <Router>
      <div>
        <Navbar bg="custom-color" sticky="top" style={{ backgroundColor: '#f7f0ea' }}>
          <Container fluid>
            <Navbar.Brand as={Link} to="/start">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link as={Link} to="/color">Our Color</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              </Nav>
              <Button variant="outline-success">Draw</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Routes>
        <Route path="/start" element={<Welcome />} />
        <Route path="/color" element={<BucketColorPicker />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/home" element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default Navbar1;
