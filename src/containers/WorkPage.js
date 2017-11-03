import React from 'react';
import './Work.css';
import '../App.css';
import data from '../data';
import { Link } from "react-router-dom";
import FontAwesome from 'react-fontawesome';
import { Col } from 'reactstrap';
import { Nav, NavItem } from "react-bootstrap";

const WorkPage = (props) => {
    
    const workpage = data.get(props.match.params.link)
    if (!workpage) {
    return <div>Sorry, but this work page does not exist!</div>
    }
      
    return (
        <div className="App">
            <FontAwesome name="arrow-left" /><Link className="link" to='/work'> Back</Link>
            
            <div className="col-md-12 text-center">
              <h1>{workpage.name}: {workpage.type}</h1>
            </div>
            
            <div className="col-md-12">
                <h3>PROJECT DESCRIPTION</h3>
                <p className="paragraph">{workpage.project}</p>
                <h3>CHALLENGES</h3>
                <p className="paragraph">{workpage.challenges}</p>
                <h3>TOOLS</h3>
                <p className="paragraph">{workpage.tools}</p>
                <h3>FINAL RESULT</h3>
                <p className="paragraph">{workpage.result}</p>
            </div>    
            <div className="col-md-12" >
                {data.all().map(p => (
                    <Col md="6" key={workpage.site}>
                      <img className="img-responsive" alt="homepage" src={workpage.images}/>
                    </Col> 
                ))}
            </div>
            <div className="col-md-12">
                <Nav justified>
                    <NavItem
                     eventKey={4}
                     href={`${workpage.site}`} target="_blank">
                     <h3>Link to Website</h3>
                    </NavItem>
                </Nav>
            </div>    
        </div>
      )
    }

export default WorkPage;




