import globalReducer from './globalReducer';
import { global } from '../../action/action';

describe('null or empty', () => {
    it('null state and empty action object should return null', () => {
        expect(globalReducer(null, {})).toEqual(null);
    });
    it('empty state and empty action object should return empty state', () => {
        expect(globalReducer({}, {})).toEqual({});
    });
});

describe('return init state', () => {
    const initState = {
        vertical: true,
        viewSize: 0,
        viewType: 1280
    }
    it('empty action object', () => {
        let state = {
            vertical: true,
            viewSize: 0,
            viewType: 1280
        }
        expect(globalReducer(state, {})).toEqual(initState);
    });
    it('undefined state and empty action object', () => {
        expect(globalReducer(undefined, {})).toEqual(initState);
    });
});

describe('sync action', () => {
    it('view rotate, vertical: true -> false', () => {
        const state = {
            vertical: true,
            viewSize: 0,
            viewType: 1280
        }
        expect(globalReducer(state, global.viewRotate())).toEqual({
            ...state,
            vertical: !state.vertical
        });
    });
});

// TODO: viewSize change