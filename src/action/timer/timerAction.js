import { TIMER } from '../../constant/constant';

export const timerAction = {
    doCountDown: () => ({ type: TIMER.COUNTDOWN }),
    doResetTimer: () => ({ type: TIMER.RESETTIMER }),
    changeTimerToDefault: () => ({ type: TIMER.CHANGETIMESPANTODEFAULT }),
    changeTimerToCounter: () => ({ type: TIMER.CHNAGETIMESPANTOCOUNTER })
}