import React from 'react';
import './Work.css';
import data from './data.js';
import { Card, CardImg, CardBody, Col, CardTitle,
  CardSubtitle, CardDeck } from 'reactstrap';
import { Link } from "react-router-dom";

const WorkList = () => (
    <div className="App">
      <div>
       {data.all().map(p => (
             <CardDeck id="carddeck" key={p.number}>
              <Card id="card">
                <Col md="4" sm="6">
                    <CardImg id="cardimg" top width="100%" alt="Card image cap" src={p.img} />
                    <CardBody className="text-center">
                      <CardTitle id="cardtitle" className="text-center">{p.name}</CardTitle>
                      <CardSubtitle id="cardsubtitle">{p.type}</CardSubtitle>
                      <Link className="link" to={`/work/${p.link}`}>More</Link>
                    </CardBody>
                </Col>   
              </Card>     
            </CardDeck>
      ))}
     </div>  
    </div>  
);
  
export default WorkList;
