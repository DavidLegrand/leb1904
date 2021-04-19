import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>My website</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
        <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
