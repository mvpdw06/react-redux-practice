const initState = {
    timespan: 60,
    currentTime: 5
}

const timerReducer = (state = initState, action) => {
    switch (action.type) {
    case 'COUNTDOWN':
        return {
            ...state,
            currentTime: state.currentTime - 1
        };
    case 'RESETTIMER':
        state.currentTime = state.timespan;
        return state;
    default:
        return state;
    }
}

module.exports = timerReducer;