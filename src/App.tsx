import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Account from "./views/Account";
import Detail from "./views/Detail";
import Statistics from "./views/Statistics";
import NotFound from "./views/NotFound";
import Record from "./views/Record";
import Update from "./views/Update";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/detail"/>
        <Route exact path="/detail">
          <Detail/>
        </Route>
        <Route exact path="/record/:id">
          <Record/>
        </Route>
        <Route exact path="/update/:id">
          <Update/>
        </Route>
        <Route exact path="/account">
          <Account/>
        </Route>
        <Route exact path="/statistics">
          <Statistics/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;