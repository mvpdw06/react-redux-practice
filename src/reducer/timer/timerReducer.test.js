import timerReducer from './timerReducer';

describe('empty action object', () => {
    it(' + null state, should return null.', () => {
        expect(timerReducer(null, {})).toEqual(null);
    });
    it(' + empty state object, should return empty state.', () => {
        expect(timerReducer({}, {})).toEqual({});
    });
    it(' + state object, should return state object.', () => {
        let state = {
            timespan: 60,
            currentTime: 5,
            isPaused: false
        }
        expect(timerReducer(state, {})).toEqual(state);
    });
    it(' + undefined state, should return init state.', () => {
        let state = {
            timespan: 60,
            currentTime: 5,
            isPaused: false
        }
        expect(timerReducer(undefined, {})).toEqual(state);
    });
});

describe('normal sync action object', () => {
    it('countDown action, should change currentTime: 5 -> 4', () => {
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
    it('reset timer action, should change currentTime: 5 -> 60', () => {
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
    it('pause timer action, should change isPaused: false -> true', () => {
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