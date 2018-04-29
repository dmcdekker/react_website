import React from 'react';
import './Resume.css';

import { Media } from 'react-bootstrap';
import data_work from './data_work';
import data_school from './data_school';
import data_project from './data_project';

const Resume = () => (
    <div className="App">
      <div>
        <h3 className='page-header'>TECHNOLOGY SUMMARY </h3>
           <div className="tech-summary">
            <Media>
              <Media.Body>
                  <Media.Heading className='media-heading'>Languages || <small>Python, Ruby, JavaScript (AJAX, JSON), HTML, CSS, SQL, Java, HAML, Jade</small></Media.Heading>
                  <Media.Heading className='media-heading'>Frameworks and Libraries || <small>Flask, jQuery, Bootstrap, React, Angular, Ruby on Rails</small></Media.Heading>
                  <Media.Heading className='media-heading'>Database/Industry Tools || <small>PostgreSQL, Git, GitHub, Command Line</small></Media.Heading>
                  <Media.Heading className='media-heading'>Tools/Software || <small>Axure, Balsamiq, Adobe Creative Suite, Cloud 9</small></Media.Heading>
              </Media.Body>
            </Media>  
           </div>      
  
        
        <h3 className='page-header'>PROJECTS</h3>
           <div className='resume-project'>
             {data_project.all().map(p => (
                <Media key={p.id}>
                  <Media.Body>
                    <Media.Heading className='media-heading'>{p.project_title} <small>{p.dates}</small></Media.Heading>
                    <h4>{p.description_1} </h4>
                    <em><h5 className='h5-resume'> Tools: {p.tech_stack} </h5></em>
                  </Media.Body>
                </Media>
               
             ))}
           </div>   
        
        <h3 className='page-header'>WORK EXPERIENCE</h3>
           <div className='resume-work'>
             {data_work.all().map(p => (
                <Media key={p.id}>
                  <Media.Body>
                    <Media.Heading className='media-heading'>{p.work_title} <small>{p.dates}</small></Media.Heading>
                    <h4> {p.description_1} </h4>
                    <h4> {p.description_2} </h4>
                    <h4> {p.description_3} </h4>
                    <h4> {p.description_4} </h4>
                    <h4> {p.description_5} </h4>
                    <em><h5 className='h5-resume'> {p.tech_stack} </h5></em>
                  </Media.Body>
                </Media>
             ))}
           </div>
           
       <h3 className='page-header'>EDUCATION AND TRAINING</h3>
           <div className='resume-school'>
             {data_school.all().map(p => (
                <Media key={p.id}>
                  <Media.Body>
                    <Media.Heading className='media-heading'>{p.school_name}, {p.location} <small>({p.dates})</small></Media.Heading>
                    <h4 className='h4-resume'><em>{p.certificate}</em> </h4>
                    <h5 className='h5-resume'>{p.description_1} </h5>
                  </Media.Body>
                </Media>
               
             ))}
           </div>        
      </div> 
    </div>  
);

export default Resume;