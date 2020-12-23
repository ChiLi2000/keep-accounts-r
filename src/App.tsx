import React from 'react';
import {
  HashRouter  as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Account from "./views/Account";
import Detail from "./views/Detail";
import Statistics from "./views/Statistics";
import NotFound from "./views/NotFound";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">/</Link>
            </li>
            <li>
              <Link to="/detail">detail</Link>
            </li>
            <li>
              <Link to="/account">account</Link>
            </li>
            <li>
              <Link to="/statistics">statistics</Link>
            </li>
          </ul>
        </nav>

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
      </div>
    </Router>
  );
}

export default App