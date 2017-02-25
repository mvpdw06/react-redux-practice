import counterReducer from './counter/counterReducer';
import { combineReducers } from 'redux';

const reducers = {
    counter: counterReducer
}

const rootReducer = combineReducers(reducers);

module.exports = rootReducer;