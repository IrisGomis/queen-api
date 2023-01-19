import React, {useState} from "react";
import {NavDropdown, Navbar, Container, Button} from "react-bootstrap";
import '../organismos/navBHome.css';
import LogoB from '../../images/logo.png';
import { NavLink} from "react-router-dom";


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
        <Navbar collapseOnSelect expand="lg" className={navbar ? 'navbar scroll navbar-custom fixed-top' : 'navbar navbar-custom fixed-top'} >
          <Container>
            <Navbar.Brand href="/">
              <img src={LogoB} className='logo d-inline-flex align-center' alt="React Bootstrap logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end fw-bold">
              <NavLink className="navbar-item me-5" activeClassName="is-active" to="/Home" exact>Home</NavLink>
              <NavLink className="navbar-item me-5" activeClassName="is-active" to="/Prevent" exact>Prevention</NavLink>
              <NavLink className="navbar-item me-5"  activeClassName="is-active" to="/Spreads" exact>Qurantine</NavLink>
              <NavDropdown title="Pages" className="navbar-item me-5">
                <NavDropdown.Item className="navbar-item" activeClassName="is-active" to="/HandWash" exact>Hand Wash</NavDropdown.Item>
                <NavDropdown.Item className="navbar-item" activeClassName="is-active" to="/SocialDistance" exact>Social Distance</NavDropdown.Item>
                <NavDropdown.Item className="navbar-item" activeClassName="is-active" to="/Blog" exact>Blog</NavDropdown.Item>
                <NavDropdown.Item className="navbar-item" activeClassName="is-active" to="/BlogDetails" exact>Blog Details</NavDropdown.Item>
              </NavDropdown>
              <NavLink className="navbar-item me-5" activeClassName="is-active" to="/About" exact>About</NavLink>
              <NavLink className="navbar-item me-5" activeClassName="is-active" to="/Help" exact>Help</NavLink>
              <div className="me-5">
                <NavLink to="/UpDates"><Button className="rounded-pill fw-bold" activeClassName="is-active" exact>Tracker</Button></NavLink>
              </div>
            </Navbar.Collapse>           
          </Container>
        </Navbar>
    </>
  );
}
  
  export default NavBHome;