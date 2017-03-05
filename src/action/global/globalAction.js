export const VIEWROTATE = 'VIEWROTATE';
export const VIEWCHANGESIZE = 'VIEWCHANGESIZE';

export const globalAction = {
    viewRotate: () => ({ type: VIEWROTATE }),
    viewChangeSize: () => ({ type: VIEWCHANGESIZE })
}