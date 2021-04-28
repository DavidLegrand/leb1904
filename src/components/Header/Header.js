import React from "react";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from 'store/actions/user'

const Header = ({ user, logoutUser }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>My website</Navbar.Brand>
      <Nav className="mr-auto">
        {user.logged ?
          (<>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          </>)
          :
          (<>
            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
            <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
          </>)
        }
      </Nav>
      {user.logged &&
        <Form inline>
          <span className="text-info mr-3">Bonjour {user.login}</span>
          <span className="text-light mr-3">ID : {user.id}</span>
          <Button onClick={() => logoutUser()}>Déconnexion</Button>
        </Form>
      }

    </Navbar>
  );
};

export default connect(
  (state) => ({ user: state.user }),
  { logoutUser }
)(Header);
