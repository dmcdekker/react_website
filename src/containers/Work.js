import React, { Component } from 'react';
import './Work.css';
import card from './cards.json';
import { Card, CardImg, CardBody, Col, CardTitle,
  CardSubtitle, Button, CardDeck } from 'reactstrap';


class Work extends Component{
  constructor(props){
	super(props);
	  this.state= {
        cards: card
	  }
	}
	
  render() {
        return (
        <div className="App">  
          <CardDeck id="carddeck">
            <div>
              {this.state.cards.map((card => (
              <Card id="card" key={card.id}>
                <Col md="4">
                  <CardImg id="cardimg" top width="100%" alt="Card image cap" src={card.img} />
                  <CardBody className="text-center">
                    <CardTitle id="cardtitle" className="text-center" key={card.cardtitle}>{card.name}</CardTitle>
                    <CardSubtitle id="cardsubtitle">{card.type}</CardSubtitle>
                    <Button>Read More</Button>
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


export default Work;