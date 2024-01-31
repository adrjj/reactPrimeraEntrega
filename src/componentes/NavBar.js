import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carrrito from './CartWidget';



function CollapsibleExample({ marca, enlaceUno, enlaceDos, enlaceTres }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">{marca}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">{enlaceUno}</Nav.Link>
            <Nav.Link href="#pricing">{enlaceDos}</Nav.Link>
            <Nav.Link href="#pricing">{enlaceTres}</Nav.Link>
          </Nav>
          <Nav>
            <Carrrito></Carrrito>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;