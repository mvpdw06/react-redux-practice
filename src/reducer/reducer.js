import counterReducer from './counterReducer';
import { combineReducers } from 'redux';

const reducers = {
    counter: counterReducer
}

export const reducer = combineReducers(reducers);