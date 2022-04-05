import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
     <Navbar.Brand href="#home" className='fs-3'>HPHONE</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
     <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="ms-auto ">
            
            <NavLink to="/" className={({isActive})=>isActive?"active-link":"link"}>Home</NavLink>
      <NavLink to="/reviews" className={({isActive})=>isActive?"active-link":"link"}>Reviews</NavLink>
      <NavLink to="/dashboard" className={({isActive})=>isActive?"active-link":"link"}>Dashboard</NavLink>
      <NavLink to="/blogs" className={({isActive})=>isActive?"active-link":"link"}>Blogs</NavLink>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
        </>
    );
};

export default Header;