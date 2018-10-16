import React, { Component } from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand"> Clicky Game </a>{" "}
          </Navbar.Brand>{" "}
          <Navbar.Toggle />
        </Navbar.Header>{" "}
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link{" "}
            </NavItem>{" "}
          </Nav>{" "}
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Link Right{" "}
            </NavItem>{" "}
          </Nav>{" "}
        </Navbar.Collapse>{" "}
      </Navbar>
    );
  }
}

export default NavBar;
