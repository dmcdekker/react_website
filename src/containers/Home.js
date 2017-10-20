import React, { Component } from 'react';
import './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Welcome!</h1>
         
          <p className="App-intro">
           I'm Denise, a recent CS Grad looking for developer work.</p>
           
          <img className='App-photo' src="./denise.jpg" alt="Denise with Hearts around her head"/>
        </div>
      </div>
    );
  }
}



