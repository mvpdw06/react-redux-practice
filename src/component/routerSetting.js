import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import store from '../store/store';
import App from './global/app';
import Landing from './langing';
import Timer from './timer/timer';
import Counter from './counter/counter';
import GetParam from './getParam';

const history = syncHistoryWithStore(browserHistory, store)

const RouterSetting = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/counter" component={Counter} />
      <Route path="/timer" component={Timer} />
      <Route path="/getParam/:toShow" component={GetParam} />
    </Route>
  </Router>
);

module.exports = RouterSetting;