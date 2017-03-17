import reducer from '../reducer/reducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = createStore(reducer, composeWithDevTools(middleware));

module.hot && module.hot.accept('../reducer/reducer', () => {
    const nextRootReducer = require('../reducer/reducer');
    store.replaceReducer(nextRootReducer);
});

module.exports = store;