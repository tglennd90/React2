import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#" className="navLink1"><i className="fas fa-atlas"></i> Google Books</Nav.Link>
                    <Link to="/" className="navLink2">Search</Link>
                    <Link to="/saved" className="navLink3">Saved</Link>                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;