import reducer from '../reducer/reducer';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const reduxDevTool = devToolsEnhancer(
    // Specify here name, actionsBlacklist, actionsCreators and other options if needed
);

const store = createStore(reducer, reduxDevTool);

module.exports = store;