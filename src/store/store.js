import reducer from '../reducer/reducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic  from '../epic/epic';

const epicMiddleware = applyMiddleware(createEpicMiddleware(rootEpic));

const store = createStore(reducer, composeWithDevTools(epicMiddleware));

module.hot && module.hot.accept('../reducer/reducer', () => {
    const nextRootReducer = require('../reducer/reducer');
    store.replaceReducer(nextRootReducer);
});

module.exports = store;