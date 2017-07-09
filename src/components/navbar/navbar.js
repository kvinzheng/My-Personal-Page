import React, {Component} from 'react';
import { Navbar, NavItem, Nav, MenuItem , NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class NavBar extends Component {
  return (){
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <span className="navbar-left">My Personal Website</span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>

          <Nav pullLeft>
            <LinkContainer exact to="/">
              <NavItem>Home</NavItem>
            </LinkContainer>

            <LinkContainer >
              <NavItem>Personal WebSite</NavItem>
            </LinkContainer>

            <LinkContainer >
              <NavItem>Community</NavItem>
            </LinkContainer>

            <Nav className="githubLink">
              <a className="githubLink" href="" target="_blank">GitHub</a>
            </Nav>
          </Nav>

          <Nav pullRight>

            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navbar;
