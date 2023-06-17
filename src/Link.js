import { createBrowserHistory } from "history";
import PropTypes from "prop-types";
const history = createBrowserHistory();

const Link = ({ to, children }, { history }) => (
  <a
    onClick={(e) => {
      e.preventDefault();
      history.push(to);
    }}
    href={to}
  >
    {children}
  </a>
);
Link.contextTypes = {
  history: PropTypes.object
};

export default Link;
