import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import {Nav, NavItem} from "react-bootstrap";
import FontAwesome from 'react-fontawesome';


export default class Footer extends React.Component {
  render() {
    return (
      <Grid>
       
        <footer>
            <Nav justified>
              <NavItem
                eventKey={1}
                href="https://github.com/dmcdekker" target="_blank">
                <FontAwesome name="github" />
              </NavItem>
              <NavItem
                eventKey={2}
                href="http://www.linkedin.com/in/denise-m-dekker-64538a5" target="_blank">
                <FontAwesome name="linkedin" />
              </NavItem>
              <NavItem
                eventKey={1}
                href="http://twitter.com/dmcdekker" target="_blank">
                <FontAwesome name="instagram" />
              </NavItem>
            </Nav>
            <br/>
            <h6 className="copyright text-center">© 2017 D.M. Dekker. All rights reserved.</h6>
        </footer>
      </Grid>
    );
  }
}
