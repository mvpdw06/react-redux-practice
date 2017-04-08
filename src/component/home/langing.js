import React from 'react';
import { Link, IndexLink } from 'react-router';
import i18n from '../../i18n';

const Landing = (props) => (
  <div>
    <h1>React-redux practice</h1>
    <h2>this is landing page.</h2>
    <ul>
      <li><IndexLink to={`/${i18n.language}/`} activeClassName='active'>Landing Page</IndexLink></li>
      <li><Link to={`/${i18n.language}/counter`} activeStyle={{ color: 'blue' }}>Counter</Link></li>
      <li><Link to={`/${i18n.language}/getParam/ThisIsATestParameter`} activeStyle={{ color: 'blue' }}>GetParameters</Link></li>
      <li><Link to={`/${i18n.language}/beRedirect`}>Be Redircet</Link></li>
      <li><Link to={`/${i18n.language}/hoc`}>Show splash screen before data arrived.(HOC)</Link></li>
      <li><Link to={`/${i18n.language}/exampleForm`}>Example Form validation</Link></li>
    </ul>
  </div>
);

module.exports = Landing;