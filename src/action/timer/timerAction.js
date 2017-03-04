export const COUNTDOWN = 'COUNTDOWN';
export const RESETTIMER = 'RESETTIMER';

export const timerAction = {
    doCountDown: () => ({ type: COUNTDOWN }),
    doResetTimer: () => ({ type: RESETTIMER })
}