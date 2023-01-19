import React, {useState} from "react";
import {NavDropdown, Nav, Navbar, Container, Button} from "react-bootstrap";
import '../organismos/navBHome.css';
import LogoB from '../../images/logo.png';

function NavBHome() {
  const [navbar, setNavbar] = useState(false);

  const changeBg = () =>{
    if(window.scrollY >= 20) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBg);

  return (
    <>
    {/*Main*/}
      <Navbar collapseOnSelect expand="lg" className={navbar ? 'navbar shadow scroll navbar-custom fixed-top' : 'navbar shadow navbar-custom fixed-top'} >
        <Container>
          <Navbar.Brand href="/">
            <img src={LogoB} className='logo d-inline-flex align-center' alt="React Bootstrap logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end fw-bold">
            <Nav.Link className="navbar-item me-5" activeClassName="is-active" to="/Home" exact>Home</Nav.Link>
            <Nav.Link className="navbar-item me-5" activeClassName="is-active" to="/Prevent" exact>Prevention</Nav.Link>
            <Nav.Link className="navbar-item me-5" activeClassName="is-active" to="/Qurantine" exact>Qurantine</Nav.Link>
            <NavDropdown title="Pages" className="navbar-item me-5">
              <NavDropdown.Item className="navbar-item" activeClassName="is-active" to="/HandWash" exact>Hand Wash</NavDropdown.Item>
              <NavDropdown.Item className="navbar-item" activeClassName="is-active" to="/SocialDistance" exact>Social Distance</NavDropdown.Item>
              <NavDropdown.Item className="navbar-item" activeClassName="is-active" to="/Blog" exact>Blog</NavDropdown.Item>
              <NavDropdown.Item className="navbar-item" activeClassName="is-active" to="/BlogDetails" exact>Blog Details</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navbar-item me-5" activeClassName="is-active" to="/About" exact>About</Nav.Link>
            <Nav.Link className="navbar-item me-5" activeClassName="is-active" to="/Help" exact>Help</Nav.Link>
            <div className="me-5">
              <Button className="rounded-pill fw-bold" activeClassName="is-active" to="/Tracker" exact>Tracker</Button>
            </div>
          </Navbar.Collapse>           
        </Container>
      </Navbar>
    </>
  );
}
  
  export default NavBHome;