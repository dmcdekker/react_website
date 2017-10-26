import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import RouteNavItem from "./components/RouteNavItem";

class Navigation extends Component {

  render() {
    return (
      <Navbar fixedTop collapseOnSelect>
          <Navbar.Header autoFocus>
            <Navbar.Brand>
              <Link to="/">Denise M. Dekker</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <RouteNavItem href="/work">Work</RouteNavItem>
              <RouteNavItem href="/resume">Resume</RouteNavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
