import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import WorkList from "./containers/WorkList";
import WorkPage from "./containers/WorkPage";
import Resume from "./containers/Resume";
import data from './data';



const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
        <Route path="/work" exact component={WorkList} data={data} />
          <Route path='/work/:link' component={WorkPage} data={data}/>
        <Route path="/resume" exact component={Resume} />
    </Switch>
  </main>
)

export default Routes;