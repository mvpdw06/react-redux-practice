import counterAction from './counter/counterAction';
import timerAction from './timer/timerAction';
import globalAction from './global/globalAction';

const actionCreator = {
    counter: counterAction,
    timer: timerAction,
    global: globalAction
}

module.exports = actionCreator;