import { globalAction } from '../../action/global/globalAction';

describe('counter sync action function', () => {
    it('view rotate, should return object with type property.', () => {
        expect(globalAction.viewRotate()).toEqual({ type: 'VIEWROTATE' });
    });
    it('view size change without viewSize, should return object with type property.', () => {
        expect(globalAction.viewChangeSize()).toEqual({ type: 'VIEWCHANGESIZE' });
    });
    it('view size change with viewSize: 100, should return object with type and viewSize property.', () => {
        expect(globalAction.viewChangeSize(100)).toEqual({ type: 'VIEWCHANGESIZE', viewSize: 100 });
    });
    it('theme change without themeName, should return object with type property.', () => {
        expect(globalAction.themeChange()).toEqual({ type: 'THEMECHANGE' });
    });
    it('theme change with themeName: pink, should return object with type and themeName property.', () => {
        expect(globalAction.themeChange('pink')).toEqual({ type: 'THEMECHANGE', themeName: 'pink' });
    });
    it('scroll to without position, should return object with type property.', () => {
        expect(globalAction.scrollTo()).toEqual({ type: 'SCROLLTOPOSITION' });
    });
    it('scroll to with position: 100, should return object with type and scrollTo property.', () => {
        expect(globalAction.scrollTo(100)).toEqual({ type: 'SCROLLTOPOSITION', scrollTo: 100 });
    });
});