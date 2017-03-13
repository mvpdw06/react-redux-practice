import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import store from '../store/store';
import action from '../action/action';

import App from './global/app';
import Landing from './home/langing';
import Timer from './timer/timer';
import Counter from './counter/counter';
import GetParam from './functional/getParam';
import BeRedirect from './functional/beRedirect';

const counterPath = '/counter';

const history = syncHistoryWithStore(browserHistory, store)

const RouterSetting = (props) => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Landing} />
      <Route path={counterPath} component={Counter} />
      <Route path='/getParam/:toShow' component={GetParam} />
      <Route path='/beRedirect' component={BeRedirect} />
    </Route>
  </Router>
);

module.exports = RouterSetting;