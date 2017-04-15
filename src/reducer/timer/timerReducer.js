import { TIMER, ROUTER } from '../../constant/constant';
import i18n from '../../i18n';

const timespanType = {
    default: 60,
    counter: 30
}

const initState = {
    timespan: 60,
    currentTime: 5,
    isPaused: false
}

const handlePathChange = (state, path) => {
    let newTimespan;
    if(path === `/${i18n.language}/counter`) {
        newTimespan = timespanType.counter;
    }
    else {
        newTimespan = timespanType.default;
    }

    return {
        ...state,
        timespan: newTimespan,
        currentTime: newTimespan
    }
}

const timerReducer = (state = initState, action) => {
    switch (action.type) {
        case TIMER.INITTIMER:
            return handlePathChange(state, action.pathname);
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
        case TIMER.PAUSETIMER:
            return {
                ...state,
                isPaused: !state.isPaused
            };
        case ROUTER.LOCATION_CHANGE:
            return handlePathChange(state, action.payload.pathname);
        default:
            return state;
    }
}

module.exports = timerReducer;