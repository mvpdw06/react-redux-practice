import { COUNTER } from '../../constant/constant';

const counterAction = {
    initCounter: () => ({ type: COUNTER.INITCOUNTER }),
    initCounterSuccess: (value) => ({ type: COUNTER.INITCOUNTERSUCCESS, value}),
    updateCounter: () => ({ type: COUNTER.UPDATECOUNTER }) ,
    updateCounterSuccess: (value) => ({ type: COUNTER.UPDATECOUNTERSUCCESS, value }),
    doIncrement: (id) => ({ type: COUNTER.INCREMENT, id }),
    doDecrement: (id) => ({ type: COUNTER.DECREMENT, id }),
    copyCounter: () => ({ type: COUNTER.COPYCOUNTER }),
    setNormalDataType: () => ({ type: COUNTER.SETNORMALDATATYPE })
}

module.exports = counterAction;