import { combineEpics } from 'redux-observable';

import { 
    counterInitEpic, 
    counterUpdateEpic 
} from './counter/counterEpic';

const rootEpic = combineEpics(
    counterInitEpic,
    counterUpdateEpic
);

module.exports = rootEpic;