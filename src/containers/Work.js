import React, { Component } from 'react';
import './Work.css';
import data from './card.json';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Work extends Component{
  constructor(props){
	super(props);
	  this.state= {
        data: data
	  }
	}

  render() {
    return (
      <div className="App">
       <div className="row col-md-4">
        <Card>
          <CardImg id="cardimg" top width="100%" alt="Card image cap" src={data.img} />
          <CardBody>
            <CardTitle id="cardtitle" className="text-center">{data.name}</CardTitle>
            <CardSubtitle id="cardsubtitle" className="text-center">{data.type}</CardSubtitle>
            <CardText id="cardtext">{data.description}</CardText>
            <Button>Read More</Button>
          </CardBody>
        </Card>
      </div>
    </div>  
     );
  }
}

export default Work;