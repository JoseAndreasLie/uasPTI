import React from 'react';
import logo from '../img/logo.png';
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
import Product from './Product';
import ComingSoon from './ComingSoon';

function Navbar1() {
    return (
        <Router>
        <div>
            <Navbar bg="custom-color" variant="dark" fixed="top" style={{ backgroundColor: '#212121' }} expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/start">
                    <img src={logo} style={{height: '30px', width: '30px'}}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0 mx-auto" style={{ maxHeight: '100px'}} navbarScroll>
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/color">Our Color</Nav.Link>
                    <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/new">New Product</Nav.Link>
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
            <Route path="/new" element={<Product />} />
            <Route path="/coming" element={<ComingSoon />} />
        </Routes>
        </Router>
);
}

export default Navbar1;
