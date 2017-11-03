import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

class Navigation extends Component {

  render() {
    return (
     <div>  
      <Navbar fixedTop collapseOnSelect>
          <Navbar.Header autoFocus>
            <Navbar.Brand>
              <Link to="/">DENISE M. DEKKER</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/work">
                <NavItem eventKey={1}>WORK</NavItem>
              </LinkContainer>
              <LinkContainer to="/resume">
              <NavItem eventKey={2}>RESUME</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <div className="container">
      </div>
    </div>  
    );
  }
}

export default Navigation;
