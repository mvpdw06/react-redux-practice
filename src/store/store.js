import counterReducer from '../reducer/counterReducer';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(counterReducer, devToolsEnhancer(
    // Specify here name, actionsBlacklist, actionsCreators and other options if needed
));

module.exports = store;