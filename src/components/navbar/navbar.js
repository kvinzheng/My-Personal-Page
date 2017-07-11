import React, {Component} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';

const NavBar = () => {

  render() {
    return (
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <span className="navbar-left">My Personal Website</span>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse>

            <Nav pullLeft>
              <LinkContainer exact to="/">
                <NavItem>Home</NavItem>
              </LinkContainer>
              <LinkContainer exact to="/education">
                <NavItem>Education</NavItem>
              </LinkContainer>
              <LinkContainer exact to="/Projects">
                <NavItem>Projects</NavItem>
              </LinkContainer>

              <Nav className="githubLink">
              <a className="githubLink" href="https://github.com/kvinzheng" target="_blank">GitHub</a>
              </Nav>
            </Nav>

            <Nav pullRight>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown"></NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
