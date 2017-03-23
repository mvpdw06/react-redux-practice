import { timerAction } from './timerAction';

describe('counter sync action function', () => {
    it('count down, should return object with type property.', () => {
        expect(timerAction.doCountDown()).toEqual({ type: 'COUNTDOWN' });
    });
    it('reset timer, should return object with type property.', () => {
        expect(timerAction.doResetTimer()).toEqual({ type: 'RESETTIMER' });
    });
    it('pause timer, should return object with type property.', () => {
        expect(timerAction.pauseTimer()).toEqual({ type: 'PAUSETIMER' });
    });
});