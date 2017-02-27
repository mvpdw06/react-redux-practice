import reducer from '../reducer/reducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const thunkMiddleware = ({ dispatch, getState }) => {
  return (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };
};

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, composeWithDevTools(middleware));

module.exports = store;