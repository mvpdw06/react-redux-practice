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
                path: '/css/theme_blue/main.css'
            },
            scrollTo: 0,
            browser: {
                name: 'Chrome',
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
                path: '/css/theme_blue/main.css'
            },
            scrollTo: 0,
            browser: {
                name: 'NodeJs',
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
                path: '/css/theme_blue/main.css'
            },
            scrollTo: 0,
            browser: {
                name: 'Chrome',
            }
        }
        const newState = {
            vertical: false,
            viewSize: 0,
            viewType: 1280,
            theme: {
                name: 'blue',
                path: '/css/theme_blue/main.css'
            },
            scrollTo: 0,
            browser: {
                name: 'Chrome',
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
                path: '/css/theme_blue/main.css'
            },
            scrollTo: 0,
            browser: {
                name: 'Chrome',
            }
        }
        const newState = {
            vertical: true,
            viewSize: 0,
            viewType: 1280,
            theme: {
                name: 'pink',
                path: '/css/theme_pink/main.css'
            },
            scrollTo: 0,
            browser: {
                name: 'Chrome',
            }
        }
        const action = {
            type: 'THEMECHANGE',
            themeName: 'pink'
        }
        expect(globalReducer(state, action)).toEqual(newState);
    });
    it('view size change action, should change viewSize: 0 -> 100', () => {
        const state = {
            vertical: true,
            viewSize: 0,
            viewType: 1280,
            theme: {
                name: 'blue',
                path: '/css/theme_blue/main.css'
            },
            scrollTo: 0,
            browser: {
                name: 'Chrome',
            }
        }
        const newState = {
            vertical: true,
            viewSize: 100,
            viewType: 1280,
            theme: {
                name: 'blue',
                path: '/css/theme_blue/main.css'
            },
            scrollTo: 0,
            browser: {
                name: 'Chrome',
            }
        }
        const action = {
            type: 'VIEWCHANGESIZE',
            viewSize: 100
        }
        expect(globalReducer(state, action)).toEqual(newState);
    });
    it('scroll to position action, should change scrollTo: 0 -> 100', () => {
        const state = {
            vertical: true,
            viewSize: 0,
            viewType: 1280,
            theme: {
                name: 'blue',
                path: '/css/theme_blue/main.css'
            },
            scrollTo: 0,
            browser: {
                name: 'Chrome',
            }
        }
        const newState = {
            vertical: true,
            viewSize: 0,
            viewType: 1280,
            theme: {
                name: 'blue',
                path: '/css/theme_blue/main.css'
            },
            scrollTo: 100,
            browser: {
                name: 'Chrome',
            }
        }
        const action = {
            type: 'SCROLLTOPOSITION',
            scrollTo: 100
        }
        expect(globalReducer(state, action)).toEqual(newState);
    });
});

// TODO: viewSize change