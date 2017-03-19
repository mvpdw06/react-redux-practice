import timerReducer from './timerReducer';
import { timer } from '../../action/action';

describe('null or empty', () => {
    it('null state and empty action object should return null', () => {
        expect(timerReducer(null, {})).toEqual(null);
    });
    it('empty state and empty action object should return empty state', () => {
        expect(timerReducer({}, {})).toEqual({});
    });
});

describe('return init state', () => {
    const initState = {
        timespan: 60,
        currentTime: 5,
        isPaused: false
    }
    it('empty action object', () => {
        let state = {
            timespan: 60,
            currentTime: 5,
            isPaused: false
        }
        expect(timerReducer(state, {})).toEqual(initState);
    });
    it('undefined state and empty action object', () => {
        expect(timerReducer(undefined, {})).toEqual(initState);
    });
});

describe('sync action', () => {
    it('countDown, currentTime: 5 -> 4', () => {
        let state = {
            timespan: 60,
            currentTime: 5,
            isPaused: false
        }
        expect(timerReducer(state, timer.doCountDown())).toEqual({
            ...state,
            currentTime: state.currentTime -1
        });
    });
    it('reset timer, currentTime: 5 -> 60', () => {
        let state = {
            timespan: 60,
            currentTime: 5,
            isPaused: false
        }
        expect(timerReducer(state, timer.doResetTimer())).toEqual({
            ...state,
            currentTime: state.timespan
        });
    });
    it('pause timer, isPaused: false -> true', () => {
        let state = {
            timespan: 60,
            currentTime: 5,
            isPaused: false
        }
        expect(timerReducer(state, timer.pauseTimer())).toEqual({
            ...state,
            isPaused: !state.isPaused
        });
    });
});

//TODO: LOCATION_CHANGE