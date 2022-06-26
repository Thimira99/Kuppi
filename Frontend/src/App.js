import React from "react";
import "App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import First from "./fisrt";

//Import Components
import Nav from "./Nav";

const App = () => (
  <div>
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/first' component={First} />

      </Switch>

    </Router>
  </div>
);

export default App;
