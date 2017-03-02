import reducer from '../reducer/reducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = createStore(reducer, composeWithDevTools(middleware));

module.exports = store;