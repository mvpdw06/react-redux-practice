import bowser from 'bowser';
import { GLOBAL } from '../../constant/constant';

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

const handleThemeChange = (themeName) => {
    const idx = themes.findIndex((theme) => theme.name === themeName);
    if(idx === -1) return themes.filter((theme) => { return theme.name === 'blue' })[0];

    const newTheme = Object.assign({}, themes[idx]);
    return newTheme;
}

const initState = {
    vertical: true,
    viewSize: 0,
    viewType: 1280,
    theme: handleThemeChange('blue'),
    scrollTo: 0,
    browser: {
        name: bowser.name,
        version: bowser.version
    }
}

const changeViewSize = (viewSize) => {
    switch (viewSize) {
        case viewSize <= 320:
            return 320;
        case viewSize > 320 && viewSize <= 568:
            return 320;
        case viewSize > 568 && viewSize <= 1024:
            return 568;
        case viewSize > 1024 && viewSize <= 1280:
            return 1024;
        case viewSize > 1280 && viewSize <= 1440:
            return 1280;
        case viewSize > 1440:
            return 1440;
    }
}

const globalReducer = (state = initState, action) => {
    switch (action.type) {
    case GLOBAL.VIEWROTATE:
        return {
            ...state,
            vertical: !state.vertical
        };
    case GLOBAL.VIEWCHANGESIZE:
        const newViewType = changeViewSize(action.viewSize);
        return {
            ...state,
            viewSize: action.viewSize
        };
    case GLOBAL.THEMECHANGE:
        return {
            ...state,
            theme: handleThemeChange(action.themeName)
        }
    case GLOBAL.SCROLLTOPOSITION:
        return {
            ...state,
            scrollTo: action.scrollTo
        }
    default:
        return state;
    }
}

module.exports = globalReducer;