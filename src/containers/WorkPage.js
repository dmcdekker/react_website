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
    
    const images6 = workpage.pageimg6.map(image =>
      <Col md="6" key={image}>
        <img className="img-responsive" alt="images6" src={image} />
      </Col>    
    );
    
    const images4 = workpage.pageimg4.map(image =>
      <Col md="4" key={image}>
        <img className="img-responsive" alt="images4" src={image} />
      </Col>    
    );
 
    return (
        <div className="App">
            <FontAwesome name="arrow-left" /><Link className="link" to='/work'>  WORK MAIN</Link>
            
            <Col md="12 text-center page-header">
              <h1>{workpage.name}: {workpage.type}</h1>
            </Col>
            
            <Col md="12">
                <p className="paragraph">{workpage.project}</p>
                <h3>CHALLENGES</h3>
                <p className="paragraph">{workpage.challenges}</p>
                <h3>PROCESS</h3>
                <p className="paragraph">{workpage.process1}</p>
                <p className="paragraph">{workpage.process2}</p>
                <p className="paragraph">{workpage.process3}</p>
            </Col>
            
            <Col md="12">
              
              {images6}
            </Col>  
            <Col md="12">
              {images4}
            </Col>
            
            <Col md="12">
                <p className="paragraph">{workpage.result}</p>
                <h3>TOOLS</h3>
                <p className="paragraph">{workpage.tools}</p>
            </Col>    
            
            <Col md="12 site-link">
                <Nav justified>
                    <NavItem
                         eventKey={4}
                         href={`${workpage.site}`} target="_blank">
                         <span className="link_to">Link to Work</span>
                         
                    </NavItem>
                </Nav>
            </Col>
        </div>
        
      )
      
    }

export default WorkPage;




