import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <>
            <Navbar className='py-3 custom-navbar '>
          <Container>
          <Link to="/" className='text-white fs-3 fw-bold d-none d-md-block text-decoration-none'>HPHONE</Link>
            <Nav className="ms-auto fs-5">
            <Link to="/"className='text-white text-decoration-none me-3'>Home</Link>
      <Link to="/reviews"className='text-white text-decoration-none me-3'>Reviews</Link>
      <Link to="/dashboard"className='text-white text-decoration-none me-3'>Dashboard</Link>
      <Link to="/blogs"className='text-white text-decoration-none me-3'>Blogs</Link>
      <Link to="/about"className='text-white text-decoration-none me-3'>About</Link>
    </Nav>
    </Container>
  </Navbar>
  
        </>
    );
};

export default Header;