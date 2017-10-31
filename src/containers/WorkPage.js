import React, {Component} from 'react';
import './Work.css';
import data from '../data';
import { Link } from "react-router-dom";

class WorkPage extends Component{
  constructor(props){
	super(props);
	  this.state= {
        data: data
	  }
	}
	render() {
	    return (
	        <div className="App">
	          <div>     
                <h1>Name:{data.name}</h1>
              </div>
            <Link to='/work'>Back</Link>
            </div>
    )
  }
}
export default WorkPage;


