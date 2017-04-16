import counterReducer from '../../reducer/counter/counterReducer';

describe('empty action object', () => {
    it(' + null state, should return null.', () => {
        expect(counterReducer(null, {})).toEqual(null);
    });
    it(' + empty state object, should return empty state.', () => {
        expect(counterReducer({}, {})).toEqual({});
    });
    it(' + state object, should return state object.', () => {
        let state = [
            {
                id: 0,
                value: 0,
                dataType: 'NORMAL'
            }
        ];
        expect(counterReducer(state, {})).toEqual(state);
    });
    it(' + undefined state, should return init state.', () => {
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

describe('normal sync action object', () => {
    it('increment action without id, should return state object', () => {
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
    it('increment action with id: 0, should change value: 0 -> 1 ', () => {
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
    it('decrement action without id, should return state object', () => {
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
    it('decrement action with id: 0, should change value: 1 -> 0', () => {
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
    it('copy counter action with one counter state, should return two counter state [id, id +1])', () => {
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
    it('set normal data type action with three counters state in different data type, should return three counters state and all in normal data type.', () => {
        const state = [
            {
                id: 0,
                value: 12,
                dataType: 'NORMAL'
            },
            {
                id: 1,
                value: 9,
                dataType: 'BETTER'
            },
            {
                id: 2,
                value: 10,
                dataType: 'WORSE'
            }
        ];
        const newState = [
            {
                id: 0,
                value: 12,
                dataType: 'NORMAL'
            },
            {
                id: 1,
                value: 9,
                dataType: 'NORMAL'
            },
            {
                id: 2,
                value: 10,
                dataType: 'NORMAL'
            }
        ];
        const action = { type: 'SETNORMALDATATYPE' }
        expect(counterReducer(state, action)).toEqual(newState);
    });
});

// TODO: INITCOUNTERSUCCESS
// TODO: UPDATECOUNTERSUCCESS

