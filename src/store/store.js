import reducer from '../reducer/reducer';
import { createStore, applyMiddleware } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const reduxDevTool = devToolsEnhancer(
    // Specify here name, actionsBlacklist, actionsCreators and other options if needed
);

const thunkMiddleware = ({ dispatch, getState }) => {
  return (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };
};

const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, middleware, reduxDevTool);

module.exports = store;