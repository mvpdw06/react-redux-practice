import { TIMER, ROUTER, COUNTER } from '../../constant/constant';

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
    // simpleRoute: /{language}/{componentRoute} => ['', '{language}', '{componentRoute}']
    // indexRoute: /{language}/ => ['', '{language}', '']
    let componentRoute = path.split('/')[2];
    if(componentRoute === 'counter') {
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