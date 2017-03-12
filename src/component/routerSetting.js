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

browserHistory.listen((location) => {
  store.dispatch(action.timer.doResetTimer())
});

const history = syncHistoryWithStore(browserHistory, store)

const RouterSetting = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="/counter" component={Counter} />
      <Route path="/getParam/:toShow" component={GetParam} />
    </Route>
  </Router>
);

module.exports = RouterSetting;