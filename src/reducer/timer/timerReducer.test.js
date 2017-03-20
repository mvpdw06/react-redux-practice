import timerReducer from './timerReducer';

describe('null or empty', () => {
    it('null state and empty action object should return null', () => {
        expect(timerReducer(null, {})).toEqual(null);
    });
    it('empty state and empty action object should return empty state', () => {
        expect(timerReducer({}, {})).toEqual({});
    });
});

describe('return init state', () => {
    it('empty action object', () => {
        let state = {
            timespan: 60,
            currentTime: 5,
            isPaused: false
        }
        expect(timerReducer(state, {})).toEqual(state);
    });
    it('undefined state and empty action object', () => {
        let state = {
            timespan: 60,
            currentTime: 5,
            isPaused: false
        }
        expect(timerReducer(undefined, {})).toEqual(state);
    });
});

describe('sync action', () => {
    it('countDown, currentTime: 5 -> 4', () => {
        let state = {
            timespan: 60,
            currentTime: 5,
            isPaused: false
        }
        const newState = {
            timespan: 60,
            currentTime: 4,
            isPaused: false
        }
        const action = {
            type: 'COUNTDOWN'
        }
        expect(timerReducer(state, action)).toEqual(newState);
    });
    it('reset timer, currentTime: 5 -> 60', () => {
        let state = {
            timespan: 60,
            currentTime: 5,
            isPaused: false
        }
        const newState = {
            timespan: 60,
            currentTime: 60,
            isPaused: false
        }
        const action = {
            type: 'RESETTIMER'
        }
        expect(timerReducer(state, action)).toEqual(newState);
    });
    it('pause timer, isPaused: false -> true', () => {
        let state = {
            timespan: 60,
            currentTime: 5,
            isPaused: false
        }
        const newState = {
            timespan: 60,
            currentTime: 5,
            isPaused: true
        }
        const action = {
            type: 'PAUSETIMER'
        }
        expect(timerReducer(state, action)).toEqual(newState);
    });
});

//TODO: LOCATION_CHANGE