import React from "react";
import Pacific from "./Pacific";
import Atlantic from "./Atlantic";
import Route from "./Route";
import Link from "./Link";
import Router from "./Router";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
const App = () => (
  <Router>
    <div>
      <h2>Which Body of Water?</h2>
      <ul>
        <li>
          <Link to="/atlantic">
            <code>/atlantic</code>
          </Link>
        </li>
        <li>
          <Link to="/pacific">
            <code>/pacific</code>
          </Link>
        </li>
      </ul>
      <hr />
      <Route path="/atlantic" component={Atlantic} />
      <Route path="/pacific" component={Pacific} />
    </div>
  </Router>
);

export default App;
