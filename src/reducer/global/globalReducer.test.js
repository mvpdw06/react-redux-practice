import globalReducer from './globalReducer';

describe('null or empty', () => {
    it('null state and empty action object should return null', () => {
        expect(globalReducer(null, {})).toEqual(null);
    });
    it('empty state and empty action object should return empty state', () => {
        expect(globalReducer({}, {})).toEqual({});
    });
});

describe('return init state', () => {
    it('empty action object', () => {
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
    it('undefined state and empty action object', () => {
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

describe('sync action', () => {
    it('view rotate, vertical: true -> false', () => {
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
    it('theme change, theme: blue -> pink', () => {
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