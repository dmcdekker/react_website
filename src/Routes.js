import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Work from "./containers/Work";
import About from "./containers/About";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/work" exact component={Work} />
    <Route path="/about" exact component={About} />
    
  </Switch>;