import React from 'react';
import "./App.css";
import Grid from 'react-bootstrap/lib/Grid';
import {Nav, NavItem} from "react-bootstrap";
import FontAwesome from 'react-fontawesome';
import { Col } from 'reactstrap';


export default class Footer extends React.Component {
  render() {
    return (
      <Grid>
        <footer className="footer-nav col-md-12 text-center">
            <Nav justified >
              <NavItem className="text-center"
                eventKey={1}
                href="https://github.com/dmcdekker" target="_blank">
                <FontAwesome name="github" />
              </NavItem>
              <NavItem className="text-center"
                eventKey={2}
                href="http://www.linkedin.com/in/denise-m-dekker" target="_blank">
                <FontAwesome name="linkedin" />
              </NavItem>
              <NavItem className="text-center"
                eventKey={3}
                href="http://instagram.com/dmcdekker" target="_blank">
                <FontAwesome name="instagram" />
              </NavItem>
            </Nav>
            <br/>
            
        </footer>
        <Col md="12 text-center">
         <h6 className="copyright">© 2017 D.M. Dekker. All rights reserved.</h6>
        </Col> 
      </Grid>
    );
  }
}
