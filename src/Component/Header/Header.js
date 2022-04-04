import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <>
            <Navbar className='py-3 custom-navbar '>
          <Container>
          <NavLink to="/" className='text-white fs-3 fw-bold d-none d-md-block text-decoration-none'>HPHONE</NavLink>
            <Nav className="ms-auto fs-5">
            
            <NavLink to="/" className={({isActive})=>isActive?"active-link":"link"}>Home</NavLink>
      <NavLink to="/reviews" className={({isActive})=>isActive?"active-link":"link"}>Reviews</NavLink>
      <NavLink to="/dashboard" className={({isActive})=>isActive?"active-link":"link"}>Dashboard</NavLink>
      <NavLink to="/blogs" className={({isActive})=>isActive?"active-link":"link"}>Blogs</NavLink>
      <NavLink to="/about" className={({isActive})=>isActive?"active-link":"link"}>About</NavLink>
    </Nav>
    </Container>
  </Navbar>
  
        </>
    );
};

export default Header;