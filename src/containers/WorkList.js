import React, { Component } from 'react';
import './Work.css';
import data from '../data';
import { Card, CardImg, CardBody, Col, CardTitle,
  CardSubtitle, Button, CardDeck } from 'reactstrap';
import { Link } from "react-router-dom";


class WorkMain extends Component{
  constructor(props){
	super(props);
	  this.state= {
        data: data
	  }
	}
	
  render() {
        return (
        <div className="App">  
          <CardDeck id="carddeck">
            <div>
              {this.state.data.map((data => (
              <Card id="card" key={data.number}>
                <Col md="4">
                  <CardImg id="cardimg" top width="100%" alt="Card image cap" src={data.img} />
                  <CardBody className="text-center">
                    <CardTitle id="cardtitle" className="text-center" key={data.cardtitle}>{data.name}</CardTitle>
                    <CardSubtitle id="cardsubtitle">{data.type}</CardSubtitle>
                    <Button><Link to={`/work/${data.link}`}>Read More</Link></Button>
                  </CardBody>
                </Col>   
              </Card>     
                )))}
            </div>
          </CardDeck>
        </div>  
        );
    }
}


export default WorkMain;
