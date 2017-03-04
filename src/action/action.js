import { counterAction } from './counter/counterAction';
import { timerAction } from './timer/timerAction';

const actionCreator = {
    counter: counterAction,
    timer: timerAction
}

module.exports = actionCreator;