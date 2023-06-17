import React from "react";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const Route = ({ path, component }) => {
  const pathname = window.location.pathname;
  if (pathname.match(path)) {
    return React.createElement(component);
  } else {
    return null;
  }
};

const Link = ({ to, children }) => {
  <a
    onClick={(e) => {
      e.preventDefault();
      history.push(to);
    }}
  >
    {children}
  </a>;
};

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Which body of water?</h2>
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
    );
  }
}

const Atlantic = () => (
  <div>
    <h3>Atlantic Ocean</h3>
    <p>
      The Atlantic Ocean covers approximately 1/5th of the surface of the earth
    </p>
  </div>
);

const Pacific = () => (
  <div>
    <h3>Pacific Ocean</h3>
    <p>
      Ferdinand Magellan, a Portuguese explorer, named the ocean 'mar pacifico'
      in 1521, which means peaceful sea.
    </p>
  </div>
);

export default App;
