import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav>                    
                <Navbar bg="light" expand="lg">
                    <NavLink to="/">Online Course</NavLink>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/courses">Courses</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </nav>
        </div>
    );
};

export default Header;