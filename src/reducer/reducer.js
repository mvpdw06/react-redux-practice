import counterReducer from './counter/counterReducer';
import timerReducer  from './timer/timerReducer';
import globalReducer from './global/globalReducer';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


const reducers = {
    counter: counterReducer,
    timer: timerReducer,
    global: globalReducer,
    routing: routerReducer
}

const rootReducer = combineReducers(reducers);

module.exports = rootReducer;