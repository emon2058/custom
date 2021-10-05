import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css';
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
            <div className="header">
                <h1>ONLINE LEARNING</h1>
                <h1>Learn Everyday</h1>
                <p>Learning something new every day is one of the top ways to keep the mind sharp. The brain is like a muscle and needs to be exercised</p>
            </div>
        </div>
    );
};

export default Header;