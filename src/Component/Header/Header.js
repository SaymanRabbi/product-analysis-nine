import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <>
            <Navbar bg="white" variant="dark" className='py-3 '>
          <Container>
          <Navbar.Brand href="#home" className='text-dark fs-3 fw-bold d-none d-md-block'>HPHONE</Navbar.Brand>
    <Nav className="ms-auto fs-5">
      <Nav.Link href="#home" className='text-dark'>Home</Nav.Link>
      <Nav.Link href="#features"className='text-dark'>Reviews</Nav.Link>
      <Nav.Link href="#pricing"className='text-dark'>Dashboard</Nav.Link>
      <Nav.Link href="#pricing"className='text-dark'>Blogs</Nav.Link>
      <Nav.Link href="#pricing"className='text-dark'>About</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
        </>
    );
};

export default Header;