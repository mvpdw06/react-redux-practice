import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './global/app';
import Landing from './langing';
import Timer from './timer/timer';
import Counter from './counter/counter';

const RouterSetting = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/counter" component={Counter} />
      <Route path="/timer" component={Timer} />
    </Route>
  </Router>
);

module.exports = RouterSetting;