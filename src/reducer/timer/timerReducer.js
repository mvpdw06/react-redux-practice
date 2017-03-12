import { TIMER } from '../../constant/constant';

const defaultTimeSpan = {
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
        state.currentTime = state.timespan;
        return state;
    default:
        return state;
    }
}

module.exports = timerReducer;