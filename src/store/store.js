// import reducer from '../reducer/reducer';
import reducer from '../reducer/counterReducer';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(reducer, 
    devToolsEnhancer(
    // Specify here name, actionsBlacklist, actionsCreators and other options if needed
    )
);

module.exports = store;