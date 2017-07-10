import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import { L } from 'react-router-bootstrap';

// class NavBar extends Component {
//   return () {
//     return (
//       <div>
//       <div>inside navbar</div>
//       <Navbar collapseOnSelect>
//         <Navbar.Header>
//           <Navbar.Brand>
//             <span className="navbar-left">My Personal Website</span>
//           </Navbar.Brand>
//           <Navbar.Toggle/>
//         </Navbar.Header>
//
//         <Navbar.Collapse>
//
//           <Nav pullLeft>
//             <LinkContainer exact to="/">
//               <NavItem>Home</NavItem>
//             </LinkContainer>
//
//             <LinkContainer >
//               <NavItem>Personal WebSite</NavItem>
//             </LinkContainer>
//
//             <LinkContainer >
//               <NavItem>Community</NavItem>
//             </LinkContainer>
//
//             <Nav className="githubLink">
//               <a className="githubLink" href="" target="_blank">GitHub</a>
//             </Nav>
//           </Nav>
//
//           <Nav pullRight>
//
//             <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
//               {/* <MenuItem eventKey={3.1}>Action</MenuItem>
//               <MenuItem eventKey={3.2}>Another action</MenuItem>
//               <MenuItem eventKey={3.3}>Something else here</MenuItem>
//               <MenuItem divider/>
//               <MenuItem eventKey={3.3}>Separated link</MenuItem> */}
//             </NavDropdown>
//
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//     );
//   }
// }
const navbarInstance = (
  <div>
  <div>
    my phone is here
  </div>
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        {/* <a href="#">React-Bootstrap</a> */}
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        {/* <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown"> */}
          {/* <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem> */}
        {/* </NavDropdown> */}
      </Nav>
      <Nav pullRight>
        {/* <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem> */}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
);


export default navbarInstance;
