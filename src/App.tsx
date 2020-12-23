import React from 'react';
import {
  HashRouter  as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Account from "./views/Account";
import Detail from "./views/Detail";
import Statistics from "./views/Statistics";
import NotFound from "./views/NotFound";

function App() {
  return (
    <Router>
        <Switch>
          <Redirect exact from="/" to="/account"/>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Router>
  );
}

export default App