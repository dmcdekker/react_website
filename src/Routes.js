import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Work from "./containers/Work";
import Resume from "./containers/Resume";
import NotFound from "./containers/NotFound";


const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/resume" component={Resume} />
      <Route path="/notfound" component={NotFound} />
    </Switch>
  </main>
)

export default Routes;