import React, { Component } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";

class Navigation extends Component {

  render() {
    return (
     <div>  
      <Navbar fixedTop collapseOnSelect>
          <Navbar.Header autoFocus>
            <Navbar.Brand>
              <Link to="/">Denise M. Dekker</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem><Link to="/work">Work</Link></NavItem>
              <NavItem><Link to="/resume">Resume</Link></NavItem>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <div className="container">
        {this.props.children}
      </div>
    </div>  
    );
  }
}

export default Navigation;
