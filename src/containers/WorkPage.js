import React from 'react';
import './Work.css';
import data from './data';
import { Link } from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import { Col } from 'reactstrap';
import { Nav, NavItem } from "react-bootstrap";

const WorkPage = (props) => {
    
    const workpage = data.get(props.match.params.link)
    if (!workpage) {
    return <div>Sorry, but this work page does not exist!</div>
    }
    
    const images = workpage.pageimg.map(img =>
      <Col md="12" key={img}>      
        <img className="img-responsive" alt="images" src={img} />
      </Col>    
    );
    
    
    
      
    return (
        <div className="App">
            <FontAwesome name="arrow-left" /><Link className="link" to='/work'> Work Main</Link>
            
            <Col md="12 text-center">
              <h1>{workpage.name}: {workpage.type}</h1>
            </Col>
            
            <Col md="12">
                <h3>PROJECT DESCRIPTION</h3>
                <p className="paragraph">{workpage.project}</p>
                <h3>CHALLENGES</h3>
                <p className="paragraph">{workpage.challenges}</p>
                <h3>TOOLS</h3>
                <p className="paragraph">{workpage.tools}</p>
                <h3>FINAL RESULT</h3>
                <p className="paragraph">{workpage.result}</p>
            </Col>
            
            <Col md="12">
              {images}
            </Col>
            
            <Col md="12">
                <Nav justified>
                    <NavItem
                         eventKey={4}
                         href={`${workpage.site}`} target="_blank">
                         <h4>Link to Work</h4>
                    </NavItem>
                </Nav>
            </Col>    
        </div>
      )
      <Resume/>
    }

export default WorkPage;




