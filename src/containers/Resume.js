import React from 'react';
import './Resume.css';

import data_work from './data_work';

const Resume = () => (
    <div className="App">
      <h3 className='header'>TECHNOLOGY SUMMARY</h3>
      
      <h3 className='header'>EDUCATION</h3>
      <div>
      <h3 className='header'>PROJECT/WORK EXPERIENCE</h3>
       {data_work.all().map(p => (
          <div key={p.id}>
          <h4>{p.project_title} - {p.dates}</h4>
          <h5>{p.description_1}</h5>
          <p>{p.tools}</p>
          <p> </p>
          </div>
            
      ))}
      
            
      </div>  
    </div>  
);

export default Resume;