import { TIMER } from '../../constant/constant';

const timerAction = {
    doCountDown: () => ({ type: TIMER.COUNTDOWN }),
    doResetTimer: () => ({ type: TIMER.RESETTIMER }),
    pauseTimer: () => ({ type: TIMER.PAUSETIMER })
}

module.exports = timerAction;