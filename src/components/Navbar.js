import React from 'react';
import logo from '../img/logo.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import BucketColorPicker from '../pages/BucketColorPicker';
import Aboutus from '../pages/Aboutus';
import Welcome from '../pages/WelcomeTo';
import Home from '../pages/Home';
import Product from '../pages/Product';
import ComingSoon from '../pages/ComingSoon';
import Editor from '../pages/Editor';
import ToHex from '../pages/ToHex';
import ToName from '../pages/ToName';
import ToRgb from '../pages/ToRgb';
import ColorScheme from '../pages/ColorScheme';
import Gmail from './Gmail';
import NewColor from '../pages/NewColorCode';

function Navbar1() {
    return (
        <Router>
            <div>
                <Navbar bg="custom-color" variant="dark" fixed="top" style={{ backgroundColor: '#212121' }} expand="lg">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/">
                            <img src={logo} style={{ height: '30px', width: '30px' }} alt="Logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className="me-auto my-2 my-lg-0 mx-auto" style={{ maxHeight: '100px' }} navbarScroll>
                                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link as={Link} to="/color">Our Color</Nav.Link>
                                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                                <Nav.Link as={Link} to="/new">New Product</Nav.Link>
                                <Nav.Link as={Link} to="/newColor">New Color</Nav.Link>
                                <NavDropdown title="Converter" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/convertH">Color to Hex</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/convertN">Color to Name</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/convertR">Color to RGB</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/scheme">Color Scheme</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Button as={Link} to="/draw" variant="outline-success">Draw</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/color" element={<BucketColorPicker />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="/home" element={<Home />} />
                <Route path="/new" element={<Product />} />
                <Route path="/coming" element={<ComingSoon />} />
                <Route path="/draw" element={<Editor />} />
                <Route path="/convertH" element={<ToHex />} />
                <Route path="/convertN" element={<ToName />} />
                <Route path="/convertR" element={<ToRgb />} />
                <Route path="/scheme" element={<ColorScheme /> }/>
                <Route path="/send" element={<Gmail />} />
                <Route path="/newColor" element={<NewColor />} />
            </Routes>
        </Router>
    );
}

export default Navbar1;
