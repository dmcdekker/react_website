import React, { Component } from 'react';
import './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="col-md-12 text-center">
          <h1>Welcome!</h1>
         
          <p className="App-intro-short box animate fadeInDown two">
           I'm Denise, a recent CS Grad looking for developer work.</p>
           
          <img className="App-photo img-rounded" src="./denise.jpg" alt="Denise with Hearts around her head"/>
        
        
          <p className="App-intro-long">Originally from Edinburgh, Scotland, I've lived in the Bay Area since 1994.
             Four years ago, I left a career in sustainable agriculture to complete my bachelor's degree. 
             Until taking a beginning programming class in Python during my final semester at Laney Community College to satisfy a quantative requirement, I was on 
             track to major in Communication, which changed immediately after learning how to code. After being accepted to 
             Mills College in Oakland, I took a leap and decided to major in Computer Science and graduated in May 2017.
            </p>
                     
          <p className="App-intro-long">I’m passionate about the convergence of design, accessibility, and user experience; my professional goal is to work in a role that utilizes my varied skill set.
          I believe that everyone should have exceptional, joyful experiences with web and mobile technologies, and I'm especially inspired to craft solutions that create equity in access and functionality. 
          Check out my work page! I have worked on a variety of projects as a developer and UX/UI designer. </p>
             
          <p className="App-intro-long">When I'm not working on projects, I'm an avid chef, produce nerd, and sometime DJ for fundraising events at my daughter's school.</p>
        </div>       
      </div>
    );
  }
}



