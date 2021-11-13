import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home" className='fw-bold fs-3'>Flaming Wheels</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className='my-auto' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', marginLeft: '10px' }} to="/home">HOME</Link>
              <Link className='my-auto' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', marginLeft: '10px' }} to="/products">PRODUCTS</Link>
              <Link className='my-auto' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', marginLeft: '10px' }} to="/blogs">BLOGS</Link>
            </Nav>
            <Nav>
              {user?.email ?
                <div>
                  <span className='text-white fs-5 text-transform-uppercase'>{user.displayName}'s</span>
                  <Link className='my-auto' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', marginLeft: '10px' }} to="/dashboard">DASHBOARD</Link>
                  <Link className='my-auto' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', marginLeft: '10px' }} to="/login" onClick={logout}>LOGOUT</Link>
                </div> :
                <Link className='my-auto' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', marginLeft: '10px' }} to="/login">LOGIN <i className="fas fa-sign-in-alt"></i></Link>}


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;