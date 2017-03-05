import counterReducer from './counter/counterReducer';
import timerReducer  from './timer/timerReducer';
import globalReducer from './global/globalReducer';
import { combineReducers } from 'redux';

const reducers = {
    counter: counterReducer,
    timer: timerReducer,
    global: globalReducer
}

const rootReducer = combineReducers(reducers);

module.exports = rootReducer;