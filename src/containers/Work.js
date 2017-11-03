import React from 'react';
import { Switch, Route } from 'react-router-dom'
import WorkList from './WorkList';
import WorkPage from './WorkPage';

const Work = () => (
  <Switch>
    <Route exact path='/work' component={WorkList}/>
    <Route path='/work/:link' component={WorkPage}/>
  </Switch>
)


export default Work;