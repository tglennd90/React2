import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" text="dark">
                    <Nav.Link href="#" className="navLink1"><i class="fas fa-atlas"></i> Google Books</Nav.Link>
                    <Nav.Link href="#" className="navLink2">Book Search</Nav.Link>
                    <Nav.Link href="#" className="navLink3">Saved Books</Nav.Link>                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;