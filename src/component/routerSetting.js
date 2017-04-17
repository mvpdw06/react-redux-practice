import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import store from '../store/store';
import action from '../action/action';

import AppContainer from './global/appContainer';
import Landing from './home/langing';
import Timer from './timer/timer';
import Counter from './counter/counter';
import GetParam from './functional/getParam';
import BeRedirect from './functional/beRedirect';
import Hoc from './functional/hoc';
import ExampleForm from './form/ExampleForm';
import NotFound from './functional/notFound';
import NeedAuth from './functional/needAuth';

const history = syncHistoryWithStore(browserHistory, store)


const RouterSetting = (props) => (
  <Router history={browserHistory}>
    <Route path='/:lang/' component={AppContainer}>
      <IndexRoute component={Landing} />
      <Route path='counter' component={Counter} />
      <Route path='getParam/:toShow' component={GetParam} />
      <Route path='beRedirect' component={BeRedirect} />
      <Route path='hoc' component={Hoc} />
      <Route path='exampleForm' component={ExampleForm} />
    </Route>
    <Route path="needAuth" component={NeedAuth} />
    <Route path="*" component={NotFound} />    
  </Router>
);

module.exports = RouterSetting;