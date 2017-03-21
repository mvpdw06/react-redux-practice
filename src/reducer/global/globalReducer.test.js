import globalReducer from './globalReducer';

describe('empty action object', () => {
    it(' + null state, should return null.', () => {
        expect(globalReducer(null, {})).toEqual(null);
    });
    it(' + empty state object, should return empty state.', () => {
        expect(globalReducer({}, {})).toEqual({});
    });
    it(' + state object, should return state object.', () => {
        let state = {
            vertical: true,
            viewSize: 0,
            viewType: 1280,
            theme: {
                name: 'blue',
                path: './css/theme_blue/main.css'
            }
        }
        expect(globalReducer(state, {})).toEqual(state);
    });
    it(' + undefined state, should return init state.', () => {
        let state = {
            vertical: true,
            viewSize: 0,
            viewType: 1280,
            theme: {
                name: 'blue',
                path: './css/theme_blue/main.css'
            }
        }
        expect(globalReducer(undefined, {})).toEqual(state);
    });
});

describe('normal sync action object', () => {
    it('view rotate action, should change vertical: true -> false', () => {
        const state = {
            vertical: true,
            viewSize: 0,
            viewType: 1280,
            theme: {
                name: 'blue',
                path: './css/theme_blue/main.css'
            }
        }
        const newState = {
            vertical: false,
            viewSize: 0,
            viewType: 1280,
            theme: {
                name: 'blue',
                path: './css/theme_blue/main.css'
            }
        }
        const action = {
            type: 'VIEWROTATE'
        }
        expect(globalReducer(state, action)).toEqual(newState);
    });
    it('theme change action, should change theme object: blue -> pink', () => {
        const state = {
            vertical: true,
            viewSize: 0,
            viewType: 1280,
            theme: {
                name: 'blue',
                path: './css/theme_blue/main.css'
            }
        }
        const newState = {
            vertical: true,
            viewSize: 0,
            viewType: 1280,
            theme: {
                name: 'pink',
                path: './css/theme_pink/main.css'
            }
        }
        const action = {
            type: 'THEMECHANGE',
            themeName: 'pink'
        }
        expect(globalReducer(state, action)).toEqual(newState);
    });
});

// TODO: viewSize change