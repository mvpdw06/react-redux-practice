import { TIMER } from '../../constant/constant';

export const timerAction = {
    initTimer: (pathname) => ({ type: TIMER.INITTIMER, pathname }),
    doCountDown: () => ({ type: TIMER.COUNTDOWN }),
    doResetTimer: () => ({ type: TIMER.RESETTIMER }),
    pauseTimer: () => ({ type: TIMER.PAUSETIMER })
}