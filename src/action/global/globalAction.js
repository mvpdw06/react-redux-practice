import { GLOBAL } from '../../constant/constant';

const globalAction = {
    viewRotate: () => ({ type: GLOBAL.VIEWROTATE }),
    viewChangeSize: (viewSize) => ({ type: GLOBAL.VIEWCHANGESIZE, viewSize }),
    themeChange: (themeName) => ({ type: GLOBAL.THEMECHANGE, themeName }),
    scrollTo: (scrollTo) => ({ type: GLOBAL.SCROLLTOPOSITION, scrollTo })
}

module.exports = globalAction;