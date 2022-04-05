import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <div className='w-100 d-flex align-items-center justify-content-around' style={{ height: "100px",backgroundColor:"#52016A"}}>
                
                <small>All Right &copy; Reserved By Sayman</small>
                <Nav className="">
            
            <NavLink to="/" className={({isActive})=>isActive?"active-link fs-6":"link fs-6"}>Home</NavLink>
      <NavLink to="/reviews" className={({isActive})=>isActive?"active-link fs-6":"link fs-6"}>Reviews</NavLink>
      <NavLink to="/dashboard" className={({isActive})=>isActive?"active-link fs-6":"link fs-6"}>Dashboard</NavLink>
      <NavLink to="/blogs" className={({isActive})=>isActive?"active-link fs-6":"link fs-6"}>Blogs</NavLink>
      
    </Nav>
            </div>
        </div>
    );
};

export default Footer;