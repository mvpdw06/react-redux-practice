import { TIMER } from '../../constant/constant';

const timespanType = {
    default: 60,
    counter: 30
}

const initState = {
    timespan: 60,
    currentTime: 5
}

const timerReducer = (state = initState, action) => {
    switch (action.type) {
    case TIMER.COUNTDOWN:
        return {
            ...state,
            currentTime: state.currentTime - 1
        };
    case TIMER.RESETTIMER:
        return {
            ...state,
            currentTime: state.timespan
        };
    case TIMER.CHANGETIMESPANTODEFAULT:
        return {
            ...state,
            timespan: timespanType.default
        }
    case TIMER.CHNAGETIMESPANTOCOUNTER:
        return {
            ...state,
            timespan: timespanType.counter
        }
    default:
        return state;
    }
}

module.exports = timerReducer;