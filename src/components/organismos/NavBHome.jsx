import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../organismos/navBHome.css';
import Logo from '../../images/logo-white.png';
//import { Link } from 'react-router-dom';

function NavBHome() {
  return (
    <>
      <Navbar className='navbar-custom fixed-top'>
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} className="d-inline-flex align-center" alt="React Bootstrap logo"/>
          </Navbar.Brand>
          <Navbar className="">
            <h1 className="navbar-item me-3 fw-light"> Home </h1>
            <h1 className="navbar-item me-3 fw-light"> Prevention </h1>
            <h1 className="navbar-item me-3 fw-light"> Qurantine </h1>
            <h1 className="navbar-item me-3 fw-light"> Pages </h1>
            <h1 className="navbar-item me-3 fw-light"> About </h1>
            <h1 className="navbar-item me-3 fw-light"> Help </h1>
            <div className="mx-auto">
              <Button className="rounded-pill " size="sm"> Tracker </Button>
            </div>
           
          </Navbar>
        </Container>
      </Navbar>
    </>
  );
}
  
  export default NavBHome;