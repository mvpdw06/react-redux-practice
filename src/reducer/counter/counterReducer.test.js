import counterReducer from './counterReducer';

describe('null or empty', () => {
    it('null state and empty action object should return null', () => {
        expect(counterReducer(null, {})).toEqual(null);
    });
    it('empty state and empty action object should return empty state', () => {
        expect(counterReducer({}, {})).toEqual({});
    });
});

describe('return init state', () => {
    it('empty action object', () => {
        let state = [
            {
                id: 0,
                value: 0,
                dataType: 'NORMAL'
            }
        ];
        expect(counterReducer(state, {})).toEqual(state);
    });
    it('undefined state and empty action object', () => {
        let state = [
            {
                id: 0,
                value: 0,
                dataType: 'NORMAL'
            }
        ];
        expect(counterReducer(undefined, {})).toEqual(state);
    });
});

describe('sync action', () => {
    it('increment without id, should return state', () => {
        const state = [
            {
                id: 0,
                value: 0,
                dataType: 'NORMAL'
            }
        ];
        const action = { type: 'INCREMENT' }
        expect(counterReducer(state, action)).toEqual(state);
    });
    it('increment, id: 0 and value: 0 -> 1 ', () => {
        const state = [
            {
                id: 0,
                value: 0,
                dataType: 'NORMAL'
            }
        ];
        const newState = [
            {
                id: 0,
                value: 1,
                dataType: 'NORMAL'
            }
        ];
        const action = { type: 'INCREMENT', id: 0 }
        expect(counterReducer(state, action)).toEqual(newState);
    });
    it('decrement without id, should return state', () => {
        const state = [
            {
                id: 0,
                value: 0,
                dataType: 'NORMAL'
            }
        ];
        const action = { type: 'DECREMENT' }
        expect(counterReducer(state, action)).toEqual(state);
    });
    it('decrement, id: 0 and value: 1 -> 0 ', () => {
        const state = [
            {
                id: 0,
                value: 1,
                dataType: 'NORMAL'
            }
        ];
        const newState = [
            {
                id: 0,
                value: 0,
                dataType: 'NORMAL'
            }
        ]
        const action = { type: 'DECREMENT', id: 0 }
        expect(counterReducer(state, action)).toEqual(newState);
    });
    it('copy counter', () => {
        const state = [
            {
                id: 0,
                value: 1,
                dataType: 'NORMAL'
            }
        ];
        const newState = [
            {
                id: 0,
                value: 1,
                dataType: 'NORMAL'
            },
            {
                id: 1,
                value: 1,
                dataType: 'NORMAL'
            }
        ];
        const action = { type: 'COPYCOUNTER' }
        expect(counterReducer(state, action)).toEqual(newState);
    });
});

// TODO: INITCOUNTERSUCCESS
// TODO: UPDATECOUNTERSUCCESS

