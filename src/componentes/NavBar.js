
import Container from 'react-bootstrap/Container';
import "../style/navBar.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carrrito from './CartWidget';
import { NavLink ,Link } from 'react-router-dom';



function CollapsibleExample({ marca, enlaceUno, enlaceDos, enlaceTres }) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className='contTotalNav'>
        <NavLink className="marca" to={"/"} >{marca}</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto  contCategorias " >
            <NavLink className="categoria"  to={"/categoria/famosos"} >{enlaceUno}</NavLink>
            <NavLink className="categoria" to={"/categoria/juegos"} >{enlaceDos}</NavLink>
            <NavLink className="categoria" to={"/categoria/logos"} >{enlaceTres}</NavLink>
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
