import React from 'react';
import { Browserrouter as Router, Route, Link, Switch } from 'reac-router-dom';

export const Home = () => <h2>Home</h2>;
export const About = () => <h2>About</h2>;
export const Contact = () => <h2>Contact</h2>;
export const NotFound = () => <h2>404 - Sorry Page Not Found!</h2>;

const Navigation = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Navigation;
