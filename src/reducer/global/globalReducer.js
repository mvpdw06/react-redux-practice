import { GLOBAL } from '../../constant/constant';

const initState = {
    vertical: true,
    viewSize: 0,
    viewType: 1280
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
        const newViewType = changeViewSize(action.data);
        return {
            ...state,
            viewSize: action.data,
            viewType: newViewType
        };
    default:
        return state;
    }
}

module.exports = globalReducer;