import counterReducer from './counter/counterReducer';
import timerReducer  from './timer/timerReducer';
import { combineReducers } from 'redux';

const reducers = {
    counter: counterReducer,
    timer: timerReducer
}

const rootReducer = combineReducers(reducers);

module.exports = rootReducer;