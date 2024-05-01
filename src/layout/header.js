import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const feather = require('feather-icons');
setTimeout(() => {
    feather.replace();
}, 1000);


const Header = () => {
    return <header data-bs-theme="dark" className="bd-footer bg-body-tertiary">
            <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">POLOS KLIDAD</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><i data-feather="home"> </i>Inicio</Nav.Link>
            <Nav.Link href="#action2"><i data-feather="info"></i>Más informacion</Nav.Link>
            <NavDropdown title="Tallas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">S</NavDropdown.Item>
              <NavDropdown.Item href="#action4">M</NavDropdown.Item>
              <NavDropdown.Item href="#action4">X</NavDropdown.Item>
              <NavDropdown.Item href="#action4">XL</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Especiales
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              KLIDAD
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="btn btn-primary"><i data-feather="search"></i></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>;
}

export default Header;