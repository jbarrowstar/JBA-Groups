import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const scrollToSiteVisit = () => {
    const element = document.getElementById('site-visit');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="lg" className="nav-container" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="/">
          <Link to="/">
            <img
              src={require("../../Assets/images/JB (31).png")}
              alt="Logo"
              className="nav-logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="justify-content-center flex-grow-1 ps-5"
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <NavDropdown 
              title="Our Companies" 
              id="basic-nav-dropdown"
              className="nav-link custom-dropdown"
              style={{ zIndex: 1002 }}
            >
              
              <NavDropdown.Item as={Link} to="/jbas">JBAS</NavDropdown.Item>
            </NavDropdown>
          </Nav>
                
          <div className="d-flex gap-2">
            <Link to="/contact" onClick={scrollToSiteVisit}>
              <Button className="nav-btn">Site Visit</Button>
            </Link>
            <Link to="/contact">
              <Button className="nav-btn">Contact</Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;