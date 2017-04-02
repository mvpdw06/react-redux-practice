import React from 'react';
import { browserHistory } from 'react-router';

const NotFound = (props) => (
  <div>
    <h1>404! This is not the web page you are looking for.</h1>
    <button onClick={browserHistory.goBack}>Go back!</button>
  </div>
);

module.exports = NotFound;