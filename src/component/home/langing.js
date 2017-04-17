import React from 'react';
import { Link, IndexLink } from 'react-router';

const Landing = ({params}) => (
  <div>
    <h1>React-redux practice</h1>
    <h2>this is landing page.</h2>
    <ul>
      <li><IndexLink to={`/${params.lang}/`} activeClassName='active'>Landing Page</IndexLink></li>
      <li><Link to={`/${params.lang}/counter`} activeStyle={{ color: 'blue' }}>Counter</Link></li>
      <li><Link to={`/${params.lang}/getParam/ThisIsATestParameter`} activeStyle={{ color: 'blue' }}>GetParameters</Link></li>
      <li><Link to={`/${params.lang}/beRedirect`}>Be Redircet</Link></li>
      <li><Link to={`/${params.lang}/hoc`}>Show splash screen before data arrived.(HOC)</Link></li>
      <li><Link to={`/${params.lang}/exampleForm`}>Example Form validation</Link></li>
    </ul>
  </div>
);

module.exports = Landing;