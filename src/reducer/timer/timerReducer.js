import { TIMER, ROUTER } from '../../constant/constant';

const timespanType = {
    default: 60,
    counter: 30
}

const initState = {
    timespan: 60,
    currentTime: 5
}

const handlePathChange = (path) => {
    let newTimespan;
    if(path === '/counter') {
        newTimespan = timespanType.counter;
    }
    else {
        newTimespan = timespanType.default;
    }

    return {
        timespan: newTimespan,
        currentTime: newTimespan
    }
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
    case ROUTER.LOCATION_CHANGE:
        return handlePathChange(action.payload.pathname);
    default:
        return state;
    }
}

module.exports = timerReducer;