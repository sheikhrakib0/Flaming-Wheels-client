import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home" className='fw-bold fs-3'>Flaming Wheels</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className='my-auto' style={{textDecoration: 'none', color: 'white', fontWeight: 'bold', marginLeft:'10px'}} to="/home">HOME</Link>
              <Link className='my-auto' style={{textDecoration: 'none', color: 'white', fontWeight: 'bold', marginLeft:'10px'}} to="/products">PRODUCTS</Link>
            </Nav>
            <Link className='my-auto' style={{textDecoration: 'none', color: 'white', fontWeight: 'bold', marginLeft:'10px'}} to="/dashboard">DASHBOARD</Link>

            <Link className='my-auto' style={{textDecoration: 'none', color: 'white', fontWeight: 'bold', marginLeft:'10px'}} to="/login">LOGIN</Link>
            <Nav>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;