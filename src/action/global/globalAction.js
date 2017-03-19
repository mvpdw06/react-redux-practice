import { GLOBAL } from '../../constant/constant';

export const globalAction = {
    viewRotate: () => ({ type: GLOBAL.VIEWROTATE }),
    viewChangeSize: () => ({ type: GLOBAL.VIEWCHANGESIZE }),
    themeChange: (themeName) => ({ type: GLOBAL.THEMECHANGE, themeName }),
}