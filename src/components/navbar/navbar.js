import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

const NavBar = () => {

  return (
    <div className="navbar-fixed-top">
      <Navbar collapseOnSelect className="navbar-inverse">
        <Navbar.Header>
          <Navbar.Brand>
            <span className="navbar-left">My Personal Website</span>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>

        <Navbar.Collapse>

          <Nav pullRight>
            <LinkContainer exact to="/">
              <NavItem>Home</NavItem>
            </LinkContainer>
            {/* <LinkContainer exact to="/education">
              <NavItem>Education</NavItem>
            </LinkContainer> */}
            {/* <LinkContainer exact to="/Projects">
              <NavItem>Projects</NavItem>
            </LinkContainer> */}
            <li role='presentation'>
              <a className="githubLink" href="https://github.com/kvinzheng" target="_blank">GitHub</a>
            </li>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
