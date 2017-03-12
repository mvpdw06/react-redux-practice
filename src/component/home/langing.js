import React from 'react';
import { Link, IndexLink } from 'react-router';

const Landing = (props) => (
  <div>
    <h1>React-redux practice</h1>
    <h2>this is landing page.</h2>
    <ul>
      <li>
        <IndexLink to="/" activeClassName="active">Landing Page</IndexLink>
      </li>
      <li>
        <Link to="/timer" activeStyle={{ color: 'green' }}>Timer</Link>
      </li>
      <li>
        <Link to="/counter" activeStyle={{ color: 'blue' }}>Counter</Link>
      </li>
      <li>
        <Link to="/getParam/ThisIsATestParameter" activeStyle={{ color: 'blue' }}>GetParameters</Link>
      </li>
    </ul>
  </div>
);

module.exports = Landing;