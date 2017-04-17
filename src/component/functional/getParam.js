import React from 'react';
import { browserHistory } from 'react-router';

const GetParam = ({params}) => (
  <div>
    <h1>This component will receive prarmeter to show!</h1>
    <h2>{params.toShow}</h2>
    <button onClick={browserHistory.goBack}>Go back!</button>
  </div>
);

module.exports = GetParam;