import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar} from "react-bootstrap";
import RouteNavItem from "./components/RouteNavItem";

export default class Footer extends React.Component {
  render() {
    return (
      <Navbar fluid collapseOnSelect>
          <Navbar.Header>
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
