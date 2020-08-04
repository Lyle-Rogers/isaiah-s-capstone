import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default class MyNavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="sm" className="mt-100">
        <Navbar.Brand>Boards</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="outline-none"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/board/com" className="nav-link">
              Community
            </NavLink>

            <NavLink to="/board/pol" className="nav-link">
              Polotics
            </NavLink>

            <NavLink to="/board/bs" className="nav-link">
              Bull Shit
            </NavLink>

            <NavLink to="/board/r" className="nav-link">
              Random
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
