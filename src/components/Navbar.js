import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar1() {
    return (
        <Navbar bg="custom-color" sticky="top" style={{ backgroundColor: '#f7f0ea' }}>
        <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Our Color</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            </Nav>
            <Button variant="outline-success">Draw</Button>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default Navbar1;