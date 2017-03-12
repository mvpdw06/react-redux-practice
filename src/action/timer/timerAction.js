import { TIMER } from '../../constant/constant';

export const timerAction = {
    doCountDown: () => ({ type: TIMER.COUNTDOWN }),
    doResetTimer: () => ({ type: TIMER.RESETTIMER })
}