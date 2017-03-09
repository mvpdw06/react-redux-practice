import App from './app';
import Timer from './timer/timer';
import Counter from './counter/counter';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import React from 'react';

const RouterComponent = (props) => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/counter" component={Counter} />
      <Route path="/timer" component={Timer} />
    </Route>
  </Router>
);

module.exports = RouterComponent;