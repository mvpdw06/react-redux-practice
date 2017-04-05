import React from 'react';
import { browserHistory } from 'react-router';

const NeedAuth = (props) => (
  <div>
    <h1>Sorry! Yuo need authertication to access.</h1>
    <button onClick={browserHistory.goBack}>Go back!</button>
  </div>
);

module.exports = NeedAuth;