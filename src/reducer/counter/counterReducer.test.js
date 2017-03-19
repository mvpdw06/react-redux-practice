import counterReducer from './counterReducer';
import { counter } from '../../action/action';

const NORMAL = 'NORMAL';
const BETTER = 'BETTER';
const WORSE = 'WORSE';

describe('null or empty', () => {
    it('null state and empty action object should return null', () => {
        expect(counterReducer(null, {})).toEqual(null);
    });
    it('empty state and empty action object should return empty state', () => {
        expect(counterReducer({}, {})).toEqual({});
    });
});

describe('return init state', () => {
    const initState = [
        {
            id: 0,
            value: 0,
            dataType: NORMAL
        }
    ];
    it('empty action object', () => {
        let state = [
            {
                id: 0,
                value: 0,
                dataType: NORMAL
            }
        ];
        expect(counterReducer(state, {})).toEqual(initState);
    });
    it('undefined state and empty action object', () => {
        expect(counterReducer(undefined, {})).toEqual(initState);
    });
});

describe('sync action', () => {
    it('increment without id, should return state', () => {
        const state = [
            {
                id: 0,
                value: 0,
                dataType: NORMAL
            }
        ];
        expect(counterReducer(state, counter.doIncrement())).toEqual(state);
    });
    it('increment, id: 0 and value: 0 -> 1 ', () => {
        const state = [
            {
                id: 0,
                value: 0,
                dataType: NORMAL
            }
        ];
        const newState = [...state];
        newState[0] = {
            ...newState[0],
            value: newState[0].value +1
        }
        expect(counterReducer(state, counter.doIncrement(0))).toEqual(newState);
    });
    it('decrement without id, should return state', () => {
        const state = [
            {
                id: 0,
                value: 0,
                dataType: NORMAL
            }
        ];
        expect(counterReducer(state, counter.doDecrement())).toEqual(state);
    });
    it('decrement, id: 0 and value: 1 -> 0 ', () => {
        const state = [
            {
                id: 0,
                value: 1,
                dataType: NORMAL
            }
        ];
        const newState = [...state];
        newState[0] = {
            ...newState[0],
            value: newState[0].value -1
        }
        expect(counterReducer(state, counter.doDecrement(0))).toEqual(newState);
    });
    it('copy counter', () => {
        const state = [
            {
                id: 0,
                value: 1,
                dataType: NORMAL
            }
        ];
        const newState = [
            ...state,
            {
                id: state[state.length -1].id +1,
                value: state[state.length -1].value,
                dataType: state[state.length -1].dataType
            }
        ];
        expect(counterReducer(state, counter.copyCounter())).toEqual(newState);
    });
});

// TODO: INITCOUNTERSUCCESS
// TODO: UPDATECOUNTERSUCCESS

