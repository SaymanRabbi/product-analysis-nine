import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <div className='w-100 d-flex align-items-center justify-content-around' style={{ height: "100px",backgroundColor:"#52016A"}}>
                
                <h6>All Right &copy; Reserved By Sayman Rabbi</h6>
                <Nav className="">
            
            <NavLink to="/" className={({isActive})=>isActive?"active-link":"link"}>Home</NavLink>
      <NavLink to="/reviews" className={({isActive})=>isActive?"active-link":"link"}>Reviews</NavLink>
      <NavLink to="/dashboard" className={({isActive})=>isActive?"active-link":"link"}>Dashboard</NavLink>
      <NavLink to="/blogs" className={({isActive})=>isActive?"active-link":"link"}>Blogs</NavLink>
      
    </Nav>
            </div>
        </div>
    );
};

export default Footer;