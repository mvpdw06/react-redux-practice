import { COUNTER } from '../../constant/constant';

const NORMAL = 'NORMAL';
const BETTER = 'BETTER';
const WORSE = 'WORSE';

const initState = {
  value: 0,
  dataType: NORMAL
}

const handleDataType = (prevValue, nextValue) => {
  if(prevValue < nextValue) {
    return BETTER;
  }
  else if(prevValue > nextValue) {
    return WORSE;
  }
  else {
    return NORMAL;
  }
}

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case COUNTER.INITCOUNTERSUCCESS:
      return {
        ...state,
        value: action.value
      };
    case COUNTER.UPDATECOUNTERSUCCESS:
      return {
        dataType: handleDataType(state.value, action.value),
        value: action.value
      };
    case COUNTER.INCREMENT:
      return {
        dataType: NORMAL,
        value: state.value + 1
      };
    case COUNTER.DECREMENT:
      return {
        dataType: NORMAL,
        value: state.value - 1
      };
    default:
      return state;
  }
}

module.exports = counterReducer;