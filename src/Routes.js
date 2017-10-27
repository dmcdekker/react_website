import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Work from "./containers/Work";
import Resume from "./containers/Resume";
import NotFound from "./containers/NotFound";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/work" exact component={Work} />
    <Route path="/resume" exact component={Resume} />
    <Route component={NotFound} />
  </Switch>;