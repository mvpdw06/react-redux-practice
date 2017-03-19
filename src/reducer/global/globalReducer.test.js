import globalReducer from './globalReducer';
import { global } from '../../action/action';

const themes = [
    {
        name: 'blue',
        path: './css/theme_blue/main.css'
    },
    {
        name: 'pink',
        path: './css/theme_pink/main.css'
    }
];

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
        viewType: 1280,
        theme: themes.filter((theme) => { return theme.name === 'blue' })[0]
    }
    it('empty action object', () => {
        let state = {
            vertical: true,
            viewSize: 0,
            viewType: 1280,
            theme: themes.filter((theme) => { return theme.name === 'blue' })[0]
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
            viewType: 1280,
            theme: themes.filter((theme) => { return theme.name === 'blue' })[0]
        }
        expect(globalReducer(state, global.viewRotate())).toEqual({
            ...state,
            vertical: !state.vertical
        });
    });
    it('theme change, theme: blue -> pink', () => {
        const state = {
            vertical: true,
            viewSize: 0,
            viewType: 1280,
            theme: themes.filter((theme) => { return theme.name === 'blue' })[0]
        }
        expect(globalReducer(state, global.themeChange('pink'))).toEqual({
            ...state,
            theme: themes.filter((theme) => { return theme.name === 'pink' })[0]
        });
    });
});

// TODO: viewSize change